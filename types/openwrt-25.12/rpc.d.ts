declare const _default: import("./classtypes.js").Merge<import("./classtypes.js").BaseInstance, {
    call(req: any, cb: any, nobatch: any): Promise<LuCI.response> | Promise<any[]>;
    parseCallReply(req: any, res: any): any;
    handleCallReply(req: any, msg: any): any;
    /**
     * Lists available remote ubus objects or the method signatures of
     * specific objects.
     *
     * This function has two signatures and is sensitive to the number of
     * arguments passed to it:
     *  - `list()` -
     *    Returns an array containing the names of all remote `ubus` objects
     *  - `list("objname", ...)`
     *    Returns method signatures for each given `ubus` object name.
     *
     * @param {...string} [args] (objectNames)
     * If any object names are given, this function will return the method
     * signatures of each given object.
     *
     * @returns {Promise<Array<string>|Object<string, Object<string, Object<string, string>>>>}
     * When invoked without arguments, this function will return a promise
     * resolving to an array of `ubus` object names. When invoked with one or
     * more arguments, a promise resolving to an object describing the method
     * signatures of each requested `ubus` object name will be returned.
     */
    list(...args?: string[]): Promise<Array<string> | {
        [x: string]: {
            [x: string]: {
                [x: string]: string;
            };
        };
    }>;
    /**
     * Describes a remote RPC call procedure and returns a function
     * implementing it.
     *
     * @param {LuCI.rpc.DeclareOptions} options
     * If any object names are given, this function will return the method
     * signatures of each given object.
     *
     * @returns {LuCI.rpc.invokeFn}
     * Returns a new function implementing the method call described in
     * `options`.
     */
    declare(options: LuCI.rpc.DeclareOptions): LuCI.rpc.invokeFn;
    /**
     * Returns the current RPC session id.
     *
     * @returns {string}
     * Returns the 32 byte session ID string used for authenticating remote
     * requests.
     */
    getSessionID(): string;
    /**
     * Set the RPC session id to use.
     *
     * @param {string} sid
     * Sets the 32 byte session ID string used for authenticating remote
     * requests.
     */
    setSessionID(sid: string): void;
    /**
     * Returns the current RPC base URL.
     *
     * @returns {string}
     * Returns the RPC URL endpoint to issue requests against.
     */
    getBaseURL(): string;
    /**
     * Set the RPC base URL to use.
     *
     * @param {string} url
     * Sets the RPC URL endpoint to issue requests against.
     */
    setBaseURL(url: string): void;
    /**
     * Translates a numeric `ubus` error code into a human readable
     * description.
     *
     * @param {number} statusCode
     * The numeric status code.
     *
     * @returns {string}
     * Returns the textual description of the code.
     */
    getStatusText(statusCode: number): string;
    /**
     * Registers a new interceptor function.
     *
     * @param {LuCI.rpc.interceptorFn} interceptorFn
     * The interceptor function to register.
     *
     * @returns {LuCI.rpc.interceptorFn}
     * Returns the given function value.
     */
    addInterceptor(interceptorFn: LuCI.rpc.interceptorFn): LuCI.rpc.interceptorFn;
    /**
     * Removes a registered interceptor function.
     *
     * @param {LuCI.rpc.interceptorFn} interceptorFn
     * The interceptor function to remove.
     *
     * @returns {boolean}
     * Returns `true` if the given function has been removed or `false`
     * if it has not been found.
     */
    removeInterceptor(interceptorFn: LuCI.rpc.interceptorFn): boolean;
}>;
export default _default;
export type DeclareOptions = any;
/**
 * The filter function is invoked to transform a received `ubus` RPC call
 * reply before returning it to the caller.
 */
export type LuCI_rpc_filterFn = (data: any, args: Array<any>, ...extraArgs: any[]) => any;
/**
 * The generated invocation function is returned by
 * {@link LuCI.rpc#declare rpc.declare()} and encapsulates a single
 * RPC method call.
 *
 * Calling this function will execute a remote `ubus` HTTP call request
 * using the arguments passed to it as arguments and return a promise
 * resolving to the received reply values.
 */
export type LuCI_rpc_invokeFn = (...params: any[]) => Promise<any>;
/**
 * Registered interceptor functions are invoked before the standard reply
 * parsing and handling logic.
 *
 * By returning rejected promises, interceptor functions can cause the
 * invocation function to fail, regardless of the received reply.
 *
 * Interceptors may also modify their message argument in-place to
 * rewrite received replies before they're processed by the standard
 * response handling code.
 *
 * A common use case for such functions is to detect failing RPC replies
 * due to expired authentication in order to trigger a new login.
 */
export type LuCI_rpc_interceptorFn = (msg: any, req: any) => Promise<any> | any;
