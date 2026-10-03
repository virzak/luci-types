// Type-level checks against the generated declarations. `pnpm test` must
// report exactly the errors marked @ts-expect-error as expected, nothing else.
import form from '../build/types/form.js';
import fs from '../build/types/fs.js';
import ui from '../build/types/ui.js';

const m = new form.JSONMap({ a: {} }, 'title', 'desc');
const s = m.section(form.NamedSection, 'a', 'a', 'A');
const o = s.option(form.Value, 'x', 'X');
o.datatype = 'uinteger';

export type Probe = {
	jsonmapCtor: ConstructorParameters<typeof form.JSONMap>;
	save: typeof m.save;
	section: typeof s;
	option: typeof o;
	datatype: typeof o.datatype;
	read: typeof fs.read;
	addNotification: typeof ui.addNotification;
	resolveDefault: typeof L.resolveDefault;
	isObject: typeof L.isObject;
	L: typeof L;
};

// @ts-expect-error path is a string
fs.read(42);
// @ts-expect-error mode is a number
fs.write('/x', 'y', 'rw');
// @ts-expect-error no such method
m.nosuchmethod();
