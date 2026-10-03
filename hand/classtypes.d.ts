// The only hand-written piece: LuCI's class system (luci.js `Class`), typed
// generically so TypeScript can infer every class built with extend()/singleton()
// from its object literal and the JSDoc on its methods.

export interface BaseInstance {
	/** Call the named method of the parent class. */
	super(key: string, ...args: any[]): any;
	super(key: string, args: ArrayLike<any>): any;
	varargs(args: ArrayLike<any>, offset: number, ...extra: any[]): any[];
	__name__?: string;
}

export type Merge<I, P> = Omit<I, keyof P> & P;
type InitArgs<I> = I extends { __init__(...a: infer A): any } ? A : any[];

export interface LuCIClass<I> {
	new (...args: InitArgs<I>): I;
	prototype: I;
	displayName?: string;
	extend<P extends object>(properties: P & ThisType<Merge<I, P>>): LuCIClass<Merge<I, P>>;
	singleton<P extends object>(properties: P & ThisType<Merge<I, P>>, ...args: any[]): Merge<I, P>;
	instantiate(args: any[]): I;
	isSubclass(value: unknown): boolean;
}

/** Lets an interface extend a value's type: `interface X extends Type<typeof v> {}`. */
export type Type<T> = T;
