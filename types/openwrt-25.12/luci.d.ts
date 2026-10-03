export type RequestOptions = any;
/**
 * Interceptor functions are invoked whenever an HTTP reply is received, in the order
 * these functions have been registered.
 */
export type LuCI_request_interceptorFn = (res: LuCI.response) => any;
/**
 * The callback function is invoked whenever an HTTP reply to a
 * polled request is received or when the polled request timed
 * out.
 */
export type LuCI_request_poll_callbackFn = (res: LuCI.response, data: any, duration: number) => any;
/**
 * The ignore callback function is invoked by `isEmpty()` for each
 * child node to decide whether to ignore a child node or not.
 *
 * When this function returns `false`, the node passed to it is
 * ignored, else not.
 */
export type LuCI_dom_ignoreCallbackFn = (node: Node) => boolean;
/**
 * The request callback function is invoked whenever an HTTP
 * reply to a request made using the `L.get()`, `L.post()` or
 * `L.poll()` function is timed out or received successfully.
 */
export type LuCI_requestCallbackFn = (xhr: XMLHttpRequest, data: any, duration: number) => any;
declare const Class: import("./classtypes").LuCIClass<import("./classtypes").BaseInstance>;
/**
 * @class dom
 * @memberof LuCI
 * @hideconstructor
 * @classdesc
 *
 * The `dom` class provides a convenience method for creating and
 * manipulating DOM elements.
 *
 * To import the class in views, use `'require dom'`, to import it in
 * external JavaScript, use `L.require("dom").then(...)`.
 */
export const DOM: import("./classtypes").Merge<import("./classtypes").BaseInstance, {
    __name__: string;
    /**
     * Tests whether the given argument is a valid DOM `Node`.
     *
     * @instance
     * @memberof LuCI.dom
     * @param {*} e
     * The value to test.
     *
     * @returns {boolean}
     * Returns `true` if the value is a DOM `Node`, else `false`.
     */
    elem(e: any): boolean;
    /**
     * Parses a given string as HTML and returns the first child node.
     *
     * @instance
     * @memberof LuCI.dom
     * @param {string} s
     * A string containing an HTML fragment to parse. Note that only
     * the first result of the resulting structure is returned, so an
     * input value of `<div>foo</div> <div>bar</div>` will only return
     * the first `div` element node.
     *
     * @returns {Node}
     * Returns the first DOM `Node` extracted from the HTML fragment or
     * `null` on parsing failures or if no element could be found.
     */
    parse(s: string): Node;
    /**
     * Tests whether a given `Node` matches the given query selector.
     *
     * This function is a convenience wrapper around the standard
     * `Node.matches("selector")` function with the added benefit that
     * the `node` argument may be a non-`Node` value, in which case
     * this function simply returns `false`.
     *
     * @instance
     * @memberof LuCI.dom
     * @param {*} node
     * The `Node` argument to test the selector against.
     *
     * @param {string} [selector]
     * The query selector expression to test against the given node.
     *
     * @returns {boolean}
     * Returns `true` if the given node matches the specified selector
     * or `false` when the node argument is no valid DOM `Node` or the
     * selector didn't match.
     */
    matches(node: any, selector?: string): boolean;
    /**
     * Returns the closest parent node that matches the given query
     * selector expression.
     *
     * This function is a convenience wrapper around the standard
     * `Node.closest("selector")` function with the added benefit that
     * the `node` argument may be a non-`Node` value, in which case
     * this function simply returns `null`.
     *
     * @instance
     * @memberof LuCI.dom
     * @param {*} node
     * The `Node` argument to find the closest parent for.
     *
     * @param {string} [selector]
     * The query selector expression to test against each parent.
     *
     * @returns {Node|null}
     * Returns the closest parent node matching the selector or
     * `null` when the node argument is no valid DOM `Node` or the
     * selector didn't match any parent.
     */
    parent(node: any, selector?: string): Node | null;
    /**
     * Appends the given children data to the given node.
     *
     * @instance
     * @memberof LuCI.dom
     * @param {*} node
     * The `Node` argument to append the children to.
     *
     * @param {*} [children]
     * The children to append to the given node.
     *
     * When `children` is an array, then each item of the array
     * will be either appended as a child element or text node,
     * depending on whether the item is a DOM `Node` instance or
     * some other non-`null` value. Non-`Node`, non-`null` values
     * will be converted to strings first before being passed as
     * argument to `createTextNode()`.
     *
     * When `children` is a function, it will be invoked with
     * the passed `node` argument as the sole parameter and the `append`
     * function will be invoked again, with the given `node` argument
     * as first and the return value of the `children` function as
     *  the second parameter.
     *
     * When `children` is a DOM `Node` instance, it will be
     * appended to the given `node`.
     *
     * When `children` is any other non-`null` value, it will be
     * converted to a string and appended to the `innerHTML` property
     * of the given `node`.
     *
     * @returns {Node|null}
     * Returns the last children `Node` appended to the node or `null`
     * if either the `node` argument was no valid DOM `node` or if the
     * `children` was `null` or didn't result in further DOM nodes.
     */
    append(node: any, children?: any): Node | null;
    /**
     * Replaces the content of the given node with the given children.
     *
     * This function first removes any children of the given DOM
     * `Node` and then adds the given children following the
     * rules outlined below.
     *
     * @instance
     * @memberof LuCI.dom
     * @param {*} node
     * The `Node` argument to replace the children of.
     *
     * @param {*} [children]
     * The children to replace into the given node.
     *
     * When `children` is an array, then each item of the array
     * will be either appended as a child element or text node,
     * depending on whether the item is a DOM `Node` instance or
     * some other non-`null` value. Non-`Node`, non-`null` values
     * will be converted to strings first before being passed as
     * argument to `createTextNode()`.
     *
     * When `children` is a function, it will be invoked with
     * the passed `node` argument as the sole parameter and the `append`
     * function will be invoked again, with the given `node` argument
     * as first and the return value of the `children` function as
     * the second parameter.
     *
     * When `children` is a DOM `Node` instance, it will be
     * appended to the given `node`.
     *
     * When `children` is any other non-`null` value, it will be
     * converted to a string and appended to the `innerHTML` property
     * of the given `node`.
     *
     * @returns {Node|null}
     * Returns the last children `Node` appended to the node or `null`
     * if either the `node` argument was no valid DOM `node` or if the
     * `children` was `null` or didn't result in further DOM nodes.
     */
    content(node: any, children?: any): Node | null;
    /**
     * Sets attributes or registers event listeners on element nodes.
     *
     * @instance
     * @memberof LuCI.dom
     * @param {*} node
     * The `Node` argument to set the attributes or add the event
     * listeners for. When the given `node` value is not a valid
     * DOM `Node`, the function returns and does nothing.
     *
     * @param {string|Object<string, *>} key
     * Specifies either the attribute or event handler name to use,
     * or an object containing multiple key, value pairs which are
     * each added to the node as either attribute or event handler,
     * depending on the respective value.
     *
     * @param {*} [val]
     * Specifies the attribute value or event handler function to add.
     * If the `key` parameter is an `Object`, this parameter will be
     * ignored.
     *
     * When `val` is of type function, it will be registered as an event
     * handler on the given `node` with the `key` parameter being the
     * event name.
     *
     * When `val` is of type object, it will be serialized as JSON and
     * added as an attribute to the given `node`, using the given `key`
     * as an attribute name.
     *
     * When `val` is of any other type, it will be added as an attribute
     * to the given `node` as-is, with the underlying `setAttribute()`
     * call implicitly turning it into a string.
     * @returns {null}
     */
    attr(node: any, key: string | {
        [x: string]: any;
    }, val?: any): null;
    /**
     * Creates a new DOM `Node` from the given `html`, `attr` and
     * `data` parameters.
     *
     * This function has multiple signatures, it can be either invoked
     * in the form `create(html[, attr[, data]])` or in the form
     * `create(html[, data])`. The used variant is determined from the
     * type of the second argument.
     *
     * @instance
     * @memberof LuCI.dom
     * @param {string} html
     * Describes the node to create.
     *
     * When the value of `html` is of type array, a `DocumentFragment`
     * node is created and each item of the array is first converted
     * to a DOM `Node` by passing it through `create()` and then added
     * as a child to the fragment.
     *
     * When the value of `html` is a DOM `Node` instance, no new
     * element will be created, but the node will be used as-is.
     *
     * When the value of `html` is a string starting with `<`, it will
     * be passed to `dom.parse()` and the resulting value is used.
     *
     * When the value of `html` is any other string, it will be passed
     * to `document.createElement()` for creating a new DOM `Node` of
     * the given name.
     *
     * @param {Object<string, *>} [attr]
     * Specifies an Object of key, value pairs to set as attributes
     * or event handlers on the created node. Refer to
     * {@link LuCI.dom#attr dom.attr()} for details.
     *
     * @param {*} [data]
     * Specifies children to append to the newly created element.
     * Refer to {@link LuCI.dom#append dom.append()} for details.
     *
     * @throws {InvalidCharacterError}
     * Throws an `InvalidCharacterError` when the given `html`
     * argument contained malformed markup (such as not escaped
     * `&` characters in XHTML mode) or when the given node name
     * in `html` contains characters which are not legal in DOM
     * element names, such as spaces.
     *
     * @returns {Node}
     * Returns the newly created `Node`.
     */
    create(...args: any[]): Node;
    registry: {};
    /**
     * Attaches or detaches arbitrary data to and from a DOM `Node`.
     *
     * This function is useful to attach non-string values or runtime
     * data that is not serializable to DOM nodes. To decouple data
     * from the DOM, values are not added directly to nodes, but
     * inserted into a registry instead which is then referenced by a
     * string key stored as `data-idref` attribute in the node.
     *
     * This function has multiple signatures and is sensitive to the
     * number of arguments passed to it.
     *
     *  - `dom.data(node)` -
     *	 Fetches all data associated with the given node.
     *  - `dom.data(node, key)` -
     *	 Fetches a specific key associated with the given node.
     *  - `dom.data(node, key, val)` -
     *	 Sets a specific key to the given value associated with the
     *	 given node.
     *  - `dom.data(node, null)` -
     *	 Clears any data associated with the node.
     *  - `dom.data(node, key, null)` -
     *	 Clears the given key associated with the node.
     *
     * @instance
     * @memberof LuCI.dom
     * @param {Node} node
     * The DOM `Node` instance to set or retrieve the data for.
     *
     * @param {string|null} [key]
     * This is either a string specifying the key to retrieve, or
     * `null` to unset the entire node data.
     *
     * @param {*|null} [val]
     * This is either a non-`null` value to set for a given key or
     * `null` to remove the given `key` from the specified node.
     *
     * @returns {*}
     * Returns the get or set value, or `null` when no value could
     * be found.
     */
    data(node: Node, key?: string | null, val?: any | null, ...args: any[]): any;
    /**
     * Binds the given class instance to the specified DOM `Node`.
     *
     * This function uses the `dom.data()` facility to attach the
     * passed instance of a Class to a node. This is needed for
     * complex widget elements or similar where the corresponding
     * class instance responsible for the element must be retrieved
     * from DOM nodes obtained by `querySelector()` or similar means.
     *
     * @instance
     * @memberof LuCI.dom
     * @param {Node} node
     * The DOM `Node` instance to bind the class to.
     *
     * @param {Class} inst
     * The Class instance to bind to the node.
     *
     * @throws {TypeError}
     * Throws a `TypeError` when the given instance argument isn't
     * a valid Class instance.
     *
     * @returns {Class}
     * Returns the bound class instance.
     */
    bindClassInstance(node: Node, inst: import("./classtypes").LuCIClass<import("./classtypes").BaseInstance>): import("./classtypes").LuCIClass<import("./classtypes").BaseInstance>;
    /**
     * Finds a bound class instance on the given node itself or the
     * first bound instance on its closest parent node.
     *
     * @instance
     * @memberof LuCI.dom
     * @param {Node} node
     * The DOM `Node` instance to start from.
     *
     * @returns {Class|null}
     * Returns the founds class instance if any or `null` if no bound
     * class could be found on the node itself or any of its parents.
     */
    findClassInstance(node: Node): import("./classtypes").LuCIClass<import("./classtypes").BaseInstance> | null;
    /**
     * Finds a bound class instance on the given node itself or the
     * first bound instance on its closest parent node and invokes
     * the specified method name on the found class instance.
     *
     * @instance
     * @memberof LuCI.dom
     * @param {Node} node
     * The DOM `Node` instance to start from.
     *
     * @param {string} method
     * The name of the method to invoke on the found class instance.
     *
     * @param {...*} args
     * Additional arguments to pass to the invoked method as-is.
     *
     * @returns {*|null}
     * Returns the return value of the invoked method if a class
     * instance and method has been found. Returns `null` if either
     * no bound class instance could be found, or if the found
     * instance didn't have the requested `method`.
     */
    callClassMethod(node: Node, method: string, ...args: any[]): any | null;
    /**
     * Tests whether a given DOM `Node` instance is empty or appears
     * empty.
     *
     * Any element child nodes which have the CSS class `hidden` set
     * or for which the optionally passed `ignoreFn` callback function
     * returns `false` are ignored.
     *
     * @instance
     * @memberof LuCI.dom
     * @param {Node} node
     * The DOM `Node` instance to test.
     *
     * @param {LuCI.dom.ignoreCallbackFn} [ignoreFn]
     * Specifies an optional function which is invoked for each child
     * node to decide whether the child node should be ignored or not.
     *
     * @returns {boolean}
     * Returns `true` if the node does not have any children or if
     * any children node either has a `hidden` CSS class or a `false`
     * result when testing it using the given `ignoreFn`.
     */
    isEmpty(node: Node, ignoreFn?: LuCI.dom.ignoreCallbackFn): boolean;
}>;
/**
 * @class poll
 * @memberof LuCI
 * @hideconstructor
 * @classdesc
 *
 * The `Poll` class allows registering and unregistering poll actions,
 * as well as starting, stopping, and querying the state of the polling
 * loop.
 */
