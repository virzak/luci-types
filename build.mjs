// Generate TypeScript declarations for LuCI's client-side API from the JSDoc
// already in luci-base, without changing LuCI.
//
//   node build.mjs <path to a luci checkout>
//
// 1. Each module is rewritten as an ES module, mirroring what LuCI's loader
//    (LuCI.require in luci.js) does at runtime:
//      'require x [as y]';   ->  import y from './x.js';
//      top-level `return X`  ->  export default new X();  (require yields an instance)
//    luci.js, an IIFE, is unwrapped and its built-in classes exported.
// 2. Every class carrying `@lends LuCI.a.B.prototype` is exported, and
//    namespace.d.ts maps the documented name LuCI.a.B to it, so JSDoc types
//    like {LuCI.form.AbstractSection} resolve as written.
// 3. tsc emits declarations into build/types.

import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import ts from 'typescript';
import fixes from './jsdoc-fixes.mjs';

const luci = process.argv[2];
if (!luci) {
	console.error('usage: node build.mjs <luci checkout>');
	process.exit(2);
}

const root = path.dirname(new URL(import.meta.url).pathname.replace(/^\/(\w:)/, '$1'));
const resources = path.join(luci, 'modules/luci-base/htdocs/luci-static/resources');
const mod = path.join(root, 'build/mod');
const out = path.join(root, 'build/types');
const FILES = [ 'luci', 'firewall', 'form', 'fs', 'network', 'rpc', 'uci', 'ui', 'validation',
	'tools/password', 'tools/prng', 'tools/views', 'tools/widgets' ];

// require() names that luci.js provides itself, and its variable for each.
const BUILTIN = { baseclass: 'Class', dom: 'DOM', poll: 'Poll', request: 'Request', view: 'View' };
const CLASS_TYPE = "import('./classtypes').LuCIClass<import('./classtypes').BaseInstance>";

// Two sources of circular types (TS7022, collapsing a class to `any`) in luci.js:
// - The other classes call LuCI.prototype.x() and Request.x() while LuCI's and
//   Request's JSDoc return those classes. Where code accesses a property on
//   them, read an untyped stand-in instead (a cast would still evaluate the real
//   type); methods keep their JSDoc types.
// - A JSDoc name tsc cannot resolve as a type, like {LuCI.x.Y}, falls back to
//   the value `LuCI`. So the value is renamed __LuCI (and exported as LuCI); an
//   unresolved name then fails visibly instead of silently looping.
// The output is only used for tsc, never run.
function breakCycles(src, names) {
	const sf = ts.createSourceFile('luci.js', src, ts.ScriptTarget.Latest, true, ts.ScriptKind.JS);
	const at = [];
	const visit = n => {
		if (ts.isPropertyAccessExpression(n) && ts.isIdentifier(n.expression) && names.includes(n.expression.text))
			return at.push([ n.expression.getStart(sf), n.expression.end, `__untyped_${n.expression.text}` ]);
		if (ts.isIdentifier(n) && n.text == 'LuCI' && !(ts.isPropertyAccessExpression(n.parent) && n.parent.name == n))
			at.push([ n.getStart(sf), n.end, '__LuCI' ]);
		ts.forEachChild(n, visit);
	};
	visit(sf);
	for (const [ start, end, repl ] of at.sort((a, b) => b[0] - a[0]))
		src = `${src.slice(0, start)}${repl}${src.slice(end)}`;
	return names.map(n => `/** @type {any} */ let __untyped_${n};\n`).join('') + src;
}

fs.rmSync(path.join(root, 'build'), { recursive: true, force: true });
fs.mkdirSync(path.join(mod, 'tools'), { recursive: true });

// [qualified name, module, exported variable, 'class' | 'instance' | 'type']
const lends = [];
// qualified class name -> { member: TypeScript type } from @member blocks
const members = {};

// JSDoc type expression -> TypeScript, for the forms @member blocks use.
const jsdocType = t => t.split('|').map(p => p.trim()).map(p =>
	p == '*' ? 'any' : /^function(\(\))?$/.test(p) ? '((...args: any[]) => any)' : p).join(' | ');
