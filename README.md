# luci-types

TypeScript declarations for OpenWrt LuCI's client-side JavaScript API (`L`, `form`, `fs`, `ui`, `rpc`, `uci`, `network`, ...), generated from the JSDoc already in [luci-base](https://github.com/openwrt/luci/tree/master/modules/luci-base/htdocs/luci-static/resources) rather than written by hand, so they follow LuCI release by release.

This is a prototype for proposing generated types to LuCI upstream.

## Writing a view in TypeScript

Ready-made declarations are in `types/<LuCI branch>/` (`LUCI_SOURCE` there names the LuCI commit), so a project needs no LuCI checkout. Add this repo as a dev dependency and map `luci/*` onto the branch your router runs:

```
pnpm add -D typescript github:virzak/luci-types
```

```json
{
	"compilerOptions": {
		"strict": true, "noEmit": true, "target": "es2020", "module": "esnext", "moduleResolution": "bundler",
		"lib": ["es2020", "dom", "dom.iterable"],
		"paths": { "luci/*": ["./node_modules/luci-types/types/openwrt-25.12/*"] }
	},
	"files": [
		"view/example.ts",
		"node_modules/luci-types/types/openwrt-25.12/globals.d.ts",
		"node_modules/luci-types/types/openwrt-25.12/namespace.d.ts"
	]
}
```

The view imports LuCI modules from `luci/<module>` and default-exports its class:

```ts
import view from 'luci/view';
import form from 'luci/form';

export default view.extend({
	render() {
		const m = new form.JSONMap({ settings: {} }, _('Example'));
		return m.render();
	}
});
```

Type-check it with `tsc`, then compile it into the module format LuCI loads (`'require form';` lines and a top-level `return`) and install the `.js` as usual:

```
npx tsc
npx luci-compile-view view/example.ts htdocs/luci-static/resources/view/example.js
```

## Generating the declarations

```
pnpm install
node build.mjs <luci checkout> [types/<branch>]   # declarations land in build/types, or the given folder
pnpm test                                         # strict type checks in test/probe.ts
```

## How it works

LuCI modules are not ES modules: a view lists its dependencies as `'require form'` strings and ends in a top-level `return`, and `LuCI.require` in `luci.js` wraps the file in a function and instantiates the class it returns. `build.mjs` rewrites a copy of each module the same way, as an ES module, and lets `tsc` emit declarations from the JSDoc:

- `'require x'` becomes `import x from './x.js'`, and the final `return X` becomes `export default new X()`. `luci.js`, an IIFE, is unwrapped and exports its built-in classes (`baseclass`, `dom`, `poll`, `request`, `view`).
- Every class documented with `@lends LuCI.a.B.prototype` (or named by `__name__`) and every `@typedef`/`@callback` is mapped into a global `LuCI` namespace, so JSDoc types written as `{LuCI.form.AbstractSection}` resolve exactly as documented.
- Properties documented with `@member` and fields assigned in `__init__` are declared on the classes, so instances carry them.
- `LuCI` and `Request` are read through untyped stand-ins where other classes call them, which keeps their types from becoming circular.

The only hand-written declarations are in `hand/`: the generic signature of LuCI's class system (`extend()`/`singleton()`), and the globals a view receives (`L`, `_()`, `E()`).

## JSDoc fixes

`jsdoc-fixes.mjs` corrects LuCI's JSDoc where it is wrong, before generating. Each entry is a documentation bug and a candidate for an upstream fix: for example `option()` and `taboption()` document parameters their signatures do not have, and `XMLHTTPRequest` is a typo. When LuCI carries a fix, its entry stops matching and the build says so.

## Status

- Strict mode: the generated declarations type-check with `skipLibCheck: false`, and `test/probe.ts` checks that typed calls succeed and wrong ones fail.
- Covered: the luci-base core modules and `tools/*`. Application-specific modules (`luci-app-*`, `protocol/*`) are not included yet.