export const Poll: import("./classtypes").Merge<import("./classtypes").BaseInstance, {
    __name__: string;
    queue: any[];
    /**
     * Add a new operation to the polling loop. If the polling loop is not
     * already started at this point, it will be implicitly started.
     *
     * @instance
     * @memberof LuCI.poll
     * @param {function()} fn
     * The function to invoke on each poll interval.
     *
     * @param {number} interval
     * The poll interval in seconds.
     *
     * @throws {TypeError}
     * Throws `TypeError` when an invalid interval was passed.
     *
     * @returns {boolean}
     * Returns `true` if the function has been added or `false` if it
     * already is registered.
     */
    add(fn: () => any, interval: number): boolean;
    /**
     * Remove an operation from the polling loop. If no further operations
     * are registered, the polling loop is implicitly stopped.
     *
     * @instance
     * @memberof LuCI.poll
     * @param {function()} fn
     * The function to remove.
     *
     * @throws {TypeError}
     * Throws `TypeError` when the given argument isn't a function.
     *
     * @returns {boolean}
     * Returns `true` if the function has been removed or `false` if it
     * wasn't found.
     */
    remove(fn: () => any): boolean;
    /**
     * (Re)start the polling loop. Dispatches a custom `poll-start` event
     * to the `document` object upon successful start.
     *
     * @instance
     * @memberof LuCI.poll
     * @returns {boolean}
     * Returns `true` if polling has been started (or if no functions
     * where registered) or `false` when the polling loop already runs.
     */
    start(): boolean;
    /**
     * Stop the polling loop. Dispatches a custom `poll-stop` event
     * to the `document` object upon successful stop.
     *
     * @instance
     * @memberof LuCI.poll
     * @returns {boolean}
     * Returns `true` if polling has been stopped or `false` if it didn't
     * run to begin with.
     */
    stop(): boolean;
    step(): void;
    /**
     * Test whether the polling loop is running.
     *
     * @instance
     * @memberof LuCI.poll
     * @returns {boolean} - Returns `true` if polling is active, else `false`.
     */
    active(): boolean;
}>;
/**
 * @class request
 * @memberof LuCI
 * @hideconstructor
 * @classdesc
 *
 * The `Request` class allows initiating HTTP requests and provides utilities
 * for dealing with responses.
 */
export const Request: import("./classtypes").Merge<import("./classtypes").BaseInstance, {
    __name__: string;
    interceptors: any[];
    /**
     * Turn the given relative URL into an absolute URL if necessary.
     *
     * @instance
     * @memberof LuCI.request
     * @param {string} url
     * The URL to convert.
     *
     * @returns {string}
     * The absolute URL derived from the given one, or the original URL
     * if it already was absolute.
     */
    expandURL(url: string): string;
    /**
     * Initiate an HTTP request to the given target.
     *
     * @instance
     * @memberof LuCI.request
     * @param {string} target
     * The URL to request.
     *
     * @param {LuCI.request.RequestOptions} [options]
     * Additional options to configure the request.
     *
     * @returns {Promise<LuCI.response>}
     * The resulting HTTP response.
     */
    request(target: string, options?: LuCI.request.RequestOptions): Promise<LuCI.response>;
    /**
     * Handle XHR readyState changes for an in-flight request and resolve or
     * reject the originating promise.
     *
     * @instance
     * @memberof LuCI.request
     * @param {function(LuCI.response)} resolveFn
     * Callback invoked on success with the constructed {@link LuCI.response}.
     *
     * @param {function(Error)} rejectFn
     * Callback invoked on failure or abort with an `Error` instance.
     *
     * @param {Event} [ev]
     * The XHR `readystatechange` event (optional).
     *
     * @returns {void}
     * No return value; the function resolves or rejects the supplied callbacks.
     */
    handleReadyStateChange(resolveFn: (arg0: LuCI.response) => any, rejectFn: (arg0: Error) => any, ev?: Event): void;
    /**
     * Initiate an HTTP GET request to the given target.
     *
     * @instance
     * @memberof LuCI.request
     * @param {string} url
     * The URL to request.
     *
     * @param {LuCI.request.RequestOptions} [options]
     * Additional options to configure the request.
     *
     * @returns {Promise<LuCI.response>}
     * The resulting HTTP response.
     */
    get(url: string, options?: LuCI.request.RequestOptions): Promise<LuCI.response>;
    /**
     * Initiate an HTTP POST request to the given target.
     *
     * @instance
     * @memberof LuCI.request
     * @param {string} url
     * The URL to request.
     *
     * @param {*} [data]
     * The request data to send, see {@link LuCI.request.RequestOptions} for details.
     *
     * @param {LuCI.request.RequestOptions} [options]
     * Additional options to configure the request.
     *
     * @returns {Promise<LuCI.response>}
     * The resulting HTTP response.
     */
    post(url: string, data?: any, options?: LuCI.request.RequestOptions): Promise<LuCI.response>;
    /**
     * Register an HTTP response interceptor function. Interceptor
     * functions are useful to perform default actions on incoming HTTP
     * responses, such as checking for expired authentication or for
     * implementing request retries before returning a failure.
     *
     * @instance
     * @memberof LuCI.request
     * @param {LuCI.request.interceptorFn} interceptorFn
     * The interceptor function to register.
     *
     * @returns {LuCI.request.interceptorFn}
     * The registered function.
     */
    addInterceptor(interceptorFn: LuCI.request.interceptorFn): LuCI.request.interceptorFn;
    /**
     * Remove an HTTP response interceptor function. The passed function
     * value must be the very same value that was used to register the
     * function.
     *
     * @instance
     * @memberof LuCI.request
     * @param {LuCI.request.interceptorFn} interceptorFn
     * The interceptor function to remove.
     *
     * @returns {boolean}
     * Returns `true` if any function has been removed, else `false`.
     */
    removeInterceptor(interceptorFn: LuCI.request.interceptorFn): boolean;
    /**
     * @class
     * @memberof LuCI.request
     * @hideconstructor
     * @classdesc
     *
     * The `Request.poll` class provides some convenience wrappers around
     * {@link LuCI.poll} mainly to simplify registering repeating HTTP
     * request calls as polling functions.
     */
    poll: {
        /**
         * Register a repeating HTTP request with an optional callback
         * to invoke whenever a response for the request is received.
         *
         * @instance
         * @memberof LuCI.request.poll
         * @param {number} interval
         * The poll interval in seconds.
         *
         * @param {string} url
         * The URL to request on each poll.
         *
         * @param {LuCI.request.RequestOptions} [options]
         * Additional options to configure the request.
         *
         * @param {LuCI.request.poll.callbackFn} [callback]
         * {@link LuCI.request.poll.callbackFn Callback} function to
         * invoke for each HTTP reply.
         *
         * @throws {TypeError}
         * Throws `TypeError` when an invalid interval was passed.
         *
         * @returns {function()}
         * Returns the internally created poll function.
         */
        add(interval: number, url: string, options?: LuCI.request.RequestOptions, callback?: LuCI.request.poll.callbackFn): () => any;
        /**
         * Remove a polling request that has been previously added using `add()`.
         * This function is essentially a wrapper around
         * {@link LuCI.poll.remove LuCI.poll.remove()}.
         *
         * @instance
         * @memberof LuCI.request.poll
         * @param {function()} entry
         * The poll function returned by {@link LuCI.request.poll#add add()}.
         *
         * @returns {boolean}
         * Returns `true` if any function has been removed, else `false`.
         */
        remove(entry: () => any): boolean;
        /**
         * Alias for {@link LuCI.poll.start LuCI.poll.start()}.
         *
         * @instance
         * @memberof LuCI.request.poll
         * @returns {boolean}
         */
        start(): boolean;
        /**
         * Alias for {@link LuCI.poll.stop LuCI.poll.stop()}.
         *
         * @instance
         * @memberof LuCI.request.poll
         * @returns {boolean}
         */
        stop(): boolean;
        /**
         * Alias for {@link LuCI.poll.active LuCI.poll.active()}.
         *
         * @instance
         * @memberof LuCI.request.poll
         * @returns {boolean}
         */
        active(): boolean;
    };
}>;
/**
 * @class view
 * @memberof LuCI
 * @hideconstructor
 * @classdesc
 *
 * The `view` class forms the basis of views and provides a standard
 * set of methods to inherit from.
 */
