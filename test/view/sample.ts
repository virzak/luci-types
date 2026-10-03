// A minimal view, type-checked against the published declarations the way a
// project would use them (tsconfig.json here), then compiled by compile-view.mjs.
import view from 'luci/view';
import form from 'luci/form';
import widgets from 'luci/tools/widgets';

const greeting: string = _('Hello');

export default view.extend({
	render() {
		const m = new form.JSONMap({ a: {} }, greeting);
		const s = m.section(form.NamedSection, 'a', 'a');
		s.option(widgets.NetworkSelect, 'network', _('Network'));
		return m.render();
	}
});