const LENDS = /^\t?(?:const|let) (\w+) = [\w.]+\.(extend|singleton)\(\/\*\* @lends ([\w.]+)\.prototype \*\//;

for (const name of FILES) {
	let src = fs.readFileSync(path.join(resources, `${name}.js`), 'utf8').replace(/\r/g, '');

	for (const fix of fixes.filter(f => f.file == name)) {
		if (!fix.find.test(src))
			console.warn(`jsdoc-fixes: no longer matches in ${name}.js (fixed upstream?): ${fix.why}`);
		fix.find.lastIndex = 0;
		src = src.replace(fix.find, fix.replace);
	}
	const up = '../'.repeat(name.split('/').length - 1) || './';
	const exported = [];

	const srcLines = src.split('\n');
	srcLines.forEach((line, i) => {
		// Classes without @lends (LuCI.response) still name themselves in __name__.
		const m = LENDS.exec(line) ?? (() => {
			const c = /^\t?(?:const|let) (\w+) = [\w.]+\.(extend|singleton)\(\{$/.exec(line);
			const n = c && /^\s+__name__: '(LuCI[\w.]*)',$/.exec(srcLines[i + 1] ?? '');
			return n && [ line, c[1], c[2], n[1] ];
		})();
		if (m) {
			lends.push([ m[3], name, m[1], m[2] == 'singleton' ? 'instance' : 'class' ]);
			exported.push(m[1]);
		}
	});

	// A dotted @typedef/@callback name (LuCI.request.interceptorFn) makes tsc
	// declare a local `namespace LuCI`, which merges with `const LuCI` and makes
	// the class part of its own type. Give these flat names (tsc exports module
	// typedefs) and map the documented names in namespace.d.ts. JSDoc's `~`
	// inner-member separator becomes `.` everywhere so tsc can parse it.
	src = src.replace(/(LuCI(?:\.\w+)*)~(\w+)/g, '$1.$2')
		.replace(/@(typedef|callback)(\s+\{[^}]*\})?\s+(LuCI(?:\.\w+)+)/g, (m, tag, type, qname) => {
			const flat = qname.replace(/\./g, '_');
			lends.push([ qname, name, flat, 'type' ]);
			return `@${tag}${type ?? ''} ${flat}`;
		});

	// tsc only exports typedefs declared at module level, and LuCI writes many
	// inside class literals. They are pure comments, so move them to the end.
	const typedefs = [];
	src = src.replace(/[ \t]*\/\*\*(?:(?!\*\/)[\s\S])*?@(?:typedef|callback)\b[\s\S]*?\*\/\n?/g, m => {
		typedefs.push(m.replace(/^[ \t]+/gm, ''));
		return '';
	});
	src += `\n${typedefs.join('\n')}`;

	// Properties documented only in JSDoc (`@member addremove` + `@type {boolean}`
	// + `@memberof LuCI.form.TypedSection.prototype`), set by views at runtime.
	for (const block of src.match(/\/\*\*[\s\S]*?\*\//g) ?? []) {
		const member = /@member\s+(?:\{([^}]*)\}\s+)?(\w+)/.exec(block);
		const owner = /@memberof\s+(LuCI(?:\.\w+)*)\.prototype\b/.exec(block);
		if (member && owner)
			(members[owner[1]] ??= {})[member[2]] = jsdocType(member[1] ?? /@type\s+\{([^}]*)\}/.exec(block)?.[1] ?? '*');
	}

	// Fields assigned in __init__ (`this.map = map`): tsc does not infer fields
	// from assignments inside an object-literal method. Type a field from its
	// @param when it is assigned a parameter as-is, else as any.
	const sf = ts.createSourceFile(`${name}.js`, src, ts.ScriptTarget.Latest, true, ts.ScriptKind.JS);
	const fields = {};
	ts.forEachChild(sf, function visit(n) {
		if (ts.isVariableDeclaration(n) && ts.isIdentifier(n.name) && n.initializer && ts.isCallExpression(n.initializer)) {
			const init = n.initializer.arguments.find(ts.isObjectLiteralExpression)?.properties
				.find(p => ts.isMethodDeclaration(p) && p.name.getText(sf) == '__init__');
			if (init) {
				const params = Object.fromEntries(ts.getJSDocTags(init).filter(ts.isJSDocParameterTag)
					.map(t => [ t.name.getText(sf), t.typeExpression?.type.getText(sf) ]));
				const own = new Set(n.initializer.arguments.find(ts.isObjectLiteralExpression).properties.map(p => p.name?.getText(sf)));
				ts.forEachChild(init.body, function assign(a) {
					if (ts.isBinaryExpression(a) && a.operatorToken.kind == ts.SyntaxKind.EqualsToken &&
					    ts.isPropertyAccessExpression(a.left) && a.left.expression.kind == ts.SyntaxKind.ThisKeyword &&
					    !own.has(a.left.name.text)) {
						const p = ts.isIdentifier(a.right) && params[a.right.text];
						((fields[n.name.text] ??= {})[a.left.name.text] ??= p || 'any');
					}
					if (!ts.isFunctionLike(a))
						ts.forEachChild(a, assign);
				});
			}
		}
		ts.forEachChild(n, visit);
	});

	// Declare documented members and __init__ fields in the class literal,
	// typed, so instances carry them. They go first, so a real definition later
	// in the literal takes precedence.
	for (const [ qname, file, variable, kind ] of lends) {
		if (file != name || kind == 'type' || (!members[qname] && !fields[variable]))
			continue;
		const all = { ...fields[variable], ...members[qname] };
		const decl = Object.entries(all).map(([ k, t ]) => `\t\t/** @type {${t}} */ ${k}: undefined,\n`).join('');
		src = src.replace(new RegExp(`^(\\t?(?:const|let) ${variable} = [\\w.]+\\.(?:extend|singleton)\\((?:/\\*\\* @lends [\\w.]+ \\*/ )?\\{\\n)`, 'm'), `$1${decl}`);
	}

	// Plain-named typedefs placed with @memberof (RequestOptions in
	// LuCI.request) are documented as LuCI.request.RequestOptions; map those too.
	for (const block of src.match(/\/\*\*[\s\S]*?\*\//g) ?? []) {
		const def = /@(?:typedef|callback)(?:\s+\{[^}]*\})?\s+(\w+)\s/.exec(block);
		const owner = /@memberof\s+(LuCI(?:\.\w+)*)/.exec(block);
		if (def && owner)
			lends.push([ `${owner[1]}.${def[1]}`, name, def[1], 'type' ]);
	}

	if (name == 'luci') {
		src = src.replace(/^\(\(window, document, undefined\) => \{\n/m, '')
			.replace(/^\}\)\(window, document\);\s*$/m, '')
			.replace(/^\tconst Class = Object\.assign\(function\(\) \{\}, \{$/m,
				`\tconst Class = /** @type {${CLASS_TYPE}} */ (/** @type {any} */ (Object.assign(function() {}, {`);

		// Close the cast where the Class definition ends.
		const lines = src.split('\n');
		const start = lines.findIndex(l => l.startsWith('\tconst Class = '));
		const end = lines.findIndex((l, i) => i > start && l == '\t});');
		lines[end] = '\t})));';

		const builtins = Object.entries(BUILTIN).map(([ k, v ]) => `${v} as ${k}`);
		src = `${breakCycles(lines.join('\n'), [ 'LuCI', 'Request' ])}\nexport { ${builtins.join(', ')}, ${[ ...new Set(exported) ].map(e => e == 'LuCI' ? '__LuCI as LuCI' : e).join(', ')} };\n`;

		for (const [ k ] of Object.entries(BUILTIN))
			fs.writeFileSync(path.join(mod, `${k}.js`), `import { ${k} } from './luci.js';\nexport default ${k};\n`);
	}
	else {
		src = src.replace(/^'require ([\w.]+)(?: as (\w+))?';$/gm,
			(m, dep, as) => `import ${as || dep.replace(/\W/g, '_')} from '${up}${dep.replace(/\./g, '/')}.js';`);

		const lines = src.split('\n');
		const ret = lines.findLastIndex(l => /^return\b/.test(l));
		if (ret < 0)
			throw new Error(`${name}.js: no top-level return`);
		lines[ret] = lines[ret].replace(/^return\b/, 'const __module =');

		src = `${lines.join('\n')}\n`;
		if (exported.length)
			src += `export { ${exported.join(', ')} };\n`;
		src += 'export default new __module();\n';
	}

	fs.writeFileSync(path.join(mod, `${name}.js`), src);
}

// namespace.d.ts: LuCI.a.B -> the class (or singleton) that @lends names it.
const tree = {};
for (const [ qname, file, variable, kind ] of lends) {
	const parts = qname.split('.');
	if (parts[0] != 'LuCI')
		continue;
	let node = tree;
	for (const p of parts.slice(1, -1))
		node = (node[p] ??= {});
	if (parts.length > 1)
		(node['.types'] ??= []).push([ parts.at(-1), file, variable, kind, qname ]);
}

const imports = [ "import type { Type } from './classtypes.js';",
	...[ ...new Set(lends.map(l => l[1])) ].map(f => `import type * as $${f.replace(/\W/g, '_')} from './${f}.js';`) ];
const emit = (node, indent) => {
	let s = '';
	for (const [ name, file, variable, kind, qname ] of node['.types'] ?? []) {
		// `$` prefix: a bare alias like `fs` would be shadowed by LuCI.fs here.
		const mod = `$${file.replace(/\W/g, '_')}`;
		const t = `typeof ${mod}.${variable}`;
		if (kind == 'type')
			s += `${indent}type ${name} = ${mod}.${variable};\n`;
		else
			s += `${indent}interface ${name} extends ${kind == 'class' ? `InstanceType<${t}>` : `Type<${t}>`} {}\n`;
	}
	for (const [ k, child ] of Object.entries(node))
		if (k != '.types')
			s += `${indent}namespace ${k} {\n${emit(child, indent + '\t')}${indent}}\n`;
	return s;
};
fs.writeFileSync(path.join(mod, 'namespace.d.ts'),
	`// Generated by build.mjs from @lends tags.\n${imports.join('\n')}\n\ndeclare global {\n\tnamespace LuCI {\n${emit(tree, '\t\t')}\t}\n}\n`);

for (const f of fs.readdirSync(path.join(root, 'hand')))
	fs.copyFileSync(path.join(root, 'hand', f), path.join(mod, f));

execFileSync(process.execPath, [ path.join(root, 'node_modules/typescript/bin/tsc'), '-p', path.join(root, 'tsconfig.build.json') ], { stdio: 'inherit' });

for (const f of [ ...fs.readdirSync(path.join(root, 'hand')), 'namespace.d.ts' ])
	fs.copyFileSync(path.join(mod, f), path.join(out, f));

console.log(`${lends.length} documented classes; declarations in ${path.relative(root, out)}`);