export const View: import("./classtypes").LuCIClass<import("./classtypes").Merge<import("./classtypes").BaseInstance, {
    __name__: string;
    __init__(): Promise<any>;
    /**
     * The load function is invoked before the view is rendered.
     *
     * The invocation of this function is wrapped by
     * `Promise.resolve()` so it may return Promises if needed.
     *
     * The return value of the function (or the resolved values
     * of the promise returned by it) will be passed as the first
     * argument to `render()`.
     *
     * This function is supposed to be overwritten by subclasses,
     * the default implementation does nothing.
     *
     * @instance
     * @abstract
     * @memberof LuCI.view
     *
     * @returns {*|Promise<*>}
     * May return any value or a Promise resolving to any value.
     */
    load(): any | Promise<any>;
    /**
     * The render function is invoked after the
     * {@link LuCI.view#load load()} function and responsible
     * for setting up the view contents. It must return a DOM
     * `Node` or `DocumentFragment` holding the contents to
     * insert into the view area.
     *
     * The invocation of this function is wrapped by
     * `Promise.resolve()` so it may return Promises if needed.
     *
     * The return value of the function (or the resolved values
     * of the promise returned by it) will be inserted into the
     * main content area using
     * {@link LuCI.dom#append dom.append()}.
     *
     * This function is supposed to be overwritten by subclasses,
     * the default implementation does nothing.
     *
     * @instance
     * @abstract
     * @memberof LuCI.view
     * @param {*|null} load_results
     * This function will receive the return value of the
     * {@link LuCI.view#load view.load()} function as first
     * argument.
     *
     * @returns {Node|Promise<Node>}
     * Should return a DOM `Node` value or a `Promise` resolving
     * to a `Node` value.
     */
    render(): Node | Promise<Node>;
    /**
     * The handleSave function is invoked when the user clicks
     * the `Save` button in the page action footer.
     *
     * The default implementation should be sufficient for most
     * views using {@link form#Map form.Map()} based forms - it
     * will iterate all forms present in the view and invoke
     * the {@link form#Map#save Map.save()} method on each form.
     *
     * Views not using `Map` instances or requiring other special
     * logic should overwrite `handleSave()` with a custom
     * implementation.
     *
     * To disable the `Save` page footer button, views extending
     * this base class should overwrite the `handleSave` function
     * with `null`.
     *
     * The invocation of this function is wrapped by
     * `Promise.resolve()` so it may return Promises if needed.
     *
     * @instance
     * @memberof LuCI.view
     * @param {Event} ev
     * The DOM event that triggered the function.
     *
     * @returns {*|Promise<*>}
     * Any return values of this function are discarded, but
     * passed through `Promise.resolve()` to ensure that any
     * returned promise runs to completion before the button
     * is re-enabled.
     */
    handleSave(ev: Event): any | Promise<any>;
    /**
     * The handleSaveApply function is invoked when the user clicks
     * the `Save & Apply` button in the page action footer.
     *
     * The default implementation should be sufficient for most
     * views using {@link form#Map form.Map()} based forms - it
     * will first invoke
     * {@link LuCI.view.handleSave view.handleSave()} and then
     * call {@link ui#changes#apply ui.changes.apply()} to start the
     * modal config apply and page reload flow.
     *
     * Views not using `Map` instances or requiring other special
     * logic should overwrite `handleSaveApply()` with a custom
     * implementation.
     *
     * To disable the `Save & Apply` page footer button, views
     * extending this base class should overwrite the
     * `handleSaveApply` function with `null`.
     *
     * The invocation of this function is wrapped by
     * `Promise.resolve()` so it may return Promises if needed.
     *
     * @instance
     * @memberof LuCI.view
     * @param {Event} ev
     * The DOM event that triggered the function.
     * @param {number} mode
     * Whether to apply the changes checked.
     *
     * @returns {*|Promise<*>}
     * Any return values of this function are discarded, but
     * passed through `Promise.resolve()` to ensure that any
     * returned promise runs to completion before the button
     * is re-enabled.
     */
    handleSaveApply(ev: Event, mode: number): any | Promise<any>;
    /**
     * The handleReset function is invoked when the user clicks
     * the `Reset` button in the page action footer.
     *
     * The default implementation should be sufficient for most
     * views using {@link form#Map form.Map()} based forms - it
     * will iterate all forms present in the view and invoke
     * the {@link form#Map#save Map.reset()} method on each form.
     *
     * Views not using `Map` instances or requiring other special
     * logic should overwrite `handleReset()` with a custom
     * implementation.
     *
     * To disable the `Reset` page footer button, views extending
     * this base class should overwrite the `handleReset` function
     * with `null`.
     *
     * The invocation of this function is wrapped by
     * `Promise.resolve()` so it may return Promises if needed.
     *
     * @instance
     * @memberof LuCI.view
     * @param {Event} ev
     * The DOM event that triggered the function.
     *
     * @returns {*|Promise<*>}
     * Any return values of this function are discarded, but
     * passed through `Promise.resolve()` to ensure that any
     * returned promise runs to completion before the button
     * is re-enabled.
     */
    handleReset(ev: Event): any | Promise<any>;
    /**
     * Renders a standard page action footer if any of the
     * `handleSave()`, `handleSaveApply()` or `handleReset()`
     * functions are defined.
     *
     * The default implementation should be sufficient for most
     * views - it will render a standard page footer with action
     * buttons labeled `Save`, `Save & Apply` and `Reset`
     * triggering the `handleSave()`, `handleSaveApply()` and
     * `handleReset()` functions respectively.
     *
     * When any of these `handle*()` functions is overwritten
     * with `null` by a view extending this class, the
     * corresponding button will not be rendered.
     *
     * @instance
     * @memberof LuCI.view
     * @returns {DocumentFragment}
     * Returns a `DocumentFragment` containing the footer bar
     * with buttons for each corresponding `handle*()` action
     * or an empty `DocumentFragment` if all three `handle*()`
     * methods are overwritten with `null`.
     */
    addFooter(): DocumentFragment;
}>>;
/**
 * @class headers
 * @memberof LuCI
 * @hideconstructor
 * @classdesc
 *
 * The `Headers` class is an internal utility class exposed in HTTP
 * response objects using the `response.headers` property.
 */
export const Headers: import("./classtypes").LuCIClass<import("./classtypes").Merge<import("./classtypes").BaseInstance, {
    /** @type {any} */ headers: any;
    __name__: string;
    __init__(xhr: any): void;
    /**
     * Checks whether the given header name is present.
     * Note: Header-Names are case-insensitive.
     *
     * @instance
     * @memberof LuCI.headers
     * @param {string} name
     * The header name to check
     *
     * @returns {boolean}
     * Returns `true` if the header name is present, `false` otherwise
     */
    has(name: string): boolean;
    /**
     * Returns the value of the given header name.
     * Note: Header-Names are case-insensitive.
     *
     * @instance
     * @memberof LuCI.headers
     * @param {string} name
     * The header name to read
     *
     * @returns {string|null}
     * The value of the given header name or `null` if the header isn't present.
     */
    get(name: string): string | null;
}>>;
/**
 * @class response
 * @memberof LuCI
 * @hideconstructor
 * @classdesc
 *
 * The `Response` class is an internal utility class representing HTTP responses.
 */
