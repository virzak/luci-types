// Corrections to luci-base JSDoc, applied before generating declarations.
// Each one is a bug in LuCI's documentation and a candidate for an upstream
// fix; once LuCI carries it, the entry here stops matching and can go.
//
// { file, find: RegExp, replace: string, why }

export default [
	{
		file: 'luci',
		find: /\{XMLHTTPRequest\}/g,
		replace: '{XMLHttpRequest}',
		why: 'Typo: the DOM class is XMLHttpRequest.'
	},
	{
		file: 'ui',
		// The doc block directly above `addNotification(`: no other `/**` in between.
		find: /(\/\*\*(?:(?!\/\*\*)[\s\S])*?@param \{)string(\} \[?title\]?(?:(?!\/\*\*)[\s\S])*?\*\/\s*addNotification\()/,
		replace: '$1?string$2',
		why: 'addNotification() is called with a null title throughout LuCI; document it as nullable.'
	},
	{
		file: 'form',
		find: /@param \{LuCI\.form\.AbstractSection\} cbiClass \(sectionclass\)([\s\S]*?)@returns \{LuCI\.form\.AbstractSection\}/,
		replace: '@template T\n\t * @param {new (...args: any[]) => T} cbiClass (sectionclass)$1@returns {T}',
		why: 'section() takes a class, not an instance, and returns an instance of that class.'
	},
	{
		file: 'form',
		find: /@param \{LuCI\.form\.AbstractValue\} optionclass([\s\S]*?)derived from\n(\s*\*) \{@link LuCI\.form\.AbstractSection AbstractSection\}\.([\s\S]*?)@param \{object\} cbiClass \(classargs\)([\s\S]*?)\* @param \{\.\.\.\*\} args argument array\n\s*\*\n([\s\S]*?)@returns \{LuCI\.form\.AbstractValue\}/,
		replace: '@template T\n\t * @param {new (...args: any[]) => T} cbiClass$1derived from\n$2 {@link LuCI.form.AbstractValue AbstractValue}.$3@param {...*} args (classargs)$4$5@returns {T}',
		why: 'option() documents its class parameter as `optionclass` and its real `cbiClass` parameter as `{object}` classargs; the class must derive from AbstractValue, not AbstractSection; and it returns an instance of the given class.'
	},
	{
		// After the option() fix, the remaining `optionclass` block is taboption's.
		file: 'form',
		find: /@param \{LuCI\.form\.AbstractValue\} optionclass[\s\S]*?\{@link LuCI\.form\.AbstractSection AbstractSection\}\.\n\s*\*\n\s*\* @param \{\.\.\.\*\} args \(classargs\)([\s\S]*?)@returns \{LuCI\.form\.AbstractValue\}/,
		replace: '@template T\n\t * @param {[new (...args: any[]) => T, ...any[]]} args\n\t * The option class to use (the class itself, not an instance, derived from\n\t * {@link LuCI.form.AbstractValue AbstractValue}), followed by the\n\t * arguments (classargs) passed as-is to its constructor.$1@returns {T}',
		why: 'taboption(tabName, ...args) documents an `optionclass` parameter its signature does not have (the class is the first rest argument), says it must derive from AbstractSection instead of AbstractValue, and returns an instance of the given class.'
	}
];
