// What every view gets from the page: the global `L` and the `_()` translator.
import type { LuCI } from './luci.js';

declare global {
	const L: InstanceType<typeof LuCI>;
	function _(message: string, context?: string): string;
	function N_(count: number, singular: string, plural: string, context?: string): string;
	function E(...args: any[]): HTMLElement;
	interface String { format(...args: any[]): string; }
}