export const Response: import("./classtypes").LuCIClass<import("./classtypes").Merge<import("./classtypes").BaseInstance, {
    /** @type {any} */ ok: any;
    /** @type {any} */ status: any;
    /** @type {any} */ statusText: any;
    /** @type {any} */ headers: any;
    /** @type {any} */ duration: any;
    /** @type {any} */ url: any;
    /** @type {any} */ xhr: any;
    /** @type {any} */ responseBlob: any;
    /** @type {any} */ responseJSON: any;
    /** @type {any} */ responseText: any;
    __name__: string;
    __init__(xhr: any, url: any, duration: any, headers: any, content: any): void;
    /**
     * Clones the given response object, optionally overriding the content
     * of the cloned instance.
     *
     * @instance
     * @memberof LuCI.response
     * @param {*} [content]
     * Override the content of the cloned response. Object values will be
     * treated as JSON response data, all other types will be converted
     * using `String()` and treated as response text.
     *
     * @returns {LuCI.response}
     * The cloned `Response` instance.
     */
    clone(content?: any): LuCI.response;
    /**
     * Access the response content as JSON data.
     *
     * @instance
     * @memberof LuCI.response
     * @throws {SyntaxError}
     * Throws `SyntaxError` if the content isn't valid JSON.
     *
     * @returns {*}
     * The parsed JSON data.
     */
    json(): any;
    /**
     * Access the response content as string.
     *
     * @instance
     * @memberof LuCI.response
     * @returns {string}
     * The response content.
     */
    text(): string;
    /**
     * Access the response content as blob.
     *
     * @instance
     * @memberof LuCI.response
     * @returns {Blob}
     * The response content as blob.
     */
    blob(): Blob;
}>>;
/**
 * @class session
 * @memberof LuCI
 * @hideconstructor
 * @classdesc
 *
 * The `session` class provides various session related functionality.
 */
