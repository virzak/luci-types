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

fs.rmSync(path.join(root, 'build'), { recursive: true, force: true });
fs.mkdirSync(path.join(mod, 'tools'), { recursive: true });

// [qualified name, module, exported variable, 'class' | 'instance']
const lends = [];
const LENDS = /^\t?(?:const|let) (\w+) = [\w.]+\.(extend|singleton)\(\/\*\* @lends ([\w.]+)\.prototype \*\//;

for (const name of FILES) {
	let src = fs.readFileSync(path.join(resources, `${name}.js`), 'utf8').replace(/\r/g, '');
	const up = '../'.repeat(name.split('/').length - 1) || './';
	const exported = [];

	for (const line of src.split('\n')) {
		const m = LENDS.exec(line);
		if (m) {
			lends.push([ m[3], name, m[1], m[2] == 'singleton' ? 'instance' : 'class' ]);
			exported.push(m[1]);
		}
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
		src = `${lines.join('\n')}\nexport { ${builtins.join(', ')}, ${[ ...new Set(exported) ].join(', ')} };\n`;

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
	(node['.types'] ??= []).push([ parts.at(-1), file, variable, kind ]);
}

const imports = [ "import type { Type } from './classtypes.js';",
	...[ ...new Set(lends.map(l => l[1])) ].map(f => `import type * as ${f.replace(/\W/g, '_')} from './${f}.js';`) ];
const emit = (node, indent) => {
	let s = '';
	for (const [ name, file, variable, kind ] of node['.types'] ?? []) {
		const t = `typeof ${file.replace(/\W/g, '_')}.${variable}`;
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
