// Print what each member of the Probe type in probe.ts resolves to.
import ts from 'typescript';
import path from 'node:path';

const dir = path.dirname(new URL(import.meta.url).pathname.replace(/^\/(\w:)/, '$1'));
const cfg = ts.getParsedCommandLineOfConfigFile(path.join(dir, 'tsconfig.json'), {}, { ...ts.sys, onUnRecoverableConfigFileDiagnostic: () => {} });
const prog = ts.createProgram(cfg.fileNames, cfg.options);
const checker = prog.getTypeChecker();
const sf = prog.getSourceFiles().find(f => f.fileName.endsWith('probe.ts'));

ts.forEachChild(sf, n => {
	if (ts.isTypeAliasDeclaration(n) && n.name.text == 'Probe')
		for (const member of n.type.members) {
			const t = checker.typeToString(checker.getTypeAtLocation(member.type), undefined, ts.TypeFormatFlags.NoTruncation);
			console.log(member.name.text.padEnd(16), t.length > 150 ? `${t.slice(0, 150)}...` : t);
		}
});