export const Session: import("./classtypes").Merge<import("./classtypes").BaseInstance, {
    __name__: string;
    /**
     * Retrieve the current session ID.
     *
     * @returns {string}
     * Returns the current session ID.
     */
    getID(): string;
    /**
     * Retrieve the current session token.
     *
     * @returns {string|null}
     * Returns the current session token or `null` if not logged in.
     */
    getToken(): string | null;
    /**
     * Retrieve data from the local session storage.
     *
     * @param {string} [key]
     * The key to retrieve from the session data store. If omitted, all
     * session data will be returned.
     *
     * @returns {*}
     * Returns the stored session data or `null` if the given key wasn't
     * found.
     */
    getLocalData(key?: string): any;
    /**
     * Set data in the local session storage.
     *
     * @param {string} key
     * The key to set in the session data store.
     *
     * @param {*} value
     * The value to store. It will be internally converted to JSON before
     * being put in the session store.
     *
     * @returns {boolean}
     * Returns `true` if the data could be stored or `false` on error.
     */
    setLocalData(key: string, value: any): boolean;
}>;
declare const __LuCI: import("./classtypes").LuCIClass<import("./classtypes").Merge<import("./classtypes").BaseInstance, {
    __name__: string;
    __init__(setenv: any): void;
    /**
     * Captures the current stack trace and throws an error of the
     * specified type as a new exception. Also logs the exception as
     * an error to the debug console if it is available.
     *
     * @instance
     * @memberof LuCI
     *
     * @param {Error|string} [type=Error]
     * Either a string specifying the type of the error to throw or an
     * existing `Error` instance to copy.
     *
     * @param {string} [fmt=Unspecified error]
     * A format string which is used to form the error message, together
     * with all subsequent optional arguments.
     *
     * @param {...*} [args]
     * Zero or more variable arguments to the supplied format string.
     *
     * @throws {Error}
     * Throws the created error object with the captured stack trace
     * appended to the message and the type set to the given type
     * argument or copied from the given error instance.
     */
    raise(type?: Error | string, fmt?: string, ...args?: any[]): never;
    /**
     * A wrapper around {@link LuCI#raise raise()} which also renders
     * the error either as modal overlay when `ui.js` is already loaded
     * or directly into the view body.
     *
     * @instance
     * @memberof LuCI
     *
     * @param {Error|string} [type=Error]
     * Either a string specifying the type of the error to throw or an
     * existing `Error` instance to copy.
     *
     * @param {string} [fmt=Unspecified error]
     * A format string which is used to form the error message, together
     * with all subsequent optional arguments.
     *
     * @param {...*} [args]
     * Zero or more variable arguments to the supplied format string.
     *
     * @throws {Error}
     * Throws the created error object with the captured stack trace
     * appended to the message and the type set to the given type
     * argument or copied from the given error instance.
     */
    error(type?: Error | string, fmt?: string, ...args: any[]): void;
    /**
     * Return a bound function using the given `self` as `this` context
     * and any further arguments as parameters to the bound function.
     *
     * @instance
     * @memberof LuCI
     *
     * @param {function()} fn
     * The function to bind.
     *
     * @param {*} self
     * The value to bind as `this` context to the specified function.
     *
     * @param {...*} [args]
     * Zero or more variable arguments which are bound to the function
     * as parameters.
     *
     * @returns {function()}
     * Returns the bound function.
     */
    bind(fn: () => any, self: any, ...args?: any[]): () => any;
    /**
     * Load an additional LuCI JavaScript class and its dependencies,
     * instantiate it and return the resulting class instance. Each
     * class is only loaded once. Subsequent attempts to load the same
     * class will return the already instantiated class.
     *
     * @instance
     * @memberof LuCI
     *
     * @param {string} name
     * The name of the class to load in dotted notation. Dots will
     * be replaced by spaces and joined with the runtime-determined
     * base URL of LuCI.js to form an absolute URL to load the class
     * file from.
     * @param {string[]} [from=[]]
     * Optional dependency chain used during dependency resolution. This
     * array contains the sequence of class names already being resolved
     * (the caller stack). It is used to detect circular dependencies —
     * if `name` appears in `from` a `DependencyError` is thrown.
     * @throws {DependencyError}
     * Throws a `DependencyError` when the class to load includes
     * circular dependencies.
     *
     * @throws {NetworkError}
     * Throws `NetworkError` when the underlying {@link LuCI.request}
     * call failed.
     *
     * @throws {SyntaxError}
     * Throws `SyntaxError` when the loaded class file code cannot
     * be interpreted by `eval`.
     *
     * @throws {TypeError}
     * Throws `TypeError` when the class file could be loaded and
     * interpreted, but when invoking its code did not yield a valid
     * class instance.
     *
     * @returns {Promise<LuCI.baseclass>}
     * Returns the instantiated class.
     */
    require(name: string, from?: string[]): Promise<LuCI.baseclass>;
    probeRPCBaseURL(): Promise<any>;
    probeSystemFeatures(): Promise<any>;
    probePreloadClasses(): Promise<any[] | string[]>;
    /**
     * Test whether a particular system feature is available, such as
     * hostapd SAE support or an installed firewall. The features are
     * queried once at the beginning of the LuCI session and cached in
     * `SessionStorage` throughout the lifetime of the associated tab or
     * browser window.
     *
     * @instance
     * @memberof LuCI
     *
     * @param {string} feature
     * The feature to test. For a detailed list of known feature flags,
     * see `/modules/luci-base/root/usr/share/rpcd/ucode/luci`.
     *
     * @param {string} [subfeature]
     * Some feature classes like `hostapd` provide sub-feature flags,
     * such as `sae` or `11w` support. The `subfeature` argument can
     * be used to query these.
     *
     * @returns {boolean|null}
     * Return `true` if the queried feature (and sub-feature) is available
     * or `false` if the requested feature isn't present or known.
     * Return `null` when a sub-feature was queried for a feature which
     * has no sub-features.
     */
    hasSystemFeature(...args: any[]): boolean | null;
    notifySessionExpiry(): void;
    setupDOM([domEv, uiClass, rpcClass, formClass, rpcBaseURL]: [any, any, any, any, any]): Promise<[any, any[] | string[]]>;
    initDOM(): void;
    loaded: boolean;
    /**
     * The `env` object holds environment settings used by LuCI, such
     * as request timeouts, base URLs, etc.
     *
     * @instance
     * @memberof LuCI
     */
    env: {};
    /**
     * Construct an absolute filesystem path relative to the server
     * document root.
     *
     * @instance
     * @memberof LuCI
     *
     * @param {...string} [parts]
     * An array of parts to join into a path.
     *
     * @returns {string}
     * Return the joined path.
     */
    fspath(...args: string[]): string;
    /**
     * Construct a relative URL path from the given prefix and parts.
     * The resulting URL is guaranteed to contain only the characters
     * `a-z`, `A-Z`, `0-9`, `_`, `.`, `%`, `,`, `;`, and `-` as well
     * as `/` for the path separator. Suffixing '?x=y&foo=bar' URI
     * parameters also limited to the aforementioned characters is
     * permissible.
     *
     * @instance
     * @memberof LuCI
     *
     * @param {string} [prefix]
     * The prefix to join the given parts with. If the `prefix` is
     * omitted, it defaults to an empty string.
     *
     * @param {...string} [parts]
     * An array of parts to join into a URL path. Parts may contain
     * slashes and any of the other characters mentioned above.
     *
     * @returns {string}
     * Return the joined URL path.
     */
    path(prefix?: string, parts?: string[]): string;
    /**
     * Construct a URL with a path relative to the script path of the server
     * side LuCI application (usually `/cgi-bin/luci`).
     *
     * The resulting URL is guaranteed to contain only the characters
     * `a-z`, `A-Z`, `0-9`, `_`, `.`, `%`, `,`, `;`, and `-` as well
     * as `/` for the path separator. Suffixing '?x=y&foo=bar' URI
     * parameters also limited to the aforementioned characters is
     * permissible.
     *
     * @instance
     * @memberof LuCI
     *
     * @param {...string} [parts]
     * An array of parts to join into a URL path. Parts may contain
     * slashes and any of the other characters mentioned above.
     *
     * @returns {string}
     * Returns the resulting URL path.
     */
    url(...args: string[]): string;
    /**
     * Construct a URL path relative to the global static resource path
     * of the LuCI ui (usually `/luci-static/resources`).
     *
     * The resulting URL is guaranteed to contain only the characters
     * `a-z`, `A-Z`, `0-9`, `_`, `.`, `%`, `,`, `;`, and `-` as well
     * as `/` for the path separator. Suffixing '?x=y&foo=bar' URI
     * parameters also limited to the aforementioned characters is
     * permissible.
     *
     * @instance
     * @memberof LuCI
     *
     * @param {...string} [parts]
     * An array of parts to join into a URL path. Parts may contain
     * slashes and any of the other characters mentioned above.
     *
     * @returns {string}
     * Returns the resulting URL path.
     */
    resource(...args: string[]): string;
    /**
     * Construct a URL path relative to the media resource path of the
     * LuCI ui (usually `/luci-static/$theme_name`).
     *
     * The resulting URL is guaranteed to contain only the characters
     * `a-z`, `A-Z`, `0-9`, `_`, `.`, `%`, `,`, `;`, and `-` as well
     * as `/` for the path separator. Suffixing '?x=y&foo=bar' URI
     * parameters also limited to the aforementioned characters is
     * permissible.
     *
     * @instance
     * @memberof LuCI
     *
     * @param {...string} [parts]
     * An array of parts to join into a URL path. Parts may contain
     * slashes and any of the other characters mentioned above.
     *
     * @returns {string}
     * Returns the resulting URL path.
     */
    media(...args: string[]): string;
    /**
     * Return the complete URL path to the current view.
     *
     * @instance
     * @memberof LuCI
     *
     * @returns {string}
     * Returns the URL path to the current view.
     */
    location(): string;
    /**
     * Tests whether the passed argument is a JavaScript object.
     * This function is meant to be an object counterpart to the
     * standard `Array.isArray()` function.
     *
     * @instance
     * @memberof LuCI
     *
     * @param {*} [val]
     * The value to test
     *
     * @returns {boolean}
     * Returns `true` if the given value is of a type object and
     * not `null`, else returns `false`.
     */
    isObject(val?: any): boolean;
    /**
     * Tests whether the passed argument is a function arguments object.
     *
     * @instance
     * @memberof LuCI
     *
     * @param {*} [val]
     * The value to test
     *
     * @returns {boolean}
     * Returns `true` if the given value is a function arguments object,
     * else returns `false`.
     */
    isArguments(val?: any): boolean;
    /**
     * Return an array of sorted object keys, optionally sorted by
     * a different key or a different sorting mode.
     *
     * @instance
     * @memberof LuCI
     *
     * @param {object} obj
     * The object to extract the keys from. If the given value is
     * not an object, the function will return an empty array.
     *
     * @param {string|null} [key]
     * Specifies the key to order by. This is mainly useful for
     * nested objects of objects or objects of arrays when sorting
     * shall not be performed by the primary object keys but by
     * some other key pointing to a value within the nested values.
     *
     * @param {"addr"|"num"} [sortmode]
     * Can be either `addr` or `num` to override the natural
     * lexicographic sorting with a sorting suitable for IP/MAC style
     * addresses or numeric values respectively.
     *
     * @returns {string[]}
     * Returns an array containing the sorted keys of the given object.
     */
    sortedKeys(obj: object, key?: string | null, sortmode?: "addr" | "num"): string[];
    /**
     * Compares two values numerically and returns -1, 0, or 1 depending
     * on whether the first value is smaller, equal to, or larger than the
     * second one respectively.
     *
     * This function is meant to be used as a comparator function for
     * Array.sort().
     *
     * @type {function()}
     *
     * @param {*} a
     * The first value
     *
     * @param {*} b
     * The second value.
     *
     * @returns {number}
     * Returns -1 if the first value is smaller than the second one.
     * Returns 0 if both values are equal.
     * Returns 1 if the first value is larger than the second one.
     */
    naturalCompare: () => any;
    /**
     * Converts the given value to an array using toArray() if needed,
     * performs a numerical sort using naturalCompare() and returns the
     * result. If the input already is an array, no copy is being made
     * and the sorting is performed in-place.
     *
     * @see toArray
     * @see naturalCompare
     *
     * @param {*} val
     * The input value to sort (and convert to an array if needed).
     *
     * @returns {Array<*>}
     * Returns the resulting, numerically sorted array.
     */
    sortedArray(val: any): Array<any>;
    /**
     * Converts the given value to an array. If the given value is of
     * type array, it is returned as-is, values of a type object are
     * returned as one-element array containing the object, empty
     * strings and `null` values are returned as an empty array, all other
     * values are converted using `String()`, trimmed, split on white
     * space and returned as an array.
     *
     * @instance
     * @memberof LuCI
     *
     * @param {*} val
     * The value to convert into an array.
     *
     * @returns {Array<*>}
     * Returns the resulting array.
     */
    toArray(val: any): Array<any>;
    /**
     * Returns a promise resolving with either the given value or with
     * the given default in case the input value is a rejecting promise.
     *
     * @instance
     * @memberof LuCI
     *
     * @param {*} value
     * The value to resolve the promise with.
     *
     * @param {*} defvalue
     * The default value to resolve the promise with in case the given
     * input value is a rejecting promise.
     *
     * @returns {Promise<*>}
     * Returns a new promise resolving either to the given input value or
     * to the given default value on error.
     */
    resolveDefault(value: any, defvalue: any): Promise<any>;
    /**
     * Issues a GET request to the given url and invokes the specified
     * callback function. The function is a wrapper around
     * {@link LuCI.request#request Request.request()}.
     *
     * @deprecated
     * @instance
     * @memberof LuCI
     *
     * @param {string} url
     * The URL to request.
     *
     * @param {Object<string, string>} [args]
     * Additional query string arguments to append to the URL.
     *
     * @param {LuCI.requestCallbackFn} cb
     * The callback function to invoke when the request finishes.
     *
     * @returns {Promise<null>}
     * Returns a promise resolving to `null` when concluded.
     */
    get(url: string, args?: {
        [x: string]: string;
    }, cb: LuCI.requestCallbackFn): Promise<null>;
    /**
     * Issues a POST request to the given url and invokes the specified
     * callback function. The function is a wrapper around
     * {@link LuCI.request#request Request.request()}. The request is
     * sent using `application/x-www-form-urlencoded` encoding and will
     * contain a field `token` with the current value of `LuCI.env.token`
     * by default.
     *
     * @deprecated
     * @instance
     * @memberof LuCI
     *
     * @param {string} url
     * The URL to request.
     *
     * @param {Object<string, string>} [args]
     * Additional post arguments to append to the request body.
     *
     * @param {LuCI.requestCallbackFn} cb
     * The callback function to invoke when the request finishes.
     *
     * @returns {Promise<null>}
     * Returns a promise resolving to `null` when concluded.
     */
    post(url: string, args?: {
        [x: string]: string;
    }, cb: LuCI.requestCallbackFn): Promise<null>;
    /**
     * Register a polling HTTP request that invokes the specified
     * callback function. The function is a wrapper around
     * {@link LuCI.request.poll#add Request.poll.add()}.
     *
     * @deprecated
     * @instance
     * @memberof LuCI
     *
     * @param {number} interval
     * The poll interval to use. If set to a value less than or equal
     * to `0`, it will default to the global poll interval configured
     * in `LuCI.env.pollinterval`.
     *
     * @param {string} url
     * The URL to request.
     *
     * @param {Object<string, string>} [args]
     * Specifies additional arguments for the request. For GET requests,
     * the arguments are appended to the URL as query string, for POST
     * requests, they'll be added to the request body.
     *
     * @param {LuCI.requestCallbackFn} cb
     * The callback function to invoke whenever a request finishes.
     *
     * @param {boolean} [post=false]
     * When set to `false` or not specified, poll requests will be made
     * using the GET method. When set to `true`, POST requests will be
     * issued. In the case of POST requests, the request body will contain
     * an argument `token` with the current value of `LuCI.env.token` by
     * default, regardless of the parameters specified with `args`.
     *
     * @returns {function()}
     * Returns the internally created function that has been passed to
     * {@link LuCI.request.poll#add Request.poll.add()}. This value can
     * be passed to {@link LuCI.poll.remove Poll.remove()} to remove the
     * polling request.
     */
    poll(interval: number, url: string, args?: {
        [x: string]: string;
    }, cb: LuCI.requestCallbackFn, post?: boolean): () => any;
    /**
     * Check whether a view has sufficient permissions.
     *
     * @returns {boolean|null}
     * Returns `null` if the current session has no permission at all to
     * load resources required by the view. Returns `false` if readonly
     * permissions are granted or `true` if at least one required ACL
     * group is granted with write permissions.
     */
    hasViewPermission(): boolean | null;
    /**
     * Deprecated wrapper around {@link LuCI.poll.remove Poll.remove()}.
     *
     * @deprecated
     * @instance
     * @memberof LuCI
     *
     * @param {function()} entry
     * The polling function to remove.
     *
     * @returns {boolean}
     * Returns `true` when the function has been removed or `false` if
     * it could not be found.
     */
    stop(entry: () => any): boolean;
    /**
     * Deprecated wrapper around {@link LuCI.poll.stop Poll.stop()}.
     *
     * @deprecated
     * @instance
     * @memberof LuCI
     *
     * @returns {boolean}
     * Returns `true` when the polling loop has been stopped or `false`
     * when it didn't run to begin with.
     */
    halt(): boolean;
    /**
     * Deprecated wrapper around {@link LuCI.poll.start Poll.start()}.
     *
     * @deprecated
     * @instance
     * @memberof LuCI
     *
     * @returns {boolean}
     * Returns `true` when the polling loop has been started or `false`
     * when it was already running.
     */
    run(): boolean;
    /**
     * Legacy `L.dom` class alias. New view code should use `'require dom';`
     * to request the `LuCI.dom` class.
     *
     * @instance
     * @memberof LuCI
     * @deprecated
     */
    dom: import("./classtypes").Merge<import("./classtypes").BaseInstance, {
        __name__: string;
        /**
         * Tests whether the given argument is a valid DOM `Node`.
         *
         * @instance
         * @memberof LuCI.dom
         * @param {*} e
         * The value to test.
         *
         * @returns {boolean}
         * Returns `true` if the value is a DOM `Node`, else `false`.
         */
        elem(e: any): boolean;
        /**
         * Parses a given string as HTML and returns the first child node.
         *
         * @instance
         * @memberof LuCI.dom
         * @param {string} s
         * A string containing an HTML fragment to parse. Note that only
         * the first result of the resulting structure is returned, so an
         * input value of `<div>foo</div> <div>bar</div>` will only return
         * the first `div` element node.
         *
         * @returns {Node}
         * Returns the first DOM `Node` extracted from the HTML fragment or
         * `null` on parsing failures or if no element could be found.
         */
        parse(s: string): Node;
        /**
         * Tests whether a given `Node` matches the given query selector.
         *
         * This function is a convenience wrapper around the standard
         * `Node.matches("selector")` function with the added benefit that
         * the `node` argument may be a non-`Node` value, in which case
         * this function simply returns `false`.
         *
         * @instance
         * @memberof LuCI.dom
         * @param {*} node
         * The `Node` argument to test the selector against.
         *
         * @param {string} [selector]
         * The query selector expression to test against the given node.
         *
         * @returns {boolean}
         * Returns `true` if the given node matches the specified selector
         * or `false` when the node argument is no valid DOM `Node` or the
         * selector didn't match.
         */
        matches(node: any, selector?: string): boolean;
        /**
         * Returns the closest parent node that matches the given query
         * selector expression.
         *
         * This function is a convenience wrapper around the standard
         * `Node.closest("selector")` function with the added benefit that
         * the `node` argument may be a non-`Node` value, in which case
         * this function simply returns `null`.
         *
         * @instance
         * @memberof LuCI.dom
         * @param {*} node
         * The `Node` argument to find the closest parent for.
         *
         * @param {string} [selector]
         * The query selector expression to test against each parent.
         *
         * @returns {Node|null}
         * Returns the closest parent node matching the selector or
         * `null` when the node argument is no valid DOM `Node` or the
         * selector didn't match any parent.
         */
        parent(node: any, selector?: string): Node | null;
        /**
         * Appends the given children data to the given node.
         *
         * @instance
         * @memberof LuCI.dom
         * @param {*} node
         * The `Node` argument to append the children to.
         *
         * @param {*} [children]
         * The children to append to the given node.
         *
         * When `children` is an array, then each item of the array
         * will be either appended as a child element or text node,
         * depending on whether the item is a DOM `Node` instance or
         * some other non-`null` value. Non-`Node`, non-`null` values
         * will be converted to strings first before being passed as
         * argument to `createTextNode()`.
         *
         * When `children` is a function, it will be invoked with
         * the passed `node` argument as the sole parameter and the `append`
         * function will be invoked again, with the given `node` argument
         * as first and the return value of the `children` function as
         *  the second parameter.
         *
         * When `children` is a DOM `Node` instance, it will be
         * appended to the given `node`.
         *
         * When `children` is any other non-`null` value, it will be
         * converted to a string and appended to the `innerHTML` property
         * of the given `node`.
         *
         * @returns {Node|null}
         * Returns the last children `Node` appended to the node or `null`
         * if either the `node` argument was no valid DOM `node` or if the
         * `children` was `null` or didn't result in further DOM nodes.
         */
        append(node: any, children?: any): Node | null;
        /**
         * Replaces the content of the given node with the given children.
         *
         * This function first removes any children of the given DOM
         * `Node` and then adds the given children following the
         * rules outlined below.
         *
         * @instance
         * @memberof LuCI.dom
         * @param {*} node
         * The `Node` argument to replace the children of.
         *
         * @param {*} [children]
         * The children to replace into the given node.
         *
         * When `children` is an array, then each item of the array
         * will be either appended as a child element or text node,
         * depending on whether the item is a DOM `Node` instance or
         * some other non-`null` value. Non-`Node`, non-`null` values
         * will be converted to strings first before being passed as
         * argument to `createTextNode()`.
         *
         * When `children` is a function, it will be invoked with
         * the passed `node` argument as the sole parameter and the `append`
         * function will be invoked again, with the given `node` argument
         * as first and the return value of the `children` function as
         * the second parameter.
         *
         * When `children` is a DOM `Node` instance, it will be
         * appended to the given `node`.
         *
         * When `children` is any other non-`null` value, it will be
         * converted to a string and appended to the `innerHTML` property
         * of the given `node`.
         *
         * @returns {Node|null}
         * Returns the last children `Node` appended to the node or `null`
         * if either the `node` argument was no valid DOM `node` or if the
         * `children` was `null` or didn't result in further DOM nodes.
         */
        content(node: any, children?: any): Node | null;
        /**
         * Sets attributes or registers event listeners on element nodes.
         *
         * @instance
         * @memberof LuCI.dom
         * @param {*} node
         * The `Node` argument to set the attributes or add the event
         * listeners for. When the given `node` value is not a valid
         * DOM `Node`, the function returns and does nothing.
         *
         * @param {string|Object<string, *>} key
         * Specifies either the attribute or event handler name to use,
         * or an object containing multiple key, value pairs which are
         * each added to the node as either attribute or event handler,
         * depending on the respective value.
         *
         * @param {*} [val]
         * Specifies the attribute value or event handler function to add.
         * If the `key` parameter is an `Object`, this parameter will be
         * ignored.
         *
         * When `val` is of type function, it will be registered as an event
         * handler on the given `node` with the `key` parameter being the
         * event name.
         *
         * When `val` is of type object, it will be serialized as JSON and
         * added as an attribute to the given `node`, using the given `key`
         * as an attribute name.
         *
         * When `val` is of any other type, it will be added as an attribute
         * to the given `node` as-is, with the underlying `setAttribute()`
         * call implicitly turning it into a string.
         * @returns {null}
         */
        attr(node: any, key: string | {
            [x: string]: any;
        }, val?: any): null;
        /**
         * Creates a new DOM `Node` from the given `html`, `attr` and
         * `data` parameters.
         *
         * This function has multiple signatures, it can be either invoked
         * in the form `create(html[, attr[, data]])` or in the form
         * `create(html[, data])`. The used variant is determined from the
         * type of the second argument.
         *
         * @instance
         * @memberof LuCI.dom
         * @param {string} html
         * Describes the node to create.
         *
         * When the value of `html` is of type array, a `DocumentFragment`
         * node is created and each item of the array is first converted
         * to a DOM `Node` by passing it through `create()` and then added
         * as a child to the fragment.
         *
         * When the value of `html` is a DOM `Node` instance, no new
         * element will be created, but the node will be used as-is.
         *
         * When the value of `html` is a string starting with `<`, it will
         * be passed to `dom.parse()` and the resulting value is used.
         *
         * When the value of `html` is any other string, it will be passed
         * to `document.createElement()` for creating a new DOM `Node` of
         * the given name.
         *
         * @param {Object<string, *>} [attr]
         * Specifies an Object of key, value pairs to set as attributes
         * or event handlers on the created node. Refer to
         * {@link LuCI.dom#attr dom.attr()} for details.
         *
         * @param {*} [data]
         * Specifies children to append to the newly created element.
         * Refer to {@link LuCI.dom#append dom.append()} for details.
         *
         * @throws {InvalidCharacterError}
         * Throws an `InvalidCharacterError` when the given `html`
         * argument contained malformed markup (such as not escaped
         * `&` characters in XHTML mode) or when the given node name
         * in `html` contains characters which are not legal in DOM
         * element names, such as spaces.
         *
         * @returns {Node}
         * Returns the newly created `Node`.
         */
        create(...args: any[]): Node;
        registry: {};
        /**
         * Attaches or detaches arbitrary data to and from a DOM `Node`.
         *
         * This function is useful to attach non-string values or runtime
         * data that is not serializable to DOM nodes. To decouple data
         * from the DOM, values are not added directly to nodes, but
         * inserted into a registry instead which is then referenced by a
         * string key stored as `data-idref` attribute in the node.
         *
         * This function has multiple signatures and is sensitive to the
         * number of arguments passed to it.
         *
         *  - `dom.data(node)` -
         *	 Fetches all data associated with the given node.
         *  - `dom.data(node, key)` -
         *	 Fetches a specific key associated with the given node.
         *  - `dom.data(node, key, val)` -
         *	 Sets a specific key to the given value associated with the
         *	 given node.
         *  - `dom.data(node, null)` -
         *	 Clears any data associated with the node.
         *  - `dom.data(node, key, null)` -
         *	 Clears the given key associated with the node.
         *
         * @instance
         * @memberof LuCI.dom
         * @param {Node} node
         * The DOM `Node` instance to set or retrieve the data for.
         *
         * @param {string|null} [key]
         * This is either a string specifying the key to retrieve, or
         * `null` to unset the entire node data.
         *
         * @param {*|null} [val]
         * This is either a non-`null` value to set for a given key or
         * `null` to remove the given `key` from the specified node.
         *
         * @returns {*}
         * Returns the get or set value, or `null` when no value could
         * be found.
         */
        data(node: Node, key?: string | null, val?: any | null, ...args: any[]): any;
        /**
         * Binds the given class instance to the specified DOM `Node`.
         *
         * This function uses the `dom.data()` facility to attach the
         * passed instance of a Class to a node. This is needed for
         * complex widget elements or similar where the corresponding
         * class instance responsible for the element must be retrieved
         * from DOM nodes obtained by `querySelector()` or similar means.
         *
         * @instance
         * @memberof LuCI.dom
         * @param {Node} node
         * The DOM `Node` instance to bind the class to.
         *
         * @param {Class} inst
         * The Class instance to bind to the node.
         *
         * @throws {TypeError}
         * Throws a `TypeError` when the given instance argument isn't
         * a valid Class instance.
         *
         * @returns {Class}
         * Returns the bound class instance.
         */
        bindClassInstance(node: Node, inst: import("./classtypes").LuCIClass<import("./classtypes").BaseInstance>): import("./classtypes").LuCIClass<import("./classtypes").BaseInstance>;
        /**
         * Finds a bound class instance on the given node itself or the
         * first bound instance on its closest parent node.
         *
         * @instance
         * @memberof LuCI.dom
         * @param {Node} node
         * The DOM `Node` instance to start from.
         *
         * @returns {Class|null}
         * Returns the founds class instance if any or `null` if no bound
         * class could be found on the node itself or any of its parents.
         */
        findClassInstance(node: Node): import("./classtypes").LuCIClass<import("./classtypes").BaseInstance> | null;
        /**
         * Finds a bound class instance on the given node itself or the
         * first bound instance on its closest parent node and invokes
         * the specified method name on the found class instance.
         *
         * @instance
         * @memberof LuCI.dom
         * @param {Node} node
         * The DOM `Node` instance to start from.
         *
         * @param {string} method
         * The name of the method to invoke on the found class instance.
         *
         * @param {...*} args
         * Additional arguments to pass to the invoked method as-is.
         *
         * @returns {*|null}
         * Returns the return value of the invoked method if a class
         * instance and method has been found. Returns `null` if either
         * no bound class instance could be found, or if the found
         * instance didn't have the requested `method`.
         */
        callClassMethod(node: Node, method: string, ...args: any[]): any | null;
        /**
         * Tests whether a given DOM `Node` instance is empty or appears
         * empty.
         *
         * Any element child nodes which have the CSS class `hidden` set
         * or for which the optionally passed `ignoreFn` callback function
         * returns `false` are ignored.
         *
         * @instance
         * @memberof LuCI.dom
         * @param {Node} node
         * The DOM `Node` instance to test.
         *
         * @param {LuCI.dom.ignoreCallbackFn} [ignoreFn]
         * Specifies an optional function which is invoked for each child
         * node to decide whether the child node should be ignored or not.
         *
         * @returns {boolean}
         * Returns `true` if the node does not have any children or if
         * any children node either has a `hidden` CSS class or a `false`
         * result when testing it using the given `ignoreFn`.
         */
        isEmpty(node: Node, ignoreFn?: LuCI.dom.ignoreCallbackFn): boolean;
    }>;
    /**
     * Legacy `L.view` class alias. New view code should use `'require view';`
     * to request the `LuCI.view` class.
     *
     * @instance
     * @memberof LuCI
     * @deprecated
     */
    view: import("./classtypes").LuCIClass<import("./classtypes").Merge<import("./classtypes").BaseInstance, {
        __name__: string;
        __init__(): Promise<any>;
        /**
         * The load function is invoked before the view is rendered.
         *
         * The invocation of this function is wrapped by
         * `Promise.resolve()` so it may return Promises if needed.
         *
         * The return value of the function (or the resolved values
         * of the promise returned by it) will be passed as the first
         * argument to `render()`.
         *
         * This function is supposed to be overwritten by subclasses,
         * the default implementation does nothing.
         *
         * @instance
         * @abstract
         * @memberof LuCI.view
         *
         * @returns {*|Promise<*>}
         * May return any value or a Promise resolving to any value.
         */
        load(): any | Promise<any>;
        /**
         * The render function is invoked after the
         * {@link LuCI.view#load load()} function and responsible
         * for setting up the view contents. It must return a DOM
         * `Node` or `DocumentFragment` holding the contents to
         * insert into the view area.
         *
         * The invocation of this function is wrapped by
         * `Promise.resolve()` so it may return Promises if needed.
         *
         * The return value of the function (or the resolved values
         * of the promise returned by it) will be inserted into the
         * main content area using
         * {@link LuCI.dom#append dom.append()}.
         *
         * This function is supposed to be overwritten by subclasses,
         * the default implementation does nothing.
         *
         * @instance
         * @abstract
         * @memberof LuCI.view
         * @param {*|null} load_results
         * This function will receive the return value of the
         * {@link LuCI.view#load view.load()} function as first
         * argument.
         *
         * @returns {Node|Promise<Node>}
         * Should return a DOM `Node` value or a `Promise` resolving
         * to a `Node` value.
         */
        render(): Node | Promise<Node>;
        /**
         * The handleSave function is invoked when the user clicks
         * the `Save` button in the page action footer.
         *
         * The default implementation should be sufficient for most
         * views using {@link form#Map form.Map()} based forms - it
         * will iterate all forms present in the view and invoke
         * the {@link form#Map#save Map.save()} method on each form.
         *
         * Views not using `Map` instances or requiring other special
         * logic should overwrite `handleSave()` with a custom
         * implementation.
         *
         * To disable the `Save` page footer button, views extending
         * this base class should overwrite the `handleSave` function
         * with `null`.
         *
         * The invocation of this function is wrapped by
         * `Promise.resolve()` so it may return Promises if needed.
         *
         * @instance
         * @memberof LuCI.view
         * @param {Event} ev
         * The DOM event that triggered the function.
         *
         * @returns {*|Promise<*>}
         * Any return values of this function are discarded, but
         * passed through `Promise.resolve()` to ensure that any
         * returned promise runs to completion before the button
         * is re-enabled.
         */
        handleSave(ev: Event): any | Promise<any>;
        /**
         * The handleSaveApply function is invoked when the user clicks
         * the `Save & Apply` button in the page action footer.
         *
         * The default implementation should be sufficient for most
         * views using {@link form#Map form.Map()} based forms - it
         * will first invoke
         * {@link LuCI.view.handleSave view.handleSave()} and then
         * call {@link ui#changes#apply ui.changes.apply()} to start the
         * modal config apply and page reload flow.
         *
         * Views not using `Map` instances or requiring other special
         * logic should overwrite `handleSaveApply()` with a custom
         * implementation.
         *
         * To disable the `Save & Apply` page footer button, views
         * extending this base class should overwrite the
         * `handleSaveApply` function with `null`.
         *
         * The invocation of this function is wrapped by
         * `Promise.resolve()` so it may return Promises if needed.
         *
         * @instance
         * @memberof LuCI.view
         * @param {Event} ev
         * The DOM event that triggered the function.
         * @param {number} mode
         * Whether to apply the changes checked.
         *
         * @returns {*|Promise<*>}
         * Any return values of this function are discarded, but
         * passed through `Promise.resolve()` to ensure that any
         * returned promise runs to completion before the button
         * is re-enabled.
         */
        handleSaveApply(ev: Event, mode: number): any | Promise<any>;
        /**
         * The handleReset function is invoked when the user clicks
         * the `Reset` button in the page action footer.
         *
         * The default implementation should be sufficient for most
         * views using {@link form#Map form.Map()} based forms - it
         * will iterate all forms present in the view and invoke
         * the {@link form#Map#save Map.reset()} method on each form.
         *
         * Views not using `Map` instances or requiring other special
         * logic should overwrite `handleReset()` with a custom
         * implementation.
         *
         * To disable the `Reset` page footer button, views extending
         * this base class should overwrite the `handleReset` function
         * with `null`.
         *
         * The invocation of this function is wrapped by
         * `Promise.resolve()` so it may return Promises if needed.
         *
         * @instance
         * @memberof LuCI.view
         * @param {Event} ev
         * The DOM event that triggered the function.
         *
         * @returns {*|Promise<*>}
         * Any return values of this function are discarded, but
         * passed through `Promise.resolve()` to ensure that any
         * returned promise runs to completion before the button
         * is re-enabled.
         */
        handleReset(ev: Event): any | Promise<any>;
        /**
         * Renders a standard page action footer if any of the
         * `handleSave()`, `handleSaveApply()` or `handleReset()`
         * functions are defined.
         *
         * The default implementation should be sufficient for most
         * views - it will render a standard page footer with action
         * buttons labeled `Save`, `Save & Apply` and `Reset`
         * triggering the `handleSave()`, `handleSaveApply()` and
         * `handleReset()` functions respectively.
         *
         * When any of these `handle*()` functions is overwritten
         * with `null` by a view extending this class, the
         * corresponding button will not be rendered.
         *
         * @instance
         * @memberof LuCI.view
         * @returns {DocumentFragment}
         * Returns a `DocumentFragment` containing the footer bar
         * with buttons for each corresponding `handle*()` action
         * or an empty `DocumentFragment` if all three `handle*()`
         * methods are overwritten with `null`.
         */
        addFooter(): DocumentFragment;
    }>>;
    /**
     * Legacy `L.Poll` class alias. New view code should use `'require poll';`
     * to request the `LuCI.poll` class.
     *
     * @instance
     * @memberof LuCI
     * @deprecated
     */
    Poll: import("./classtypes").Merge<import("./classtypes").BaseInstance, {
        __name__: string;
        queue: any[];
        /**
         * Add a new operation to the polling loop. If the polling loop is not
         * already started at this point, it will be implicitly started.
         *
         * @instance
         * @memberof LuCI.poll
         * @param {function()} fn
         * The function to invoke on each poll interval.
         *
         * @param {number} interval
         * The poll interval in seconds.
         *
         * @throws {TypeError}
         * Throws `TypeError` when an invalid interval was passed.
         *
         * @returns {boolean}
         * Returns `true` if the function has been added or `false` if it
         * already is registered.
         */
        add(fn: () => any, interval: number): boolean;
        /**
         * Remove an operation from the polling loop. If no further operations
         * are registered, the polling loop is implicitly stopped.
         *
         * @instance
         * @memberof LuCI.poll
         * @param {function()} fn
         * The function to remove.
         *
         * @throws {TypeError}
         * Throws `TypeError` when the given argument isn't a function.
         *
         * @returns {boolean}
         * Returns `true` if the function has been removed or `false` if it
         * wasn't found.
         */
        remove(fn: () => any): boolean;
        /**
         * (Re)start the polling loop. Dispatches a custom `poll-start` event
         * to the `document` object upon successful start.
         *
         * @instance
         * @memberof LuCI.poll
         * @returns {boolean}
         * Returns `true` if polling has been started (or if no functions
         * where registered) or `false` when the polling loop already runs.
         */
        start(): boolean;
        /**
         * Stop the polling loop. Dispatches a custom `poll-stop` event
         * to the `document` object upon successful stop.
         *
         * @instance
         * @memberof LuCI.poll
         * @returns {boolean}
         * Returns `true` if polling has been stopped or `false` if it didn't
         * run to begin with.
         */
        stop(): boolean;
        step(): void;
        /**
         * Test whether the polling loop is running.
         *
         * @instance
         * @memberof LuCI.poll
         * @returns {boolean} - Returns `true` if polling is active, else `false`.
         */
        active(): boolean;
    }>;
    /**
     * Legacy `L.Request` class alias. New view code should use `'require request';`
     * to request the `LuCI.request` class.
     *
     * @instance
     * @memberof LuCI
     * @deprecated
     */
    Request: import("./classtypes").Merge<import("./classtypes").BaseInstance, {
        __name__: string;
        interceptors: any[];
        /**
         * Turn the given relative URL into an absolute URL if necessary.
         *
         * @instance
         * @memberof LuCI.request
         * @param {string} url
         * The URL to convert.
         *
         * @returns {string}
         * The absolute URL derived from the given one, or the original URL
         * if it already was absolute.
         */
        expandURL(url: string): string;
        /**
         * Initiate an HTTP request to the given target.
         *
         * @instance
         * @memberof LuCI.request
         * @param {string} target
         * The URL to request.
         *
         * @param {LuCI.request.RequestOptions} [options]
         * Additional options to configure the request.
         *
         * @returns {Promise<LuCI.response>}
         * The resulting HTTP response.
         */
        request(target: string, options?: LuCI.request.RequestOptions): Promise<LuCI.response>;
        /**
         * Handle XHR readyState changes for an in-flight request and resolve or
         * reject the originating promise.
         *
         * @instance
         * @memberof LuCI.request
         * @param {function(LuCI.response)} resolveFn
         * Callback invoked on success with the constructed {@link LuCI.response}.
         *
         * @param {function(Error)} rejectFn
         * Callback invoked on failure or abort with an `Error` instance.
         *
         * @param {Event} [ev]
         * The XHR `readystatechange` event (optional).
         *
         * @returns {void}
         * No return value; the function resolves or rejects the supplied callbacks.
         */
        handleReadyStateChange(resolveFn: (arg0: LuCI.response) => any, rejectFn: (arg0: Error) => any, ev?: Event): void;
        /**
         * Initiate an HTTP GET request to the given target.
         *
         * @instance
         * @memberof LuCI.request
         * @param {string} url
         * The URL to request.
         *
         * @param {LuCI.request.RequestOptions} [options]
         * Additional options to configure the request.
         *
         * @returns {Promise<LuCI.response>}
         * The resulting HTTP response.
         */
        get(url: string, options?: LuCI.request.RequestOptions): Promise<LuCI.response>;
        /**
         * Initiate an HTTP POST request to the given target.
         *
         * @instance
         * @memberof LuCI.request
         * @param {string} url
         * The URL to request.
         *
         * @param {*} [data]
         * The request data to send, see {@link LuCI.request.RequestOptions} for details.
         *
         * @param {LuCI.request.RequestOptions} [options]
         * Additional options to configure the request.
         *
         * @returns {Promise<LuCI.response>}
         * The resulting HTTP response.
         */
        post(url: string, data?: any, options?: LuCI.request.RequestOptions): Promise<LuCI.response>;
        /**
         * Register an HTTP response interceptor function. Interceptor
         * functions are useful to perform default actions on incoming HTTP
         * responses, such as checking for expired authentication or for
         * implementing request retries before returning a failure.
         *
         * @instance
         * @memberof LuCI.request
         * @param {LuCI.request.interceptorFn} interceptorFn
         * The interceptor function to register.
         *
         * @returns {LuCI.request.interceptorFn}
         * The registered function.
         */
        addInterceptor(interceptorFn: LuCI.request.interceptorFn): LuCI.request.interceptorFn;
        /**
         * Remove an HTTP response interceptor function. The passed function
         * value must be the very same value that was used to register the
         * function.
         *
         * @instance
         * @memberof LuCI.request
         * @param {LuCI.request.interceptorFn} interceptorFn
         * The interceptor function to remove.
         *
         * @returns {boolean}
         * Returns `true` if any function has been removed, else `false`.
         */
        removeInterceptor(interceptorFn: LuCI.request.interceptorFn): boolean;
        /**
         * @class
         * @memberof LuCI.request
         * @hideconstructor
         * @classdesc
         *
         * The `Request.poll` class provides some convenience wrappers around
         * {@link LuCI.poll} mainly to simplify registering repeating HTTP
         * request calls as polling functions.
         */
        poll: {
            /**
             * Register a repeating HTTP request with an optional callback
             * to invoke whenever a response for the request is received.
             *
             * @instance
             * @memberof LuCI.request.poll
             * @param {number} interval
             * The poll interval in seconds.
             *
             * @param {string} url
             * The URL to request on each poll.
             *
             * @param {LuCI.request.RequestOptions} [options]
             * Additional options to configure the request.
             *
             * @param {LuCI.request.poll.callbackFn} [callback]
             * {@link LuCI.request.poll.callbackFn Callback} function to
             * invoke for each HTTP reply.
             *
             * @throws {TypeError}
             * Throws `TypeError` when an invalid interval was passed.
             *
             * @returns {function()}
             * Returns the internally created poll function.
             */
            add(interval: number, url: string, options?: LuCI.request.RequestOptions, callback?: LuCI.request.poll.callbackFn): () => any;
            /**
             * Remove a polling request that has been previously added using `add()`.
             * This function is essentially a wrapper around
             * {@link LuCI.poll.remove LuCI.poll.remove()}.
             *
             * @instance
             * @memberof LuCI.request.poll
             * @param {function()} entry
             * The poll function returned by {@link LuCI.request.poll#add add()}.
             *
             * @returns {boolean}
             * Returns `true` if any function has been removed, else `false`.
             */
            remove(entry: () => any): boolean;
            /**
             * Alias for {@link LuCI.poll.start LuCI.poll.start()}.
             *
             * @instance
             * @memberof LuCI.request.poll
             * @returns {boolean}
             */
            start(): boolean;
            /**
             * Alias for {@link LuCI.poll.stop LuCI.poll.stop()}.
             *
             * @instance
             * @memberof LuCI.request.poll
             * @returns {boolean}
             */
            stop(): boolean;
            /**
             * Alias for {@link LuCI.poll.active LuCI.poll.active()}.
             *
             * @instance
             * @memberof LuCI.request.poll
             * @returns {boolean}
             */
            active(): boolean;
        };
    }>;
    /**
     * Legacy `L.Class` class alias. New view code should use `'require baseclass';`
     * to request the `LuCI.baseclass` class.
     *
     * @instance
     * @memberof LuCI
     * @deprecated
     */
    Class: import("./classtypes").LuCIClass<import("./classtypes").BaseInstance>;
}>>;
/**
 * @class xhr
 * @memberof LuCI
 * @deprecated
 * @classdesc
 *
 * The `LuCI.xhr` class is a legacy compatibility shim for the
 * functionality formerly provided by `xhr.js`. It is registered as a global
 * `window.XHR` symbol for compatibility with legacy code.
 *
 * New code should use {@link LuCI.request} instead to implement HTTP
 * request handling.
 */
