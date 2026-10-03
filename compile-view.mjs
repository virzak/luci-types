// Compile a LuCI view written in TypeScript into the module format LuCI loads.
//
//   node compile-view.mjs <view.ts> <view.js>
//
// A view imports LuCI modules from `luci/<name>` and default-exports its class:
//
//   import form from 'luci/form';
//   import widgets from 'luci/tools/widgets';
//   export default view.extend({ ... });
//
// which becomes what LuCI.require() expects:
//
//   'use strict';
//   'require form';
//   'require tools.widgets as widgets';
//   return view.extend({ ... });
//
// Types are stripped with TypeScript's transpiler; type-check the view separately
// (tsc --noEmit) against the declarations in types/<luci branch>/. Anything LuCI
// cannot load (other imports, named exports) is an error.

import fs from 'node:fs';
import path from 'node:path';
import ts from 'typescript';

const [ , , input, output ] = process.argv;
if (!input || !output) {
	console.error('usage: node compile-view.mjs <view.ts> <view.js>');
	process.exit(2);
}

const fail = (node, sf, msg) => {
	const { line, character } = sf.getLineAndCharacterOfPosition(node.getStart(sf));
	console.error(`${input}:${line + 1}:${character + 1}: ${msg}`);
	process.exit(1);
};

const js = ts.transpileModule(fs.readFileSync(input, 'utf8'), {
	fileName: input,
	compilerOptions: {
		target: ts.ScriptTarget.ES2020,
		module: ts.ModuleKind.ESNext,
		// Keep imports as written so each one becomes a 'require' line.
		verbatimModuleSyntax: true
	},
	reportDiagnostics: true
});
if (js.diagnostics?.length) {
	for (const d of js.diagnostics)
		console.error(`${input}: ${ts.flattenDiagnosticMessageText(d.messageText, '\n')}`);
	process.exit(1);
}

const sf = ts.createSourceFile('view.js', js.outputText, ts.ScriptTarget.Latest, true, ts.ScriptKind.JS);
const requires = [];
const edits = [];
let exported = false;

for (const stmt of sf.statements) {
	if (ts.isImportDeclaration(stmt)) {
		const spec = stmt.moduleSpecifier.text;
		const clause = stmt.importClause;
		if (!spec.startsWith('luci/') || !clause?.name || clause.namedBindings)
			fail(stmt, sf, `only default imports from 'luci/<module>' are supported, not: ${stmt.getText(sf)}`);
		const name = spec.slice(5).replace(/\.js$/, '').replace(/\//g, '.');
		const local = clause.name.text;
		const implicit = name.replace(/[^a-zA-Z0-9_]/g, '_');
		requires.push(`'require ${name}${local == implicit ? '' : ` as ${local}`}';`);
		edits.push([ stmt.getFullStart(), stmt.end, '' ]);
	}
	else if (ts.isExportAssignment(stmt) && !stmt.isExportEquals) {
		if (exported)
			fail(stmt, sf, 'more than one default export');
		exported = true;
		edits.push([ stmt.getStart(sf), stmt.expression.getStart(sf), 'return ' ]);
	}
	else if (ts.canHaveModifiers(stmt) && ts.getModifiers(stmt)?.some(m => m.kind == ts.SyntaxKind.ExportKeyword)) {
		fail(stmt, sf, 'LuCI views have no named exports; default-export the view');
	}
}
if (!exported)
	fail(sf.statements[0] ?? sf, sf, 'a view must `export default` its class');

let body = js.outputText;
for (const [ start, end, text ] of edits.sort((a, b) => b[0] - a[0]))
	body = body.slice(0, start) + text + body.slice(end);
body = body.replace(/^\s*(['"])use strict\1;?\s*/, '').replace(/^\s+/, '');

const banner = `// Generated from ${path.basename(input)} by luci-types compile-view.mjs; edit the .ts file.\n`;
fs.mkdirSync(path.dirname(output), { recursive: true });
fs.writeFileSync(output, `'use strict';\n${requires.join('\n')}\n\n${banner}${body}`);