export const XHR: import("./classtypes").LuCIClass<import("./classtypes").Merge<import("./classtypes").BaseInstance, {
    __name__: string;
    __init__(): void;
    _response(cb: any, res: any, json: any, duration: any): void;
    /**
     * This function is a legacy wrapper around
     * {@link LuCI#get LuCI.get()}.
     *
     * @instance
     * @deprecated
     * @memberof LuCI.xhr
     *
     * @param {string} url
     * The URL to request
     *
     * @param {Object} [data]
     * Additional query string data
     *
     * @param {LuCI.requestCallbackFn} [callback]
     * Callback function to invoke on completion
     *
     * @param {number} [timeout]
     * Request timeout to use
     *
     * @returns {Promise<null>}
     */
    get(url: string, data?: any, callback?: LuCI.requestCallbackFn, timeout?: number): Promise<null>;
    /**
     * This function is a legacy wrapper around
     * {@link LuCI#post LuCI.post()}.
     *
     * @instance
     * @deprecated
     * @memberof LuCI.xhr
     *
     * @param {string} url
     * The URL to request
     *
     * @param {Object} [data]
     * Additional data to append to the request body.
     *
     * @param {LuCI.requestCallbackFn} [callback]
     * Callback function to invoke on completion
     *
     * @param {number} [timeout]
     * Request timeout to use
     *
     * @returns {Promise<null>}
     */
    post(url: string, data?: any, callback?: LuCI.requestCallbackFn, timeout?: number): Promise<null>;
    /**
     * Cancels a running request.
     *
     * This function does not actually cancel the underlying
     * `XMLHTTPRequest` request but it sets a flag which prevents the
     * invocation of the callback function when the request eventually
     * finishes or timed out.
     *
     * @instance
     * @deprecated
     * @memberof LuCI.xhr
     */
    cancel(): void;
    /**
     * Checks the running state of the request.
     *
     * @instance
     * @deprecated
     * @memberof LuCI.xhr
     *
     * @returns {boolean}
     * Returns `true` if the request is still running or `false` if it
     * already completed.
     */
    busy(): boolean;
    /**
     * Ignored for backwards compatibility.
     *
     * This function does nothing.
     *
     * @instance
     * @deprecated
     * @memberof LuCI.xhr
     */
    abort(): void;
    /**
     * Existing for backwards compatibility.
     *
     * This function simply throws an `InternalError` when invoked.
     *
     * @instance
     * @deprecated
     * @memberof LuCI.xhr
     *
     * @throws {InternalError}
     * Throws an `InternalError` with the message `Not implemented`
     * when invoked.
     */
    send_form(): void;
}>>;
export { Class as baseclass, DOM as dom, Poll as poll, Request as request, View as view, __LuCI as LuCI };
