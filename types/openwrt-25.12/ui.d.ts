declare const _default: import("./classtypes.js").Merge<import("./classtypes.js").BaseInstance, {
    __init__(): void;
    /**
     * Display a modal overlay dialog with the specified contents.
     *
     * The modal overlay dialog covers the current view preventing interaction
     * with the underlying view contents. Only one modal dialog instance can
     * be opened. Invoking showModal() while a modal dialog is already open will
     * replace the open dialog with a new one having the specified contents.
     *
     * Additional CSS class names may be passed to influence the appearance of
     * the dialog. Valid values for the classes depend on the underlying theme.
     *
     * @see LuCI.dom.content
     *
     * @param {string} [title]
     * The title of the dialog. If `null`, no title element will be rendered.
     *
     * @param {*} children
     * The contents to add to the modal dialog. This should be a DOM node or
     * a document fragment in most cases. The value is passed as-is to the
     * `dom.content()` function - refer to its documentation for applicable
     * values.
     *
     * @param {...string} [classes]
     * A number of extra CSS class names which are set on the modal dialog
     * element.
     *
     * @returns {Node}
     * Returns a DOM Node representing the modal dialog element.
     */
    showModal(title?: string, children: any, ...classes?: string[]): Node;
    /**
     * Close the open modal overlay dialog.
     *
     * This function will close an open modal dialog and restore the normal view
     * behaviour. It has no effect if no modal dialog is currently open.
     *
     * Note that this function is stand-alone, it does not rely on `this` and
     * will not invoke other class functions so it is suitable to be used as event
     * handler as-is without the need to bind it first.
     */
    hideModal(): void;
    /**
     * @private
     * @param {Event} ev
     */
    cancelModal(ev: Event): void;
    /**
     * @private
     * @param {Event} ev
     */
    showTooltip(ev: Event): void;
    /**
     * @private
     * @param {Event} ev
     */
    hideTooltip(ev: Event): void;
    /**
     * Add a notification banner at the top of the current view.
     *
     * A notification banner is an alert message usually displayed at the
     * top of the current view, spanning the entire available width.
     * Notification banners will stay in place until dismissed by the user.
     * Multiple banners may be shown at the same time.
     *
     * Additional CSS class names may be passed to influence the appearance of
     * the banner. Valid values for the classes depend on the underlying theme.
     *
     * @see LuCI.dom.content
     *
     * @param {?string} [title]
     * The title of the notification banner. If `null`, no title element
     * will be rendered.
     *
     * @param {*} children
     * The contents to add to the notification banner. This should be a DOM
     * node or a document fragment in most cases. The value is passed as-is
     * to the `dom.content()` function - refer to its documentation for
     * applicable values.
     *
     * @param {...string} [classes]
     * A number of extra CSS class names which are set on the notification
     * banner element.
     *
     * @returns {Node}
     * Returns a DOM Node representing the notification banner element.
     */
    addNotification(title?: string | null, children: any, ...classes?: string[]): Node;
    /**
     * Add a time-limited notification banner at the top of the current view.
     *
     * A notification banner is an alert message usually displayed at the
     * top of the current view, spanning the entire available width.
     * Notification banners will stay in place until dismissed by the user, or
     * it has expired.
     * Multiple banners may be shown at the same time.
     *
     * Additional CSS class names may be passed to influence the appearance of
     * the banner. Valid values for the classes depend on the underlying theme.
     *
     * @see LuCI.dom.content
     *
     * @param {string} [title]
     * The title of the notification banner. If `null`, no title element
     * will be rendered.
     *
     * @param {*} children
     * The contents to add to the notification banner. This should be a DOM
     * node or a document fragment in most cases. The value is passed as-is
     * to the `dom.content()` function - refer to its documentation for
     * applicable values.
     *
     * @param {number} [timeout]
     * A millisecond value after which the notification will disappear
     * automatically. If omitted, the notification will remain until it receives
     * the click event.
     *
     * @param {...string} [classes]
     * A number of extra CSS class names which are set on the notification
     * banner element.
     *
     * @returns {Node}
     * Returns a DOM Node representing the notification banner element.
     */
    addTimeLimitedNotification(title?: string, children: any, timeout?: number, ...classes?: string[]): Node;
    /**
     * Display or update a header area indicator.
     *
     * An indicator is a small label displayed in the header area of the screen
     * providing few amounts of status information such as item counts or state
     * toggle indicators.
     *
     * Multiple indicators may be shown at the same time and indicator labels
     * may be made clickable to display extended information or to initiate
     * further actions.
     *
     * Indicators can either use a default `active` or a less accented `inactive`
     * style which is useful for indicators representing state toggles.
     *
     * @param {string} id
     * The ID of the indicator. If an indicator with the given ID already exists,
     * it is updated with the given label and style.
     *
     * @param {string} label
     * The text to display in the indicator label.
     *
     * @param {function()} [handler]
     * A handler function to invoke when the indicator label is clicked/touched
     * by the user. If omitted, the indicator is not clickable/touchable.
     *
     * Note that this parameter only applies to new indicators, when updating
     * existing labels it is ignored.
     *
     * @param {"active"|"inactive"} [style=active]
     * The indicator style to use. May be either `active` or `inactive`.
     *
     * @returns {boolean}
     * Returns `true` when the indicator has been updated or `false` when no
     * changes were made.
     */
    showIndicator(id: string, label: string, handler?: () => any, style?: "active" | "inactive"): boolean;
    /**
     * Remove a header area indicator.
     *
     * This function removes the given indicator label from the header indicator
     * area. When the given indicator is not found, this function does nothing.
     *
     * @param {string} id
     * The ID of the indicator to remove.
     *
     * @returns {boolean}
     * Returns `true` when the indicator has been removed or `false` when the
     * requested indicator was not found.
     */
    hideIndicator(id: string): boolean;
    /**
     * Formats a series of label/value pairs into list-like markup.
     *
     * This function transforms a flat array of alternating label and value
     * elements into a list-like markup, using the values in `separators` as
     * separators and appends the resulting nodes to the given parent DOM node.
     *
     * Each label is suffixed with `: ` and wrapped into a `<strong>` tag, the
     * `<strong>` element and the value corresponding to the label are
     * subsequently wrapped into a `<span class="nowrap">` element.
     *
     * The resulting `<span>` element tuples are joined by the given separators
     * to form the final markup which is appended to the given parent DOM node.
     *
     * @param {Node} node
     * The parent DOM node to append the markup to. Any previous child elements
     * will be removed.
     *
     * @param {Array<*>} items
     * An alternating array of labels and values. The label values will be
     * converted to plain strings, the values are used as-is and may be of
     * any type accepted by `LuCI.dom.content()`.
     *
     * @param {*|Array<*>} [separators=[E('br')]]
     * A single value or an array of separator values to separate each
     * label/value pair with. The function will cycle through the separators
     * when joining the pairs. If omitted, the default separator is a sole HTML
     * `<br>` element. Separator values are used as-is and may be of any type
     * accepted by `LuCI.dom.content()`.
     *
     * @returns {Node}
     * Returns the parent DOM node the formatted markup has been added to.
     */
    itemlist(node: Node, items: Array<any>, separators?: any | Array<any>): Node;
    /**
     * @class
     * @memberof LuCI.ui
     * @hideconstructor
     * @classdesc
     *
     * The `tabs` class handles tab menu groups used throughout the view area.
     * It takes care of setting up tab groups, tracking their state and handling
     * related events.
     *
     * This class is automatically instantiated as part of `LuCI.ui`. To use it
     * in views, use `'require ui'` and refer to `ui.tabs`. To import it in
     * external JavaScript, use `L.require("ui").then(...)` and access the
     * `tabs` property of the class instance value.
     */
    tabs: import("./classtypes.js").Merge<import("./classtypes.js").BaseInstance, {
        /** @private */
        init(): void;
        /**
         * Initializes a new tab group from the given tab pane collection.
         *
         * This function cycles through the given tab pane DOM nodes, extracts
         * their tab IDs, titles and active states, renders a corresponding
         * tab menu and prepends it to the tab panes common parent DOM node.
         *
         * The tab menu labels will be set to the value of the `data-tab-title`
         * attribute of each corresponding pane. The last pane with the
         * `data-tab-active` attribute set to `true` will be selected by default.
         *
         * If no pane is marked as active, the first one will be preselected.
         *
         * @instance
         * @memberof LuCI.ui.tabs
         * @param {Array<Node>|NodeList} panes
         * A collection of tab panes to build a tab group menu for. May be a
         * plain array of DOM nodes or a NodeList collection, such as the result
         * of a `querySelectorAll()` call or the `.childNodes` property of a
         * DOM node.
         */
        initTabGroup(panes: Array<Node> | NodeList): void;
        /**
         * Checks whether the given tab pane node is empty.
         *
         * @instance
         * @memberof LuCI.ui.tabs
         * @param {Node} pane
         * The tab pane to check.
         *
         * @returns {boolean}
         * Returns `true` if the pane is empty, else `false`.
         */
        isEmptyPane(pane: Node): boolean;
        /**
         * @private
         * @param {object} pane
         * @returns {string}
         */
        getPathForPane(pane: object): string;
        /**
         * @private
         * @returns {object}
         */
        getActiveTabState(): object;
        /**
         * @private
         * @param {object} pane
         * @returns {string|0}
         */
        getActiveTabId(pane: object): string | 0;
        /**
         * @private
         * @param {object} pane
         * @param {number} tabIndex
         * @returns {object}
         */
        setActiveTabId(pane: object, tabIndex: number): object;
        /**
         * @private
         * @param {Event} ev
         * @param {document} root
         */
        updateTabs(ev: Event, root: Document): void;
        /**
         * @private
         * @param {Event} ev
         */
        switchTab(ev: Event): void;
    }>;
    /**
     * Display a modal file upload prompt.
     *
     * This function opens a modal dialog prompting the user to select and
     * upload a file to a predefined remote destination path.
     *
     * @param {string} path
     * The remote file path to upload the local file to.
     *
     * @param {Node} [progressStatusNode]
     * An optional DOM text node whose content text is set to the progress
     * percentage value during file upload.
     *
     * @returns {Promise<LuCI.ui.FileUploadReply>}
     * Returns a promise resolving to a file upload status object on success
     * or rejecting with an error in case the upload failed or has been
     * cancelled by the user.
     */
    uploadFile(path: string, progressStatusNode?: Node): Promise<LuCI.ui.FileUploadReply>;
    /**
     * Perform a device connectivity test.
     *
     * Attempt to fetch a well known resource from the remote device via HTTP
     * in order to test connectivity. This function is mainly useful to wait
     * for the router to come back online after a reboot or reconfiguration.
     *
     * @param {string} [proto=http]
     * The protocol to use for fetching the resource. May be either `http`
     * (the default) or `https`.
     *
     * @param {string} [ipaddr=window.location.host]
     * Override the host address to probe. By default the current host as seen
     * in the address bar is probed.
     *
     * @returns {Promise<Event>}
     * Returns a promise resolving to a `load` event in case the device is
     * reachable or rejecting with an `error` event in case it is not reachable
     * or rejecting with `null` when the connectivity check timed out.
     */
    pingDevice(proto?: string, ipaddr?: string): Promise<Event>;
    /**
     * Wait for device to come back online and reconnect to it.
     *
     * Poll each given hostname or IP address and navigate to it as soon as
     * one of the addresses becomes reachable.
     *
     * @param {...string} [hosts=[window.location.host]]
     * The list of IP addresses and host names to check for reachability.
     * If omitted, the current value of `window.location.host` is used by
     * default.
     */
    awaitReconnect(...hosts?: string[]): void;
    /**
     * @class
     * @memberof LuCI.ui
     * @hideconstructor
     * @classdesc
     *
     * The `changes` class encapsulates logic for visualizing, applying,
     * confirming and reverting staged UCI changesets.
     *
     * This class is automatically instantiated as part of `LuCI.ui`. To use it
     * in views, use `'require ui'` and refer to `ui.changes`. To import it in
     * external JavaScript, use `L.require("ui").then(...)` and access the
     * `changes` property of the class instance value.
     */
    changes: import("./classtypes.js").Merge<import("./classtypes.js").BaseInstance, {
        init(): Promise<any>;
        /**
         * Set the change count indicator.
         *
         * This function updates or hides the UCI change count indicator,
         * depending on the passed change count. When the count is greater
         * than 0, the change indicator is displayed or updated, otherwise it
         * is removed.
         *
         * @instance
         * @memberof LuCI.ui.changes
         * @param {number} n
         * The number of changes to indicate.
         */
        setIndicator(n: number): void;
        /**
         * Update the change count indicator.
         *
         * This function updates the UCI change count indicator from the given
         * UCI changeset structure.
         *
         * @instance
         * @memberof LuCI.ui.changes
         * @param {Object<string, Array<LuCI.uci.ChangeRecord>>} changes
         * The UCI changeset to count.
         */
        renderChangeIndicator(changes: {
            [x: string]: import("./uci.js").ChangeRecord[];
        }): void;
        /** @private */
        changeTemplates: {
            'add-3': string;
            'set-3': string;
            'set-4': string;
            'remove-2': string;
            'remove-3': string;
            'order-3': string;
            'list-add-4': string;
            'list-del-4': string;
            'rename-3': string;
            'rename-4': string;
        };
        /**
         * Display the current changelog.
         *
         * Open a modal dialog visualizing the currently staged UCI changes
         * and offer options to revert or apply the shown changes.
         *
         * @instance
         * @memberof LuCI.ui.changes
         */
        displayChanges(): void;
        /**
         * @private
         * @param {string} type
         * @param {string} content
         */
        displayStatus(type: string, content: string): void;
        /**
         * @private
         * @returns {Promise}
         */
        checkConnectivityAffected(): Promise<any>;
        /**
         * @private
         * @param {boolean} checked
         */
        rollback(checked: boolean): void;
        /**
         * @private
         * @param {boolean} checked
         * @param {number} deadline
         * @param {string} override_token
         */
        confirm(checked: boolean, deadline: number, override_token: string): void;
        /**
         * Apply the staged configuration changes.
         *
         * Start applying staged configuration changes and open a modal dialog
         * with a progress indication to prevent interaction with the view
         * during the apply process. The modal dialog will be automatically
         * closed and the current view reloaded once the apply process is
         * complete.
         *
         * @instance
         * @memberof LuCI.ui.changes
         * @param {boolean} [checked=false]
         * Whether to perform a checked (`true`) configuration apply or an
         * unchecked (`false`) one.
         *
         * In case of a checked apply, the configuration changes must be
         * confirmed within a specific time interval, otherwise the device
         * will begin to roll back the changes in order to restore the previous
         * settings.
         */
        apply(checked?: boolean): void;
        /**
         * Revert the staged configuration changes.
         *
         * Start reverting staged configuration changes and open a modal dialog
         * with a progress indication to prevent interaction with the view
         * during the revert process. The modal dialog will be automatically
         * closed and the current view reloaded once the revert process is
         * complete.
         *
         * @instance
         * @memberof LuCI.ui.changes
         */
        revert(): void;
    }>;
    /**
     * Add validation constraints to an input element.
     *
     * Compile the given type expression and optional validator function into
     * a validation function and bind it to the specified input element events.
     *
     * @param {Node} field
     * The DOM input element node to bind the validation constraints to.
     *
     * @param {string} type
     * The datatype specification to describe validation constraints.
     * Refer to the `LuCI.validation` class documentation for details.
     *
     * @param {boolean} [optional=false]
     * Specifies whether empty values are allowed (`true`) or not (`false`).
     * If an input element is not marked optional it must not be empty,
     * otherwise it will be marked as invalid.
     *
     * @param {function()|Array<function()>} [vfunc]
     * Specifies a custom validation function or an array of validation functions
     * which are invoked after the other validation constraints are applied. Each
     * function must return `true` to accept the passed value. When multiple
     * functions are provided as an array, they are executed serially and
     * validation stops at the first function that returns a non-true value.
     * Any non-true return type is converted to a string and treated as validation
     * error message.
     *
     * @param {...string} [events=blur, keyup]
     * The list of events to bind. Each received event will trigger a field
     * validation. If omitted, the `keyup` and `blur` events are bound by
     * default.
     *
     * @returns {function()}
     * Returns the compiled validator function which can be used to trigger
     * field validation manually or to bind it to further events.
     *
     * @see LuCI.validation
     */
    addValidator(field: Node, type: string, optional?: boolean, vfunc?: (() => any) | Array<() => any>, ...events?: string[]): () => any;
    /**
     * Create a pre-bound event handler function.
     *
     * Generate and bind a function suitable for use in event handlers. The
     * generated function automatically disables the event source element
     * and adds an active indication to it by adding appropriate CSS classes.
     *
     * It will also await any promises returned by the wrapped function and
     * re-enable the source element after the promises ran to completion.
     *
     * @param {*} ctx
     * The `this` context to use for the wrapped function.
     *
     * @param {function()|string} fn
     * Specifies the function to wrap. In case of a function value, the
     * function is used as-is. If a string is specified instead, it is looked
     * up in `ctx` to obtain the function to wrap. In both cases the bound
     * function will be invoked with `ctx` as `this` context
     *
     * @param {...*} args
     * Any further parameter as passed as-is to the bound event handler
     * function in the same order as passed to `createHandlerFn()`.
     *
     * @returns {?function()}
     * Returns the pre-bound handler function which is suitable to be passed
     * to `addEventListener()`. Returns `null` if the given `fn` argument is
     * a string which could not be found in `ctx` or if `ctx[fn]` is not a
     * valid function value.
     */
    createHandlerFn(ctx: any, fn: (() => any) | string, ...args: any[]): (() => any) | null;
    /**
     * Load specified view class path and set it up.
     *
     * Transforms the given view path into a class name, requires it
     * using [LuCI.require()]{@link LuCI#require} and asserts that the
     * resulting class instance is a descendant of
     * [LuCI.view]{@link LuCI.view}.
     *
     * By instantiating the view class, its corresponding contents are
     * rendered and included into the view area. Any runtime errors are
     * caught and rendered using [LuCI.error()]{@link LuCI#error}.
     *
     * @param {string} path
     * The view path to render.
     *
     * @returns {Promise<LuCI.view>}
     * Returns a promise resolving to the loaded view instance.
     */
    instantiateView(path: string): Promise<LuCI.view>;
    menu: import("./classtypes.js").Merge<import("./classtypes.js").BaseInstance, {
        /**
         * Load and cache current menu tree.
         *
         * @returns {Promise<LuCI.ui.menu.MenuNode>}
         * Returns a promise resolving to the root element of the menu tree.
         */
        load(): Promise<LuCI.ui.menu.MenuNode>;
        /**
         * Flush the internal menu cache to force loading a new structure on the
         * next page load.
         */
        flushCache(): void;
        /**
         * @param {LuCI.ui.menu.MenuNode} [node]
         * The menu node to retrieve the children for. Defaults to the menu's
         * internal root node if omitted.
         *
         * @returns {LuCI.ui.menu.MenuNode[]}
         * Returns an array of child menu nodes.
         */
        getChildren(node?: LuCI.ui.menu.MenuNode): LuCI.ui.menu.MenuNode[];
    }>;
    Table: import("./classtypes.js").LuCIClass<import("./classtypes.js").Merge<import("./classtypes.js").BaseInstance, {
        /** @type {any} */ id: any;
        /** @type {any} */ node: any;
        /** @type {any} */ options: any;
        __init__(captions: any, options: any, placeholder: any): void;
        update(data: any, placeholderText: any): any;
        render(): any;
        /**
         * @private
         * @param {Node} node
         */
        initFromMarkup(node: Node): void;
        /**
         * @private
         * @param {string} value
         * @param {number} index
         * @returns {string}
         */
        deriveSortKey(value: string, index: number): string;
        /**
         * @private
         * @returns {?string}
         */
        getActiveSortState(): string | null;
        /**
         * @private
         * @param {number} index
         * @param {boolean} descending
         */
        setActiveSortState(index: number, descending: boolean): void;
        /**
         * @private
         * @param {Event} ev
         */
        handleSort(ev: Event): void;
    }>>;
    AbstractElement: import("./classtypes.js").LuCIClass<import("./classtypes.js").Merge<import("./classtypes.js").BaseInstance, {
        /**
         * Read the current value of the input widget.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @returns {string|string[]|null}
         * The current value of the input element. For simple inputs like text
         * fields or selects, the return value type will be a - possibly empty -
         * string. Complex widgets such as `DynamicList` instances may result in
         * an array of strings or `null` for unset values.
         */
        getValue(): string | string[] | null;
        /**
         * Set the current value of the input widget.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @param {string|string[]|null} value
         * The value to set the input element to. For simple inputs like text
         * fields or selects, the value should be a - possibly empty - string.
         * Complex widgets such as `DynamicList` instances may accept string array
         * or `null` values.
         */
        setValue(value: string | string[] | null): void;
        /**
         * Set the current placeholder value of the input widget.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @param {string|string[]|null} value
         * The placeholder to set for the input element. Only applicable to text
         * inputs, not to radio buttons, selects or similar.
         */
        setPlaceholder(value: string | string[] | null): void;
        /**
         * Check whether the input value was altered by the user.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @returns {boolean}
         * Returns `true` if the input value has been altered by the user or
         * `false` if it is unchanged. Note that if the user modifies the initial
         * value and changes it back to the original state, it is still reported
         * as changed.
         */
        isChanged(): boolean;
        /**
         * Check whether the current input value is valid.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @returns {boolean}
         * Returns `true` if the current input value is valid or `false` if it does
         * not meet the validation constraints.
         */
        isValid(): boolean;
        /**
         * Returns the current validation error
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @returns {string}
         * The validation error at this time
         */
        getValidationError(): string;
        /**
         * Force validation of the current input value.
         *
         * Usually input validation is automatically triggered by various DOM events
         * bound to the input widget. In some cases it is required though to manually
         * trigger validation runs, e.g. when programmatically altering values.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @returns {boolean}
         */
        triggerValidation(): boolean;
        /**
         * Dispatch a custom (synthetic) event in response to received events.
         *
         * Sets up event handlers on the given target DOM node for the given event
         * names that dispatch a custom event of the given type to the widget root
         * DOM node.
         *
         * The primary purpose of this function is to set up a series of custom
         * uniform standard events such as `widget-update`, `validation-success`,
         * `validation-failure` etc. which are triggered by various different
         * widget specific native DOM events.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @param {Node} targetNode
         * Specifies the DOM node on which the native event listeners should be
         * registered.
         *
         * @param {string} synevent
         * The name of the custom event to dispatch to the widget root DOM node.
         *
         * @param {string[]} events
         * The native DOM events for which event handlers should be registered.
         */
        registerEvents(targetNode: Node, synevent: string, events: string[]): void;
        /**
         * Set up listeners for native DOM events that may update the widget value.
         *
         * Sets up event handlers on the given target DOM node for the given event
         * names which may cause the input value to update, such as `keyup` or
         * `onclick` events. In contrast to change events, such update events will
         * trigger input value validation.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @param {Node} targetNode
         * Specifies the DOM node on which the event listeners should be registered.
         *
         * @param {...string} events
         * The DOM events for which event handlers should be registered.
         */
        setUpdateEvents(targetNode: Node, ...events: string[]): void;
        /**
         * Set up listeners for native DOM events that may change the widget value.
         *
         * Sets up event handlers on the given target DOM node for the given event
         * names which may cause the input value to change completely, such as
         * `change` events in a select menu. In contrast to update events, such
         * change events will not trigger input value validation but they may cause
         * field dependencies to get re-evaluated and will mark the input widget
         * as dirty.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @param {Node} targetNode
         * Specifies the DOM node on which the event listeners should be registered.
         *
         * @param {...string} events
         * The DOM events for which event handlers should be registered.
         */
        setChangeEvents(targetNode: Node, ...events: string[]): void;
        /**
         * Render the widget, set up event listeners and return resulting markup.
         * @abstract
         * @instance
         * @memberof LuCI.ui.AbstractElement
         *
         * @returns {Node}
         * Returns a DOM Node or DocumentFragment containing the rendered
         * widget markup.
         */
        render(): Node;
    }>>;
    Textfield: import("./classtypes.js").LuCIClass<import("./classtypes.js").Merge<import("./classtypes.js").Merge<import("./classtypes.js").BaseInstance, {
        /**
         * Read the current value of the input widget.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @returns {string|string[]|null}
         * The current value of the input element. For simple inputs like text
         * fields or selects, the return value type will be a - possibly empty -
         * string. Complex widgets such as `DynamicList` instances may result in
         * an array of strings or `null` for unset values.
         */
        getValue(): string | string[] | null;
        /**
         * Set the current value of the input widget.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @param {string|string[]|null} value
         * The value to set the input element to. For simple inputs like text
         * fields or selects, the value should be a - possibly empty - string.
         * Complex widgets such as `DynamicList` instances may accept string array
         * or `null` values.
         */
        setValue(value: string | string[] | null): void;
        /**
         * Set the current placeholder value of the input widget.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @param {string|string[]|null} value
         * The placeholder to set for the input element. Only applicable to text
         * inputs, not to radio buttons, selects or similar.
         */
        setPlaceholder(value: string | string[] | null): void;
        /**
         * Check whether the input value was altered by the user.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @returns {boolean}
         * Returns `true` if the input value has been altered by the user or
         * `false` if it is unchanged. Note that if the user modifies the initial
         * value and changes it back to the original state, it is still reported
         * as changed.
         */
        isChanged(): boolean;
        /**
         * Check whether the current input value is valid.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @returns {boolean}
         * Returns `true` if the current input value is valid or `false` if it does
         * not meet the validation constraints.
         */
        isValid(): boolean;
        /**
         * Returns the current validation error
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @returns {string}
         * The validation error at this time
         */
        getValidationError(): string;
        /**
         * Force validation of the current input value.
         *
         * Usually input validation is automatically triggered by various DOM events
         * bound to the input widget. In some cases it is required though to manually
         * trigger validation runs, e.g. when programmatically altering values.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @returns {boolean}
         */
        triggerValidation(): boolean;
        /**
         * Dispatch a custom (synthetic) event in response to received events.
         *
         * Sets up event handlers on the given target DOM node for the given event
         * names that dispatch a custom event of the given type to the widget root
         * DOM node.
         *
         * The primary purpose of this function is to set up a series of custom
         * uniform standard events such as `widget-update`, `validation-success`,
         * `validation-failure` etc. which are triggered by various different
         * widget specific native DOM events.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @param {Node} targetNode
         * Specifies the DOM node on which the native event listeners should be
         * registered.
         *
         * @param {string} synevent
         * The name of the custom event to dispatch to the widget root DOM node.
         *
         * @param {string[]} events
         * The native DOM events for which event handlers should be registered.
         */
        registerEvents(targetNode: Node, synevent: string, events: string[]): void;
        /**
         * Set up listeners for native DOM events that may update the widget value.
         *
         * Sets up event handlers on the given target DOM node for the given event
         * names which may cause the input value to update, such as `keyup` or
         * `onclick` events. In contrast to change events, such update events will
         * trigger input value validation.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @param {Node} targetNode
         * Specifies the DOM node on which the event listeners should be registered.
         *
         * @param {...string} events
         * The DOM events for which event handlers should be registered.
         */
        setUpdateEvents(targetNode: Node, ...events: string[]): void;
        /**
         * Set up listeners for native DOM events that may change the widget value.
         *
         * Sets up event handlers on the given target DOM node for the given event
         * names which may cause the input value to change completely, such as
         * `change` events in a select menu. In contrast to update events, such
         * change events will not trigger input value validation but they may cause
         * field dependencies to get re-evaluated and will mark the input widget
         * as dirty.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @param {Node} targetNode
         * Specifies the DOM node on which the event listeners should be registered.
         *
         * @param {...string} events
         * The DOM events for which event handlers should be registered.
         */
        setChangeEvents(targetNode: Node, ...events: string[]): void;
        /**
         * Render the widget, set up event listeners and return resulting markup.
         * @abstract
         * @instance
         * @memberof LuCI.ui.AbstractElement
         *
         * @returns {Node}
         * Returns a DOM Node or DocumentFragment containing the rendered
         * widget markup.
         */
        render(): Node;
    }>, {
        /** @type {any} */ value: any;
        /** @type {any} */ options: any;
        __init__(value: any, options: any): void;
        /** @override */
        render(): Node;
        /**
         * @private
         * @param {Node} frameEl
         * @returns {Node}
         */
        bind(frameEl: Node): Node;
        /** @override */
        getValue(): any;
        /** @override */
        setValue(value: any): void;
    }>>;
    Textarea: import("./classtypes.js").LuCIClass<import("./classtypes.js").Merge<import("./classtypes.js").Merge<import("./classtypes.js").BaseInstance, {
        /**
         * Read the current value of the input widget.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @returns {string|string[]|null}
         * The current value of the input element. For simple inputs like text
         * fields or selects, the return value type will be a - possibly empty -
         * string. Complex widgets such as `DynamicList` instances may result in
         * an array of strings or `null` for unset values.
         */
        getValue(): string | string[] | null;
        /**
         * Set the current value of the input widget.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @param {string|string[]|null} value
         * The value to set the input element to. For simple inputs like text
         * fields or selects, the value should be a - possibly empty - string.
         * Complex widgets such as `DynamicList` instances may accept string array
         * or `null` values.
         */
        setValue(value: string | string[] | null): void;
        /**
         * Set the current placeholder value of the input widget.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @param {string|string[]|null} value
         * The placeholder to set for the input element. Only applicable to text
         * inputs, not to radio buttons, selects or similar.
         */
        setPlaceholder(value: string | string[] | null): void;
        /**
         * Check whether the input value was altered by the user.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @returns {boolean}
         * Returns `true` if the input value has been altered by the user or
         * `false` if it is unchanged. Note that if the user modifies the initial
         * value and changes it back to the original state, it is still reported
         * as changed.
         */
        isChanged(): boolean;
        /**
         * Check whether the current input value is valid.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @returns {boolean}
         * Returns `true` if the current input value is valid or `false` if it does
         * not meet the validation constraints.
         */
        isValid(): boolean;
        /**
         * Returns the current validation error
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @returns {string}
         * The validation error at this time
         */
        getValidationError(): string;
        /**
         * Force validation of the current input value.
         *
         * Usually input validation is automatically triggered by various DOM events
         * bound to the input widget. In some cases it is required though to manually
         * trigger validation runs, e.g. when programmatically altering values.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @returns {boolean}
         */
        triggerValidation(): boolean;
        /**
         * Dispatch a custom (synthetic) event in response to received events.
         *
         * Sets up event handlers on the given target DOM node for the given event
         * names that dispatch a custom event of the given type to the widget root
         * DOM node.
         *
         * The primary purpose of this function is to set up a series of custom
         * uniform standard events such as `widget-update`, `validation-success`,
         * `validation-failure` etc. which are triggered by various different
         * widget specific native DOM events.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @param {Node} targetNode
         * Specifies the DOM node on which the native event listeners should be
         * registered.
         *
         * @param {string} synevent
         * The name of the custom event to dispatch to the widget root DOM node.
         *
         * @param {string[]} events
         * The native DOM events for which event handlers should be registered.
         */
        registerEvents(targetNode: Node, synevent: string, events: string[]): void;
        /**
         * Set up listeners for native DOM events that may update the widget value.
         *
         * Sets up event handlers on the given target DOM node for the given event
         * names which may cause the input value to update, such as `keyup` or
         * `onclick` events. In contrast to change events, such update events will
         * trigger input value validation.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @param {Node} targetNode
         * Specifies the DOM node on which the event listeners should be registered.
         *
         * @param {...string} events
         * The DOM events for which event handlers should be registered.
         */
        setUpdateEvents(targetNode: Node, ...events: string[]): void;
        /**
         * Set up listeners for native DOM events that may change the widget value.
         *
         * Sets up event handlers on the given target DOM node for the given event
         * names which may cause the input value to change completely, such as
         * `change` events in a select menu. In contrast to update events, such
         * change events will not trigger input value validation but they may cause
         * field dependencies to get re-evaluated and will mark the input widget
         * as dirty.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @param {Node} targetNode
         * Specifies the DOM node on which the event listeners should be registered.
         *
         * @param {...string} events
         * The DOM events for which event handlers should be registered.
         */
        setChangeEvents(targetNode: Node, ...events: string[]): void;
        /**
         * Render the widget, set up event listeners and return resulting markup.
         * @abstract
         * @instance
         * @memberof LuCI.ui.AbstractElement
         *
         * @returns {Node}
         * Returns a DOM Node or DocumentFragment containing the rendered
         * widget markup.
         */
        render(): Node;
    }>, {
        /** @type {any} */ value: any;
        /** @type {any} */ options: any;
        __init__(value: any, options: any): void;
        /** @override */
        render(): Node;
        /**
         * @private
         * @param {Node} frameEl
         * @returns {Node}
         */
        bind(frameEl: Node): Node;
        /** @override */
        getValue(): any;
        /** @override */
        setValue(value: any): void;
    }>>;
    Checkbox: import("./classtypes.js").LuCIClass<import("./classtypes.js").Merge<import("./classtypes.js").Merge<import("./classtypes.js").BaseInstance, {
        /**
         * Read the current value of the input widget.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @returns {string|string[]|null}
         * The current value of the input element. For simple inputs like text
         * fields or selects, the return value type will be a - possibly empty -
         * string. Complex widgets such as `DynamicList` instances may result in
         * an array of strings or `null` for unset values.
         */
        getValue(): string | string[] | null;
        /**
         * Set the current value of the input widget.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @param {string|string[]|null} value
         * The value to set the input element to. For simple inputs like text
         * fields or selects, the value should be a - possibly empty - string.
         * Complex widgets such as `DynamicList` instances may accept string array
         * or `null` values.
         */
        setValue(value: string | string[] | null): void;
        /**
         * Set the current placeholder value of the input widget.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @param {string|string[]|null} value
         * The placeholder to set for the input element. Only applicable to text
         * inputs, not to radio buttons, selects or similar.
         */
        setPlaceholder(value: string | string[] | null): void;
        /**
         * Check whether the input value was altered by the user.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @returns {boolean}
         * Returns `true` if the input value has been altered by the user or
         * `false` if it is unchanged. Note that if the user modifies the initial
         * value and changes it back to the original state, it is still reported
         * as changed.
         */
        isChanged(): boolean;
        /**
         * Check whether the current input value is valid.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @returns {boolean}
         * Returns `true` if the current input value is valid or `false` if it does
         * not meet the validation constraints.
         */
        isValid(): boolean;
        /**
         * Returns the current validation error
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @returns {string}
         * The validation error at this time
         */
        getValidationError(): string;
        /**
         * Force validation of the current input value.
         *
         * Usually input validation is automatically triggered by various DOM events
         * bound to the input widget. In some cases it is required though to manually
         * trigger validation runs, e.g. when programmatically altering values.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @returns {boolean}
         */
        triggerValidation(): boolean;
        /**
         * Dispatch a custom (synthetic) event in response to received events.
         *
         * Sets up event handlers on the given target DOM node for the given event
         * names that dispatch a custom event of the given type to the widget root
         * DOM node.
         *
         * The primary purpose of this function is to set up a series of custom
         * uniform standard events such as `widget-update`, `validation-success`,
         * `validation-failure` etc. which are triggered by various different
         * widget specific native DOM events.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @param {Node} targetNode
         * Specifies the DOM node on which the native event listeners should be
         * registered.
         *
         * @param {string} synevent
         * The name of the custom event to dispatch to the widget root DOM node.
         *
         * @param {string[]} events
         * The native DOM events for which event handlers should be registered.
         */
        registerEvents(targetNode: Node, synevent: string, events: string[]): void;
        /**
         * Set up listeners for native DOM events that may update the widget value.
         *
         * Sets up event handlers on the given target DOM node for the given event
         * names which may cause the input value to update, such as `keyup` or
         * `onclick` events. In contrast to change events, such update events will
         * trigger input value validation.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @param {Node} targetNode
         * Specifies the DOM node on which the event listeners should be registered.
         *
         * @param {...string} events
         * The DOM events for which event handlers should be registered.
         */
        setUpdateEvents(targetNode: Node, ...events: string[]): void;
        /**
         * Set up listeners for native DOM events that may change the widget value.
         *
         * Sets up event handlers on the given target DOM node for the given event
         * names which may cause the input value to change completely, such as
         * `change` events in a select menu. In contrast to update events, such
         * change events will not trigger input value validation but they may cause
         * field dependencies to get re-evaluated and will mark the input widget
         * as dirty.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @param {Node} targetNode
         * Specifies the DOM node on which the event listeners should be registered.
         *
         * @param {...string} events
         * The DOM events for which event handlers should be registered.
         */
        setChangeEvents(targetNode: Node, ...events: string[]): void;
        /**
         * Render the widget, set up event listeners and return resulting markup.
         * @abstract
         * @instance
         * @memberof LuCI.ui.AbstractElement
         *
         * @returns {Node}
         * Returns a DOM Node or DocumentFragment containing the rendered
         * widget markup.
         */
        render(): Node;
    }>, {
        /** @type {any} */ value: any;
        /** @type {any} */ options: any;
        __init__(value: any, options: any): void;
        /** @override */
        render(): Node;
        /**
         * @private
         * @param {Node} frameEl
         * @returns {Node}
         */
        bind(frameEl: Node): Node;
        /**
         * Test whether the checkbox is currently checked.
         *
         * @instance
         * @memberof LuCI.ui.Checkbox
         * @returns {boolean}
         * Returns `true` when the checkbox is currently checked, otherwise `false`.
         */
        isChecked(): boolean;
        /** @override */
        getValue(): any;
        /** @override */
        setValue(value: any): void;
    }>>;
    Select: import("./classtypes.js").LuCIClass<import("./classtypes.js").Merge<import("./classtypes.js").Merge<import("./classtypes.js").BaseInstance, {
        /**
         * Read the current value of the input widget.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @returns {string|string[]|null}
         * The current value of the input element. For simple inputs like text
         * fields or selects, the return value type will be a - possibly empty -
         * string. Complex widgets such as `DynamicList` instances may result in
         * an array of strings or `null` for unset values.
         */
        getValue(): string | string[] | null;
        /**
         * Set the current value of the input widget.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @param {string|string[]|null} value
         * The value to set the input element to. For simple inputs like text
         * fields or selects, the value should be a - possibly empty - string.
         * Complex widgets such as `DynamicList` instances may accept string array
         * or `null` values.
         */
        setValue(value: string | string[] | null): void;
        /**
         * Set the current placeholder value of the input widget.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @param {string|string[]|null} value
         * The placeholder to set for the input element. Only applicable to text
         * inputs, not to radio buttons, selects or similar.
         */
        setPlaceholder(value: string | string[] | null): void;
        /**
         * Check whether the input value was altered by the user.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @returns {boolean}
         * Returns `true` if the input value has been altered by the user or
         * `false` if it is unchanged. Note that if the user modifies the initial
         * value and changes it back to the original state, it is still reported
         * as changed.
         */
        isChanged(): boolean;
        /**
         * Check whether the current input value is valid.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @returns {boolean}
         * Returns `true` if the current input value is valid or `false` if it does
         * not meet the validation constraints.
         */
        isValid(): boolean;
        /**
         * Returns the current validation error
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @returns {string}
         * The validation error at this time
         */
        getValidationError(): string;
        /**
         * Force validation of the current input value.
         *
         * Usually input validation is automatically triggered by various DOM events
         * bound to the input widget. In some cases it is required though to manually
         * trigger validation runs, e.g. when programmatically altering values.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @returns {boolean}
         */
        triggerValidation(): boolean;
        /**
         * Dispatch a custom (synthetic) event in response to received events.
         *
         * Sets up event handlers on the given target DOM node for the given event
         * names that dispatch a custom event of the given type to the widget root
         * DOM node.
         *
         * The primary purpose of this function is to set up a series of custom
         * uniform standard events such as `widget-update`, `validation-success`,
         * `validation-failure` etc. which are triggered by various different
         * widget specific native DOM events.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @param {Node} targetNode
         * Specifies the DOM node on which the native event listeners should be
         * registered.
         *
         * @param {string} synevent
         * The name of the custom event to dispatch to the widget root DOM node.
         *
         * @param {string[]} events
         * The native DOM events for which event handlers should be registered.
         */
        registerEvents(targetNode: Node, synevent: string, events: string[]): void;
        /**
         * Set up listeners for native DOM events that may update the widget value.
         *
         * Sets up event handlers on the given target DOM node for the given event
         * names which may cause the input value to update, such as `keyup` or
         * `onclick` events. In contrast to change events, such update events will
         * trigger input value validation.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @param {Node} targetNode
         * Specifies the DOM node on which the event listeners should be registered.
         *
         * @param {...string} events
         * The DOM events for which event handlers should be registered.
         */
        setUpdateEvents(targetNode: Node, ...events: string[]): void;
        /**
         * Set up listeners for native DOM events that may change the widget value.
         *
         * Sets up event handlers on the given target DOM node for the given event
         * names which may cause the input value to change completely, such as
         * `change` events in a select menu. In contrast to update events, such
         * change events will not trigger input value validation but they may cause
         * field dependencies to get re-evaluated and will mark the input widget
         * as dirty.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @param {Node} targetNode
         * Specifies the DOM node on which the event listeners should be registered.
         *
         * @param {...string} events
         * The DOM events for which event handlers should be registered.
         */
        setChangeEvents(targetNode: Node, ...events: string[]): void;
        /**
         * Render the widget, set up event listeners and return resulting markup.
         * @abstract
         * @instance
         * @memberof LuCI.ui.AbstractElement
         *
         * @returns {Node}
         * Returns a DOM Node or DocumentFragment containing the rendered
         * widget markup.
         */
        render(): Node;
    }>, {
        /** @type {any} */ values: any;
        /** @type {any} */ choices: any;
        /** @type {any} */ options: any;
        __init__(value: any, choices: any, options: any): void;
        /** @override */
        render(): Node;
        /**
         * @private
         * @param {Node} frameEl
         * @returns {Node}
         */
        bind(frameEl: Node): Node;
        /** @override */
        getValue(): any;
        /** @override */
        setValue(value: any): void;
    }>>;
    Dropdown: import("./classtypes.js").LuCIClass<import("./classtypes.js").Merge<import("./classtypes.js").Merge<import("./classtypes.js").BaseInstance, {
        /**
         * Read the current value of the input widget.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @returns {string|string[]|null}
         * The current value of the input element. For simple inputs like text
         * fields or selects, the return value type will be a - possibly empty -
         * string. Complex widgets such as `DynamicList` instances may result in
         * an array of strings or `null` for unset values.
         */
        getValue(): string | string[] | null;
        /**
         * Set the current value of the input widget.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @param {string|string[]|null} value
         * The value to set the input element to. For simple inputs like text
         * fields or selects, the value should be a - possibly empty - string.
         * Complex widgets such as `DynamicList` instances may accept string array
         * or `null` values.
         */
        setValue(value: string | string[] | null): void;
        /**
         * Set the current placeholder value of the input widget.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @param {string|string[]|null} value
         * The placeholder to set for the input element. Only applicable to text
         * inputs, not to radio buttons, selects or similar.
         */
        setPlaceholder(value: string | string[] | null): void;
        /**
         * Check whether the input value was altered by the user.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @returns {boolean}
         * Returns `true` if the input value has been altered by the user or
         * `false` if it is unchanged. Note that if the user modifies the initial
         * value and changes it back to the original state, it is still reported
         * as changed.
         */
        isChanged(): boolean;
        /**
         * Check whether the current input value is valid.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @returns {boolean}
         * Returns `true` if the current input value is valid or `false` if it does
         * not meet the validation constraints.
         */
        isValid(): boolean;
        /**
         * Returns the current validation error
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @returns {string}
         * The validation error at this time
         */
        getValidationError(): string;
        /**
         * Force validation of the current input value.
         *
         * Usually input validation is automatically triggered by various DOM events
         * bound to the input widget. In some cases it is required though to manually
         * trigger validation runs, e.g. when programmatically altering values.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @returns {boolean}
         */
        triggerValidation(): boolean;
        /**
         * Dispatch a custom (synthetic) event in response to received events.
         *
         * Sets up event handlers on the given target DOM node for the given event
         * names that dispatch a custom event of the given type to the widget root
         * DOM node.
         *
         * The primary purpose of this function is to set up a series of custom
         * uniform standard events such as `widget-update`, `validation-success`,
         * `validation-failure` etc. which are triggered by various different
         * widget specific native DOM events.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @param {Node} targetNode
         * Specifies the DOM node on which the native event listeners should be
         * registered.
         *
         * @param {string} synevent
         * The name of the custom event to dispatch to the widget root DOM node.
         *
         * @param {string[]} events
         * The native DOM events for which event handlers should be registered.
         */
        registerEvents(targetNode: Node, synevent: string, events: string[]): void;
        /**
         * Set up listeners for native DOM events that may update the widget value.
         *
         * Sets up event handlers on the given target DOM node for the given event
         * names which may cause the input value to update, such as `keyup` or
         * `onclick` events. In contrast to change events, such update events will
         * trigger input value validation.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @param {Node} targetNode
         * Specifies the DOM node on which the event listeners should be registered.
         *
         * @param {...string} events
         * The DOM events for which event handlers should be registered.
         */
        setUpdateEvents(targetNode: Node, ...events: string[]): void;
        /**
         * Set up listeners for native DOM events that may change the widget value.
         *
         * Sets up event handlers on the given target DOM node for the given event
         * names which may cause the input value to change completely, such as
         * `change` events in a select menu. In contrast to update events, such
         * change events will not trigger input value validation but they may cause
         * field dependencies to get re-evaluated and will mark the input widget
         * as dirty.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @param {Node} targetNode
         * Specifies the DOM node on which the event listeners should be registered.
         *
         * @param {...string} events
         * The DOM events for which event handlers should be registered.
         */
        setChangeEvents(targetNode: Node, ...events: string[]): void;
        /**
         * Render the widget, set up event listeners and return resulting markup.
         * @abstract
         * @instance
         * @memberof LuCI.ui.AbstractElement
         *
         * @returns {Node}
         * Returns a DOM Node or DocumentFragment containing the rendered
         * widget markup.
         */
        render(): Node;
    }>, {
        /** @type {any} */ values: any;
        /** @type {any} */ choices: any;
        /** @type {any} */ options: any;
        __init__(value: any, choices: any, options: any): void;
        /** @override */
        render(): Node;
        /**
         * @private
         * @param {Node} sb
         * @returns {Node}
         */
        bind(sb: Node): Node;
        /**
         * @private
         * @param {Node} element
         * @returns {document}
         */
        getScrollParent(element: Node): Document;
        /**
         * @private
         * @param {Node} sb
         */
        openDropdown(sb: Node): void;
        /**
         * @private
         * @param {Node} sb
         * @param {boolean} no_focus
         */
        closeDropdown(sb: Node, no_focus: boolean): void;
        /**
         * @private
         * @param {Node} sb
         * @param {Node} li list item
         * @param {boolean} force_state
         */
        toggleItem(sb: Node, li: Node, force_state: boolean): void;
        /**
         * @private
         * @param {Node} sb
         * @param {Node} li list item
         */
        transformItem(sb: Node, li: Node): void;
        /**
         * @private
         * @param {Node} sb
         * @param {Node} ul unordered list
         */
        saveValues(sb: Node, ul: Node): void;
        /**
         * @private
         * @param {Node} sb
         * @param {string[]} values
         */
        setValues(sb: Node, values: string[]): void;
        /**
         * @private
         * @param {Node} sb
         * @param {Node} elem
         * @param {boolean} scroll
         */
        setFocus(sb: Node, elem: Node, scroll: boolean): void;
        /**
         * @private
         * @param {Event} ev
         */
        handleMouseout(ev: Event): void;
        /**
         * @private
         * @param {Node} sb
         * @param {string} value
         * @param {string} label
         * @returns {Node}
         */
        createChoiceElement(sb: Node, value: string, label: string): Node;
        /**
         * @private
         * @param {Node} sb
         * @param {string} value
         */
        createItems(sb: Node, value: string): void;
        /**
         * Remove all existing choices from the dropdown menu.
         *
         * This function removes all preexisting dropdown choices from the widget,
         * keeping only choices currently being selected unless `reset_values` is
         * given, in which case all choices and deselected and removed.
         *
         * @instance
         * @memberof LuCI.ui.Dropdown
         * @param {boolean} [reset_value=false]
         * If set to `true`, deselect and remove selected choices as well instead
         * of keeping them.
         */
        clearChoices(reset_value?: boolean): void;
        /**
         * Add new choices to the dropdown menu.
         *
         * This function adds further choices to an existing dropdown menu,
         * ignoring choice values which are already present.
         *
         * @instance
         * @memberof LuCI.ui.Dropdown
         * @param {string[]} values
         * The choice values to add to the dropdown widget.
         *
         * @param {Object<string, *>} labels
         * The choice label values to use when adding dropdown choices. If no
         * label is found for a particular choice value, the value itself is used
         * as label text. Choice labels may be any valid value accepted by
         * {@link LuCI.dom#content}.
         */
        addChoices(values: string[], labels: {
            [x: string]: any;
        }): void;
        /**
         * Close all open dropdown widgets in the current document.
         */
        closeAllDropdowns(): void;
        /**
         * @private
         * @param {Event} ev
         */
        handleClick(ev: Event): void;
        /**
         * @private
         * @param {Event} ev
         */
        handleKeydown(ev: Event): void;
        /**
         * @private
         * @param {Event} ev
         */
        handleDropdownClose(ev: Event): void;
        /**
         * @private
         * @param {Event} ev
         */
        handleDropdownSelect(ev: Event): void;
        /**
         * @private
         * @param {Event} ev
         */
        handleMouseover(ev: Event): void;
        /**
         * @private
         * @param {Event} ev
         */
        handleFocus(ev: Event): void;
        /**
         * @private
         * @param {Event} ev
         */
        handleCanaryFocus(ev: Event): void;
        /**
         * @private
         * @param {Event} ev
         */
        handleCreateKeydown(ev: Event): void;
        /**
         * @private
         * @param {Event} ev
         */
        handleCreateFocus(ev: Event): void;
        /**
         * @private
         * @param {Event} ev
         */
        handleCreateBlur(ev: Event): void;
        /**
         * @private
         * @param {Event} ev
         */
        handleCreateClick(ev: Event): void;
        /** @override */
        setValue(values: any): void;
        /** @override */
        getValue(): any;
    }>>;
    DynamicList: import("./classtypes.js").LuCIClass<import("./classtypes.js").Merge<import("./classtypes.js").Merge<import("./classtypes.js").BaseInstance, {
        /**
         * Read the current value of the input widget.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @returns {string|string[]|null}
         * The current value of the input element. For simple inputs like text
         * fields or selects, the return value type will be a - possibly empty -
         * string. Complex widgets such as `DynamicList` instances may result in
         * an array of strings or `null` for unset values.
         */
        getValue(): string | string[] | null;
        /**
         * Set the current value of the input widget.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @param {string|string[]|null} value
         * The value to set the input element to. For simple inputs like text
         * fields or selects, the value should be a - possibly empty - string.
         * Complex widgets such as `DynamicList` instances may accept string array
         * or `null` values.
         */
        setValue(value: string | string[] | null): void;
        /**
         * Set the current placeholder value of the input widget.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @param {string|string[]|null} value
         * The placeholder to set for the input element. Only applicable to text
         * inputs, not to radio buttons, selects or similar.
         */
        setPlaceholder(value: string | string[] | null): void;
        /**
         * Check whether the input value was altered by the user.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @returns {boolean}
         * Returns `true` if the input value has been altered by the user or
         * `false` if it is unchanged. Note that if the user modifies the initial
         * value and changes it back to the original state, it is still reported
         * as changed.
         */
        isChanged(): boolean;
        /**
         * Check whether the current input value is valid.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @returns {boolean}
         * Returns `true` if the current input value is valid or `false` if it does
         * not meet the validation constraints.
         */
        isValid(): boolean;
        /**
         * Returns the current validation error
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @returns {string}
         * The validation error at this time
         */
        getValidationError(): string;
        /**
         * Force validation of the current input value.
         *
         * Usually input validation is automatically triggered by various DOM events
         * bound to the input widget. In some cases it is required though to manually
         * trigger validation runs, e.g. when programmatically altering values.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @returns {boolean}
         */
        triggerValidation(): boolean;
        /**
         * Dispatch a custom (synthetic) event in response to received events.
         *
         * Sets up event handlers on the given target DOM node for the given event
         * names that dispatch a custom event of the given type to the widget root
         * DOM node.
         *
         * The primary purpose of this function is to set up a series of custom
         * uniform standard events such as `widget-update`, `validation-success`,
         * `validation-failure` etc. which are triggered by various different
         * widget specific native DOM events.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @param {Node} targetNode
         * Specifies the DOM node on which the native event listeners should be
         * registered.
         *
         * @param {string} synevent
         * The name of the custom event to dispatch to the widget root DOM node.
         *
         * @param {string[]} events
         * The native DOM events for which event handlers should be registered.
         */
        registerEvents(targetNode: Node, synevent: string, events: string[]): void;
        /**
         * Set up listeners for native DOM events that may update the widget value.
         *
         * Sets up event handlers on the given target DOM node for the given event
         * names which may cause the input value to update, such as `keyup` or
         * `onclick` events. In contrast to change events, such update events will
         * trigger input value validation.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @param {Node} targetNode
         * Specifies the DOM node on which the event listeners should be registered.
         *
         * @param {...string} events
         * The DOM events for which event handlers should be registered.
         */
        setUpdateEvents(targetNode: Node, ...events: string[]): void;
        /**
         * Set up listeners for native DOM events that may change the widget value.
         *
         * Sets up event handlers on the given target DOM node for the given event
         * names which may cause the input value to change completely, such as
         * `change` events in a select menu. In contrast to update events, such
         * change events will not trigger input value validation but they may cause
         * field dependencies to get re-evaluated and will mark the input widget
         * as dirty.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @param {Node} targetNode
         * Specifies the DOM node on which the event listeners should be registered.
         *
         * @param {...string} events
         * The DOM events for which event handlers should be registered.
         */
        setChangeEvents(targetNode: Node, ...events: string[]): void;
        /**
         * Render the widget, set up event listeners and return resulting markup.
         * @abstract
         * @instance
         * @memberof LuCI.ui.AbstractElement
         *
         * @returns {Node}
         * Returns a DOM Node or DocumentFragment containing the rendered
         * widget markup.
         */
        render(): Node;
    }>, {
        /** @type {any} */ values: any;
        /** @type {any} */ choices: any;
        /** @type {any} */ options: any;
        __init__(values: any, choices: any, options: any): void;
        /** @override */
        render(): Node;
        /**
         * @private
         * @param {Node} dl
         */
        initDragAndDrop(dl: Node): void;
        /**
         * @private
         * @param {Node} dl
         * @returns {Node}
         */
        bind(dl: Node): Node;
        /**
         * @private
         * @param {Node} dl
         * @param {string} value
         * @param {string} text
         * @param {boolean} flash
         */
        addItem(dl: Node, value: string, text: string, flash: boolean): void;
        /**
         * @private
         * @param {Node} dl
         * @param {string} value
         */
        dispatchCbiDynlistChange(dl: Node, value: string): void;
        /**
         * @private
         * @param {Node} dl
         * @param {Node} item
         */
        removeItem(dl: Node, item: Node): void;
        /**
         * @private
         * @param {Event} ev
         */
        handleClick(ev: Event): void;
        /**
         * @private
         * @param {Event} ev
         */
        handleDropdownChange(ev: Event): void;
        /**
         * @private
         * @param {Event} ev
         */
        handleKeydown(ev: Event): void;
        /** @override */
        getValue(): any[];
        /** @override */
        setValue(values: any): void;
        /**
         * Add new suggested choices to the dynamic list.
         *
         * This function adds further choices to an existing dynamic list,
         * ignoring choice values which are already present.
         *
         * @instance
         * @memberof LuCI.ui.DynamicList
         * @param {string[]} values
         * The choice values to add to the dynamic lists suggestion dropdown.
         *
         * @param {Object<string, *>} labels
         * The choice label values to use when adding suggested choices. If no
         * label is found for a particular choice value, the value itself is used
         * as label text. Choice labels may be any valid value accepted by
         * {@link LuCI.dom#content}.
         */
        addChoices(values: string[], labels: {
            [x: string]: any;
        }): void;
        /**
         * Remove all existing choices from the dynamic list.
         *
         * This function removes all preexisting suggested choices from the widget.
         *
         * @instance
         * @memberof LuCI.ui.DynamicList
         */
        clearChoices(): void;
    }>>;
    RangeSlider: import("./classtypes.js").LuCIClass<import("./classtypes.js").Merge<import("./classtypes.js").Merge<import("./classtypes.js").BaseInstance, {
        /**
         * Read the current value of the input widget.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @returns {string|string[]|null}
         * The current value of the input element. For simple inputs like text
         * fields or selects, the return value type will be a - possibly empty -
         * string. Complex widgets such as `DynamicList` instances may result in
         * an array of strings or `null` for unset values.
         */
        getValue(): string | string[] | null;
        /**
         * Set the current value of the input widget.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @param {string|string[]|null} value
         * The value to set the input element to. For simple inputs like text
         * fields or selects, the value should be a - possibly empty - string.
         * Complex widgets such as `DynamicList` instances may accept string array
         * or `null` values.
         */
        setValue(value: string | string[] | null): void;
        /**
         * Set the current placeholder value of the input widget.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @param {string|string[]|null} value
         * The placeholder to set for the input element. Only applicable to text
         * inputs, not to radio buttons, selects or similar.
         */
        setPlaceholder(value: string | string[] | null): void;
        /**
         * Check whether the input value was altered by the user.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @returns {boolean}
         * Returns `true` if the input value has been altered by the user or
         * `false` if it is unchanged. Note that if the user modifies the initial
         * value and changes it back to the original state, it is still reported
         * as changed.
         */
        isChanged(): boolean;
        /**
         * Check whether the current input value is valid.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @returns {boolean}
         * Returns `true` if the current input value is valid or `false` if it does
         * not meet the validation constraints.
         */
        isValid(): boolean;
        /**
         * Returns the current validation error
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @returns {string}
         * The validation error at this time
         */
        getValidationError(): string;
        /**
         * Force validation of the current input value.
         *
         * Usually input validation is automatically triggered by various DOM events
         * bound to the input widget. In some cases it is required though to manually
         * trigger validation runs, e.g. when programmatically altering values.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @returns {boolean}
         */
        triggerValidation(): boolean;
        /**
         * Dispatch a custom (synthetic) event in response to received events.
         *
         * Sets up event handlers on the given target DOM node for the given event
         * names that dispatch a custom event of the given type to the widget root
         * DOM node.
         *
         * The primary purpose of this function is to set up a series of custom
         * uniform standard events such as `widget-update`, `validation-success`,
         * `validation-failure` etc. which are triggered by various different
         * widget specific native DOM events.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @param {Node} targetNode
         * Specifies the DOM node on which the native event listeners should be
         * registered.
         *
         * @param {string} synevent
         * The name of the custom event to dispatch to the widget root DOM node.
         *
         * @param {string[]} events
         * The native DOM events for which event handlers should be registered.
         */
        registerEvents(targetNode: Node, synevent: string, events: string[]): void;
        /**
         * Set up listeners for native DOM events that may update the widget value.
         *
         * Sets up event handlers on the given target DOM node for the given event
         * names which may cause the input value to update, such as `keyup` or
         * `onclick` events. In contrast to change events, such update events will
         * trigger input value validation.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @param {Node} targetNode
         * Specifies the DOM node on which the event listeners should be registered.
         *
         * @param {...string} events
         * The DOM events for which event handlers should be registered.
         */
        setUpdateEvents(targetNode: Node, ...events: string[]): void;
        /**
         * Set up listeners for native DOM events that may change the widget value.
         *
         * Sets up event handlers on the given target DOM node for the given event
         * names which may cause the input value to change completely, such as
         * `change` events in a select menu. In contrast to update events, such
         * change events will not trigger input value validation but they may cause
         * field dependencies to get re-evaluated and will mark the input widget
         * as dirty.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @param {Node} targetNode
         * Specifies the DOM node on which the event listeners should be registered.
         *
         * @param {...string} events
         * The DOM events for which event handlers should be registered.
         */
        setChangeEvents(targetNode: Node, ...events: string[]): void;
        /**
         * Render the widget, set up event listeners and return resulting markup.
         * @abstract
         * @instance
         * @memberof LuCI.ui.AbstractElement
         *
         * @returns {Node}
         * Returns a DOM Node or DocumentFragment containing the rendered
         * widget markup.
         */
        render(): Node;
    }>, {
        __init__(value: any, options: any): void;
        /** @override */
        render(): HTMLElement;
        /** @override */
        getValue(): any;
        /**
         * Return the value calculated by the `calculate` function.
         *
         * @instance
         * @memberof LuCI.ui.RangeSlider
         * @returns {number}
         */
        getCalculatedValue(): number;
        /** @override */
        setValue(value: any): void;
    }>>;
    Combobox: import("./classtypes.js").LuCIClass<import("./classtypes.js").Merge<import("./classtypes.js").Merge<import("./classtypes.js").Merge<import("./classtypes.js").BaseInstance, {
        /**
         * Read the current value of the input widget.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @returns {string|string[]|null}
         * The current value of the input element. For simple inputs like text
         * fields or selects, the return value type will be a - possibly empty -
         * string. Complex widgets such as `DynamicList` instances may result in
         * an array of strings or `null` for unset values.
         */
        getValue(): string | string[] | null;
        /**
         * Set the current value of the input widget.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @param {string|string[]|null} value
         * The value to set the input element to. For simple inputs like text
         * fields or selects, the value should be a - possibly empty - string.
         * Complex widgets such as `DynamicList` instances may accept string array
         * or `null` values.
         */
        setValue(value: string | string[] | null): void;
        /**
         * Set the current placeholder value of the input widget.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @param {string|string[]|null} value
         * The placeholder to set for the input element. Only applicable to text
         * inputs, not to radio buttons, selects or similar.
         */
        setPlaceholder(value: string | string[] | null): void;
        /**
         * Check whether the input value was altered by the user.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @returns {boolean}
         * Returns `true` if the input value has been altered by the user or
         * `false` if it is unchanged. Note that if the user modifies the initial
         * value and changes it back to the original state, it is still reported
         * as changed.
         */
        isChanged(): boolean;
        /**
         * Check whether the current input value is valid.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @returns {boolean}
         * Returns `true` if the current input value is valid or `false` if it does
         * not meet the validation constraints.
         */
        isValid(): boolean;
        /**
         * Returns the current validation error
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @returns {string}
         * The validation error at this time
         */
        getValidationError(): string;
        /**
         * Force validation of the current input value.
         *
         * Usually input validation is automatically triggered by various DOM events
         * bound to the input widget. In some cases it is required though to manually
         * trigger validation runs, e.g. when programmatically altering values.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @returns {boolean}
         */
        triggerValidation(): boolean;
        /**
         * Dispatch a custom (synthetic) event in response to received events.
         *
         * Sets up event handlers on the given target DOM node for the given event
         * names that dispatch a custom event of the given type to the widget root
         * DOM node.
         *
         * The primary purpose of this function is to set up a series of custom
         * uniform standard events such as `widget-update`, `validation-success`,
         * `validation-failure` etc. which are triggered by various different
         * widget specific native DOM events.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @param {Node} targetNode
         * Specifies the DOM node on which the native event listeners should be
         * registered.
         *
         * @param {string} synevent
         * The name of the custom event to dispatch to the widget root DOM node.
         *
         * @param {string[]} events
         * The native DOM events for which event handlers should be registered.
         */
        registerEvents(targetNode: Node, synevent: string, events: string[]): void;
        /**
         * Set up listeners for native DOM events that may update the widget value.
         *
         * Sets up event handlers on the given target DOM node for the given event
         * names which may cause the input value to update, such as `keyup` or
         * `onclick` events. In contrast to change events, such update events will
         * trigger input value validation.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @param {Node} targetNode
         * Specifies the DOM node on which the event listeners should be registered.
         *
         * @param {...string} events
         * The DOM events for which event handlers should be registered.
         */
        setUpdateEvents(targetNode: Node, ...events: string[]): void;
        /**
         * Set up listeners for native DOM events that may change the widget value.
         *
         * Sets up event handlers on the given target DOM node for the given event
         * names which may cause the input value to change completely, such as
         * `change` events in a select menu. In contrast to update events, such
         * change events will not trigger input value validation but they may cause
         * field dependencies to get re-evaluated and will mark the input widget
         * as dirty.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @param {Node} targetNode
         * Specifies the DOM node on which the event listeners should be registered.
         *
         * @param {...string} events
         * The DOM events for which event handlers should be registered.
         */
        setChangeEvents(targetNode: Node, ...events: string[]): void;
        /**
         * Render the widget, set up event listeners and return resulting markup.
         * @abstract
         * @instance
         * @memberof LuCI.ui.AbstractElement
         *
         * @returns {Node}
         * Returns a DOM Node or DocumentFragment containing the rendered
         * widget markup.
         */
        render(): Node;
    }>, {
        /** @type {any} */ values: any;
        /** @type {any} */ choices: any;
        /** @type {any} */ options: any;
        __init__(value: any, choices: any, options: any): void;
        /** @override */
        render(): Node;
        /**
         * @private
         * @param {Node} sb
         * @returns {Node}
         */
        bind(sb: Node): Node;
        /**
         * @private
         * @param {Node} element
         * @returns {document}
         */
        getScrollParent(element: Node): Document;
        /**
         * @private
         * @param {Node} sb
         */
        openDropdown(sb: Node): void;
        /**
         * @private
         * @param {Node} sb
         * @param {boolean} no_focus
         */
        closeDropdown(sb: Node, no_focus: boolean): void;
        /**
         * @private
         * @param {Node} sb
         * @param {Node} li list item
         * @param {boolean} force_state
         */
        toggleItem(sb: Node, li: Node, force_state: boolean): void;
        /**
         * @private
         * @param {Node} sb
         * @param {Node} li list item
         */
        transformItem(sb: Node, li: Node): void;
        /**
         * @private
         * @param {Node} sb
         * @param {Node} ul unordered list
         */
        saveValues(sb: Node, ul: Node): void;
        /**
         * @private
         * @param {Node} sb
         * @param {string[]} values
         */
        setValues(sb: Node, values: string[]): void;
        /**
         * @private
         * @param {Node} sb
         * @param {Node} elem
         * @param {boolean} scroll
         */
        setFocus(sb: Node, elem: Node, scroll: boolean): void;
        /**
         * @private
         * @param {Event} ev
         */
        handleMouseout(ev: Event): void;
        /**
         * @private
         * @param {Node} sb
         * @param {string} value
         * @param {string} label
         * @returns {Node}
         */
        createChoiceElement(sb: Node, value: string, label: string): Node;
        /**
         * @private
         * @param {Node} sb
         * @param {string} value
         */
        createItems(sb: Node, value: string): void;
        /**
         * Remove all existing choices from the dropdown menu.
         *
         * This function removes all preexisting dropdown choices from the widget,
         * keeping only choices currently being selected unless `reset_values` is
         * given, in which case all choices and deselected and removed.
         *
         * @instance
         * @memberof LuCI.ui.Dropdown
         * @param {boolean} [reset_value=false]
         * If set to `true`, deselect and remove selected choices as well instead
         * of keeping them.
         */
        clearChoices(reset_value?: boolean): void;
        /**
         * Add new choices to the dropdown menu.
         *
         * This function adds further choices to an existing dropdown menu,
         * ignoring choice values which are already present.
         *
         * @instance
         * @memberof LuCI.ui.Dropdown
         * @param {string[]} values
         * The choice values to add to the dropdown widget.
         *
         * @param {Object<string, *>} labels
         * The choice label values to use when adding dropdown choices. If no
         * label is found for a particular choice value, the value itself is used
         * as label text. Choice labels may be any valid value accepted by
         * {@link LuCI.dom#content}.
         */
        addChoices(values: string[], labels: {
            [x: string]: any;
        }): void;
        /**
         * Close all open dropdown widgets in the current document.
         */
        closeAllDropdowns(): void;
        /**
         * @private
         * @param {Event} ev
         */
        handleClick(ev: Event): void;
        /**
         * @private
         * @param {Event} ev
         */
        handleKeydown(ev: Event): void;
        /**
         * @private
         * @param {Event} ev
         */
        handleDropdownClose(ev: Event): void;
        /**
         * @private
         * @param {Event} ev
         */
        handleDropdownSelect(ev: Event): void;
        /**
         * @private
         * @param {Event} ev
         */
        handleMouseover(ev: Event): void;
        /**
         * @private
         * @param {Event} ev
         */
        handleFocus(ev: Event): void;
        /**
         * @private
         * @param {Event} ev
         */
        handleCanaryFocus(ev: Event): void;
        /**
         * @private
         * @param {Event} ev
         */
        handleCreateKeydown(ev: Event): void;
        /**
         * @private
         * @param {Event} ev
         */
        handleCreateFocus(ev: Event): void;
        /**
         * @private
         * @param {Event} ev
         */
        handleCreateBlur(ev: Event): void;
        /**
         * @private
         * @param {Event} ev
         */
        handleCreateClick(ev: Event): void;
        /** @override */
        setValue(values: any): void;
        /** @override */
        getValue(): any;
    }>, {
        __init__(value: any, choices: any, options: any): void;
    }>>;
    ComboButton: import("./classtypes.js").LuCIClass<import("./classtypes.js").Merge<import("./classtypes.js").Merge<import("./classtypes.js").Merge<import("./classtypes.js").BaseInstance, {
        /**
         * Read the current value of the input widget.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @returns {string|string[]|null}
         * The current value of the input element. For simple inputs like text
         * fields or selects, the return value type will be a - possibly empty -
         * string. Complex widgets such as `DynamicList` instances may result in
         * an array of strings or `null` for unset values.
         */
        getValue(): string | string[] | null;
        /**
         * Set the current value of the input widget.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @param {string|string[]|null} value
         * The value to set the input element to. For simple inputs like text
         * fields or selects, the value should be a - possibly empty - string.
         * Complex widgets such as `DynamicList` instances may accept string array
         * or `null` values.
         */
        setValue(value: string | string[] | null): void;
        /**
         * Set the current placeholder value of the input widget.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @param {string|string[]|null} value
         * The placeholder to set for the input element. Only applicable to text
         * inputs, not to radio buttons, selects or similar.
         */
        setPlaceholder(value: string | string[] | null): void;
        /**
         * Check whether the input value was altered by the user.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @returns {boolean}
         * Returns `true` if the input value has been altered by the user or
         * `false` if it is unchanged. Note that if the user modifies the initial
         * value and changes it back to the original state, it is still reported
         * as changed.
         */
        isChanged(): boolean;
        /**
         * Check whether the current input value is valid.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @returns {boolean}
         * Returns `true` if the current input value is valid or `false` if it does
         * not meet the validation constraints.
         */
        isValid(): boolean;
        /**
         * Returns the current validation error
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @returns {string}
         * The validation error at this time
         */
        getValidationError(): string;
        /**
         * Force validation of the current input value.
         *
         * Usually input validation is automatically triggered by various DOM events
         * bound to the input widget. In some cases it is required though to manually
         * trigger validation runs, e.g. when programmatically altering values.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @returns {boolean}
         */
        triggerValidation(): boolean;
        /**
         * Dispatch a custom (synthetic) event in response to received events.
         *
         * Sets up event handlers on the given target DOM node for the given event
         * names that dispatch a custom event of the given type to the widget root
         * DOM node.
         *
         * The primary purpose of this function is to set up a series of custom
         * uniform standard events such as `widget-update`, `validation-success`,
         * `validation-failure` etc. which are triggered by various different
         * widget specific native DOM events.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @param {Node} targetNode
         * Specifies the DOM node on which the native event listeners should be
         * registered.
         *
         * @param {string} synevent
         * The name of the custom event to dispatch to the widget root DOM node.
         *
         * @param {string[]} events
         * The native DOM events for which event handlers should be registered.
         */
        registerEvents(targetNode: Node, synevent: string, events: string[]): void;
        /**
         * Set up listeners for native DOM events that may update the widget value.
         *
         * Sets up event handlers on the given target DOM node for the given event
         * names which may cause the input value to update, such as `keyup` or
         * `onclick` events. In contrast to change events, such update events will
         * trigger input value validation.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @param {Node} targetNode
         * Specifies the DOM node on which the event listeners should be registered.
         *
         * @param {...string} events
         * The DOM events for which event handlers should be registered.
         */
        setUpdateEvents(targetNode: Node, ...events: string[]): void;
        /**
         * Set up listeners for native DOM events that may change the widget value.
         *
         * Sets up event handlers on the given target DOM node for the given event
         * names which may cause the input value to change completely, such as
         * `change` events in a select menu. In contrast to update events, such
         * change events will not trigger input value validation but they may cause
         * field dependencies to get re-evaluated and will mark the input widget
         * as dirty.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @param {Node} targetNode
         * Specifies the DOM node on which the event listeners should be registered.
         *
         * @param {...string} events
         * The DOM events for which event handlers should be registered.
         */
        setChangeEvents(targetNode: Node, ...events: string[]): void;
        /**
         * Render the widget, set up event listeners and return resulting markup.
         * @abstract
         * @instance
         * @memberof LuCI.ui.AbstractElement
         *
         * @returns {Node}
         * Returns a DOM Node or DocumentFragment containing the rendered
         * widget markup.
         */
        render(): Node;
    }>, {
        /** @type {any} */ values: any;
        /** @type {any} */ choices: any;
        /** @type {any} */ options: any;
        __init__(value: any, choices: any, options: any): void;
        /** @override */
        render(): Node;
        /**
         * @private
         * @param {Node} sb
         * @returns {Node}
         */
        bind(sb: Node): Node;
        /**
         * @private
         * @param {Node} element
         * @returns {document}
         */
        getScrollParent(element: Node): Document;
        /**
         * @private
         * @param {Node} sb
         */
        openDropdown(sb: Node): void;
        /**
         * @private
         * @param {Node} sb
         * @param {boolean} no_focus
         */
        closeDropdown(sb: Node, no_focus: boolean): void;
        /**
         * @private
         * @param {Node} sb
         * @param {Node} li list item
         * @param {boolean} force_state
         */
        toggleItem(sb: Node, li: Node, force_state: boolean): void;
        /**
         * @private
         * @param {Node} sb
         * @param {Node} li list item
         */
        transformItem(sb: Node, li: Node): void;
        /**
         * @private
         * @param {Node} sb
         * @param {Node} ul unordered list
         */
        saveValues(sb: Node, ul: Node): void;
        /**
         * @private
         * @param {Node} sb
         * @param {string[]} values
         */
        setValues(sb: Node, values: string[]): void;
        /**
         * @private
         * @param {Node} sb
         * @param {Node} elem
         * @param {boolean} scroll
         */
        setFocus(sb: Node, elem: Node, scroll: boolean): void;
        /**
         * @private
         * @param {Event} ev
         */
        handleMouseout(ev: Event): void;
        /**
         * @private
         * @param {Node} sb
         * @param {string} value
         * @param {string} label
         * @returns {Node}
         */
        createChoiceElement(sb: Node, value: string, label: string): Node;
        /**
         * @private
         * @param {Node} sb
         * @param {string} value
         */
        createItems(sb: Node, value: string): void;
        /**
         * Remove all existing choices from the dropdown menu.
         *
         * This function removes all preexisting dropdown choices from the widget,
         * keeping only choices currently being selected unless `reset_values` is
         * given, in which case all choices and deselected and removed.
         *
         * @instance
         * @memberof LuCI.ui.Dropdown
         * @param {boolean} [reset_value=false]
         * If set to `true`, deselect and remove selected choices as well instead
         * of keeping them.
         */
        clearChoices(reset_value?: boolean): void;
        /**
         * Add new choices to the dropdown menu.
         *
         * This function adds further choices to an existing dropdown menu,
         * ignoring choice values which are already present.
         *
         * @instance
         * @memberof LuCI.ui.Dropdown
         * @param {string[]} values
         * The choice values to add to the dropdown widget.
         *
         * @param {Object<string, *>} labels
         * The choice label values to use when adding dropdown choices. If no
         * label is found for a particular choice value, the value itself is used
         * as label text. Choice labels may be any valid value accepted by
         * {@link LuCI.dom#content}.
         */
        addChoices(values: string[], labels: {
            [x: string]: any;
        }): void;
        /**
         * Close all open dropdown widgets in the current document.
         */
        closeAllDropdowns(): void;
        /**
         * @private
         * @param {Event} ev
         */
        handleClick(ev: Event): void;
        /**
         * @private
         * @param {Event} ev
         */
        handleKeydown(ev: Event): void;
        /**
         * @private
         * @param {Event} ev
         */
        handleDropdownClose(ev: Event): void;
        /**
         * @private
         * @param {Event} ev
         */
        handleDropdownSelect(ev: Event): void;
        /**
         * @private
         * @param {Event} ev
         */
        handleMouseover(ev: Event): void;
        /**
         * @private
         * @param {Event} ev
         */
        handleFocus(ev: Event): void;
        /**
         * @private
         * @param {Event} ev
         */
        handleCanaryFocus(ev: Event): void;
        /**
         * @private
         * @param {Event} ev
         */
        handleCreateKeydown(ev: Event): void;
        /**
         * @private
         * @param {Event} ev
         */
        handleCreateFocus(ev: Event): void;
        /**
         * @private
         * @param {Event} ev
         */
        handleCreateBlur(ev: Event): void;
        /**
         * @private
         * @param {Event} ev
         */
        handleCreateClick(ev: Event): void;
        /** @override */
        setValue(values: any): void;
        /** @override */
        getValue(): any;
    }>, {
        __init__(value: any, choices: any, options: any): void;
        /** @override */
        render(...args: any[]): any;
        /**
         * @private
         * @param {Event} ev
         * @param {...*} args
         * @returns {null}
         */
        handleClick(ev: Event, ...args: any[]): null;
        /**
         * @private
         * @param {Node} sb
         * @param {...*} args
         * @returns {*}
         */
        toggleItem(sb: Node, ...args: any[]): any;
    }>>;
    Hiddenfield: import("./classtypes.js").LuCIClass<import("./classtypes.js").Merge<import("./classtypes.js").Merge<import("./classtypes.js").BaseInstance, {
        /**
         * Read the current value of the input widget.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @returns {string|string[]|null}
         * The current value of the input element. For simple inputs like text
         * fields or selects, the return value type will be a - possibly empty -
         * string. Complex widgets such as `DynamicList` instances may result in
         * an array of strings or `null` for unset values.
         */
        getValue(): string | string[] | null;
        /**
         * Set the current value of the input widget.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @param {string|string[]|null} value
         * The value to set the input element to. For simple inputs like text
         * fields or selects, the value should be a - possibly empty - string.
         * Complex widgets such as `DynamicList` instances may accept string array
         * or `null` values.
         */
        setValue(value: string | string[] | null): void;
        /**
         * Set the current placeholder value of the input widget.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @param {string|string[]|null} value
         * The placeholder to set for the input element. Only applicable to text
         * inputs, not to radio buttons, selects or similar.
         */
        setPlaceholder(value: string | string[] | null): void;
        /**
         * Check whether the input value was altered by the user.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @returns {boolean}
         * Returns `true` if the input value has been altered by the user or
         * `false` if it is unchanged. Note that if the user modifies the initial
         * value and changes it back to the original state, it is still reported
         * as changed.
         */
        isChanged(): boolean;
        /**
         * Check whether the current input value is valid.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @returns {boolean}
         * Returns `true` if the current input value is valid or `false` if it does
         * not meet the validation constraints.
         */
        isValid(): boolean;
        /**
         * Returns the current validation error
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @returns {string}
         * The validation error at this time
         */
        getValidationError(): string;
        /**
         * Force validation of the current input value.
         *
         * Usually input validation is automatically triggered by various DOM events
         * bound to the input widget. In some cases it is required though to manually
         * trigger validation runs, e.g. when programmatically altering values.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @returns {boolean}
         */
        triggerValidation(): boolean;
        /**
         * Dispatch a custom (synthetic) event in response to received events.
         *
         * Sets up event handlers on the given target DOM node for the given event
         * names that dispatch a custom event of the given type to the widget root
         * DOM node.
         *
         * The primary purpose of this function is to set up a series of custom
         * uniform standard events such as `widget-update`, `validation-success`,
         * `validation-failure` etc. which are triggered by various different
         * widget specific native DOM events.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @param {Node} targetNode
         * Specifies the DOM node on which the native event listeners should be
         * registered.
         *
         * @param {string} synevent
         * The name of the custom event to dispatch to the widget root DOM node.
         *
         * @param {string[]} events
         * The native DOM events for which event handlers should be registered.
         */
        registerEvents(targetNode: Node, synevent: string, events: string[]): void;
        /**
         * Set up listeners for native DOM events that may update the widget value.
         *
         * Sets up event handlers on the given target DOM node for the given event
         * names which may cause the input value to update, such as `keyup` or
         * `onclick` events. In contrast to change events, such update events will
         * trigger input value validation.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @param {Node} targetNode
         * Specifies the DOM node on which the event listeners should be registered.
         *
         * @param {...string} events
         * The DOM events for which event handlers should be registered.
         */
        setUpdateEvents(targetNode: Node, ...events: string[]): void;
        /**
         * Set up listeners for native DOM events that may change the widget value.
         *
         * Sets up event handlers on the given target DOM node for the given event
         * names which may cause the input value to change completely, such as
         * `change` events in a select menu. In contrast to update events, such
         * change events will not trigger input value validation but they may cause
         * field dependencies to get re-evaluated and will mark the input widget
         * as dirty.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @param {Node} targetNode
         * Specifies the DOM node on which the event listeners should be registered.
         *
         * @param {...string} events
         * The DOM events for which event handlers should be registered.
         */
        setChangeEvents(targetNode: Node, ...events: string[]): void;
        /**
         * Render the widget, set up event listeners and return resulting markup.
         * @abstract
         * @instance
         * @memberof LuCI.ui.AbstractElement
         *
         * @returns {Node}
         * Returns a DOM Node or DocumentFragment containing the rendered
         * widget markup.
         */
        render(): Node;
    }>, {
        /** @type {any} */ value: any;
        /** @type {any} */ options: any;
        __init__(value: any, options: any): void;
        /** @override */
        render(): Node;
        /**
         * @private
         * @param {Node} hiddenEl
         * @returns {Node} hiddenEl
         */
        bind(hiddenEl: Node): Node;
        /** @override */
        getValue(): any;
        /** @override */
        setValue(value: any): void;
    }>>;
    FileUpload: import("./classtypes.js").LuCIClass<import("./classtypes.js").Merge<import("./classtypes.js").Merge<import("./classtypes.js").BaseInstance, {
        /**
         * Read the current value of the input widget.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @returns {string|string[]|null}
         * The current value of the input element. For simple inputs like text
         * fields or selects, the return value type will be a - possibly empty -
         * string. Complex widgets such as `DynamicList` instances may result in
         * an array of strings or `null` for unset values.
         */
        getValue(): string | string[] | null;
        /**
         * Set the current value of the input widget.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @param {string|string[]|null} value
         * The value to set the input element to. For simple inputs like text
         * fields or selects, the value should be a - possibly empty - string.
         * Complex widgets such as `DynamicList` instances may accept string array
         * or `null` values.
         */
        setValue(value: string | string[] | null): void;
        /**
         * Set the current placeholder value of the input widget.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @param {string|string[]|null} value
         * The placeholder to set for the input element. Only applicable to text
         * inputs, not to radio buttons, selects or similar.
         */
        setPlaceholder(value: string | string[] | null): void;
        /**
         * Check whether the input value was altered by the user.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @returns {boolean}
         * Returns `true` if the input value has been altered by the user or
         * `false` if it is unchanged. Note that if the user modifies the initial
         * value and changes it back to the original state, it is still reported
         * as changed.
         */
        isChanged(): boolean;
        /**
         * Check whether the current input value is valid.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @returns {boolean}
         * Returns `true` if the current input value is valid or `false` if it does
         * not meet the validation constraints.
         */
        isValid(): boolean;
        /**
         * Returns the current validation error
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @returns {string}
         * The validation error at this time
         */
        getValidationError(): string;
        /**
         * Force validation of the current input value.
         *
         * Usually input validation is automatically triggered by various DOM events
         * bound to the input widget. In some cases it is required though to manually
         * trigger validation runs, e.g. when programmatically altering values.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @returns {boolean}
         */
        triggerValidation(): boolean;
        /**
         * Dispatch a custom (synthetic) event in response to received events.
         *
         * Sets up event handlers on the given target DOM node for the given event
         * names that dispatch a custom event of the given type to the widget root
         * DOM node.
         *
         * The primary purpose of this function is to set up a series of custom
         * uniform standard events such as `widget-update`, `validation-success`,
         * `validation-failure` etc. which are triggered by various different
         * widget specific native DOM events.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @param {Node} targetNode
         * Specifies the DOM node on which the native event listeners should be
         * registered.
         *
         * @param {string} synevent
         * The name of the custom event to dispatch to the widget root DOM node.
         *
         * @param {string[]} events
         * The native DOM events for which event handlers should be registered.
         */
        registerEvents(targetNode: Node, synevent: string, events: string[]): void;
        /**
         * Set up listeners for native DOM events that may update the widget value.
         *
         * Sets up event handlers on the given target DOM node for the given event
         * names which may cause the input value to update, such as `keyup` or
         * `onclick` events. In contrast to change events, such update events will
         * trigger input value validation.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @param {Node} targetNode
         * Specifies the DOM node on which the event listeners should be registered.
         *
         * @param {...string} events
         * The DOM events for which event handlers should be registered.
         */
        setUpdateEvents(targetNode: Node, ...events: string[]): void;
        /**
         * Set up listeners for native DOM events that may change the widget value.
         *
         * Sets up event handlers on the given target DOM node for the given event
         * names which may cause the input value to change completely, such as
         * `change` events in a select menu. In contrast to update events, such
         * change events will not trigger input value validation but they may cause
         * field dependencies to get re-evaluated and will mark the input widget
         * as dirty.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @param {Node} targetNode
         * Specifies the DOM node on which the event listeners should be registered.
         *
         * @param {...string} events
         * The DOM events for which event handlers should be registered.
         */
        setChangeEvents(targetNode: Node, ...events: string[]): void;
        /**
         * Render the widget, set up event listeners and return resulting markup.
         * @abstract
         * @instance
         * @memberof LuCI.ui.AbstractElement
         *
         * @returns {Node}
         * Returns a DOM Node or DocumentFragment containing the rendered
         * widget markup.
         */
        render(): Node;
    }>, {
        /** @type {any} */ value: any;
        /** @type {any} */ options: any;
        __init__(value: any, options: any): void;
        /**
         * @private
         * @param {Node} browserEl
         * @returns {Node} hiddenEl
         */
        bind(browserEl: Node): Node;
        /** @override */
        render(): Promise<any>;
        /**
         * @private
         * @param {string} path
         * @returns {string}
         */
        truncatePath(path: string): string;
        /**
         * @private
         * @param {string} type
         * @returns {Node}
         */
        iconForType(type: string): Node;
        /**
         * @private
         * @param {string} path
         * @returns {string}
         */
        canonicalizePath(path: string): string;
        /**
         * @private
         * @param {string} path
         * @returns {string[]}
         */
        splitPath(path: string): string[];
        /**
         * @private
         * @param {string} path
         * @param {Event} ev
         */
        handleCreateDirectory(path: string, ev: Event): void;
        /**
         * @private
         * @param {string} path
         * @param {object[]} list
         * @param {Event} ev
         * @returns {Promise}
         */
        handleUpload(path: string, list: object[], ev: Event): Promise<any>;
        /**
         * @private
         * @param {string} path
         * @param {object} fileStat
         * @param {Event} ev
         * @returns {Promise}
         */
        handleDelete(path: string, fileStat: object, ev: Event): Promise<any>;
        /**
         * @private
         * @param {string} path
         * @param {object[]} list
         * @returns {Promise}
         */
        renderUpload(path: string, list: object[]): Promise<any>;
        /**
         * @private
         * @param {Node} container
         * @param {string} path
         * @param {object[]} list
         */
        renderListing(container: Node, path: string, list: object[]): void;
        /**
         * @private
         * @param {Event} ev
         */
        handleCancel(ev: Event): void;
        /**
         * @private
         * @param {Event} ev
         */
        handleReset(ev: Event): void;
        /**
         * @private
         * @param {string} path
         * @param {object} fileStat
         * @param {Event} ev
         */
        handleDownload(path: string, fileStat: object, ev: Event): void;
        /**
         * @private
         * @param {string} path
         * @param {object} fileStat
         * @param {Event} ev
         */
        handleSelect(path: string, fileStat: object, ev: Event): void;
        /**
         * @private
         * @param {Event} ev
         * @returns {Promise}
         */
        handleFileBrowser(ev: Event): Promise<any>;
        /** @override */
        getValue(): any;
        /** @override */
        setValue(value: any): void;
    }>>;
}>;
export default _default;
export type InitOptions = any;
export type MenuNode = any;
export type FileUploadReply = any;
/**
 * @class AbstractElement
 * @memberof LuCI.ui
 * @hideconstructor
 * @classdesc
 *
 * The `AbstractElement` class serves as abstract base for the different widgets
 * implemented by `LuCI.ui`. It provides the common logic for getting and
 * setting values, for checking the validity state and for wiring up required
 * events.
 *
 * UI widget instances are usually not supposed to be created by view code
 * directly, instead they're implicitly created by `LuCI.form` when
 * instantiating CBI forms.
 *
 * This class is automatically instantiated as part of `LuCI.ui`. To use it
 * in views, use `'require ui'` and refer to `ui.AbstractElement`. To import
 * it in external JavaScript, use `L.require("ui").then(...)` and access the
 * `AbstractElement` property of the class instance value.
 */
export const UIElement: import("./classtypes.js").LuCIClass<import("./classtypes.js").Merge<import("./classtypes.js").BaseInstance, {
    /**
     * Read the current value of the input widget.
     *
     * @instance
     * @memberof LuCI.ui.AbstractElement
     * @returns {string|string[]|null}
     * The current value of the input element. For simple inputs like text
     * fields or selects, the return value type will be a - possibly empty -
     * string. Complex widgets such as `DynamicList` instances may result in
     * an array of strings or `null` for unset values.
     */
    getValue(): string | string[] | null;
    /**
     * Set the current value of the input widget.
     *
     * @instance
     * @memberof LuCI.ui.AbstractElement
     * @param {string|string[]|null} value
     * The value to set the input element to. For simple inputs like text
     * fields or selects, the value should be a - possibly empty - string.
     * Complex widgets such as `DynamicList` instances may accept string array
     * or `null` values.
     */
    setValue(value: string | string[] | null): void;
    /**
     * Set the current placeholder value of the input widget.
     *
     * @instance
     * @memberof LuCI.ui.AbstractElement
     * @param {string|string[]|null} value
     * The placeholder to set for the input element. Only applicable to text
     * inputs, not to radio buttons, selects or similar.
     */
    setPlaceholder(value: string | string[] | null): void;
    /**
     * Check whether the input value was altered by the user.
     *
     * @instance
     * @memberof LuCI.ui.AbstractElement
     * @returns {boolean}
     * Returns `true` if the input value has been altered by the user or
     * `false` if it is unchanged. Note that if the user modifies the initial
     * value and changes it back to the original state, it is still reported
     * as changed.
     */
    isChanged(): boolean;
    /**
     * Check whether the current input value is valid.
     *
     * @instance
     * @memberof LuCI.ui.AbstractElement
     * @returns {boolean}
     * Returns `true` if the current input value is valid or `false` if it does
     * not meet the validation constraints.
     */
    isValid(): boolean;
    /**
     * Returns the current validation error
     *
     * @instance
     * @memberof LuCI.ui.AbstractElement
     * @returns {string}
     * The validation error at this time
     */
    getValidationError(): string;
    /**
     * Force validation of the current input value.
     *
     * Usually input validation is automatically triggered by various DOM events
     * bound to the input widget. In some cases it is required though to manually
     * trigger validation runs, e.g. when programmatically altering values.
     *
     * @instance
     * @memberof LuCI.ui.AbstractElement
     * @returns {boolean}
     */
    triggerValidation(): boolean;
    /**
     * Dispatch a custom (synthetic) event in response to received events.
     *
     * Sets up event handlers on the given target DOM node for the given event
     * names that dispatch a custom event of the given type to the widget root
     * DOM node.
     *
     * The primary purpose of this function is to set up a series of custom
     * uniform standard events such as `widget-update`, `validation-success`,
     * `validation-failure` etc. which are triggered by various different
     * widget specific native DOM events.
     *
     * @instance
     * @memberof LuCI.ui.AbstractElement
     * @param {Node} targetNode
     * Specifies the DOM node on which the native event listeners should be
     * registered.
     *
     * @param {string} synevent
     * The name of the custom event to dispatch to the widget root DOM node.
     *
     * @param {string[]} events
     * The native DOM events for which event handlers should be registered.
     */
    registerEvents(targetNode: Node, synevent: string, events: string[]): void;
    /**
     * Set up listeners for native DOM events that may update the widget value.
     *
     * Sets up event handlers on the given target DOM node for the given event
     * names which may cause the input value to update, such as `keyup` or
     * `onclick` events. In contrast to change events, such update events will
     * trigger input value validation.
     *
     * @instance
     * @memberof LuCI.ui.AbstractElement
     * @param {Node} targetNode
     * Specifies the DOM node on which the event listeners should be registered.
     *
     * @param {...string} events
     * The DOM events for which event handlers should be registered.
     */
    setUpdateEvents(targetNode: Node, ...events: string[]): void;
    /**
     * Set up listeners for native DOM events that may change the widget value.
     *
     * Sets up event handlers on the given target DOM node for the given event
     * names which may cause the input value to change completely, such as
     * `change` events in a select menu. In contrast to update events, such
     * change events will not trigger input value validation but they may cause
     * field dependencies to get re-evaluated and will mark the input widget
     * as dirty.
     *
     * @instance
     * @memberof LuCI.ui.AbstractElement
     * @param {Node} targetNode
     * Specifies the DOM node on which the event listeners should be registered.
     *
     * @param {...string} events
     * The DOM events for which event handlers should be registered.
     */
    setChangeEvents(targetNode: Node, ...events: string[]): void;
    /**
     * Render the widget, set up event listeners and return resulting markup.
     * @abstract
     * @instance
     * @memberof LuCI.ui.AbstractElement
     *
     * @returns {Node}
     * Returns a DOM Node or DocumentFragment containing the rendered
     * widget markup.
     */
    render(): Node;
}>>;
/**
 * Instantiate a text input widget.
 *
 * @class Textfield
 * @memberof LuCI.ui
 * @augments LuCI.ui.AbstractElement
 *
 * @classdesc
 *
 * The `Textfield` class implements a standard single line text input field.
 *
 * UI widget instances are usually not supposed to be created by view code
 * directly, instead they're implicitly created by `LuCI.form` when
 * instantiating CBI forms.
 *
 * This class is automatically instantiated as part of `LuCI.ui`. To use it
 * in views, use `'require ui'` and refer to `ui.Textfield`. To import it in
 * external JavaScript, use `L.require("ui").then(...)` and access the
 * `Textfield` property of the class instance value.
 *
 * @param {string} [value=null]
 * The initial input value.
 *
 * @param {LuCI.ui.Textfield.InitOptions} [options]
 * Object describing the widget specific options to initialize the input.
 */
export const UITextfield: import("./classtypes.js").LuCIClass<import("./classtypes.js").Merge<import("./classtypes.js").Merge<import("./classtypes.js").BaseInstance, {
    /**
     * Read the current value of the input widget.
     *
     * @instance
     * @memberof LuCI.ui.AbstractElement
     * @returns {string|string[]|null}
     * The current value of the input element. For simple inputs like text
     * fields or selects, the return value type will be a - possibly empty -
     * string. Complex widgets such as `DynamicList` instances may result in
     * an array of strings or `null` for unset values.
     */
    getValue(): string | string[] | null;
    /**
     * Set the current value of the input widget.
     *
     * @instance
     * @memberof LuCI.ui.AbstractElement
     * @param {string|string[]|null} value
     * The value to set the input element to. For simple inputs like text
     * fields or selects, the value should be a - possibly empty - string.
     * Complex widgets such as `DynamicList` instances may accept string array
     * or `null` values.
     */
    setValue(value: string | string[] | null): void;
    /**
     * Set the current placeholder value of the input widget.
     *
     * @instance
     * @memberof LuCI.ui.AbstractElement
     * @param {string|string[]|null} value
     * The placeholder to set for the input element. Only applicable to text
     * inputs, not to radio buttons, selects or similar.
     */
    setPlaceholder(value: string | string[] | null): void;
    /**
     * Check whether the input value was altered by the user.
     *
     * @instance
     * @memberof LuCI.ui.AbstractElement
     * @returns {boolean}
     * Returns `true` if the input value has been altered by the user or
     * `false` if it is unchanged. Note that if the user modifies the initial
     * value and changes it back to the original state, it is still reported
     * as changed.
     */
    isChanged(): boolean;
    /**
     * Check whether the current input value is valid.
     *
     * @instance
     * @memberof LuCI.ui.AbstractElement
     * @returns {boolean}
     * Returns `true` if the current input value is valid or `false` if it does
     * not meet the validation constraints.
     */
    isValid(): boolean;
    /**
     * Returns the current validation error
     *
     * @instance
     * @memberof LuCI.ui.AbstractElement
     * @returns {string}
     * The validation error at this time
     */
    getValidationError(): string;
    /**
     * Force validation of the current input value.
     *
     * Usually input validation is automatically triggered by various DOM events
     * bound to the input widget. In some cases it is required though to manually
     * trigger validation runs, e.g. when programmatically altering values.
     *
     * @instance
     * @memberof LuCI.ui.AbstractElement
     * @returns {boolean}
     */
    triggerValidation(): boolean;
    /**
     * Dispatch a custom (synthetic) event in response to received events.
     *
     * Sets up event handlers on the given target DOM node for the given event
     * names that dispatch a custom event of the given type to the widget root
     * DOM node.
     *
     * The primary purpose of this function is to set up a series of custom
     * uniform standard events such as `widget-update`, `validation-success`,
     * `validation-failure` etc. which are triggered by various different
     * widget specific native DOM events.
     *
     * @instance
     * @memberof LuCI.ui.AbstractElement
     * @param {Node} targetNode
     * Specifies the DOM node on which the native event listeners should be
     * registered.
     *
     * @param {string} synevent
     * The name of the custom event to dispatch to the widget root DOM node.
     *
     * @param {string[]} events
     * The native DOM events for which event handlers should be registered.
     */
    registerEvents(targetNode: Node, synevent: string, events: string[]): void;
    /**
     * Set up listeners for native DOM events that may update the widget value.
     *
     * Sets up event handlers on the given target DOM node for the given event
     * names which may cause the input value to update, such as `keyup` or
     * `onclick` events. In contrast to change events, such update events will
     * trigger input value validation.
     *
     * @instance
     * @memberof LuCI.ui.AbstractElement
     * @param {Node} targetNode
     * Specifies the DOM node on which the event listeners should be registered.
     *
     * @param {...string} events
     * The DOM events for which event handlers should be registered.
     */
    setUpdateEvents(targetNode: Node, ...events: string[]): void;
    /**
     * Set up listeners for native DOM events that may change the widget value.
     *
     * Sets up event handlers on the given target DOM node for the given event
     * names which may cause the input value to change completely, such as
     * `change` events in a select menu. In contrast to update events, such
     * change events will not trigger input value validation but they may cause
     * field dependencies to get re-evaluated and will mark the input widget
     * as dirty.
     *
     * @instance
     * @memberof LuCI.ui.AbstractElement
     * @param {Node} targetNode
     * Specifies the DOM node on which the event listeners should be registered.
     *
     * @param {...string} events
     * The DOM events for which event handlers should be registered.
     */
    setChangeEvents(targetNode: Node, ...events: string[]): void;
    /**
     * Render the widget, set up event listeners and return resulting markup.
     * @abstract
     * @instance
     * @memberof LuCI.ui.AbstractElement
     *
     * @returns {Node}
     * Returns a DOM Node or DocumentFragment containing the rendered
     * widget markup.
     */
    render(): Node;
}>, {
    /** @type {any} */ value: any;
    /** @type {any} */ options: any;
    __init__(value: any, options: any): void;
    /** @override */
    render(): Node;
    /**
     * @private
     * @param {Node} frameEl
     * @returns {Node}
     */
    bind(frameEl: Node): Node;
    /** @override */
    getValue(): any;
    /** @override */
    setValue(value: any): void;
}>>;
/**
 * Instantiate a textarea widget.
 *
 * @class Textarea
 * @memberof LuCI.ui
 * @augments LuCI.ui.AbstractElement
 *
 * @classdesc
 *
 * The `Textarea` class implements a multiline text area input field.
 *
 * UI widget instances are usually not supposed to be created by view code
 * directly, instead they're implicitly created by `LuCI.form` when
 * instantiating CBI forms.
 *
 * This class is automatically instantiated as part of `LuCI.ui`. To use it
 * in views, use `'require ui'` and refer to `ui.Textarea`. To import it in
 * external JavaScript, use `L.require("ui").then(...)` and access the
 * `Textarea` property of the class instance value.
 *
 * @param {string} [value=null]
 * The initial input value.
 *
 * @param {LuCI.ui.Textarea.InitOptions} [options]
 * Object describing the widget specific options to initialize the input.
 */
export const UITextarea: import("./classtypes.js").LuCIClass<import("./classtypes.js").Merge<import("./classtypes.js").Merge<import("./classtypes.js").BaseInstance, {
    /**
     * Read the current value of the input widget.
     *
     * @instance
     * @memberof LuCI.ui.AbstractElement
     * @returns {string|string[]|null}
     * The current value of the input element. For simple inputs like text
     * fields or selects, the return value type will be a - possibly empty -
     * string. Complex widgets such as `DynamicList` instances may result in
     * an array of strings or `null` for unset values.
     */
    getValue(): string | string[] | null;
    /**
     * Set the current value of the input widget.
     *
     * @instance
     * @memberof LuCI.ui.AbstractElement
     * @param {string|string[]|null} value
     * The value to set the input element to. For simple inputs like text
     * fields or selects, the value should be a - possibly empty - string.
     * Complex widgets such as `DynamicList` instances may accept string array
     * or `null` values.
     */
    setValue(value: string | string[] | null): void;
    /**
     * Set the current placeholder value of the input widget.
     *
     * @instance
     * @memberof LuCI.ui.AbstractElement
     * @param {string|string[]|null} value
     * The placeholder to set for the input element. Only applicable to text
     * inputs, not to radio buttons, selects or similar.
     */
    setPlaceholder(value: string | string[] | null): void;
    /**
     * Check whether the input value was altered by the user.
     *
     * @instance
     * @memberof LuCI.ui.AbstractElement
     * @returns {boolean}
     * Returns `true` if the input value has been altered by the user or
     * `false` if it is unchanged. Note that if the user modifies the initial
     * value and changes it back to the original state, it is still reported
     * as changed.
     */
    isChanged(): boolean;
    /**
     * Check whether the current input value is valid.
     *
     * @instance
     * @memberof LuCI.ui.AbstractElement
     * @returns {boolean}
     * Returns `true` if the current input value is valid or `false` if it does
     * not meet the validation constraints.
     */
    isValid(): boolean;
    /**
     * Returns the current validation error
     *
     * @instance
     * @memberof LuCI.ui.AbstractElement
     * @returns {string}
     * The validation error at this time
     */
    getValidationError(): string;
    /**
     * Force validation of the current input value.
     *
     * Usually input validation is automatically triggered by various DOM events
     * bound to the input widget. In some cases it is required though to manually
     * trigger validation runs, e.g. when programmatically altering values.
     *
     * @instance
     * @memberof LuCI.ui.AbstractElement
     * @returns {boolean}
     */
    triggerValidation(): boolean;
    /**
     * Dispatch a custom (synthetic) event in response to received events.
     *
     * Sets up event handlers on the given target DOM node for the given event
     * names that dispatch a custom event of the given type to the widget root
     * DOM node.
     *
     * The primary purpose of this function is to set up a series of custom
     * uniform standard events such as `widget-update`, `validation-success`,
     * `validation-failure` etc. which are triggered by various different
     * widget specific native DOM events.
     *
     * @instance
     * @memberof LuCI.ui.AbstractElement
     * @param {Node} targetNode
     * Specifies the DOM node on which the native event listeners should be
     * registered.
     *
     * @param {string} synevent
     * The name of the custom event to dispatch to the widget root DOM node.
     *
     * @param {string[]} events
     * The native DOM events for which event handlers should be registered.
     */
    registerEvents(targetNode: Node, synevent: string, events: string[]): void;
    /**
     * Set up listeners for native DOM events that may update the widget value.
     *
     * Sets up event handlers on the given target DOM node for the given event
     * names which may cause the input value to update, such as `keyup` or
     * `onclick` events. In contrast to change events, such update events will
     * trigger input value validation.
     *
     * @instance
     * @memberof LuCI.ui.AbstractElement
     * @param {Node} targetNode
     * Specifies the DOM node on which the event listeners should be registered.
     *
     * @param {...string} events
     * The DOM events for which event handlers should be registered.
     */
    setUpdateEvents(targetNode: Node, ...events: string[]): void;
    /**
     * Set up listeners for native DOM events that may change the widget value.
     *
     * Sets up event handlers on the given target DOM node for the given event
     * names which may cause the input value to change completely, such as
     * `change` events in a select menu. In contrast to update events, such
     * change events will not trigger input value validation but they may cause
     * field dependencies to get re-evaluated and will mark the input widget
     * as dirty.
     *
     * @instance
     * @memberof LuCI.ui.AbstractElement
     * @param {Node} targetNode
     * Specifies the DOM node on which the event listeners should be registered.
     *
     * @param {...string} events
     * The DOM events for which event handlers should be registered.
     */
    setChangeEvents(targetNode: Node, ...events: string[]): void;
    /**
     * Render the widget, set up event listeners and return resulting markup.
     * @abstract
     * @instance
     * @memberof LuCI.ui.AbstractElement
     *
     * @returns {Node}
     * Returns a DOM Node or DocumentFragment containing the rendered
     * widget markup.
     */
    render(): Node;
}>, {
    /** @type {any} */ value: any;
    /** @type {any} */ options: any;
    __init__(value: any, options: any): void;
    /** @override */
    render(): Node;
    /**
     * @private
     * @param {Node} frameEl
     * @returns {Node}
     */
    bind(frameEl: Node): Node;
    /** @override */
    getValue(): any;
    /** @override */
    setValue(value: any): void;
}>>;
/**
 * Instantiate a checkbox widget.
 *
 * @class Checkbox
 * @memberof LuCI.ui
 * @augments LuCI.ui.AbstractElement
 *
 * @classdesc
 *
 * The `Checkbox` class implements a simple checkbox input field.
 *
 * UI widget instances are usually not supposed to be created by view code
 * directly, instead they're implicitly created by `LuCI.form` when
 * instantiating CBI forms.
 *
 * This class is automatically instantiated as part of `LuCI.ui`. To use it
 * in views, use `'require ui'` and refer to `ui.Checkbox`. To import it in
 * external JavaScript, use `L.require("ui").then(...)` and access the
 * `Checkbox` property of the class instance value.
 *
 * @param {string} [value=null]
 * The initial input value.
 *
 * @param {LuCI.ui.Checkbox.InitOptions} [options]
 * Object describing the widget specific options to initialize the input.
 */
export const UICheckbox: import("./classtypes.js").LuCIClass<import("./classtypes.js").Merge<import("./classtypes.js").Merge<import("./classtypes.js").BaseInstance, {
    /**
     * Read the current value of the input widget.
     *
     * @instance
     * @memberof LuCI.ui.AbstractElement
     * @returns {string|string[]|null}
     * The current value of the input element. For simple inputs like text
     * fields or selects, the return value type will be a - possibly empty -
     * string. Complex widgets such as `DynamicList` instances may result in
     * an array of strings or `null` for unset values.
     */
    getValue(): string | string[] | null;
    /**
     * Set the current value of the input widget.
     *
     * @instance
     * @memberof LuCI.ui.AbstractElement
     * @param {string|string[]|null} value
     * The value to set the input element to. For simple inputs like text
     * fields or selects, the value should be a - possibly empty - string.
     * Complex widgets such as `DynamicList` instances may accept string array
     * or `null` values.
     */
    setValue(value: string | string[] | null): void;
    /**
     * Set the current placeholder value of the input widget.
     *
     * @instance
     * @memberof LuCI.ui.AbstractElement
     * @param {string|string[]|null} value
     * The placeholder to set for the input element. Only applicable to text
     * inputs, not to radio buttons, selects or similar.
     */
    setPlaceholder(value: string | string[] | null): void;
    /**
     * Check whether the input value was altered by the user.
     *
     * @instance
     * @memberof LuCI.ui.AbstractElement
     * @returns {boolean}
     * Returns `true` if the input value has been altered by the user or
     * `false` if it is unchanged. Note that if the user modifies the initial
     * value and changes it back to the original state, it is still reported
     * as changed.
     */
    isChanged(): boolean;
    /**
     * Check whether the current input value is valid.
     *
     * @instance
     * @memberof LuCI.ui.AbstractElement
     * @returns {boolean}
     * Returns `true` if the current input value is valid or `false` if it does
     * not meet the validation constraints.
     */
    isValid(): boolean;
    /**
     * Returns the current validation error
     *
     * @instance
     * @memberof LuCI.ui.AbstractElement
     * @returns {string}
     * The validation error at this time
     */
    getValidationError(): string;
    /**
     * Force validation of the current input value.
     *
     * Usually input validation is automatically triggered by various DOM events
     * bound to the input widget. In some cases it is required though to manually
     * trigger validation runs, e.g. when programmatically altering values.
     *
     * @instance
     * @memberof LuCI.ui.AbstractElement
     * @returns {boolean}
     */
    triggerValidation(): boolean;
    /**
     * Dispatch a custom (synthetic) event in response to received events.
     *
     * Sets up event handlers on the given target DOM node for the given event
     * names that dispatch a custom event of the given type to the widget root
     * DOM node.
     *
     * The primary purpose of this function is to set up a series of custom
     * uniform standard events such as `widget-update`, `validation-success`,
     * `validation-failure` etc. which are triggered by various different
     * widget specific native DOM events.
     *
     * @instance
     * @memberof LuCI.ui.AbstractElement
     * @param {Node} targetNode
     * Specifies the DOM node on which the native event listeners should be
     * registered.
     *
     * @param {string} synevent
     * The name of the custom event to dispatch to the widget root DOM node.
     *
     * @param {string[]} events
     * The native DOM events for which event handlers should be registered.
     */
    registerEvents(targetNode: Node, synevent: string, events: string[]): void;
    /**
     * Set up listeners for native DOM events that may update the widget value.
     *
     * Sets up event handlers on the given target DOM node for the given event
     * names which may cause the input value to update, such as `keyup` or
     * `onclick` events. In contrast to change events, such update events will
     * trigger input value validation.
     *
     * @instance
     * @memberof LuCI.ui.AbstractElement
     * @param {Node} targetNode
     * Specifies the DOM node on which the event listeners should be registered.
     *
     * @param {...string} events
     * The DOM events for which event handlers should be registered.
     */
    setUpdateEvents(targetNode: Node, ...events: string[]): void;
    /**
     * Set up listeners for native DOM events that may change the widget value.
     *
     * Sets up event handlers on the given target DOM node for the given event
     * names which may cause the input value to change completely, such as
     * `change` events in a select menu. In contrast to update events, such
     * change events will not trigger input value validation but they may cause
     * field dependencies to get re-evaluated and will mark the input widget
     * as dirty.
     *
     * @instance
     * @memberof LuCI.ui.AbstractElement
     * @param {Node} targetNode
     * Specifies the DOM node on which the event listeners should be registered.
     *
     * @param {...string} events
     * The DOM events for which event handlers should be registered.
     */
    setChangeEvents(targetNode: Node, ...events: string[]): void;
    /**
     * Render the widget, set up event listeners and return resulting markup.
     * @abstract
     * @instance
     * @memberof LuCI.ui.AbstractElement
     *
     * @returns {Node}
     * Returns a DOM Node or DocumentFragment containing the rendered
     * widget markup.
     */
    render(): Node;
}>, {
    /** @type {any} */ value: any;
    /** @type {any} */ options: any;
    __init__(value: any, options: any): void;
    /** @override */
    render(): Node;
    /**
     * @private
     * @param {Node} frameEl
     * @returns {Node}
     */
    bind(frameEl: Node): Node;
    /**
     * Test whether the checkbox is currently checked.
     *
     * @instance
     * @memberof LuCI.ui.Checkbox
     * @returns {boolean}
     * Returns `true` when the checkbox is currently checked, otherwise `false`.
     */
    isChecked(): boolean;
    /** @override */
    getValue(): any;
    /** @override */
    setValue(value: any): void;
}>>;
/**
 * Instantiate a select dropdown or checkbox/radiobutton group.
 *
 * @class Select
 * @memberof LuCI.ui
 * @augments LuCI.ui.AbstractElement
 *
 * @classdesc
 *
 * The `Select` class implements either a traditional HTML `<select>` element
 * or a group of checkboxes or radio buttons, depending on whether multiple
 * values are enabled or not.
 *
 * UI widget instances are usually not supposed to be created by view code
 * directly, instead they're implicitly created by `LuCI.form` when
 * instantiating CBI forms.
 *
 * This class is automatically instantiated as part of `LuCI.ui`. To use it
 * in views, use `'require ui'` and refer to `ui.Select`. To import it in
 * external JavaScript, use `L.require("ui").then(...)` and access the
 * `Select` property of the class instance value.
 *
 * @param {string|string[]} [value=null]
 * The initial input value(s).
 *
 * @param {Object<string, string>} choices
 * Object containing the selectable choices of the widget. The object keys
 * serve as values for the different choices while the values are used as
 * choice labels.
 *
 * @param {LuCI.ui.Select.InitOptions} [options]
 * Object describing the widget specific options to initialize the inputs.
 */
export const UISelect: import("./classtypes.js").LuCIClass<import("./classtypes.js").Merge<import("./classtypes.js").Merge<import("./classtypes.js").BaseInstance, {
    /**
     * Read the current value of the input widget.
     *
     * @instance
     * @memberof LuCI.ui.AbstractElement
     * @returns {string|string[]|null}
     * The current value of the input element. For simple inputs like text
     * fields or selects, the return value type will be a - possibly empty -
     * string. Complex widgets such as `DynamicList` instances may result in
     * an array of strings or `null` for unset values.
     */
    getValue(): string | string[] | null;
    /**
     * Set the current value of the input widget.
     *
     * @instance
     * @memberof LuCI.ui.AbstractElement
     * @param {string|string[]|null} value
     * The value to set the input element to. For simple inputs like text
     * fields or selects, the value should be a - possibly empty - string.
     * Complex widgets such as `DynamicList` instances may accept string array
     * or `null` values.
     */
    setValue(value: string | string[] | null): void;
    /**
     * Set the current placeholder value of the input widget.
     *
     * @instance
     * @memberof LuCI.ui.AbstractElement
     * @param {string|string[]|null} value
     * The placeholder to set for the input element. Only applicable to text
     * inputs, not to radio buttons, selects or similar.
     */
    setPlaceholder(value: string | string[] | null): void;
    /**
     * Check whether the input value was altered by the user.
     *
     * @instance
     * @memberof LuCI.ui.AbstractElement
     * @returns {boolean}
     * Returns `true` if the input value has been altered by the user or
     * `false` if it is unchanged. Note that if the user modifies the initial
     * value and changes it back to the original state, it is still reported
     * as changed.
     */
    isChanged(): boolean;
    /**
     * Check whether the current input value is valid.
     *
     * @instance
     * @memberof LuCI.ui.AbstractElement
     * @returns {boolean}
     * Returns `true` if the current input value is valid or `false` if it does
     * not meet the validation constraints.
     */
    isValid(): boolean;
    /**
     * Returns the current validation error
     *
     * @instance
     * @memberof LuCI.ui.AbstractElement
     * @returns {string}
     * The validation error at this time
     */
    getValidationError(): string;
    /**
     * Force validation of the current input value.
     *
     * Usually input validation is automatically triggered by various DOM events
     * bound to the input widget. In some cases it is required though to manually
     * trigger validation runs, e.g. when programmatically altering values.
     *
     * @instance
     * @memberof LuCI.ui.AbstractElement
     * @returns {boolean}
     */
    triggerValidation(): boolean;
    /**
     * Dispatch a custom (synthetic) event in response to received events.
     *
     * Sets up event handlers on the given target DOM node for the given event
     * names that dispatch a custom event of the given type to the widget root
     * DOM node.
     *
     * The primary purpose of this function is to set up a series of custom
     * uniform standard events such as `widget-update`, `validation-success`,
     * `validation-failure` etc. which are triggered by various different
     * widget specific native DOM events.
     *
     * @instance
     * @memberof LuCI.ui.AbstractElement
     * @param {Node} targetNode
     * Specifies the DOM node on which the native event listeners should be
     * registered.
     *
     * @param {string} synevent
     * The name of the custom event to dispatch to the widget root DOM node.
     *
     * @param {string[]} events
     * The native DOM events for which event handlers should be registered.
     */
    registerEvents(targetNode: Node, synevent: string, events: string[]): void;
    /**
     * Set up listeners for native DOM events that may update the widget value.
     *
     * Sets up event handlers on the given target DOM node for the given event
     * names which may cause the input value to update, such as `keyup` or
     * `onclick` events. In contrast to change events, such update events will
     * trigger input value validation.
     *
     * @instance
     * @memberof LuCI.ui.AbstractElement
     * @param {Node} targetNode
     * Specifies the DOM node on which the event listeners should be registered.
     *
     * @param {...string} events
     * The DOM events for which event handlers should be registered.
     */
    setUpdateEvents(targetNode: Node, ...events: string[]): void;
    /**
     * Set up listeners for native DOM events that may change the widget value.
     *
     * Sets up event handlers on the given target DOM node for the given event
     * names which may cause the input value to change completely, such as
     * `change` events in a select menu. In contrast to update events, such
     * change events will not trigger input value validation but they may cause
     * field dependencies to get re-evaluated and will mark the input widget
     * as dirty.
     *
     * @instance
     * @memberof LuCI.ui.AbstractElement
     * @param {Node} targetNode
     * Specifies the DOM node on which the event listeners should be registered.
     *
     * @param {...string} events
     * The DOM events for which event handlers should be registered.
     */
    setChangeEvents(targetNode: Node, ...events: string[]): void;
    /**
     * Render the widget, set up event listeners and return resulting markup.
     * @abstract
     * @instance
     * @memberof LuCI.ui.AbstractElement
     *
     * @returns {Node}
     * Returns a DOM Node or DocumentFragment containing the rendered
     * widget markup.
     */
    render(): Node;
}>, {
    /** @type {any} */ values: any;
    /** @type {any} */ choices: any;
    /** @type {any} */ options: any;
    __init__(value: any, choices: any, options: any): void;
    /** @override */
    render(): Node;
    /**
     * @private
     * @param {Node} frameEl
     * @returns {Node}
     */
    bind(frameEl: Node): Node;
    /** @override */
    getValue(): any;
    /** @override */
    setValue(value: any): void;
}>>;
/**
 * Instantiate a rich dropdown choice widget.
 *
 * @class Dropdown
 * @memberof LuCI.ui
 * @augments LuCI.ui.AbstractElement
 *
 * @classdesc
 *
 * The `Dropdown` class implements a rich, stylable dropdown menu which
 * supports non-text choice labels.
 *
 * UI widget instances are usually not supposed to be created by view code
 * directly, instead they're implicitly created by `LuCI.form` when
 * instantiating CBI forms.
 *
 * This class is automatically instantiated as part of `LuCI.ui`. To use it
 * in views, use `'require ui'` and refer to `ui.Dropdown`. To import it in
 * external JavaScript, use `L.require("ui").then(...)` and access the
 * `Dropdown` property of the class instance value.
 *
 * @param {string|string[]} [value=null]
 * The initial input value(s).
 *
 * @param {Object<string, *>} choices
 * Object containing the selectable choices of the widget. The object keys
 * serve as values for the different choices while the values are used as
 * choice labels.
 *
 * @param {LuCI.ui.Dropdown.InitOptions} [options]
 * Object describing the widget specific options to initialize the dropdown.
 */
export const UIDropdown: import("./classtypes.js").LuCIClass<import("./classtypes.js").Merge<import("./classtypes.js").Merge<import("./classtypes.js").BaseInstance, {
    /**
     * Read the current value of the input widget.
     *
     * @instance
     * @memberof LuCI.ui.AbstractElement
     * @returns {string|string[]|null}
     * The current value of the input element. For simple inputs like text
     * fields or selects, the return value type will be a - possibly empty -
     * string. Complex widgets such as `DynamicList` instances may result in
     * an array of strings or `null` for unset values.
     */
    getValue(): string | string[] | null;
    /**
     * Set the current value of the input widget.
     *
     * @instance
     * @memberof LuCI.ui.AbstractElement
     * @param {string|string[]|null} value
     * The value to set the input element to. For simple inputs like text
     * fields or selects, the value should be a - possibly empty - string.
     * Complex widgets such as `DynamicList` instances may accept string array
     * or `null` values.
     */
    setValue(value: string | string[] | null): void;
    /**
     * Set the current placeholder value of the input widget.
     *
     * @instance
     * @memberof LuCI.ui.AbstractElement
     * @param {string|string[]|null} value
     * The placeholder to set for the input element. Only applicable to text
     * inputs, not to radio buttons, selects or similar.
     */
    setPlaceholder(value: string | string[] | null): void;
    /**
     * Check whether the input value was altered by the user.
     *
     * @instance
     * @memberof LuCI.ui.AbstractElement
     * @returns {boolean}
     * Returns `true` if the input value has been altered by the user or
     * `false` if it is unchanged. Note that if the user modifies the initial
     * value and changes it back to the original state, it is still reported
     * as changed.
     */
    isChanged(): boolean;
    /**
     * Check whether the current input value is valid.
     *
     * @instance
     * @memberof LuCI.ui.AbstractElement
     * @returns {boolean}
     * Returns `true` if the current input value is valid or `false` if it does
     * not meet the validation constraints.
     */
    isValid(): boolean;
    /**
     * Returns the current validation error
     *
     * @instance
     * @memberof LuCI.ui.AbstractElement
     * @returns {string}
     * The validation error at this time
     */
    getValidationError(): string;
    /**
     * Force validation of the current input value.
     *
     * Usually input validation is automatically triggered by various DOM events
     * bound to the input widget. In some cases it is required though to manually
     * trigger validation runs, e.g. when programmatically altering values.
     *
     * @instance
     * @memberof LuCI.ui.AbstractElement
     * @returns {boolean}
     */
    triggerValidation(): boolean;
    /**
     * Dispatch a custom (synthetic) event in response to received events.
     *
     * Sets up event handlers on the given target DOM node for the given event
     * names that dispatch a custom event of the given type to the widget root
     * DOM node.
     *
     * The primary purpose of this function is to set up a series of custom
     * uniform standard events such as `widget-update`, `validation-success`,
     * `validation-failure` etc. which are triggered by various different
     * widget specific native DOM events.
     *
     * @instance
     * @memberof LuCI.ui.AbstractElement
     * @param {Node} targetNode
     * Specifies the DOM node on which the native event listeners should be
     * registered.
     *
     * @param {string} synevent
     * The name of the custom event to dispatch to the widget root DOM node.
     *
     * @param {string[]} events
     * The native DOM events for which event handlers should be registered.
     */
    registerEvents(targetNode: Node, synevent: string, events: string[]): void;
    /**
     * Set up listeners for native DOM events that may update the widget value.
     *
     * Sets up event handlers on the given target DOM node for the given event
     * names which may cause the input value to update, such as `keyup` or
     * `onclick` events. In contrast to change events, such update events will
     * trigger input value validation.
     *
     * @instance
     * @memberof LuCI.ui.AbstractElement
     * @param {Node} targetNode
     * Specifies the DOM node on which the event listeners should be registered.
     *
     * @param {...string} events
     * The DOM events for which event handlers should be registered.
     */
    setUpdateEvents(targetNode: Node, ...events: string[]): void;
    /**
     * Set up listeners for native DOM events that may change the widget value.
     *
     * Sets up event handlers on the given target DOM node for the given event
     * names which may cause the input value to change completely, such as
     * `change` events in a select menu. In contrast to update events, such
     * change events will not trigger input value validation but they may cause
     * field dependencies to get re-evaluated and will mark the input widget
     * as dirty.
     *
     * @instance
     * @memberof LuCI.ui.AbstractElement
     * @param {Node} targetNode
     * Specifies the DOM node on which the event listeners should be registered.
     *
     * @param {...string} events
     * The DOM events for which event handlers should be registered.
     */
    setChangeEvents(targetNode: Node, ...events: string[]): void;
    /**
     * Render the widget, set up event listeners and return resulting markup.
     * @abstract
     * @instance
     * @memberof LuCI.ui.AbstractElement
     *
     * @returns {Node}
     * Returns a DOM Node or DocumentFragment containing the rendered
     * widget markup.
     */
    render(): Node;
}>, {
    /** @type {any} */ values: any;
    /** @type {any} */ choices: any;
    /** @type {any} */ options: any;
    __init__(value: any, choices: any, options: any): void;
    /** @override */
    render(): Node;
    /**
     * @private
     * @param {Node} sb
     * @returns {Node}
     */
    bind(sb: Node): Node;
    /**
     * @private
     * @param {Node} element
     * @returns {document}
     */
    getScrollParent(element: Node): Document;
    /**
     * @private
     * @param {Node} sb
     */
    openDropdown(sb: Node): void;
    /**
     * @private
     * @param {Node} sb
     * @param {boolean} no_focus
     */
    closeDropdown(sb: Node, no_focus: boolean): void;
    /**
     * @private
     * @param {Node} sb
     * @param {Node} li list item
     * @param {boolean} force_state
     */
    toggleItem(sb: Node, li: Node, force_state: boolean): void;
    /**
     * @private
     * @param {Node} sb
     * @param {Node} li list item
     */
    transformItem(sb: Node, li: Node): void;
    /**
     * @private
     * @param {Node} sb
     * @param {Node} ul unordered list
     */
    saveValues(sb: Node, ul: Node): void;
    /**
     * @private
     * @param {Node} sb
     * @param {string[]} values
     */
    setValues(sb: Node, values: string[]): void;
    /**
     * @private
     * @param {Node} sb
     * @param {Node} elem
     * @param {boolean} scroll
     */
    setFocus(sb: Node, elem: Node, scroll: boolean): void;
    /**
     * @private
     * @param {Event} ev
     */
    handleMouseout(ev: Event): void;
    /**
     * @private
     * @param {Node} sb
     * @param {string} value
     * @param {string} label
     * @returns {Node}
     */
    createChoiceElement(sb: Node, value: string, label: string): Node;
    /**
     * @private
     * @param {Node} sb
     * @param {string} value
     */
    createItems(sb: Node, value: string): void;
    /**
     * Remove all existing choices from the dropdown menu.
     *
     * This function removes all preexisting dropdown choices from the widget,
     * keeping only choices currently being selected unless `reset_values` is
     * given, in which case all choices and deselected and removed.
     *
     * @instance
     * @memberof LuCI.ui.Dropdown
     * @param {boolean} [reset_value=false]
     * If set to `true`, deselect and remove selected choices as well instead
     * of keeping them.
     */
    clearChoices(reset_value?: boolean): void;
    /**
     * Add new choices to the dropdown menu.
     *
     * This function adds further choices to an existing dropdown menu,
     * ignoring choice values which are already present.
     *
     * @instance
     * @memberof LuCI.ui.Dropdown
     * @param {string[]} values
     * The choice values to add to the dropdown widget.
     *
     * @param {Object<string, *>} labels
     * The choice label values to use when adding dropdown choices. If no
     * label is found for a particular choice value, the value itself is used
     * as label text. Choice labels may be any valid value accepted by
     * {@link LuCI.dom#content}.
     */
    addChoices(values: string[], labels: {
        [x: string]: any;
    }): void;
    /**
     * Close all open dropdown widgets in the current document.
     */
    closeAllDropdowns(): void;
    /**
     * @private
     * @param {Event} ev
     */
    handleClick(ev: Event): void;
    /**
     * @private
     * @param {Event} ev
     */
    handleKeydown(ev: Event): void;
    /**
     * @private
     * @param {Event} ev
     */
    handleDropdownClose(ev: Event): void;
    /**
     * @private
     * @param {Event} ev
     */
    handleDropdownSelect(ev: Event): void;
    /**
     * @private
     * @param {Event} ev
     */
    handleMouseover(ev: Event): void;
    /**
     * @private
     * @param {Event} ev
     */
    handleFocus(ev: Event): void;
    /**
     * @private
     * @param {Event} ev
     */
    handleCanaryFocus(ev: Event): void;
    /**
     * @private
     * @param {Event} ev
     */
    handleCreateKeydown(ev: Event): void;
    /**
     * @private
     * @param {Event} ev
     */
    handleCreateFocus(ev: Event): void;
    /**
     * @private
     * @param {Event} ev
     */
    handleCreateBlur(ev: Event): void;
    /**
     * @private
     * @param {Event} ev
     */
    handleCreateClick(ev: Event): void;
    /** @override */
    setValue(values: any): void;
    /** @override */
    getValue(): any;
}>>;
/**
 * Instantiate a rich dropdown choice widget allowing custom values.
 *
 * @class Combobox
 * @memberof LuCI.ui
 * @augments LuCI.ui.Dropdown
 *
 * @classdesc
 *
 * The `Combobox` class implements a rich, stylable dropdown menu which allows
 * to enter custom values. Historically, comboboxes used to be a dedicated
 * widget type in LuCI but nowadays they are direct aliases of dropdown widgets
 * with a set of enforced default properties for easier instantiation.
 *
 * UI widget instances are usually not supposed to be created by view code
 * directly, instead they're implicitly created by `LuCI.form` when
 * instantiating CBI forms.
 *
 * This class is automatically instantiated as part of `LuCI.ui`. To use it
 * in views, use `'require ui'` and refer to `ui.Combobox`. To import it in
 * external JavaScript, use `L.require("ui").then(...)` and access the
 * `Combobox` property of the class instance value.
 *
 * @param {string|string[]} [value=null]
 * The initial input value(s).
 *
 * @param {Object<string, *>} choices
 * Object containing the selectable choices of the widget. The object keys
 * serve as values for the different choices while the values are used as
 * choice labels.
 *
 * @param {LuCI.ui.Combobox.InitOptions} [options]
 * Object describing the widget specific options to initialize the dropdown.
 */
export const UICombobox: import("./classtypes.js").LuCIClass<import("./classtypes.js").Merge<import("./classtypes.js").Merge<import("./classtypes.js").Merge<import("./classtypes.js").BaseInstance, {
    /**
     * Read the current value of the input widget.
     *
     * @instance
     * @memberof LuCI.ui.AbstractElement
     * @returns {string|string[]|null}
     * The current value of the input element. For simple inputs like text
     * fields or selects, the return value type will be a - possibly empty -
     * string. Complex widgets such as `DynamicList` instances may result in
     * an array of strings or `null` for unset values.
     */
    getValue(): string | string[] | null;
    /**
     * Set the current value of the input widget.
     *
     * @instance
     * @memberof LuCI.ui.AbstractElement
     * @param {string|string[]|null} value
     * The value to set the input element to. For simple inputs like text
     * fields or selects, the value should be a - possibly empty - string.
     * Complex widgets such as `DynamicList` instances may accept string array
     * or `null` values.
     */
    setValue(value: string | string[] | null): void;
    /**
     * Set the current placeholder value of the input widget.
     *
     * @instance
     * @memberof LuCI.ui.AbstractElement
     * @param {string|string[]|null} value
     * The placeholder to set for the input element. Only applicable to text
     * inputs, not to radio buttons, selects or similar.
     */
    setPlaceholder(value: string | string[] | null): void;
    /**
     * Check whether the input value was altered by the user.
     *
     * @instance
     * @memberof LuCI.ui.AbstractElement
     * @returns {boolean}
     * Returns `true` if the input value has been altered by the user or
     * `false` if it is unchanged. Note that if the user modifies the initial
     * value and changes it back to the original state, it is still reported
     * as changed.
     */
    isChanged(): boolean;
    /**
     * Check whether the current input value is valid.
     *
     * @instance
     * @memberof LuCI.ui.AbstractElement
     * @returns {boolean}
     * Returns `true` if the current input value is valid or `false` if it does
     * not meet the validation constraints.
     */
    isValid(): boolean;
    /**
     * Returns the current validation error
     *
     * @instance
     * @memberof LuCI.ui.AbstractElement
     * @returns {string}
     * The validation error at this time
     */
    getValidationError(): string;
    /**
     * Force validation of the current input value.
     *
     * Usually input validation is automatically triggered by various DOM events
     * bound to the input widget. In some cases it is required though to manually
     * trigger validation runs, e.g. when programmatically altering values.
     *
     * @instance
     * @memberof LuCI.ui.AbstractElement
     * @returns {boolean}
     */
    triggerValidation(): boolean;
    /**
     * Dispatch a custom (synthetic) event in response to received events.
     *
     * Sets up event handlers on the given target DOM node for the given event
     * names that dispatch a custom event of the given type to the widget root
     * DOM node.
     *
     * The primary purpose of this function is to set up a series of custom
     * uniform standard events such as `widget-update`, `validation-success`,
     * `validation-failure` etc. which are triggered by various different
     * widget specific native DOM events.
     *
     * @instance
     * @memberof LuCI.ui.AbstractElement
     * @param {Node} targetNode
     * Specifies the DOM node on which the native event listeners should be
     * registered.
     *
     * @param {string} synevent
     * The name of the custom event to dispatch to the widget root DOM node.
     *
     * @param {string[]} events
     * The native DOM events for which event handlers should be registered.
     */
    registerEvents(targetNode: Node, synevent: string, events: string[]): void;
    /**
     * Set up listeners for native DOM events that may update the widget value.
     *
     * Sets up event handlers on the given target DOM node for the given event
     * names which may cause the input value to update, such as `keyup` or
     * `onclick` events. In contrast to change events, such update events will
     * trigger input value validation.
     *
     * @instance
     * @memberof LuCI.ui.AbstractElement
     * @param {Node} targetNode
     * Specifies the DOM node on which the event listeners should be registered.
     *
     * @param {...string} events
     * The DOM events for which event handlers should be registered.
     */
    setUpdateEvents(targetNode: Node, ...events: string[]): void;
    /**
     * Set up listeners for native DOM events that may change the widget value.
     *
     * Sets up event handlers on the given target DOM node for the given event
     * names which may cause the input value to change completely, such as
     * `change` events in a select menu. In contrast to update events, such
     * change events will not trigger input value validation but they may cause
     * field dependencies to get re-evaluated and will mark the input widget
     * as dirty.
     *
     * @instance
     * @memberof LuCI.ui.AbstractElement
     * @param {Node} targetNode
     * Specifies the DOM node on which the event listeners should be registered.
     *
     * @param {...string} events
     * The DOM events for which event handlers should be registered.
     */
    setChangeEvents(targetNode: Node, ...events: string[]): void;
    /**
     * Render the widget, set up event listeners and return resulting markup.
     * @abstract
     * @instance
     * @memberof LuCI.ui.AbstractElement
     *
     * @returns {Node}
     * Returns a DOM Node or DocumentFragment containing the rendered
     * widget markup.
     */
    render(): Node;
}>, {
    /** @type {any} */ values: any;
    /** @type {any} */ choices: any;
    /** @type {any} */ options: any;
    __init__(value: any, choices: any, options: any): void;
    /** @override */
    render(): Node;
    /**
     * @private
     * @param {Node} sb
     * @returns {Node}
     */
    bind(sb: Node): Node;
    /**
     * @private
     * @param {Node} element
     * @returns {document}
     */
    getScrollParent(element: Node): Document;
    /**
     * @private
     * @param {Node} sb
     */
    openDropdown(sb: Node): void;
    /**
     * @private
     * @param {Node} sb
     * @param {boolean} no_focus
     */
    closeDropdown(sb: Node, no_focus: boolean): void;
    /**
     * @private
     * @param {Node} sb
     * @param {Node} li list item
     * @param {boolean} force_state
     */
    toggleItem(sb: Node, li: Node, force_state: boolean): void;
    /**
     * @private
     * @param {Node} sb
     * @param {Node} li list item
     */
    transformItem(sb: Node, li: Node): void;
    /**
     * @private
     * @param {Node} sb
     * @param {Node} ul unordered list
     */
    saveValues(sb: Node, ul: Node): void;
    /**
     * @private
     * @param {Node} sb
     * @param {string[]} values
     */
    setValues(sb: Node, values: string[]): void;
    /**
     * @private
     * @param {Node} sb
     * @param {Node} elem
     * @param {boolean} scroll
     */
    setFocus(sb: Node, elem: Node, scroll: boolean): void;
    /**
     * @private
     * @param {Event} ev
     */
    handleMouseout(ev: Event): void;
    /**
     * @private
     * @param {Node} sb
     * @param {string} value
     * @param {string} label
     * @returns {Node}
     */
    createChoiceElement(sb: Node, value: string, label: string): Node;
    /**
     * @private
     * @param {Node} sb
     * @param {string} value
     */
    createItems(sb: Node, value: string): void;
    /**
     * Remove all existing choices from the dropdown menu.
     *
     * This function removes all preexisting dropdown choices from the widget,
     * keeping only choices currently being selected unless `reset_values` is
     * given, in which case all choices and deselected and removed.
     *
     * @instance
     * @memberof LuCI.ui.Dropdown
     * @param {boolean} [reset_value=false]
     * If set to `true`, deselect and remove selected choices as well instead
     * of keeping them.
     */
    clearChoices(reset_value?: boolean): void;
    /**
     * Add new choices to the dropdown menu.
     *
     * This function adds further choices to an existing dropdown menu,
     * ignoring choice values which are already present.
     *
     * @instance
     * @memberof LuCI.ui.Dropdown
     * @param {string[]} values
     * The choice values to add to the dropdown widget.
     *
     * @param {Object<string, *>} labels
     * The choice label values to use when adding dropdown choices. If no
     * label is found for a particular choice value, the value itself is used
     * as label text. Choice labels may be any valid value accepted by
     * {@link LuCI.dom#content}.
     */
    addChoices(values: string[], labels: {
        [x: string]: any;
    }): void;
    /**
     * Close all open dropdown widgets in the current document.
     */
    closeAllDropdowns(): void;
    /**
     * @private
     * @param {Event} ev
     */
    handleClick(ev: Event): void;
    /**
     * @private
     * @param {Event} ev
     */
    handleKeydown(ev: Event): void;
    /**
     * @private
     * @param {Event} ev
     */
    handleDropdownClose(ev: Event): void;
    /**
     * @private
     * @param {Event} ev
     */
    handleDropdownSelect(ev: Event): void;
    /**
     * @private
     * @param {Event} ev
     */
    handleMouseover(ev: Event): void;
    /**
     * @private
     * @param {Event} ev
     */
    handleFocus(ev: Event): void;
    /**
     * @private
     * @param {Event} ev
     */
    handleCanaryFocus(ev: Event): void;
    /**
     * @private
     * @param {Event} ev
     */
    handleCreateKeydown(ev: Event): void;
    /**
     * @private
     * @param {Event} ev
     */
    handleCreateFocus(ev: Event): void;
    /**
     * @private
     * @param {Event} ev
     */
    handleCreateBlur(ev: Event): void;
    /**
     * @private
     * @param {Event} ev
     */
    handleCreateClick(ev: Event): void;
    /** @override */
    setValue(values: any): void;
    /** @override */
    getValue(): any;
}>, {
    __init__(value: any, choices: any, options: any): void;
}>>;
/**
 * Instantiate a combo button widget offering multiple action choices.
 *
 * @class ComboButton
 * @memberof LuCI.ui
 * @augments LuCI.ui.Dropdown
 *
 * @classdesc
 *
 * The `ComboButton` class implements a button element which can be expanded
 * into a dropdown to chose from a set of different action choices.
 *
 * UI widget instances are usually not supposed to be created by view code
 * directly, instead they're implicitly created by `LuCI.form` when
 * instantiating CBI forms.
 *
 * This class is automatically instantiated as part of `LuCI.ui`. To use it
 * in views, use `'require ui'` and refer to `ui.ComboButton`. To import it in
 * external JavaScript, use `L.require("ui").then(...)` and access the
 * `ComboButton` property of the class instance value.
 *
 * @param {string|string[]} [value=null]
 * The initial input value(s).
 *
 * @param {Object<string, *>} choices
 * Object containing the selectable choices of the widget. The object keys
 * serve as values for the different choices while the values are used as
 * choice labels.
 *
 * @param {LuCI.ui.ComboButton.InitOptions} [options]
 * Object describing the widget specific options to initialize the button.
 */
export const UIComboButton: import("./classtypes.js").LuCIClass<import("./classtypes.js").Merge<import("./classtypes.js").Merge<import("./classtypes.js").Merge<import("./classtypes.js").BaseInstance, {
    /**
     * Read the current value of the input widget.
     *
     * @instance
     * @memberof LuCI.ui.AbstractElement
     * @returns {string|string[]|null}
     * The current value of the input element. For simple inputs like text
     * fields or selects, the return value type will be a - possibly empty -
     * string. Complex widgets such as `DynamicList` instances may result in
     * an array of strings or `null` for unset values.
     */
    getValue(): string | string[] | null;
    /**
     * Set the current value of the input widget.
     *
     * @instance
     * @memberof LuCI.ui.AbstractElement
     * @param {string|string[]|null} value
     * The value to set the input element to. For simple inputs like text
     * fields or selects, the value should be a - possibly empty - string.
     * Complex widgets such as `DynamicList` instances may accept string array
     * or `null` values.
     */
    setValue(value: string | string[] | null): void;
    /**
     * Set the current placeholder value of the input widget.
     *
     * @instance
     * @memberof LuCI.ui.AbstractElement
     * @param {string|string[]|null} value
     * The placeholder to set for the input element. Only applicable to text
     * inputs, not to radio buttons, selects or similar.
     */
    setPlaceholder(value: string | string[] | null): void;
    /**
     * Check whether the input value was altered by the user.
     *
     * @instance
     * @memberof LuCI.ui.AbstractElement
     * @returns {boolean}
     * Returns `true` if the input value has been altered by the user or
     * `false` if it is unchanged. Note that if the user modifies the initial
     * value and changes it back to the original state, it is still reported
     * as changed.
     */
    isChanged(): boolean;
    /**
     * Check whether the current input value is valid.
     *
     * @instance
     * @memberof LuCI.ui.AbstractElement
     * @returns {boolean}
     * Returns `true` if the current input value is valid or `false` if it does
     * not meet the validation constraints.
     */
    isValid(): boolean;
    /**
     * Returns the current validation error
     *
     * @instance
     * @memberof LuCI.ui.AbstractElement
     * @returns {string}
     * The validation error at this time
     */
    getValidationError(): string;
    /**
     * Force validation of the current input value.
     *
     * Usually input validation is automatically triggered by various DOM events
     * bound to the input widget. In some cases it is required though to manually
     * trigger validation runs, e.g. when programmatically altering values.
     *
     * @instance
     * @memberof LuCI.ui.AbstractElement
     * @returns {boolean}
     */
    triggerValidation(): boolean;
    /**
     * Dispatch a custom (synthetic) event in response to received events.
     *
     * Sets up event handlers on the given target DOM node for the given event
     * names that dispatch a custom event of the given type to the widget root
     * DOM node.
     *
     * The primary purpose of this function is to set up a series of custom
     * uniform standard events such as `widget-update`, `validation-success`,
     * `validation-failure` etc. which are triggered by various different
     * widget specific native DOM events.
     *
     * @instance
     * @memberof LuCI.ui.AbstractElement
     * @param {Node} targetNode
     * Specifies the DOM node on which the native event listeners should be
     * registered.
     *
     * @param {string} synevent
     * The name of the custom event to dispatch to the widget root DOM node.
     *
     * @param {string[]} events
     * The native DOM events for which event handlers should be registered.
     */
    registerEvents(targetNode: Node, synevent: string, events: string[]): void;
    /**
     * Set up listeners for native DOM events that may update the widget value.
     *
     * Sets up event handlers on the given target DOM node for the given event
     * names which may cause the input value to update, such as `keyup` or
     * `onclick` events. In contrast to change events, such update events will
     * trigger input value validation.
     *
     * @instance
     * @memberof LuCI.ui.AbstractElement
     * @param {Node} targetNode
     * Specifies the DOM node on which the event listeners should be registered.
     *
     * @param {...string} events
     * The DOM events for which event handlers should be registered.
     */
    setUpdateEvents(targetNode: Node, ...events: string[]): void;
    /**
     * Set up listeners for native DOM events that may change the widget value.
     *
     * Sets up event handlers on the given target DOM node for the given event
     * names which may cause the input value to change completely, such as
     * `change` events in a select menu. In contrast to update events, such
     * change events will not trigger input value validation but they may cause
     * field dependencies to get re-evaluated and will mark the input widget
     * as dirty.
     *
     * @instance
     * @memberof LuCI.ui.AbstractElement
     * @param {Node} targetNode
     * Specifies the DOM node on which the event listeners should be registered.
     *
     * @param {...string} events
     * The DOM events for which event handlers should be registered.
     */
    setChangeEvents(targetNode: Node, ...events: string[]): void;
    /**
     * Render the widget, set up event listeners and return resulting markup.
     * @abstract
     * @instance
     * @memberof LuCI.ui.AbstractElement
     *
     * @returns {Node}
     * Returns a DOM Node or DocumentFragment containing the rendered
     * widget markup.
     */
    render(): Node;
}>, {
    /** @type {any} */ values: any;
    /** @type {any} */ choices: any;
    /** @type {any} */ options: any;
    __init__(value: any, choices: any, options: any): void;
    /** @override */
    render(): Node;
    /**
     * @private
     * @param {Node} sb
     * @returns {Node}
     */
    bind(sb: Node): Node;
    /**
     * @private
     * @param {Node} element
     * @returns {document}
     */
    getScrollParent(element: Node): Document;
    /**
     * @private
     * @param {Node} sb
     */
    openDropdown(sb: Node): void;
    /**
     * @private
     * @param {Node} sb
     * @param {boolean} no_focus
     */
    closeDropdown(sb: Node, no_focus: boolean): void;
    /**
     * @private
     * @param {Node} sb
     * @param {Node} li list item
     * @param {boolean} force_state
     */
    toggleItem(sb: Node, li: Node, force_state: boolean): void;
    /**
     * @private
     * @param {Node} sb
     * @param {Node} li list item
     */
    transformItem(sb: Node, li: Node): void;
    /**
     * @private
     * @param {Node} sb
     * @param {Node} ul unordered list
     */
    saveValues(sb: Node, ul: Node): void;
    /**
     * @private
     * @param {Node} sb
     * @param {string[]} values
     */
    setValues(sb: Node, values: string[]): void;
    /**
     * @private
     * @param {Node} sb
     * @param {Node} elem
     * @param {boolean} scroll
     */
    setFocus(sb: Node, elem: Node, scroll: boolean): void;
    /**
     * @private
     * @param {Event} ev
     */
    handleMouseout(ev: Event): void;
    /**
     * @private
     * @param {Node} sb
     * @param {string} value
     * @param {string} label
     * @returns {Node}
     */
    createChoiceElement(sb: Node, value: string, label: string): Node;
    /**
     * @private
     * @param {Node} sb
     * @param {string} value
     */
    createItems(sb: Node, value: string): void;
    /**
     * Remove all existing choices from the dropdown menu.
     *
     * This function removes all preexisting dropdown choices from the widget,
     * keeping only choices currently being selected unless `reset_values` is
     * given, in which case all choices and deselected and removed.
     *
     * @instance
     * @memberof LuCI.ui.Dropdown
     * @param {boolean} [reset_value=false]
     * If set to `true`, deselect and remove selected choices as well instead
     * of keeping them.
     */
    clearChoices(reset_value?: boolean): void;
    /**
     * Add new choices to the dropdown menu.
     *
     * This function adds further choices to an existing dropdown menu,
     * ignoring choice values which are already present.
     *
     * @instance
     * @memberof LuCI.ui.Dropdown
     * @param {string[]} values
     * The choice values to add to the dropdown widget.
     *
     * @param {Object<string, *>} labels
     * The choice label values to use when adding dropdown choices. If no
     * label is found for a particular choice value, the value itself is used
     * as label text. Choice labels may be any valid value accepted by
     * {@link LuCI.dom#content}.
     */
    addChoices(values: string[], labels: {
        [x: string]: any;
    }): void;
    /**
     * Close all open dropdown widgets in the current document.
     */
    closeAllDropdowns(): void;
    /**
     * @private
     * @param {Event} ev
     */
    handleClick(ev: Event): void;
    /**
     * @private
     * @param {Event} ev
     */
    handleKeydown(ev: Event): void;
    /**
     * @private
     * @param {Event} ev
     */
    handleDropdownClose(ev: Event): void;
    /**
     * @private
     * @param {Event} ev
     */
    handleDropdownSelect(ev: Event): void;
    /**
     * @private
     * @param {Event} ev
     */
    handleMouseover(ev: Event): void;
    /**
     * @private
     * @param {Event} ev
     */
    handleFocus(ev: Event): void;
    /**
     * @private
     * @param {Event} ev
     */
    handleCanaryFocus(ev: Event): void;
    /**
     * @private
     * @param {Event} ev
     */
    handleCreateKeydown(ev: Event): void;
    /**
     * @private
     * @param {Event} ev
     */
    handleCreateFocus(ev: Event): void;
    /**
     * @private
     * @param {Event} ev
     */
    handleCreateBlur(ev: Event): void;
    /**
     * @private
     * @param {Event} ev
     */
    handleCreateClick(ev: Event): void;
    /** @override */
    setValue(values: any): void;
    /** @override */
    getValue(): any;
}>, {
    __init__(value: any, choices: any, options: any): void;
    /** @override */
    render(...args: any[]): any;
    /**
     * @private
     * @param {Event} ev
     * @param {...*} args
     * @returns {null}
     */
    handleClick(ev: Event, ...args: any[]): null;
    /**
     * @private
     * @param {Node} sb
     * @param {...*} args
     * @returns {*}
     */
    toggleItem(sb: Node, ...args: any[]): any;
}>>;
/**
 * Instantiate a dynamic list widget.
 *
 * @class DynamicList
 * @memberof LuCI.ui
 * @augments LuCI.ui.AbstractElement
 *
 * @classdesc
 *
 * The `DynamicList` class implements a widget which allows the user to specify
 * an arbitrary amount of input values, either from free formed text input or
 * from a set of predefined choices.
 *
 * UI widget instances are usually not supposed to be created by view code
 * directly, instead they're implicitly created by `LuCI.form` when
 * instantiating CBI forms.
 *
 * This class is automatically instantiated as part of `LuCI.ui`. To use it
 * in views, use `'require ui'` and refer to `ui.DynamicList`. To import it in
 * external JavaScript, use `L.require("ui").then(...)` and access the
 * `DynamicList` property of the class instance value.
 *
 * @param {string|string[]} [value=null]
 * The initial input value(s).
 *
 * @param {Object<string, *>} [choices]
 * Object containing the selectable choices of the widget. The object keys
 * serve as values for the different choices while the values are used as
 * choice labels. If omitted, no default choices are presented to the user,
 * instead a plain text input field is rendered allowing the user to add
 * arbitrary values to the dynamic list.
 *
 * @param {LuCI.ui.DynamicList.InitOptions} [options]
 * Object describing the widget specific options to initialize the dynamic list.
 */
export const UIDynamicList: import("./classtypes.js").LuCIClass<import("./classtypes.js").Merge<import("./classtypes.js").Merge<import("./classtypes.js").BaseInstance, {
    /**
     * Read the current value of the input widget.
     *
     * @instance
     * @memberof LuCI.ui.AbstractElement
     * @returns {string|string[]|null}
     * The current value of the input element. For simple inputs like text
     * fields or selects, the return value type will be a - possibly empty -
     * string. Complex widgets such as `DynamicList` instances may result in
     * an array of strings or `null` for unset values.
     */
    getValue(): string | string[] | null;
    /**
     * Set the current value of the input widget.
     *
     * @instance
     * @memberof LuCI.ui.AbstractElement
     * @param {string|string[]|null} value
     * The value to set the input element to. For simple inputs like text
     * fields or selects, the value should be a - possibly empty - string.
     * Complex widgets such as `DynamicList` instances may accept string array
     * or `null` values.
     */
    setValue(value: string | string[] | null): void;
    /**
     * Set the current placeholder value of the input widget.
     *
     * @instance
     * @memberof LuCI.ui.AbstractElement
     * @param {string|string[]|null} value
     * The placeholder to set for the input element. Only applicable to text
     * inputs, not to radio buttons, selects or similar.
     */
    setPlaceholder(value: string | string[] | null): void;
    /**
     * Check whether the input value was altered by the user.
     *
     * @instance
     * @memberof LuCI.ui.AbstractElement
     * @returns {boolean}
     * Returns `true` if the input value has been altered by the user or
     * `false` if it is unchanged. Note that if the user modifies the initial
     * value and changes it back to the original state, it is still reported
     * as changed.
     */
    isChanged(): boolean;
    /**
     * Check whether the current input value is valid.
     *
     * @instance
     * @memberof LuCI.ui.AbstractElement
     * @returns {boolean}
     * Returns `true` if the current input value is valid or `false` if it does
     * not meet the validation constraints.
     */
    isValid(): boolean;
    /**
     * Returns the current validation error
     *
     * @instance
     * @memberof LuCI.ui.AbstractElement
     * @returns {string}
     * The validation error at this time
     */
    getValidationError(): string;
    /**
     * Force validation of the current input value.
     *
     * Usually input validation is automatically triggered by various DOM events
     * bound to the input widget. In some cases it is required though to manually
     * trigger validation runs, e.g. when programmatically altering values.
     *
     * @instance
     * @memberof LuCI.ui.AbstractElement
     * @returns {boolean}
     */
    triggerValidation(): boolean;
    /**
     * Dispatch a custom (synthetic) event in response to received events.
     *
     * Sets up event handlers on the given target DOM node for the given event
     * names that dispatch a custom event of the given type to the widget root
     * DOM node.
     *
     * The primary purpose of this function is to set up a series of custom
     * uniform standard events such as `widget-update`, `validation-success`,
     * `validation-failure` etc. which are triggered by various different
     * widget specific native DOM events.
     *
     * @instance
     * @memberof LuCI.ui.AbstractElement
     * @param {Node} targetNode
     * Specifies the DOM node on which the native event listeners should be
     * registered.
     *
     * @param {string} synevent
     * The name of the custom event to dispatch to the widget root DOM node.
     *
     * @param {string[]} events
     * The native DOM events for which event handlers should be registered.
     */
    registerEvents(targetNode: Node, synevent: string, events: string[]): void;
    /**
     * Set up listeners for native DOM events that may update the widget value.
     *
     * Sets up event handlers on the given target DOM node for the given event
     * names which may cause the input value to update, such as `keyup` or
     * `onclick` events. In contrast to change events, such update events will
     * trigger input value validation.
     *
     * @instance
     * @memberof LuCI.ui.AbstractElement
     * @param {Node} targetNode
     * Specifies the DOM node on which the event listeners should be registered.
     *
     * @param {...string} events
     * The DOM events for which event handlers should be registered.
     */
    setUpdateEvents(targetNode: Node, ...events: string[]): void;
    /**
     * Set up listeners for native DOM events that may change the widget value.
     *
     * Sets up event handlers on the given target DOM node for the given event
     * names which may cause the input value to change completely, such as
     * `change` events in a select menu. In contrast to update events, such
     * change events will not trigger input value validation but they may cause
     * field dependencies to get re-evaluated and will mark the input widget
     * as dirty.
     *
     * @instance
     * @memberof LuCI.ui.AbstractElement
     * @param {Node} targetNode
     * Specifies the DOM node on which the event listeners should be registered.
     *
     * @param {...string} events
     * The DOM events for which event handlers should be registered.
     */
    setChangeEvents(targetNode: Node, ...events: string[]): void;
    /**
     * Render the widget, set up event listeners and return resulting markup.
     * @abstract
     * @instance
     * @memberof LuCI.ui.AbstractElement
     *
     * @returns {Node}
     * Returns a DOM Node or DocumentFragment containing the rendered
     * widget markup.
     */
    render(): Node;
}>, {
    /** @type {any} */ values: any;
    /** @type {any} */ choices: any;
    /** @type {any} */ options: any;
    __init__(values: any, choices: any, options: any): void;
    /** @override */
    render(): Node;
    /**
     * @private
     * @param {Node} dl
     */
    initDragAndDrop(dl: Node): void;
    /**
     * @private
     * @param {Node} dl
     * @returns {Node}
     */
    bind(dl: Node): Node;
    /**
     * @private
     * @param {Node} dl
     * @param {string} value
     * @param {string} text
     * @param {boolean} flash
     */
    addItem(dl: Node, value: string, text: string, flash: boolean): void;
    /**
     * @private
     * @param {Node} dl
     * @param {string} value
     */
    dispatchCbiDynlistChange(dl: Node, value: string): void;
    /**
     * @private
     * @param {Node} dl
     * @param {Node} item
     */
    removeItem(dl: Node, item: Node): void;
    /**
     * @private
     * @param {Event} ev
     */
    handleClick(ev: Event): void;
    /**
     * @private
     * @param {Event} ev
     */
    handleDropdownChange(ev: Event): void;
    /**
     * @private
     * @param {Event} ev
     */
    handleKeydown(ev: Event): void;
    /** @override */
    getValue(): any[];
    /** @override */
    setValue(values: any): void;
    /**
     * Add new suggested choices to the dynamic list.
     *
     * This function adds further choices to an existing dynamic list,
     * ignoring choice values which are already present.
     *
     * @instance
     * @memberof LuCI.ui.DynamicList
     * @param {string[]} values
     * The choice values to add to the dynamic lists suggestion dropdown.
     *
     * @param {Object<string, *>} labels
     * The choice label values to use when adding suggested choices. If no
     * label is found for a particular choice value, the value itself is used
     * as label text. Choice labels may be any valid value accepted by
     * {@link LuCI.dom#content}.
     */
    addChoices(values: string[], labels: {
        [x: string]: any;
    }): void;
    /**
     * Remove all existing choices from the dynamic list.
     *
     * This function removes all preexisting suggested choices from the widget.
     *
     * @instance
     * @memberof LuCI.ui.DynamicList
     */
    clearChoices(): void;
}>>;
/**
 * Instantiate a hidden input field widget.
 *
 * @class Hiddenfield
 * @memberof LuCI.ui
 * @augments LuCI.ui.AbstractElement
 *
 * @classdesc
 *
 * The `Hiddenfield` class implements an HTML `<input type="hidden">` field
 * which allows to store form data without exposing it to the user.
 *
 * UI widget instances are usually not supposed to be created by view code
 * directly, instead they're implicitly created by `LuCI.form` when
 * instantiating CBI forms.
 *
 * This class is automatically instantiated as part of `LuCI.ui`. To use it
 * in views, use `'require ui'` and refer to `ui.Hiddenfield`. To import it in
 * external JavaScript, use `L.require("ui").then(...)` and access the
 * `Hiddenfield` property of the class instance value.
 *
 * @param {string|string[]} [value=null]
 * The initial input value.
 *
 * @param {LuCI.ui.AbstractElement.InitOptions} [options]
 * Object describing the widget specific options to initialize the hidden input.
 */
export const UIHiddenfield: import("./classtypes.js").LuCIClass<import("./classtypes.js").Merge<import("./classtypes.js").Merge<import("./classtypes.js").BaseInstance, {
    /**
     * Read the current value of the input widget.
     *
     * @instance
     * @memberof LuCI.ui.AbstractElement
     * @returns {string|string[]|null}
     * The current value of the input element. For simple inputs like text
     * fields or selects, the return value type will be a - possibly empty -
     * string. Complex widgets such as `DynamicList` instances may result in
     * an array of strings or `null` for unset values.
     */
    getValue(): string | string[] | null;
    /**
     * Set the current value of the input widget.
     *
     * @instance
     * @memberof LuCI.ui.AbstractElement
     * @param {string|string[]|null} value
     * The value to set the input element to. For simple inputs like text
     * fields or selects, the value should be a - possibly empty - string.
     * Complex widgets such as `DynamicList` instances may accept string array
     * or `null` values.
     */
    setValue(value: string | string[] | null): void;
    /**
     * Set the current placeholder value of the input widget.
     *
     * @instance
     * @memberof LuCI.ui.AbstractElement
     * @param {string|string[]|null} value
     * The placeholder to set for the input element. Only applicable to text
     * inputs, not to radio buttons, selects or similar.
     */
    setPlaceholder(value: string | string[] | null): void;
    /**
     * Check whether the input value was altered by the user.
     *
     * @instance
     * @memberof LuCI.ui.AbstractElement
     * @returns {boolean}
     * Returns `true` if the input value has been altered by the user or
     * `false` if it is unchanged. Note that if the user modifies the initial
     * value and changes it back to the original state, it is still reported
     * as changed.
     */
    isChanged(): boolean;
    /**
     * Check whether the current input value is valid.
     *
     * @instance
     * @memberof LuCI.ui.AbstractElement
     * @returns {boolean}
     * Returns `true` if the current input value is valid or `false` if it does
     * not meet the validation constraints.
     */
    isValid(): boolean;
    /**
     * Returns the current validation error
     *
     * @instance
     * @memberof LuCI.ui.AbstractElement
     * @returns {string}
     * The validation error at this time
     */
    getValidationError(): string;
    /**
     * Force validation of the current input value.
     *
     * Usually input validation is automatically triggered by various DOM events
     * bound to the input widget. In some cases it is required though to manually
     * trigger validation runs, e.g. when programmatically altering values.
     *
     * @instance
     * @memberof LuCI.ui.AbstractElement
     * @returns {boolean}
     */
    triggerValidation(): boolean;
    /**
     * Dispatch a custom (synthetic) event in response to received events.
     *
     * Sets up event handlers on the given target DOM node for the given event
     * names that dispatch a custom event of the given type to the widget root
     * DOM node.
     *
     * The primary purpose of this function is to set up a series of custom
     * uniform standard events such as `widget-update`, `validation-success`,
     * `validation-failure` etc. which are triggered by various different
     * widget specific native DOM events.
     *
     * @instance
     * @memberof LuCI.ui.AbstractElement
     * @param {Node} targetNode
     * Specifies the DOM node on which the native event listeners should be
     * registered.
     *
     * @param {string} synevent
     * The name of the custom event to dispatch to the widget root DOM node.
     *
     * @param {string[]} events
     * The native DOM events for which event handlers should be registered.
     */
    registerEvents(targetNode: Node, synevent: string, events: string[]): void;
    /**
     * Set up listeners for native DOM events that may update the widget value.
     *
     * Sets up event handlers on the given target DOM node for the given event
     * names which may cause the input value to update, such as `keyup` or
     * `onclick` events. In contrast to change events, such update events will
     * trigger input value validation.
     *
     * @instance
     * @memberof LuCI.ui.AbstractElement
     * @param {Node} targetNode
     * Specifies the DOM node on which the event listeners should be registered.
     *
     * @param {...string} events
     * The DOM events for which event handlers should be registered.
     */
    setUpdateEvents(targetNode: Node, ...events: string[]): void;
    /**
     * Set up listeners for native DOM events that may change the widget value.
     *
     * Sets up event handlers on the given target DOM node for the given event
     * names which may cause the input value to change completely, such as
     * `change` events in a select menu. In contrast to update events, such
     * change events will not trigger input value validation but they may cause
     * field dependencies to get re-evaluated and will mark the input widget
     * as dirty.
     *
     * @instance
     * @memberof LuCI.ui.AbstractElement
     * @param {Node} targetNode
     * Specifies the DOM node on which the event listeners should be registered.
     *
     * @param {...string} events
     * The DOM events for which event handlers should be registered.
     */
    setChangeEvents(targetNode: Node, ...events: string[]): void;
    /**
     * Render the widget, set up event listeners and return resulting markup.
     * @abstract
     * @instance
     * @memberof LuCI.ui.AbstractElement
     *
     * @returns {Node}
     * Returns a DOM Node or DocumentFragment containing the rendered
     * widget markup.
     */
    render(): Node;
}>, {
    /** @type {any} */ value: any;
    /** @type {any} */ options: any;
    __init__(value: any, options: any): void;
    /** @override */
    render(): Node;
    /**
     * @private
     * @param {Node} hiddenEl
     * @returns {Node} hiddenEl
     */
    bind(hiddenEl: Node): Node;
    /** @override */
    getValue(): any;
    /** @override */
    setValue(value: any): void;
}>>;
/**
 * Instantiate a file upload widget.
 *
 * @class FileUpload
 * @memberof LuCI.ui
 * @augments LuCI.ui.AbstractElement
 *
 * @classdesc
 *
 * The `FileUpload` class implements a widget which allows the user to upload,
 * browse, select and delete files beneath a predefined remote directory.
 *
 * UI widget instances are usually not supposed to be created by view code
 * directly, instead they're implicitly created by `LuCI.form` when
 * instantiating CBI forms.
 *
 * This class is automatically instantiated as part of `LuCI.ui`. To use it
 * in views, use `'require ui'` and refer to `ui.FileUpload`. To import it in
 * external JavaScript, use `L.require("ui").then(...)` and access the
 * `FileUpload` property of the class instance value.
 *
 * @param {string|string[]} [value=null]
 * The initial input value.
 *
 * @param {LuCI.ui.DynamicList.InitOptions} [options]
 * Object describing the widget specific options to initialize the file
 * upload control.
 */
export const UIFileUpload: import("./classtypes.js").LuCIClass<import("./classtypes.js").Merge<import("./classtypes.js").Merge<import("./classtypes.js").BaseInstance, {
    /**
     * Read the current value of the input widget.
     *
     * @instance
     * @memberof LuCI.ui.AbstractElement
     * @returns {string|string[]|null}
     * The current value of the input element. For simple inputs like text
     * fields or selects, the return value type will be a - possibly empty -
     * string. Complex widgets such as `DynamicList` instances may result in
     * an array of strings or `null` for unset values.
     */
    getValue(): string | string[] | null;
    /**
     * Set the current value of the input widget.
     *
     * @instance
     * @memberof LuCI.ui.AbstractElement
     * @param {string|string[]|null} value
     * The value to set the input element to. For simple inputs like text
     * fields or selects, the value should be a - possibly empty - string.
     * Complex widgets such as `DynamicList` instances may accept string array
     * or `null` values.
     */
    setValue(value: string | string[] | null): void;
    /**
     * Set the current placeholder value of the input widget.
     *
     * @instance
     * @memberof LuCI.ui.AbstractElement
     * @param {string|string[]|null} value
     * The placeholder to set for the input element. Only applicable to text
     * inputs, not to radio buttons, selects or similar.
     */
    setPlaceholder(value: string | string[] | null): void;
    /**
     * Check whether the input value was altered by the user.
     *
     * @instance
     * @memberof LuCI.ui.AbstractElement
     * @returns {boolean}
     * Returns `true` if the input value has been altered by the user or
     * `false` if it is unchanged. Note that if the user modifies the initial
     * value and changes it back to the original state, it is still reported
     * as changed.
     */
    isChanged(): boolean;
    /**
     * Check whether the current input value is valid.
     *
     * @instance
     * @memberof LuCI.ui.AbstractElement
     * @returns {boolean}
     * Returns `true` if the current input value is valid or `false` if it does
     * not meet the validation constraints.
     */
    isValid(): boolean;
    /**
     * Returns the current validation error
     *
     * @instance
     * @memberof LuCI.ui.AbstractElement
     * @returns {string}
     * The validation error at this time
     */
    getValidationError(): string;
    /**
     * Force validation of the current input value.
     *
     * Usually input validation is automatically triggered by various DOM events
     * bound to the input widget. In some cases it is required though to manually
     * trigger validation runs, e.g. when programmatically altering values.
     *
     * @instance
     * @memberof LuCI.ui.AbstractElement
     * @returns {boolean}
     */
    triggerValidation(): boolean;
    /**
     * Dispatch a custom (synthetic) event in response to received events.
     *
     * Sets up event handlers on the given target DOM node for the given event
     * names that dispatch a custom event of the given type to the widget root
     * DOM node.
     *
     * The primary purpose of this function is to set up a series of custom
     * uniform standard events such as `widget-update`, `validation-success`,
     * `validation-failure` etc. which are triggered by various different
     * widget specific native DOM events.
     *
     * @instance
     * @memberof LuCI.ui.AbstractElement
     * @param {Node} targetNode
     * Specifies the DOM node on which the native event listeners should be
     * registered.
     *
     * @param {string} synevent
     * The name of the custom event to dispatch to the widget root DOM node.
     *
     * @param {string[]} events
     * The native DOM events for which event handlers should be registered.
     */
    registerEvents(targetNode: Node, synevent: string, events: string[]): void;
    /**
     * Set up listeners for native DOM events that may update the widget value.
     *
     * Sets up event handlers on the given target DOM node for the given event
     * names which may cause the input value to update, such as `keyup` or
     * `onclick` events. In contrast to change events, such update events will
     * trigger input value validation.
     *
     * @instance
     * @memberof LuCI.ui.AbstractElement
     * @param {Node} targetNode
     * Specifies the DOM node on which the event listeners should be registered.
     *
     * @param {...string} events
     * The DOM events for which event handlers should be registered.
     */
    setUpdateEvents(targetNode: Node, ...events: string[]): void;
    /**
     * Set up listeners for native DOM events that may change the widget value.
     *
     * Sets up event handlers on the given target DOM node for the given event
     * names which may cause the input value to change completely, such as
     * `change` events in a select menu. In contrast to update events, such
     * change events will not trigger input value validation but they may cause
     * field dependencies to get re-evaluated and will mark the input widget
     * as dirty.
     *
     * @instance
     * @memberof LuCI.ui.AbstractElement
     * @param {Node} targetNode
     * Specifies the DOM node on which the event listeners should be registered.
     *
     * @param {...string} events
     * The DOM events for which event handlers should be registered.
     */
    setChangeEvents(targetNode: Node, ...events: string[]): void;
    /**
     * Render the widget, set up event listeners and return resulting markup.
     * @abstract
     * @instance
     * @memberof LuCI.ui.AbstractElement
     *
     * @returns {Node}
     * Returns a DOM Node or DocumentFragment containing the rendered
     * widget markup.
     */
    render(): Node;
}>, {
    /** @type {any} */ value: any;
    /** @type {any} */ options: any;
    __init__(value: any, options: any): void;
    /**
     * @private
     * @param {Node} browserEl
     * @returns {Node} hiddenEl
     */
    bind(browserEl: Node): Node;
    /** @override */
    render(): Promise<any>;
    /**
     * @private
     * @param {string} path
     * @returns {string}
     */
    truncatePath(path: string): string;
    /**
     * @private
     * @param {string} type
     * @returns {Node}
     */
    iconForType(type: string): Node;
    /**
     * @private
     * @param {string} path
     * @returns {string}
     */
    canonicalizePath(path: string): string;
    /**
     * @private
     * @param {string} path
     * @returns {string[]}
     */
    splitPath(path: string): string[];
    /**
     * @private
     * @param {string} path
     * @param {Event} ev
     */
    handleCreateDirectory(path: string, ev: Event): void;
    /**
     * @private
     * @param {string} path
     * @param {object[]} list
     * @param {Event} ev
     * @returns {Promise}
     */
    handleUpload(path: string, list: object[], ev: Event): Promise<any>;
    /**
     * @private
     * @param {string} path
     * @param {object} fileStat
     * @param {Event} ev
     * @returns {Promise}
     */
    handleDelete(path: string, fileStat: object, ev: Event): Promise<any>;
    /**
     * @private
     * @param {string} path
     * @param {object[]} list
     * @returns {Promise}
     */
    renderUpload(path: string, list: object[]): Promise<any>;
    /**
     * @private
     * @param {Node} container
     * @param {string} path
     * @param {object[]} list
     */
    renderListing(container: Node, path: string, list: object[]): void;
    /**
     * @private
     * @param {Event} ev
     */
    handleCancel(ev: Event): void;
    /**
     * @private
     * @param {Event} ev
     */
    handleReset(ev: Event): void;
    /**
     * @private
     * @param {string} path
     * @param {object} fileStat
     * @param {Event} ev
     */
    handleDownload(path: string, fileStat: object, ev: Event): void;
    /**
     * @private
     * @param {string} path
     * @param {object} fileStat
     * @param {Event} ev
     */
    handleSelect(path: string, fileStat: object, ev: Event): void;
    /**
     * @private
     * @param {Event} ev
     * @returns {Promise}
     */
    handleFileBrowser(ev: Event): Promise<any>;
    /** @override */
    getValue(): any;
    /** @override */
    setValue(value: any): void;
}>>;
/**
 * Handle menu.
 *
 * @class menu
 * @memberof LuCI.ui
 *
 * @classdesc
 *
 * Handles menus.
 */
export const UIMenu: import("./classtypes.js").Merge<import("./classtypes.js").BaseInstance, {
    /**
     * Load and cache current menu tree.
     *
     * @returns {Promise<LuCI.ui.menu.MenuNode>}
     * Returns a promise resolving to the root element of the menu tree.
     */
    load(): Promise<LuCI.ui.menu.MenuNode>;
    /**
     * Flush the internal menu cache to force loading a new structure on the
     * next page load.
     */
    flushCache(): void;
    /**
     * @param {LuCI.ui.menu.MenuNode} [node]
     * The menu node to retrieve the children for. Defaults to the menu's
     * internal root node if omitted.
     *
     * @returns {LuCI.ui.menu.MenuNode[]}
     * Returns an array of child menu nodes.
     */
    getChildren(node?: LuCI.ui.menu.MenuNode): LuCI.ui.menu.MenuNode[];
}>;
export const UITable: import("./classtypes.js").LuCIClass<import("./classtypes.js").Merge<import("./classtypes.js").BaseInstance, {
    /** @type {any} */ id: any;
    /** @type {any} */ node: any;
    /** @type {any} */ options: any;
    __init__(captions: any, options: any, placeholder: any): void;
    update(data: any, placeholderText: any): any;
    render(): any;
    /**
     * @private
     * @param {Node} node
     */
    initFromMarkup(node: Node): void;
    /**
     * @private
     * @param {string} value
     * @param {number} index
     * @returns {string}
     */
    deriveSortKey(value: string, index: number): string;
    /**
     * @private
     * @returns {?string}
     */
    getActiveSortState(): string | null;
    /**
     * @private
     * @param {number} index
     * @param {boolean} descending
     */
    setActiveSortState(index: number, descending: boolean): void;
    /**
     * @private
     * @param {Event} ev
     */
    handleSort(ev: Event): void;
}>>;
/**
 * @class ui
 * @memberof LuCI
 * @hideconstructor
 * @classdesc
 *
 * Provides high level UI helper functionality.
 * To import the class in views, use `'require ui'`, to import it in
 * external JavaScript, use `L.require("ui").then(...)`.
 */
export const UI: import("./classtypes.js").LuCIClass<import("./classtypes.js").Merge<import("./classtypes.js").BaseInstance, {
    __init__(): void;
    /**
     * Display a modal overlay dialog with the specified contents.
     *
     * The modal overlay dialog covers the current view preventing interaction
     * with the underlying view contents. Only one modal dialog instance can
     * be opened. Invoking showModal() while a modal dialog is already open will
     * replace the open dialog with a new one having the specified contents.
     *
     * Additional CSS class names may be passed to influence the appearance of
     * the dialog. Valid values for the classes depend on the underlying theme.
     *
     * @see LuCI.dom.content
     *
     * @param {string} [title]
     * The title of the dialog. If `null`, no title element will be rendered.
     *
     * @param {*} children
     * The contents to add to the modal dialog. This should be a DOM node or
     * a document fragment in most cases. The value is passed as-is to the
     * `dom.content()` function - refer to its documentation for applicable
     * values.
     *
     * @param {...string} [classes]
     * A number of extra CSS class names which are set on the modal dialog
     * element.
     *
     * @returns {Node}
     * Returns a DOM Node representing the modal dialog element.
     */
    showModal(title?: string, children: any, ...classes?: string[]): Node;
    /**
     * Close the open modal overlay dialog.
     *
     * This function will close an open modal dialog and restore the normal view
     * behaviour. It has no effect if no modal dialog is currently open.
     *
     * Note that this function is stand-alone, it does not rely on `this` and
     * will not invoke other class functions so it is suitable to be used as event
     * handler as-is without the need to bind it first.
     */
    hideModal(): void;
    /**
     * @private
     * @param {Event} ev
     */
    cancelModal(ev: Event): void;
    /**
     * @private
     * @param {Event} ev
     */
    showTooltip(ev: Event): void;
    /**
     * @private
     * @param {Event} ev
     */
    hideTooltip(ev: Event): void;
    /**
     * Add a notification banner at the top of the current view.
     *
     * A notification banner is an alert message usually displayed at the
     * top of the current view, spanning the entire available width.
     * Notification banners will stay in place until dismissed by the user.
     * Multiple banners may be shown at the same time.
     *
     * Additional CSS class names may be passed to influence the appearance of
     * the banner. Valid values for the classes depend on the underlying theme.
     *
     * @see LuCI.dom.content
     *
     * @param {?string} [title]
     * The title of the notification banner. If `null`, no title element
     * will be rendered.
     *
     * @param {*} children
     * The contents to add to the notification banner. This should be a DOM
     * node or a document fragment in most cases. The value is passed as-is
     * to the `dom.content()` function - refer to its documentation for
     * applicable values.
     *
     * @param {...string} [classes]
     * A number of extra CSS class names which are set on the notification
     * banner element.
     *
     * @returns {Node}
     * Returns a DOM Node representing the notification banner element.
     */
    addNotification(title?: string | null, children: any, ...classes?: string[]): Node;
    /**
     * Add a time-limited notification banner at the top of the current view.
     *
     * A notification banner is an alert message usually displayed at the
     * top of the current view, spanning the entire available width.
     * Notification banners will stay in place until dismissed by the user, or
     * it has expired.
     * Multiple banners may be shown at the same time.
     *
     * Additional CSS class names may be passed to influence the appearance of
     * the banner. Valid values for the classes depend on the underlying theme.
     *
     * @see LuCI.dom.content
     *
     * @param {string} [title]
     * The title of the notification banner. If `null`, no title element
     * will be rendered.
     *
     * @param {*} children
     * The contents to add to the notification banner. This should be a DOM
     * node or a document fragment in most cases. The value is passed as-is
     * to the `dom.content()` function - refer to its documentation for
     * applicable values.
     *
     * @param {number} [timeout]
     * A millisecond value after which the notification will disappear
     * automatically. If omitted, the notification will remain until it receives
     * the click event.
     *
     * @param {...string} [classes]
     * A number of extra CSS class names which are set on the notification
     * banner element.
     *
     * @returns {Node}
     * Returns a DOM Node representing the notification banner element.
     */
    addTimeLimitedNotification(title?: string, children: any, timeout?: number, ...classes?: string[]): Node;
    /**
     * Display or update a header area indicator.
     *
     * An indicator is a small label displayed in the header area of the screen
     * providing few amounts of status information such as item counts or state
     * toggle indicators.
     *
     * Multiple indicators may be shown at the same time and indicator labels
     * may be made clickable to display extended information or to initiate
     * further actions.
     *
     * Indicators can either use a default `active` or a less accented `inactive`
     * style which is useful for indicators representing state toggles.
     *
     * @param {string} id
     * The ID of the indicator. If an indicator with the given ID already exists,
     * it is updated with the given label and style.
     *
     * @param {string} label
     * The text to display in the indicator label.
     *
     * @param {function()} [handler]
     * A handler function to invoke when the indicator label is clicked/touched
     * by the user. If omitted, the indicator is not clickable/touchable.
     *
     * Note that this parameter only applies to new indicators, when updating
     * existing labels it is ignored.
     *
     * @param {"active"|"inactive"} [style=active]
     * The indicator style to use. May be either `active` or `inactive`.
     *
     * @returns {boolean}
     * Returns `true` when the indicator has been updated or `false` when no
     * changes were made.
     */
    showIndicator(id: string, label: string, handler?: () => any, style?: "active" | "inactive"): boolean;
    /**
     * Remove a header area indicator.
     *
     * This function removes the given indicator label from the header indicator
     * area. When the given indicator is not found, this function does nothing.
     *
     * @param {string} id
     * The ID of the indicator to remove.
     *
     * @returns {boolean}
     * Returns `true` when the indicator has been removed or `false` when the
     * requested indicator was not found.
     */
    hideIndicator(id: string): boolean;
    /**
     * Formats a series of label/value pairs into list-like markup.
     *
     * This function transforms a flat array of alternating label and value
     * elements into a list-like markup, using the values in `separators` as
     * separators and appends the resulting nodes to the given parent DOM node.
     *
     * Each label is suffixed with `: ` and wrapped into a `<strong>` tag, the
     * `<strong>` element and the value corresponding to the label are
     * subsequently wrapped into a `<span class="nowrap">` element.
     *
     * The resulting `<span>` element tuples are joined by the given separators
     * to form the final markup which is appended to the given parent DOM node.
     *
     * @param {Node} node
     * The parent DOM node to append the markup to. Any previous child elements
     * will be removed.
     *
     * @param {Array<*>} items
     * An alternating array of labels and values. The label values will be
     * converted to plain strings, the values are used as-is and may be of
     * any type accepted by `LuCI.dom.content()`.
     *
     * @param {*|Array<*>} [separators=[E('br')]]
     * A single value or an array of separator values to separate each
     * label/value pair with. The function will cycle through the separators
     * when joining the pairs. If omitted, the default separator is a sole HTML
     * `<br>` element. Separator values are used as-is and may be of any type
     * accepted by `LuCI.dom.content()`.
     *
     * @returns {Node}
     * Returns the parent DOM node the formatted markup has been added to.
     */
    itemlist(node: Node, items: Array<any>, separators?: any | Array<any>): Node;
    /**
     * @class
     * @memberof LuCI.ui
     * @hideconstructor
     * @classdesc
     *
     * The `tabs` class handles tab menu groups used throughout the view area.
     * It takes care of setting up tab groups, tracking their state and handling
     * related events.
     *
     * This class is automatically instantiated as part of `LuCI.ui`. To use it
     * in views, use `'require ui'` and refer to `ui.tabs`. To import it in
     * external JavaScript, use `L.require("ui").then(...)` and access the
     * `tabs` property of the class instance value.
     */
    tabs: import("./classtypes.js").Merge<import("./classtypes.js").BaseInstance, {
        /** @private */
        init(): void;
        /**
         * Initializes a new tab group from the given tab pane collection.
         *
         * This function cycles through the given tab pane DOM nodes, extracts
         * their tab IDs, titles and active states, renders a corresponding
         * tab menu and prepends it to the tab panes common parent DOM node.
         *
         * The tab menu labels will be set to the value of the `data-tab-title`
         * attribute of each corresponding pane. The last pane with the
         * `data-tab-active` attribute set to `true` will be selected by default.
         *
         * If no pane is marked as active, the first one will be preselected.
         *
         * @instance
         * @memberof LuCI.ui.tabs
         * @param {Array<Node>|NodeList} panes
         * A collection of tab panes to build a tab group menu for. May be a
         * plain array of DOM nodes or a NodeList collection, such as the result
         * of a `querySelectorAll()` call or the `.childNodes` property of a
         * DOM node.
         */
        initTabGroup(panes: Array<Node> | NodeList): void;
        /**
         * Checks whether the given tab pane node is empty.
         *
         * @instance
         * @memberof LuCI.ui.tabs
         * @param {Node} pane
         * The tab pane to check.
         *
         * @returns {boolean}
         * Returns `true` if the pane is empty, else `false`.
         */
        isEmptyPane(pane: Node): boolean;
        /**
         * @private
         * @param {object} pane
         * @returns {string}
         */
        getPathForPane(pane: object): string;
        /**
         * @private
         * @returns {object}
         */
        getActiveTabState(): object;
        /**
         * @private
         * @param {object} pane
         * @returns {string|0}
         */
        getActiveTabId(pane: object): string | 0;
        /**
         * @private
         * @param {object} pane
         * @param {number} tabIndex
         * @returns {object}
         */
        setActiveTabId(pane: object, tabIndex: number): object;
        /**
         * @private
         * @param {Event} ev
         * @param {document} root
         */
        updateTabs(ev: Event, root: Document): void;
        /**
         * @private
         * @param {Event} ev
         */
        switchTab(ev: Event): void;
    }>;
    /**
     * Display a modal file upload prompt.
     *
     * This function opens a modal dialog prompting the user to select and
     * upload a file to a predefined remote destination path.
     *
     * @param {string} path
     * The remote file path to upload the local file to.
     *
     * @param {Node} [progressStatusNode]
     * An optional DOM text node whose content text is set to the progress
     * percentage value during file upload.
     *
     * @returns {Promise<LuCI.ui.FileUploadReply>}
     * Returns a promise resolving to a file upload status object on success
     * or rejecting with an error in case the upload failed or has been
     * cancelled by the user.
     */
    uploadFile(path: string, progressStatusNode?: Node): Promise<LuCI.ui.FileUploadReply>;
    /**
     * Perform a device connectivity test.
     *
     * Attempt to fetch a well known resource from the remote device via HTTP
     * in order to test connectivity. This function is mainly useful to wait
     * for the router to come back online after a reboot or reconfiguration.
     *
     * @param {string} [proto=http]
     * The protocol to use for fetching the resource. May be either `http`
     * (the default) or `https`.
     *
     * @param {string} [ipaddr=window.location.host]
     * Override the host address to probe. By default the current host as seen
     * in the address bar is probed.
     *
     * @returns {Promise<Event>}
     * Returns a promise resolving to a `load` event in case the device is
     * reachable or rejecting with an `error` event in case it is not reachable
     * or rejecting with `null` when the connectivity check timed out.
     */
    pingDevice(proto?: string, ipaddr?: string): Promise<Event>;
    /**
     * Wait for device to come back online and reconnect to it.
     *
     * Poll each given hostname or IP address and navigate to it as soon as
     * one of the addresses becomes reachable.
     *
     * @param {...string} [hosts=[window.location.host]]
     * The list of IP addresses and host names to check for reachability.
     * If omitted, the current value of `window.location.host` is used by
     * default.
     */
    awaitReconnect(...hosts?: string[]): void;
    /**
     * @class
     * @memberof LuCI.ui
     * @hideconstructor
     * @classdesc
     *
     * The `changes` class encapsulates logic for visualizing, applying,
     * confirming and reverting staged UCI changesets.
     *
     * This class is automatically instantiated as part of `LuCI.ui`. To use it
     * in views, use `'require ui'` and refer to `ui.changes`. To import it in
     * external JavaScript, use `L.require("ui").then(...)` and access the
     * `changes` property of the class instance value.
     */
    changes: import("./classtypes.js").Merge<import("./classtypes.js").BaseInstance, {
        init(): Promise<any>;
        /**
         * Set the change count indicator.
         *
         * This function updates or hides the UCI change count indicator,
         * depending on the passed change count. When the count is greater
         * than 0, the change indicator is displayed or updated, otherwise it
         * is removed.
         *
         * @instance
         * @memberof LuCI.ui.changes
         * @param {number} n
         * The number of changes to indicate.
         */
        setIndicator(n: number): void;
        /**
         * Update the change count indicator.
         *
         * This function updates the UCI change count indicator from the given
         * UCI changeset structure.
         *
         * @instance
         * @memberof LuCI.ui.changes
         * @param {Object<string, Array<LuCI.uci.ChangeRecord>>} changes
         * The UCI changeset to count.
         */
        renderChangeIndicator(changes: {
            [x: string]: import("./uci.js").ChangeRecord[];
        }): void;
        /** @private */
        changeTemplates: {
            'add-3': string;
            'set-3': string;
            'set-4': string;
            'remove-2': string;
            'remove-3': string;
            'order-3': string;
            'list-add-4': string;
            'list-del-4': string;
            'rename-3': string;
            'rename-4': string;
        };
        /**
         * Display the current changelog.
         *
         * Open a modal dialog visualizing the currently staged UCI changes
         * and offer options to revert or apply the shown changes.
         *
         * @instance
         * @memberof LuCI.ui.changes
         */
        displayChanges(): void;
        /**
         * @private
         * @param {string} type
         * @param {string} content
         */
        displayStatus(type: string, content: string): void;
        /**
         * @private
         * @returns {Promise}
         */
        checkConnectivityAffected(): Promise<any>;
        /**
         * @private
         * @param {boolean} checked
         */
        rollback(checked: boolean): void;
        /**
         * @private
         * @param {boolean} checked
         * @param {number} deadline
         * @param {string} override_token
         */
        confirm(checked: boolean, deadline: number, override_token: string): void;
        /**
         * Apply the staged configuration changes.
         *
         * Start applying staged configuration changes and open a modal dialog
         * with a progress indication to prevent interaction with the view
         * during the apply process. The modal dialog will be automatically
         * closed and the current view reloaded once the apply process is
         * complete.
         *
         * @instance
         * @memberof LuCI.ui.changes
         * @param {boolean} [checked=false]
         * Whether to perform a checked (`true`) configuration apply or an
         * unchecked (`false`) one.
         *
         * In case of a checked apply, the configuration changes must be
         * confirmed within a specific time interval, otherwise the device
         * will begin to roll back the changes in order to restore the previous
         * settings.
         */
        apply(checked?: boolean): void;
        /**
         * Revert the staged configuration changes.
         *
         * Start reverting staged configuration changes and open a modal dialog
         * with a progress indication to prevent interaction with the view
         * during the revert process. The modal dialog will be automatically
         * closed and the current view reloaded once the revert process is
         * complete.
         *
         * @instance
         * @memberof LuCI.ui.changes
         */
        revert(): void;
    }>;
    /**
     * Add validation constraints to an input element.
     *
     * Compile the given type expression and optional validator function into
     * a validation function and bind it to the specified input element events.
     *
     * @param {Node} field
     * The DOM input element node to bind the validation constraints to.
     *
     * @param {string} type
     * The datatype specification to describe validation constraints.
     * Refer to the `LuCI.validation` class documentation for details.
     *
     * @param {boolean} [optional=false]
     * Specifies whether empty values are allowed (`true`) or not (`false`).
     * If an input element is not marked optional it must not be empty,
     * otherwise it will be marked as invalid.
     *
     * @param {function()|Array<function()>} [vfunc]
     * Specifies a custom validation function or an array of validation functions
     * which are invoked after the other validation constraints are applied. Each
     * function must return `true` to accept the passed value. When multiple
     * functions are provided as an array, they are executed serially and
     * validation stops at the first function that returns a non-true value.
     * Any non-true return type is converted to a string and treated as validation
     * error message.
     *
     * @param {...string} [events=blur, keyup]
     * The list of events to bind. Each received event will trigger a field
     * validation. If omitted, the `keyup` and `blur` events are bound by
     * default.
     *
     * @returns {function()}
     * Returns the compiled validator function which can be used to trigger
     * field validation manually or to bind it to further events.
     *
     * @see LuCI.validation
     */
    addValidator(field: Node, type: string, optional?: boolean, vfunc?: (() => any) | Array<() => any>, ...events?: string[]): () => any;
    /**
     * Create a pre-bound event handler function.
     *
     * Generate and bind a function suitable for use in event handlers. The
     * generated function automatically disables the event source element
     * and adds an active indication to it by adding appropriate CSS classes.
     *
     * It will also await any promises returned by the wrapped function and
     * re-enable the source element after the promises ran to completion.
     *
     * @param {*} ctx
     * The `this` context to use for the wrapped function.
     *
     * @param {function()|string} fn
     * Specifies the function to wrap. In case of a function value, the
     * function is used as-is. If a string is specified instead, it is looked
     * up in `ctx` to obtain the function to wrap. In both cases the bound
     * function will be invoked with `ctx` as `this` context
     *
     * @param {...*} args
     * Any further parameter as passed as-is to the bound event handler
     * function in the same order as passed to `createHandlerFn()`.
     *
     * @returns {?function()}
     * Returns the pre-bound handler function which is suitable to be passed
     * to `addEventListener()`. Returns `null` if the given `fn` argument is
     * a string which could not be found in `ctx` or if `ctx[fn]` is not a
     * valid function value.
     */
    createHandlerFn(ctx: any, fn: (() => any) | string, ...args: any[]): (() => any) | null;
    /**
     * Load specified view class path and set it up.
     *
     * Transforms the given view path into a class name, requires it
     * using [LuCI.require()]{@link LuCI#require} and asserts that the
     * resulting class instance is a descendant of
     * [LuCI.view]{@link LuCI.view}.
     *
     * By instantiating the view class, its corresponding contents are
     * rendered and included into the view area. Any runtime errors are
     * caught and rendered using [LuCI.error()]{@link LuCI#error}.
     *
     * @param {string} path
     * The view path to render.
     *
     * @returns {Promise<LuCI.view>}
     * Returns a promise resolving to the loaded view instance.
     */
    instantiateView(path: string): Promise<LuCI.view>;
    menu: import("./classtypes.js").Merge<import("./classtypes.js").BaseInstance, {
        /**
         * Load and cache current menu tree.
         *
         * @returns {Promise<LuCI.ui.menu.MenuNode>}
         * Returns a promise resolving to the root element of the menu tree.
         */
        load(): Promise<LuCI.ui.menu.MenuNode>;
        /**
         * Flush the internal menu cache to force loading a new structure on the
         * next page load.
         */
        flushCache(): void;
        /**
         * @param {LuCI.ui.menu.MenuNode} [node]
         * The menu node to retrieve the children for. Defaults to the menu's
         * internal root node if omitted.
         *
         * @returns {LuCI.ui.menu.MenuNode[]}
         * Returns an array of child menu nodes.
         */
        getChildren(node?: LuCI.ui.menu.MenuNode): LuCI.ui.menu.MenuNode[];
    }>;
    Table: import("./classtypes.js").LuCIClass<import("./classtypes.js").Merge<import("./classtypes.js").BaseInstance, {
        /** @type {any} */ id: any;
        /** @type {any} */ node: any;
        /** @type {any} */ options: any;
        __init__(captions: any, options: any, placeholder: any): void;
        update(data: any, placeholderText: any): any;
        render(): any;
        /**
         * @private
         * @param {Node} node
         */
        initFromMarkup(node: Node): void;
        /**
         * @private
         * @param {string} value
         * @param {number} index
         * @returns {string}
         */
        deriveSortKey(value: string, index: number): string;
        /**
         * @private
         * @returns {?string}
         */
        getActiveSortState(): string | null;
        /**
         * @private
         * @param {number} index
         * @param {boolean} descending
         */
        setActiveSortState(index: number, descending: boolean): void;
        /**
         * @private
         * @param {Event} ev
         */
        handleSort(ev: Event): void;
    }>>;
    AbstractElement: import("./classtypes.js").LuCIClass<import("./classtypes.js").Merge<import("./classtypes.js").BaseInstance, {
        /**
         * Read the current value of the input widget.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @returns {string|string[]|null}
         * The current value of the input element. For simple inputs like text
         * fields or selects, the return value type will be a - possibly empty -
         * string. Complex widgets such as `DynamicList` instances may result in
         * an array of strings or `null` for unset values.
         */
        getValue(): string | string[] | null;
        /**
         * Set the current value of the input widget.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @param {string|string[]|null} value
         * The value to set the input element to. For simple inputs like text
         * fields or selects, the value should be a - possibly empty - string.
         * Complex widgets such as `DynamicList` instances may accept string array
         * or `null` values.
         */
        setValue(value: string | string[] | null): void;
        /**
         * Set the current placeholder value of the input widget.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @param {string|string[]|null} value
         * The placeholder to set for the input element. Only applicable to text
         * inputs, not to radio buttons, selects or similar.
         */
        setPlaceholder(value: string | string[] | null): void;
        /**
         * Check whether the input value was altered by the user.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @returns {boolean}
         * Returns `true` if the input value has been altered by the user or
         * `false` if it is unchanged. Note that if the user modifies the initial
         * value and changes it back to the original state, it is still reported
         * as changed.
         */
        isChanged(): boolean;
        /**
         * Check whether the current input value is valid.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @returns {boolean}
         * Returns `true` if the current input value is valid or `false` if it does
         * not meet the validation constraints.
         */
        isValid(): boolean;
        /**
         * Returns the current validation error
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @returns {string}
         * The validation error at this time
         */
        getValidationError(): string;
        /**
         * Force validation of the current input value.
         *
         * Usually input validation is automatically triggered by various DOM events
         * bound to the input widget. In some cases it is required though to manually
         * trigger validation runs, e.g. when programmatically altering values.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @returns {boolean}
         */
        triggerValidation(): boolean;
        /**
         * Dispatch a custom (synthetic) event in response to received events.
         *
         * Sets up event handlers on the given target DOM node for the given event
         * names that dispatch a custom event of the given type to the widget root
         * DOM node.
         *
         * The primary purpose of this function is to set up a series of custom
         * uniform standard events such as `widget-update`, `validation-success`,
         * `validation-failure` etc. which are triggered by various different
         * widget specific native DOM events.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @param {Node} targetNode
         * Specifies the DOM node on which the native event listeners should be
         * registered.
         *
         * @param {string} synevent
         * The name of the custom event to dispatch to the widget root DOM node.
         *
         * @param {string[]} events
         * The native DOM events for which event handlers should be registered.
         */
        registerEvents(targetNode: Node, synevent: string, events: string[]): void;
        /**
         * Set up listeners for native DOM events that may update the widget value.
         *
         * Sets up event handlers on the given target DOM node for the given event
         * names which may cause the input value to update, such as `keyup` or
         * `onclick` events. In contrast to change events, such update events will
         * trigger input value validation.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @param {Node} targetNode
         * Specifies the DOM node on which the event listeners should be registered.
         *
         * @param {...string} events
         * The DOM events for which event handlers should be registered.
         */
        setUpdateEvents(targetNode: Node, ...events: string[]): void;
        /**
         * Set up listeners for native DOM events that may change the widget value.
         *
         * Sets up event handlers on the given target DOM node for the given event
         * names which may cause the input value to change completely, such as
         * `change` events in a select menu. In contrast to update events, such
         * change events will not trigger input value validation but they may cause
         * field dependencies to get re-evaluated and will mark the input widget
         * as dirty.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @param {Node} targetNode
         * Specifies the DOM node on which the event listeners should be registered.
         *
         * @param {...string} events
         * The DOM events for which event handlers should be registered.
         */
        setChangeEvents(targetNode: Node, ...events: string[]): void;
        /**
         * Render the widget, set up event listeners and return resulting markup.
         * @abstract
         * @instance
         * @memberof LuCI.ui.AbstractElement
         *
         * @returns {Node}
         * Returns a DOM Node or DocumentFragment containing the rendered
         * widget markup.
         */
        render(): Node;
    }>>;
    Textfield: import("./classtypes.js").LuCIClass<import("./classtypes.js").Merge<import("./classtypes.js").Merge<import("./classtypes.js").BaseInstance, {
        /**
         * Read the current value of the input widget.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @returns {string|string[]|null}
         * The current value of the input element. For simple inputs like text
         * fields or selects, the return value type will be a - possibly empty -
         * string. Complex widgets such as `DynamicList` instances may result in
         * an array of strings or `null` for unset values.
         */
        getValue(): string | string[] | null;
        /**
         * Set the current value of the input widget.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @param {string|string[]|null} value
         * The value to set the input element to. For simple inputs like text
         * fields or selects, the value should be a - possibly empty - string.
         * Complex widgets such as `DynamicList` instances may accept string array
         * or `null` values.
         */
        setValue(value: string | string[] | null): void;
        /**
         * Set the current placeholder value of the input widget.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @param {string|string[]|null} value
         * The placeholder to set for the input element. Only applicable to text
         * inputs, not to radio buttons, selects or similar.
         */
        setPlaceholder(value: string | string[] | null): void;
        /**
         * Check whether the input value was altered by the user.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @returns {boolean}
         * Returns `true` if the input value has been altered by the user or
         * `false` if it is unchanged. Note that if the user modifies the initial
         * value and changes it back to the original state, it is still reported
         * as changed.
         */
        isChanged(): boolean;
        /**
         * Check whether the current input value is valid.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @returns {boolean}
         * Returns `true` if the current input value is valid or `false` if it does
         * not meet the validation constraints.
         */
        isValid(): boolean;
        /**
         * Returns the current validation error
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @returns {string}
         * The validation error at this time
         */
        getValidationError(): string;
        /**
         * Force validation of the current input value.
         *
         * Usually input validation is automatically triggered by various DOM events
         * bound to the input widget. In some cases it is required though to manually
         * trigger validation runs, e.g. when programmatically altering values.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @returns {boolean}
         */
        triggerValidation(): boolean;
        /**
         * Dispatch a custom (synthetic) event in response to received events.
         *
         * Sets up event handlers on the given target DOM node for the given event
         * names that dispatch a custom event of the given type to the widget root
         * DOM node.
         *
         * The primary purpose of this function is to set up a series of custom
         * uniform standard events such as `widget-update`, `validation-success`,
         * `validation-failure` etc. which are triggered by various different
         * widget specific native DOM events.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @param {Node} targetNode
         * Specifies the DOM node on which the native event listeners should be
         * registered.
         *
         * @param {string} synevent
         * The name of the custom event to dispatch to the widget root DOM node.
         *
         * @param {string[]} events
         * The native DOM events for which event handlers should be registered.
         */
        registerEvents(targetNode: Node, synevent: string, events: string[]): void;
        /**
         * Set up listeners for native DOM events that may update the widget value.
         *
         * Sets up event handlers on the given target DOM node for the given event
         * names which may cause the input value to update, such as `keyup` or
         * `onclick` events. In contrast to change events, such update events will
         * trigger input value validation.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @param {Node} targetNode
         * Specifies the DOM node on which the event listeners should be registered.
         *
         * @param {...string} events
         * The DOM events for which event handlers should be registered.
         */
        setUpdateEvents(targetNode: Node, ...events: string[]): void;
        /**
         * Set up listeners for native DOM events that may change the widget value.
         *
         * Sets up event handlers on the given target DOM node for the given event
         * names which may cause the input value to change completely, such as
         * `change` events in a select menu. In contrast to update events, such
         * change events will not trigger input value validation but they may cause
         * field dependencies to get re-evaluated and will mark the input widget
         * as dirty.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @param {Node} targetNode
         * Specifies the DOM node on which the event listeners should be registered.
         *
         * @param {...string} events
         * The DOM events for which event handlers should be registered.
         */
        setChangeEvents(targetNode: Node, ...events: string[]): void;
        /**
         * Render the widget, set up event listeners and return resulting markup.
         * @abstract
         * @instance
         * @memberof LuCI.ui.AbstractElement
         *
         * @returns {Node}
         * Returns a DOM Node or DocumentFragment containing the rendered
         * widget markup.
         */
        render(): Node;
    }>, {
        /** @type {any} */ value: any;
        /** @type {any} */ options: any;
        __init__(value: any, options: any): void;
        /** @override */
        render(): Node;
        /**
         * @private
         * @param {Node} frameEl
         * @returns {Node}
         */
        bind(frameEl: Node): Node;
        /** @override */
        getValue(): any;
        /** @override */
        setValue(value: any): void;
    }>>;
    Textarea: import("./classtypes.js").LuCIClass<import("./classtypes.js").Merge<import("./classtypes.js").Merge<import("./classtypes.js").BaseInstance, {
        /**
         * Read the current value of the input widget.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @returns {string|string[]|null}
         * The current value of the input element. For simple inputs like text
         * fields or selects, the return value type will be a - possibly empty -
         * string. Complex widgets such as `DynamicList` instances may result in
         * an array of strings or `null` for unset values.
         */
        getValue(): string | string[] | null;
        /**
         * Set the current value of the input widget.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @param {string|string[]|null} value
         * The value to set the input element to. For simple inputs like text
         * fields or selects, the value should be a - possibly empty - string.
         * Complex widgets such as `DynamicList` instances may accept string array
         * or `null` values.
         */
        setValue(value: string | string[] | null): void;
        /**
         * Set the current placeholder value of the input widget.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @param {string|string[]|null} value
         * The placeholder to set for the input element. Only applicable to text
         * inputs, not to radio buttons, selects or similar.
         */
        setPlaceholder(value: string | string[] | null): void;
        /**
         * Check whether the input value was altered by the user.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @returns {boolean}
         * Returns `true` if the input value has been altered by the user or
         * `false` if it is unchanged. Note that if the user modifies the initial
         * value and changes it back to the original state, it is still reported
         * as changed.
         */
        isChanged(): boolean;
        /**
         * Check whether the current input value is valid.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @returns {boolean}
         * Returns `true` if the current input value is valid or `false` if it does
         * not meet the validation constraints.
         */
        isValid(): boolean;
        /**
         * Returns the current validation error
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @returns {string}
         * The validation error at this time
         */
        getValidationError(): string;
        /**
         * Force validation of the current input value.
         *
         * Usually input validation is automatically triggered by various DOM events
         * bound to the input widget. In some cases it is required though to manually
         * trigger validation runs, e.g. when programmatically altering values.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @returns {boolean}
         */
        triggerValidation(): boolean;
        /**
         * Dispatch a custom (synthetic) event in response to received events.
         *
         * Sets up event handlers on the given target DOM node for the given event
         * names that dispatch a custom event of the given type to the widget root
         * DOM node.
         *
         * The primary purpose of this function is to set up a series of custom
         * uniform standard events such as `widget-update`, `validation-success`,
         * `validation-failure` etc. which are triggered by various different
         * widget specific native DOM events.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @param {Node} targetNode
         * Specifies the DOM node on which the native event listeners should be
         * registered.
         *
         * @param {string} synevent
         * The name of the custom event to dispatch to the widget root DOM node.
         *
         * @param {string[]} events
         * The native DOM events for which event handlers should be registered.
         */
        registerEvents(targetNode: Node, synevent: string, events: string[]): void;
        /**
         * Set up listeners for native DOM events that may update the widget value.
         *
         * Sets up event handlers on the given target DOM node for the given event
         * names which may cause the input value to update, such as `keyup` or
         * `onclick` events. In contrast to change events, such update events will
         * trigger input value validation.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @param {Node} targetNode
         * Specifies the DOM node on which the event listeners should be registered.
         *
         * @param {...string} events
         * The DOM events for which event handlers should be registered.
         */
        setUpdateEvents(targetNode: Node, ...events: string[]): void;
        /**
         * Set up listeners for native DOM events that may change the widget value.
         *
         * Sets up event handlers on the given target DOM node for the given event
         * names which may cause the input value to change completely, such as
         * `change` events in a select menu. In contrast to update events, such
         * change events will not trigger input value validation but they may cause
         * field dependencies to get re-evaluated and will mark the input widget
         * as dirty.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @param {Node} targetNode
         * Specifies the DOM node on which the event listeners should be registered.
         *
         * @param {...string} events
         * The DOM events for which event handlers should be registered.
         */
        setChangeEvents(targetNode: Node, ...events: string[]): void;
        /**
         * Render the widget, set up event listeners and return resulting markup.
         * @abstract
         * @instance
         * @memberof LuCI.ui.AbstractElement
         *
         * @returns {Node}
         * Returns a DOM Node or DocumentFragment containing the rendered
         * widget markup.
         */
        render(): Node;
    }>, {
        /** @type {any} */ value: any;
        /** @type {any} */ options: any;
        __init__(value: any, options: any): void;
        /** @override */
        render(): Node;
        /**
         * @private
         * @param {Node} frameEl
         * @returns {Node}
         */
        bind(frameEl: Node): Node;
        /** @override */
        getValue(): any;
        /** @override */
        setValue(value: any): void;
    }>>;
    Checkbox: import("./classtypes.js").LuCIClass<import("./classtypes.js").Merge<import("./classtypes.js").Merge<import("./classtypes.js").BaseInstance, {
        /**
         * Read the current value of the input widget.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @returns {string|string[]|null}
         * The current value of the input element. For simple inputs like text
         * fields or selects, the return value type will be a - possibly empty -
         * string. Complex widgets such as `DynamicList` instances may result in
         * an array of strings or `null` for unset values.
         */
        getValue(): string | string[] | null;
        /**
         * Set the current value of the input widget.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @param {string|string[]|null} value
         * The value to set the input element to. For simple inputs like text
         * fields or selects, the value should be a - possibly empty - string.
         * Complex widgets such as `DynamicList` instances may accept string array
         * or `null` values.
         */
        setValue(value: string | string[] | null): void;
        /**
         * Set the current placeholder value of the input widget.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @param {string|string[]|null} value
         * The placeholder to set for the input element. Only applicable to text
         * inputs, not to radio buttons, selects or similar.
         */
        setPlaceholder(value: string | string[] | null): void;
        /**
         * Check whether the input value was altered by the user.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @returns {boolean}
         * Returns `true` if the input value has been altered by the user or
         * `false` if it is unchanged. Note that if the user modifies the initial
         * value and changes it back to the original state, it is still reported
         * as changed.
         */
        isChanged(): boolean;
        /**
         * Check whether the current input value is valid.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @returns {boolean}
         * Returns `true` if the current input value is valid or `false` if it does
         * not meet the validation constraints.
         */
        isValid(): boolean;
        /**
         * Returns the current validation error
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @returns {string}
         * The validation error at this time
         */
        getValidationError(): string;
        /**
         * Force validation of the current input value.
         *
         * Usually input validation is automatically triggered by various DOM events
         * bound to the input widget. In some cases it is required though to manually
         * trigger validation runs, e.g. when programmatically altering values.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @returns {boolean}
         */
        triggerValidation(): boolean;
        /**
         * Dispatch a custom (synthetic) event in response to received events.
         *
         * Sets up event handlers on the given target DOM node for the given event
         * names that dispatch a custom event of the given type to the widget root
         * DOM node.
         *
         * The primary purpose of this function is to set up a series of custom
         * uniform standard events such as `widget-update`, `validation-success`,
         * `validation-failure` etc. which are triggered by various different
         * widget specific native DOM events.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @param {Node} targetNode
         * Specifies the DOM node on which the native event listeners should be
         * registered.
         *
         * @param {string} synevent
         * The name of the custom event to dispatch to the widget root DOM node.
         *
         * @param {string[]} events
         * The native DOM events for which event handlers should be registered.
         */
        registerEvents(targetNode: Node, synevent: string, events: string[]): void;
        /**
         * Set up listeners for native DOM events that may update the widget value.
         *
         * Sets up event handlers on the given target DOM node for the given event
         * names which may cause the input value to update, such as `keyup` or
         * `onclick` events. In contrast to change events, such update events will
         * trigger input value validation.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @param {Node} targetNode
         * Specifies the DOM node on which the event listeners should be registered.
         *
         * @param {...string} events
         * The DOM events for which event handlers should be registered.
         */
        setUpdateEvents(targetNode: Node, ...events: string[]): void;
        /**
         * Set up listeners for native DOM events that may change the widget value.
         *
         * Sets up event handlers on the given target DOM node for the given event
         * names which may cause the input value to change completely, such as
         * `change` events in a select menu. In contrast to update events, such
         * change events will not trigger input value validation but they may cause
         * field dependencies to get re-evaluated and will mark the input widget
         * as dirty.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @param {Node} targetNode
         * Specifies the DOM node on which the event listeners should be registered.
         *
         * @param {...string} events
         * The DOM events for which event handlers should be registered.
         */
        setChangeEvents(targetNode: Node, ...events: string[]): void;
        /**
         * Render the widget, set up event listeners and return resulting markup.
         * @abstract
         * @instance
         * @memberof LuCI.ui.AbstractElement
         *
         * @returns {Node}
         * Returns a DOM Node or DocumentFragment containing the rendered
         * widget markup.
         */
        render(): Node;
    }>, {
        /** @type {any} */ value: any;
        /** @type {any} */ options: any;
        __init__(value: any, options: any): void;
        /** @override */
        render(): Node;
        /**
         * @private
         * @param {Node} frameEl
         * @returns {Node}
         */
        bind(frameEl: Node): Node;
        /**
         * Test whether the checkbox is currently checked.
         *
         * @instance
         * @memberof LuCI.ui.Checkbox
         * @returns {boolean}
         * Returns `true` when the checkbox is currently checked, otherwise `false`.
         */
        isChecked(): boolean;
        /** @override */
        getValue(): any;
        /** @override */
        setValue(value: any): void;
    }>>;
    Select: import("./classtypes.js").LuCIClass<import("./classtypes.js").Merge<import("./classtypes.js").Merge<import("./classtypes.js").BaseInstance, {
        /**
         * Read the current value of the input widget.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @returns {string|string[]|null}
         * The current value of the input element. For simple inputs like text
         * fields or selects, the return value type will be a - possibly empty -
         * string. Complex widgets such as `DynamicList` instances may result in
         * an array of strings or `null` for unset values.
         */
        getValue(): string | string[] | null;
        /**
         * Set the current value of the input widget.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @param {string|string[]|null} value
         * The value to set the input element to. For simple inputs like text
         * fields or selects, the value should be a - possibly empty - string.
         * Complex widgets such as `DynamicList` instances may accept string array
         * or `null` values.
         */
        setValue(value: string | string[] | null): void;
        /**
         * Set the current placeholder value of the input widget.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @param {string|string[]|null} value
         * The placeholder to set for the input element. Only applicable to text
         * inputs, not to radio buttons, selects or similar.
         */
        setPlaceholder(value: string | string[] | null): void;
        /**
         * Check whether the input value was altered by the user.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @returns {boolean}
         * Returns `true` if the input value has been altered by the user or
         * `false` if it is unchanged. Note that if the user modifies the initial
         * value and changes it back to the original state, it is still reported
         * as changed.
         */
        isChanged(): boolean;
        /**
         * Check whether the current input value is valid.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @returns {boolean}
         * Returns `true` if the current input value is valid or `false` if it does
         * not meet the validation constraints.
         */
        isValid(): boolean;
        /**
         * Returns the current validation error
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @returns {string}
         * The validation error at this time
         */
        getValidationError(): string;
        /**
         * Force validation of the current input value.
         *
         * Usually input validation is automatically triggered by various DOM events
         * bound to the input widget. In some cases it is required though to manually
         * trigger validation runs, e.g. when programmatically altering values.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @returns {boolean}
         */
        triggerValidation(): boolean;
        /**
         * Dispatch a custom (synthetic) event in response to received events.
         *
         * Sets up event handlers on the given target DOM node for the given event
         * names that dispatch a custom event of the given type to the widget root
         * DOM node.
         *
         * The primary purpose of this function is to set up a series of custom
         * uniform standard events such as `widget-update`, `validation-success`,
         * `validation-failure` etc. which are triggered by various different
         * widget specific native DOM events.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @param {Node} targetNode
         * Specifies the DOM node on which the native event listeners should be
         * registered.
         *
         * @param {string} synevent
         * The name of the custom event to dispatch to the widget root DOM node.
         *
         * @param {string[]} events
         * The native DOM events for which event handlers should be registered.
         */
        registerEvents(targetNode: Node, synevent: string, events: string[]): void;
        /**
         * Set up listeners for native DOM events that may update the widget value.
         *
         * Sets up event handlers on the given target DOM node for the given event
         * names which may cause the input value to update, such as `keyup` or
         * `onclick` events. In contrast to change events, such update events will
         * trigger input value validation.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @param {Node} targetNode
         * Specifies the DOM node on which the event listeners should be registered.
         *
         * @param {...string} events
         * The DOM events for which event handlers should be registered.
         */
        setUpdateEvents(targetNode: Node, ...events: string[]): void;
        /**
         * Set up listeners for native DOM events that may change the widget value.
         *
         * Sets up event handlers on the given target DOM node for the given event
         * names which may cause the input value to change completely, such as
         * `change` events in a select menu. In contrast to update events, such
         * change events will not trigger input value validation but they may cause
         * field dependencies to get re-evaluated and will mark the input widget
         * as dirty.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @param {Node} targetNode
         * Specifies the DOM node on which the event listeners should be registered.
         *
         * @param {...string} events
         * The DOM events for which event handlers should be registered.
         */
        setChangeEvents(targetNode: Node, ...events: string[]): void;
        /**
         * Render the widget, set up event listeners and return resulting markup.
         * @abstract
         * @instance
         * @memberof LuCI.ui.AbstractElement
         *
         * @returns {Node}
         * Returns a DOM Node or DocumentFragment containing the rendered
         * widget markup.
         */
        render(): Node;
    }>, {
        /** @type {any} */ values: any;
        /** @type {any} */ choices: any;
        /** @type {any} */ options: any;
        __init__(value: any, choices: any, options: any): void;
        /** @override */
        render(): Node;
        /**
         * @private
         * @param {Node} frameEl
         * @returns {Node}
         */
        bind(frameEl: Node): Node;
        /** @override */
        getValue(): any;
        /** @override */
        setValue(value: any): void;
    }>>;
    Dropdown: import("./classtypes.js").LuCIClass<import("./classtypes.js").Merge<import("./classtypes.js").Merge<import("./classtypes.js").BaseInstance, {
        /**
         * Read the current value of the input widget.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @returns {string|string[]|null}
         * The current value of the input element. For simple inputs like text
         * fields or selects, the return value type will be a - possibly empty -
         * string. Complex widgets such as `DynamicList` instances may result in
         * an array of strings or `null` for unset values.
         */
        getValue(): string | string[] | null;
        /**
         * Set the current value of the input widget.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @param {string|string[]|null} value
         * The value to set the input element to. For simple inputs like text
         * fields or selects, the value should be a - possibly empty - string.
         * Complex widgets such as `DynamicList` instances may accept string array
         * or `null` values.
         */
        setValue(value: string | string[] | null): void;
        /**
         * Set the current placeholder value of the input widget.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @param {string|string[]|null} value
         * The placeholder to set for the input element. Only applicable to text
         * inputs, not to radio buttons, selects or similar.
         */
        setPlaceholder(value: string | string[] | null): void;
        /**
         * Check whether the input value was altered by the user.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @returns {boolean}
         * Returns `true` if the input value has been altered by the user or
         * `false` if it is unchanged. Note that if the user modifies the initial
         * value and changes it back to the original state, it is still reported
         * as changed.
         */
        isChanged(): boolean;
        /**
         * Check whether the current input value is valid.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @returns {boolean}
         * Returns `true` if the current input value is valid or `false` if it does
         * not meet the validation constraints.
         */
        isValid(): boolean;
        /**
         * Returns the current validation error
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @returns {string}
         * The validation error at this time
         */
        getValidationError(): string;
        /**
         * Force validation of the current input value.
         *
         * Usually input validation is automatically triggered by various DOM events
         * bound to the input widget. In some cases it is required though to manually
         * trigger validation runs, e.g. when programmatically altering values.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @returns {boolean}
         */
        triggerValidation(): boolean;
        /**
         * Dispatch a custom (synthetic) event in response to received events.
         *
         * Sets up event handlers on the given target DOM node for the given event
         * names that dispatch a custom event of the given type to the widget root
         * DOM node.
         *
         * The primary purpose of this function is to set up a series of custom
         * uniform standard events such as `widget-update`, `validation-success`,
         * `validation-failure` etc. which are triggered by various different
         * widget specific native DOM events.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @param {Node} targetNode
         * Specifies the DOM node on which the native event listeners should be
         * registered.
         *
         * @param {string} synevent
         * The name of the custom event to dispatch to the widget root DOM node.
         *
         * @param {string[]} events
         * The native DOM events for which event handlers should be registered.
         */
        registerEvents(targetNode: Node, synevent: string, events: string[]): void;
        /**
         * Set up listeners for native DOM events that may update the widget value.
         *
         * Sets up event handlers on the given target DOM node for the given event
         * names which may cause the input value to update, such as `keyup` or
         * `onclick` events. In contrast to change events, such update events will
         * trigger input value validation.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @param {Node} targetNode
         * Specifies the DOM node on which the event listeners should be registered.
         *
         * @param {...string} events
         * The DOM events for which event handlers should be registered.
         */
        setUpdateEvents(targetNode: Node, ...events: string[]): void;
        /**
         * Set up listeners for native DOM events that may change the widget value.
         *
         * Sets up event handlers on the given target DOM node for the given event
         * names which may cause the input value to change completely, such as
         * `change` events in a select menu. In contrast to update events, such
         * change events will not trigger input value validation but they may cause
         * field dependencies to get re-evaluated and will mark the input widget
         * as dirty.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @param {Node} targetNode
         * Specifies the DOM node on which the event listeners should be registered.
         *
         * @param {...string} events
         * The DOM events for which event handlers should be registered.
         */
        setChangeEvents(targetNode: Node, ...events: string[]): void;
        /**
         * Render the widget, set up event listeners and return resulting markup.
         * @abstract
         * @instance
         * @memberof LuCI.ui.AbstractElement
         *
         * @returns {Node}
         * Returns a DOM Node or DocumentFragment containing the rendered
         * widget markup.
         */
        render(): Node;
    }>, {
        /** @type {any} */ values: any;
        /** @type {any} */ choices: any;
        /** @type {any} */ options: any;
        __init__(value: any, choices: any, options: any): void;
        /** @override */
        render(): Node;
        /**
         * @private
         * @param {Node} sb
         * @returns {Node}
         */
        bind(sb: Node): Node;
        /**
         * @private
         * @param {Node} element
         * @returns {document}
         */
        getScrollParent(element: Node): Document;
        /**
         * @private
         * @param {Node} sb
         */
        openDropdown(sb: Node): void;
        /**
         * @private
         * @param {Node} sb
         * @param {boolean} no_focus
         */
        closeDropdown(sb: Node, no_focus: boolean): void;
        /**
         * @private
         * @param {Node} sb
         * @param {Node} li list item
         * @param {boolean} force_state
         */
        toggleItem(sb: Node, li: Node, force_state: boolean): void;
        /**
         * @private
         * @param {Node} sb
         * @param {Node} li list item
         */
        transformItem(sb: Node, li: Node): void;
        /**
         * @private
         * @param {Node} sb
         * @param {Node} ul unordered list
         */
        saveValues(sb: Node, ul: Node): void;
        /**
         * @private
         * @param {Node} sb
         * @param {string[]} values
         */
        setValues(sb: Node, values: string[]): void;
        /**
         * @private
         * @param {Node} sb
         * @param {Node} elem
         * @param {boolean} scroll
         */
        setFocus(sb: Node, elem: Node, scroll: boolean): void;
        /**
         * @private
         * @param {Event} ev
         */
        handleMouseout(ev: Event): void;
        /**
         * @private
         * @param {Node} sb
         * @param {string} value
         * @param {string} label
         * @returns {Node}
         */
        createChoiceElement(sb: Node, value: string, label: string): Node;
        /**
         * @private
         * @param {Node} sb
         * @param {string} value
         */
        createItems(sb: Node, value: string): void;
        /**
         * Remove all existing choices from the dropdown menu.
         *
         * This function removes all preexisting dropdown choices from the widget,
         * keeping only choices currently being selected unless `reset_values` is
         * given, in which case all choices and deselected and removed.
         *
         * @instance
         * @memberof LuCI.ui.Dropdown
         * @param {boolean} [reset_value=false]
         * If set to `true`, deselect and remove selected choices as well instead
         * of keeping them.
         */
        clearChoices(reset_value?: boolean): void;
        /**
         * Add new choices to the dropdown menu.
         *
         * This function adds further choices to an existing dropdown menu,
         * ignoring choice values which are already present.
         *
         * @instance
         * @memberof LuCI.ui.Dropdown
         * @param {string[]} values
         * The choice values to add to the dropdown widget.
         *
         * @param {Object<string, *>} labels
         * The choice label values to use when adding dropdown choices. If no
         * label is found for a particular choice value, the value itself is used
         * as label text. Choice labels may be any valid value accepted by
         * {@link LuCI.dom#content}.
         */
        addChoices(values: string[], labels: {
            [x: string]: any;
        }): void;
        /**
         * Close all open dropdown widgets in the current document.
         */
        closeAllDropdowns(): void;
        /**
         * @private
         * @param {Event} ev
         */
        handleClick(ev: Event): void;
        /**
         * @private
         * @param {Event} ev
         */
        handleKeydown(ev: Event): void;
        /**
         * @private
         * @param {Event} ev
         */
        handleDropdownClose(ev: Event): void;
        /**
         * @private
         * @param {Event} ev
         */
        handleDropdownSelect(ev: Event): void;
        /**
         * @private
         * @param {Event} ev
         */
        handleMouseover(ev: Event): void;
        /**
         * @private
         * @param {Event} ev
         */
        handleFocus(ev: Event): void;
        /**
         * @private
         * @param {Event} ev
         */
        handleCanaryFocus(ev: Event): void;
        /**
         * @private
         * @param {Event} ev
         */
        handleCreateKeydown(ev: Event): void;
        /**
         * @private
         * @param {Event} ev
         */
        handleCreateFocus(ev: Event): void;
        /**
         * @private
         * @param {Event} ev
         */
        handleCreateBlur(ev: Event): void;
        /**
         * @private
         * @param {Event} ev
         */
        handleCreateClick(ev: Event): void;
        /** @override */
        setValue(values: any): void;
        /** @override */
        getValue(): any;
    }>>;
    DynamicList: import("./classtypes.js").LuCIClass<import("./classtypes.js").Merge<import("./classtypes.js").Merge<import("./classtypes.js").BaseInstance, {
        /**
         * Read the current value of the input widget.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @returns {string|string[]|null}
         * The current value of the input element. For simple inputs like text
         * fields or selects, the return value type will be a - possibly empty -
         * string. Complex widgets such as `DynamicList` instances may result in
         * an array of strings or `null` for unset values.
         */
        getValue(): string | string[] | null;
        /**
         * Set the current value of the input widget.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @param {string|string[]|null} value
         * The value to set the input element to. For simple inputs like text
         * fields or selects, the value should be a - possibly empty - string.
         * Complex widgets such as `DynamicList` instances may accept string array
         * or `null` values.
         */
        setValue(value: string | string[] | null): void;
        /**
         * Set the current placeholder value of the input widget.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @param {string|string[]|null} value
         * The placeholder to set for the input element. Only applicable to text
         * inputs, not to radio buttons, selects or similar.
         */
        setPlaceholder(value: string | string[] | null): void;
        /**
         * Check whether the input value was altered by the user.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @returns {boolean}
         * Returns `true` if the input value has been altered by the user or
         * `false` if it is unchanged. Note that if the user modifies the initial
         * value and changes it back to the original state, it is still reported
         * as changed.
         */
        isChanged(): boolean;
        /**
         * Check whether the current input value is valid.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @returns {boolean}
         * Returns `true` if the current input value is valid or `false` if it does
         * not meet the validation constraints.
         */
        isValid(): boolean;
        /**
         * Returns the current validation error
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @returns {string}
         * The validation error at this time
         */
        getValidationError(): string;
        /**
         * Force validation of the current input value.
         *
         * Usually input validation is automatically triggered by various DOM events
         * bound to the input widget. In some cases it is required though to manually
         * trigger validation runs, e.g. when programmatically altering values.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @returns {boolean}
         */
        triggerValidation(): boolean;
        /**
         * Dispatch a custom (synthetic) event in response to received events.
         *
         * Sets up event handlers on the given target DOM node for the given event
         * names that dispatch a custom event of the given type to the widget root
         * DOM node.
         *
         * The primary purpose of this function is to set up a series of custom
         * uniform standard events such as `widget-update`, `validation-success`,
         * `validation-failure` etc. which are triggered by various different
         * widget specific native DOM events.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @param {Node} targetNode
         * Specifies the DOM node on which the native event listeners should be
         * registered.
         *
         * @param {string} synevent
         * The name of the custom event to dispatch to the widget root DOM node.
         *
         * @param {string[]} events
         * The native DOM events for which event handlers should be registered.
         */
        registerEvents(targetNode: Node, synevent: string, events: string[]): void;
        /**
         * Set up listeners for native DOM events that may update the widget value.
         *
         * Sets up event handlers on the given target DOM node for the given event
         * names which may cause the input value to update, such as `keyup` or
         * `onclick` events. In contrast to change events, such update events will
         * trigger input value validation.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @param {Node} targetNode
         * Specifies the DOM node on which the event listeners should be registered.
         *
         * @param {...string} events
         * The DOM events for which event handlers should be registered.
         */
        setUpdateEvents(targetNode: Node, ...events: string[]): void;
        /**
         * Set up listeners for native DOM events that may change the widget value.
         *
         * Sets up event handlers on the given target DOM node for the given event
         * names which may cause the input value to change completely, such as
         * `change` events in a select menu. In contrast to update events, such
         * change events will not trigger input value validation but they may cause
         * field dependencies to get re-evaluated and will mark the input widget
         * as dirty.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @param {Node} targetNode
         * Specifies the DOM node on which the event listeners should be registered.
         *
         * @param {...string} events
         * The DOM events for which event handlers should be registered.
         */
        setChangeEvents(targetNode: Node, ...events: string[]): void;
        /**
         * Render the widget, set up event listeners and return resulting markup.
         * @abstract
         * @instance
         * @memberof LuCI.ui.AbstractElement
         *
         * @returns {Node}
         * Returns a DOM Node or DocumentFragment containing the rendered
         * widget markup.
         */
        render(): Node;
    }>, {
        /** @type {any} */ values: any;
        /** @type {any} */ choices: any;
        /** @type {any} */ options: any;
        __init__(values: any, choices: any, options: any): void;
        /** @override */
        render(): Node;
        /**
         * @private
         * @param {Node} dl
         */
        initDragAndDrop(dl: Node): void;
        /**
         * @private
         * @param {Node} dl
         * @returns {Node}
         */
        bind(dl: Node): Node;
        /**
         * @private
         * @param {Node} dl
         * @param {string} value
         * @param {string} text
         * @param {boolean} flash
         */
        addItem(dl: Node, value: string, text: string, flash: boolean): void;
        /**
         * @private
         * @param {Node} dl
         * @param {string} value
         */
        dispatchCbiDynlistChange(dl: Node, value: string): void;
        /**
         * @private
         * @param {Node} dl
         * @param {Node} item
         */
        removeItem(dl: Node, item: Node): void;
        /**
         * @private
         * @param {Event} ev
         */
        handleClick(ev: Event): void;
        /**
         * @private
         * @param {Event} ev
         */
        handleDropdownChange(ev: Event): void;
        /**
         * @private
         * @param {Event} ev
         */
        handleKeydown(ev: Event): void;
        /** @override */
        getValue(): any[];
        /** @override */
        setValue(values: any): void;
        /**
         * Add new suggested choices to the dynamic list.
         *
         * This function adds further choices to an existing dynamic list,
         * ignoring choice values which are already present.
         *
         * @instance
         * @memberof LuCI.ui.DynamicList
         * @param {string[]} values
         * The choice values to add to the dynamic lists suggestion dropdown.
         *
         * @param {Object<string, *>} labels
         * The choice label values to use when adding suggested choices. If no
         * label is found for a particular choice value, the value itself is used
         * as label text. Choice labels may be any valid value accepted by
         * {@link LuCI.dom#content}.
         */
        addChoices(values: string[], labels: {
            [x: string]: any;
        }): void;
        /**
         * Remove all existing choices from the dynamic list.
         *
         * This function removes all preexisting suggested choices from the widget.
         *
         * @instance
         * @memberof LuCI.ui.DynamicList
         */
        clearChoices(): void;
    }>>;
    RangeSlider: import("./classtypes.js").LuCIClass<import("./classtypes.js").Merge<import("./classtypes.js").Merge<import("./classtypes.js").BaseInstance, {
        /**
         * Read the current value of the input widget.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @returns {string|string[]|null}
         * The current value of the input element. For simple inputs like text
         * fields or selects, the return value type will be a - possibly empty -
         * string. Complex widgets such as `DynamicList` instances may result in
         * an array of strings or `null` for unset values.
         */
        getValue(): string | string[] | null;
        /**
         * Set the current value of the input widget.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @param {string|string[]|null} value
         * The value to set the input element to. For simple inputs like text
         * fields or selects, the value should be a - possibly empty - string.
         * Complex widgets such as `DynamicList` instances may accept string array
         * or `null` values.
         */
        setValue(value: string | string[] | null): void;
        /**
         * Set the current placeholder value of the input widget.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @param {string|string[]|null} value
         * The placeholder to set for the input element. Only applicable to text
         * inputs, not to radio buttons, selects or similar.
         */
        setPlaceholder(value: string | string[] | null): void;
        /**
         * Check whether the input value was altered by the user.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @returns {boolean}
         * Returns `true` if the input value has been altered by the user or
         * `false` if it is unchanged. Note that if the user modifies the initial
         * value and changes it back to the original state, it is still reported
         * as changed.
         */
        isChanged(): boolean;
        /**
         * Check whether the current input value is valid.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @returns {boolean}
         * Returns `true` if the current input value is valid or `false` if it does
         * not meet the validation constraints.
         */
        isValid(): boolean;
        /**
         * Returns the current validation error
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @returns {string}
         * The validation error at this time
         */
        getValidationError(): string;
        /**
         * Force validation of the current input value.
         *
         * Usually input validation is automatically triggered by various DOM events
         * bound to the input widget. In some cases it is required though to manually
         * trigger validation runs, e.g. when programmatically altering values.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @returns {boolean}
         */
        triggerValidation(): boolean;
        /**
         * Dispatch a custom (synthetic) event in response to received events.
         *
         * Sets up event handlers on the given target DOM node for the given event
         * names that dispatch a custom event of the given type to the widget root
         * DOM node.
         *
         * The primary purpose of this function is to set up a series of custom
         * uniform standard events such as `widget-update`, `validation-success`,
         * `validation-failure` etc. which are triggered by various different
         * widget specific native DOM events.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @param {Node} targetNode
         * Specifies the DOM node on which the native event listeners should be
         * registered.
         *
         * @param {string} synevent
         * The name of the custom event to dispatch to the widget root DOM node.
         *
         * @param {string[]} events
         * The native DOM events for which event handlers should be registered.
         */
        registerEvents(targetNode: Node, synevent: string, events: string[]): void;
        /**
         * Set up listeners for native DOM events that may update the widget value.
         *
         * Sets up event handlers on the given target DOM node for the given event
         * names which may cause the input value to update, such as `keyup` or
         * `onclick` events. In contrast to change events, such update events will
         * trigger input value validation.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @param {Node} targetNode
         * Specifies the DOM node on which the event listeners should be registered.
         *
         * @param {...string} events
         * The DOM events for which event handlers should be registered.
         */
        setUpdateEvents(targetNode: Node, ...events: string[]): void;
        /**
         * Set up listeners for native DOM events that may change the widget value.
         *
         * Sets up event handlers on the given target DOM node for the given event
         * names which may cause the input value to change completely, such as
         * `change` events in a select menu. In contrast to update events, such
         * change events will not trigger input value validation but they may cause
         * field dependencies to get re-evaluated and will mark the input widget
         * as dirty.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @param {Node} targetNode
         * Specifies the DOM node on which the event listeners should be registered.
         *
         * @param {...string} events
         * The DOM events for which event handlers should be registered.
         */
        setChangeEvents(targetNode: Node, ...events: string[]): void;
        /**
         * Render the widget, set up event listeners and return resulting markup.
         * @abstract
         * @instance
         * @memberof LuCI.ui.AbstractElement
         *
         * @returns {Node}
         * Returns a DOM Node or DocumentFragment containing the rendered
         * widget markup.
         */
        render(): Node;
    }>, {
        __init__(value: any, options: any): void;
        /** @override */
        render(): HTMLElement;
        /** @override */
        getValue(): any;
        /**
         * Return the value calculated by the `calculate` function.
         *
         * @instance
         * @memberof LuCI.ui.RangeSlider
         * @returns {number}
         */
        getCalculatedValue(): number;
        /** @override */
        setValue(value: any): void;
    }>>;
    Combobox: import("./classtypes.js").LuCIClass<import("./classtypes.js").Merge<import("./classtypes.js").Merge<import("./classtypes.js").Merge<import("./classtypes.js").BaseInstance, {
        /**
         * Read the current value of the input widget.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @returns {string|string[]|null}
         * The current value of the input element. For simple inputs like text
         * fields or selects, the return value type will be a - possibly empty -
         * string. Complex widgets such as `DynamicList` instances may result in
         * an array of strings or `null` for unset values.
         */
        getValue(): string | string[] | null;
        /**
         * Set the current value of the input widget.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @param {string|string[]|null} value
         * The value to set the input element to. For simple inputs like text
         * fields or selects, the value should be a - possibly empty - string.
         * Complex widgets such as `DynamicList` instances may accept string array
         * or `null` values.
         */
        setValue(value: string | string[] | null): void;
        /**
         * Set the current placeholder value of the input widget.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @param {string|string[]|null} value
         * The placeholder to set for the input element. Only applicable to text
         * inputs, not to radio buttons, selects or similar.
         */
        setPlaceholder(value: string | string[] | null): void;
        /**
         * Check whether the input value was altered by the user.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @returns {boolean}
         * Returns `true` if the input value has been altered by the user or
         * `false` if it is unchanged. Note that if the user modifies the initial
         * value and changes it back to the original state, it is still reported
         * as changed.
         */
        isChanged(): boolean;
        /**
         * Check whether the current input value is valid.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @returns {boolean}
         * Returns `true` if the current input value is valid or `false` if it does
         * not meet the validation constraints.
         */
        isValid(): boolean;
        /**
         * Returns the current validation error
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @returns {string}
         * The validation error at this time
         */
        getValidationError(): string;
        /**
         * Force validation of the current input value.
         *
         * Usually input validation is automatically triggered by various DOM events
         * bound to the input widget. In some cases it is required though to manually
         * trigger validation runs, e.g. when programmatically altering values.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @returns {boolean}
         */
        triggerValidation(): boolean;
        /**
         * Dispatch a custom (synthetic) event in response to received events.
         *
         * Sets up event handlers on the given target DOM node for the given event
         * names that dispatch a custom event of the given type to the widget root
         * DOM node.
         *
         * The primary purpose of this function is to set up a series of custom
         * uniform standard events such as `widget-update`, `validation-success`,
         * `validation-failure` etc. which are triggered by various different
         * widget specific native DOM events.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @param {Node} targetNode
         * Specifies the DOM node on which the native event listeners should be
         * registered.
         *
         * @param {string} synevent
         * The name of the custom event to dispatch to the widget root DOM node.
         *
         * @param {string[]} events
         * The native DOM events for which event handlers should be registered.
         */
        registerEvents(targetNode: Node, synevent: string, events: string[]): void;
        /**
         * Set up listeners for native DOM events that may update the widget value.
         *
         * Sets up event handlers on the given target DOM node for the given event
         * names which may cause the input value to update, such as `keyup` or
         * `onclick` events. In contrast to change events, such update events will
         * trigger input value validation.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @param {Node} targetNode
         * Specifies the DOM node on which the event listeners should be registered.
         *
         * @param {...string} events
         * The DOM events for which event handlers should be registered.
         */
        setUpdateEvents(targetNode: Node, ...events: string[]): void;
        /**
         * Set up listeners for native DOM events that may change the widget value.
         *
         * Sets up event handlers on the given target DOM node for the given event
         * names which may cause the input value to change completely, such as
         * `change` events in a select menu. In contrast to update events, such
         * change events will not trigger input value validation but they may cause
         * field dependencies to get re-evaluated and will mark the input widget
         * as dirty.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @param {Node} targetNode
         * Specifies the DOM node on which the event listeners should be registered.
         *
         * @param {...string} events
         * The DOM events for which event handlers should be registered.
         */
        setChangeEvents(targetNode: Node, ...events: string[]): void;
        /**
         * Render the widget, set up event listeners and return resulting markup.
         * @abstract
         * @instance
         * @memberof LuCI.ui.AbstractElement
         *
         * @returns {Node}
         * Returns a DOM Node or DocumentFragment containing the rendered
         * widget markup.
         */
        render(): Node;
    }>, {
        /** @type {any} */ values: any;
        /** @type {any} */ choices: any;
        /** @type {any} */ options: any;
        __init__(value: any, choices: any, options: any): void;
        /** @override */
        render(): Node;
        /**
         * @private
         * @param {Node} sb
         * @returns {Node}
         */
        bind(sb: Node): Node;
        /**
         * @private
         * @param {Node} element
         * @returns {document}
         */
        getScrollParent(element: Node): Document;
        /**
         * @private
         * @param {Node} sb
         */
        openDropdown(sb: Node): void;
        /**
         * @private
         * @param {Node} sb
         * @param {boolean} no_focus
         */
        closeDropdown(sb: Node, no_focus: boolean): void;
        /**
         * @private
         * @param {Node} sb
         * @param {Node} li list item
         * @param {boolean} force_state
         */
        toggleItem(sb: Node, li: Node, force_state: boolean): void;
        /**
         * @private
         * @param {Node} sb
         * @param {Node} li list item
         */
        transformItem(sb: Node, li: Node): void;
        /**
         * @private
         * @param {Node} sb
         * @param {Node} ul unordered list
         */
        saveValues(sb: Node, ul: Node): void;
        /**
         * @private
         * @param {Node} sb
         * @param {string[]} values
         */
        setValues(sb: Node, values: string[]): void;
        /**
         * @private
         * @param {Node} sb
         * @param {Node} elem
         * @param {boolean} scroll
         */
        setFocus(sb: Node, elem: Node, scroll: boolean): void;
        /**
         * @private
         * @param {Event} ev
         */
        handleMouseout(ev: Event): void;
        /**
         * @private
         * @param {Node} sb
         * @param {string} value
         * @param {string} label
         * @returns {Node}
         */
        createChoiceElement(sb: Node, value: string, label: string): Node;
        /**
         * @private
         * @param {Node} sb
         * @param {string} value
         */
        createItems(sb: Node, value: string): void;
        /**
         * Remove all existing choices from the dropdown menu.
         *
         * This function removes all preexisting dropdown choices from the widget,
         * keeping only choices currently being selected unless `reset_values` is
         * given, in which case all choices and deselected and removed.
         *
         * @instance
         * @memberof LuCI.ui.Dropdown
         * @param {boolean} [reset_value=false]
         * If set to `true`, deselect and remove selected choices as well instead
         * of keeping them.
         */
        clearChoices(reset_value?: boolean): void;
        /**
         * Add new choices to the dropdown menu.
         *
         * This function adds further choices to an existing dropdown menu,
         * ignoring choice values which are already present.
         *
         * @instance
         * @memberof LuCI.ui.Dropdown
         * @param {string[]} values
         * The choice values to add to the dropdown widget.
         *
         * @param {Object<string, *>} labels
         * The choice label values to use when adding dropdown choices. If no
         * label is found for a particular choice value, the value itself is used
         * as label text. Choice labels may be any valid value accepted by
         * {@link LuCI.dom#content}.
         */
        addChoices(values: string[], labels: {
            [x: string]: any;
        }): void;
        /**
         * Close all open dropdown widgets in the current document.
         */
        closeAllDropdowns(): void;
        /**
         * @private
         * @param {Event} ev
         */
        handleClick(ev: Event): void;
        /**
         * @private
         * @param {Event} ev
         */
        handleKeydown(ev: Event): void;
        /**
         * @private
         * @param {Event} ev
         */
        handleDropdownClose(ev: Event): void;
        /**
         * @private
         * @param {Event} ev
         */
        handleDropdownSelect(ev: Event): void;
        /**
         * @private
         * @param {Event} ev
         */
        handleMouseover(ev: Event): void;
        /**
         * @private
         * @param {Event} ev
         */
        handleFocus(ev: Event): void;
        /**
         * @private
         * @param {Event} ev
         */
        handleCanaryFocus(ev: Event): void;
        /**
         * @private
         * @param {Event} ev
         */
        handleCreateKeydown(ev: Event): void;
        /**
         * @private
         * @param {Event} ev
         */
        handleCreateFocus(ev: Event): void;
        /**
         * @private
         * @param {Event} ev
         */
        handleCreateBlur(ev: Event): void;
        /**
         * @private
         * @param {Event} ev
         */
        handleCreateClick(ev: Event): void;
        /** @override */
        setValue(values: any): void;
        /** @override */
        getValue(): any;
    }>, {
        __init__(value: any, choices: any, options: any): void;
    }>>;
    ComboButton: import("./classtypes.js").LuCIClass<import("./classtypes.js").Merge<import("./classtypes.js").Merge<import("./classtypes.js").Merge<import("./classtypes.js").BaseInstance, {
        /**
         * Read the current value of the input widget.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @returns {string|string[]|null}
         * The current value of the input element. For simple inputs like text
         * fields or selects, the return value type will be a - possibly empty -
         * string. Complex widgets such as `DynamicList` instances may result in
         * an array of strings or `null` for unset values.
         */
        getValue(): string | string[] | null;
        /**
         * Set the current value of the input widget.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @param {string|string[]|null} value
         * The value to set the input element to. For simple inputs like text
         * fields or selects, the value should be a - possibly empty - string.
         * Complex widgets such as `DynamicList` instances may accept string array
         * or `null` values.
         */
        setValue(value: string | string[] | null): void;
        /**
         * Set the current placeholder value of the input widget.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @param {string|string[]|null} value
         * The placeholder to set for the input element. Only applicable to text
         * inputs, not to radio buttons, selects or similar.
         */
        setPlaceholder(value: string | string[] | null): void;
        /**
         * Check whether the input value was altered by the user.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @returns {boolean}
         * Returns `true` if the input value has been altered by the user or
         * `false` if it is unchanged. Note that if the user modifies the initial
         * value and changes it back to the original state, it is still reported
         * as changed.
         */
        isChanged(): boolean;
        /**
         * Check whether the current input value is valid.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @returns {boolean}
         * Returns `true` if the current input value is valid or `false` if it does
         * not meet the validation constraints.
         */
        isValid(): boolean;
        /**
         * Returns the current validation error
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @returns {string}
         * The validation error at this time
         */
        getValidationError(): string;
        /**
         * Force validation of the current input value.
         *
         * Usually input validation is automatically triggered by various DOM events
         * bound to the input widget. In some cases it is required though to manually
         * trigger validation runs, e.g. when programmatically altering values.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @returns {boolean}
         */
        triggerValidation(): boolean;
        /**
         * Dispatch a custom (synthetic) event in response to received events.
         *
         * Sets up event handlers on the given target DOM node for the given event
         * names that dispatch a custom event of the given type to the widget root
         * DOM node.
         *
         * The primary purpose of this function is to set up a series of custom
         * uniform standard events such as `widget-update`, `validation-success`,
         * `validation-failure` etc. which are triggered by various different
         * widget specific native DOM events.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @param {Node} targetNode
         * Specifies the DOM node on which the native event listeners should be
         * registered.
         *
         * @param {string} synevent
         * The name of the custom event to dispatch to the widget root DOM node.
         *
         * @param {string[]} events
         * The native DOM events for which event handlers should be registered.
         */
        registerEvents(targetNode: Node, synevent: string, events: string[]): void;
        /**
         * Set up listeners for native DOM events that may update the widget value.
         *
         * Sets up event handlers on the given target DOM node for the given event
         * names which may cause the input value to update, such as `keyup` or
         * `onclick` events. In contrast to change events, such update events will
         * trigger input value validation.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @param {Node} targetNode
         * Specifies the DOM node on which the event listeners should be registered.
         *
         * @param {...string} events
         * The DOM events for which event handlers should be registered.
         */
        setUpdateEvents(targetNode: Node, ...events: string[]): void;
        /**
         * Set up listeners for native DOM events that may change the widget value.
         *
         * Sets up event handlers on the given target DOM node for the given event
         * names which may cause the input value to change completely, such as
         * `change` events in a select menu. In contrast to update events, such
         * change events will not trigger input value validation but they may cause
         * field dependencies to get re-evaluated and will mark the input widget
         * as dirty.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @param {Node} targetNode
         * Specifies the DOM node on which the event listeners should be registered.
         *
         * @param {...string} events
         * The DOM events for which event handlers should be registered.
         */
        setChangeEvents(targetNode: Node, ...events: string[]): void;
        /**
         * Render the widget, set up event listeners and return resulting markup.
         * @abstract
         * @instance
         * @memberof LuCI.ui.AbstractElement
         *
         * @returns {Node}
         * Returns a DOM Node or DocumentFragment containing the rendered
         * widget markup.
         */
        render(): Node;
    }>, {
        /** @type {any} */ values: any;
        /** @type {any} */ choices: any;
        /** @type {any} */ options: any;
        __init__(value: any, choices: any, options: any): void;
        /** @override */
        render(): Node;
        /**
         * @private
         * @param {Node} sb
         * @returns {Node}
         */
        bind(sb: Node): Node;
        /**
         * @private
         * @param {Node} element
         * @returns {document}
         */
        getScrollParent(element: Node): Document;
        /**
         * @private
         * @param {Node} sb
         */
        openDropdown(sb: Node): void;
        /**
         * @private
         * @param {Node} sb
         * @param {boolean} no_focus
         */
        closeDropdown(sb: Node, no_focus: boolean): void;
        /**
         * @private
         * @param {Node} sb
         * @param {Node} li list item
         * @param {boolean} force_state
         */
        toggleItem(sb: Node, li: Node, force_state: boolean): void;
        /**
         * @private
         * @param {Node} sb
         * @param {Node} li list item
         */
        transformItem(sb: Node, li: Node): void;
        /**
         * @private
         * @param {Node} sb
         * @param {Node} ul unordered list
         */
        saveValues(sb: Node, ul: Node): void;
        /**
         * @private
         * @param {Node} sb
         * @param {string[]} values
         */
        setValues(sb: Node, values: string[]): void;
        /**
         * @private
         * @param {Node} sb
         * @param {Node} elem
         * @param {boolean} scroll
         */
        setFocus(sb: Node, elem: Node, scroll: boolean): void;
        /**
         * @private
         * @param {Event} ev
         */
        handleMouseout(ev: Event): void;
        /**
         * @private
         * @param {Node} sb
         * @param {string} value
         * @param {string} label
         * @returns {Node}
         */
        createChoiceElement(sb: Node, value: string, label: string): Node;
        /**
         * @private
         * @param {Node} sb
         * @param {string} value
         */
        createItems(sb: Node, value: string): void;
        /**
         * Remove all existing choices from the dropdown menu.
         *
         * This function removes all preexisting dropdown choices from the widget,
         * keeping only choices currently being selected unless `reset_values` is
         * given, in which case all choices and deselected and removed.
         *
         * @instance
         * @memberof LuCI.ui.Dropdown
         * @param {boolean} [reset_value=false]
         * If set to `true`, deselect and remove selected choices as well instead
         * of keeping them.
         */
        clearChoices(reset_value?: boolean): void;
        /**
         * Add new choices to the dropdown menu.
         *
         * This function adds further choices to an existing dropdown menu,
         * ignoring choice values which are already present.
         *
         * @instance
         * @memberof LuCI.ui.Dropdown
         * @param {string[]} values
         * The choice values to add to the dropdown widget.
         *
         * @param {Object<string, *>} labels
         * The choice label values to use when adding dropdown choices. If no
         * label is found for a particular choice value, the value itself is used
         * as label text. Choice labels may be any valid value accepted by
         * {@link LuCI.dom#content}.
         */
        addChoices(values: string[], labels: {
            [x: string]: any;
        }): void;
        /**
         * Close all open dropdown widgets in the current document.
         */
        closeAllDropdowns(): void;
        /**
         * @private
         * @param {Event} ev
         */
        handleClick(ev: Event): void;
        /**
         * @private
         * @param {Event} ev
         */
        handleKeydown(ev: Event): void;
        /**
         * @private
         * @param {Event} ev
         */
        handleDropdownClose(ev: Event): void;
        /**
         * @private
         * @param {Event} ev
         */
        handleDropdownSelect(ev: Event): void;
        /**
         * @private
         * @param {Event} ev
         */
        handleMouseover(ev: Event): void;
        /**
         * @private
         * @param {Event} ev
         */
        handleFocus(ev: Event): void;
        /**
         * @private
         * @param {Event} ev
         */
        handleCanaryFocus(ev: Event): void;
        /**
         * @private
         * @param {Event} ev
         */
        handleCreateKeydown(ev: Event): void;
        /**
         * @private
         * @param {Event} ev
         */
        handleCreateFocus(ev: Event): void;
        /**
         * @private
         * @param {Event} ev
         */
        handleCreateBlur(ev: Event): void;
        /**
         * @private
         * @param {Event} ev
         */
        handleCreateClick(ev: Event): void;
        /** @override */
        setValue(values: any): void;
        /** @override */
        getValue(): any;
    }>, {
        __init__(value: any, choices: any, options: any): void;
        /** @override */
        render(...args: any[]): any;
        /**
         * @private
         * @param {Event} ev
         * @param {...*} args
         * @returns {null}
         */
        handleClick(ev: Event, ...args: any[]): null;
        /**
         * @private
         * @param {Node} sb
         * @param {...*} args
         * @returns {*}
         */
        toggleItem(sb: Node, ...args: any[]): any;
    }>>;
    Hiddenfield: import("./classtypes.js").LuCIClass<import("./classtypes.js").Merge<import("./classtypes.js").Merge<import("./classtypes.js").BaseInstance, {
        /**
         * Read the current value of the input widget.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @returns {string|string[]|null}
         * The current value of the input element. For simple inputs like text
         * fields or selects, the return value type will be a - possibly empty -
         * string. Complex widgets such as `DynamicList` instances may result in
         * an array of strings or `null` for unset values.
         */
        getValue(): string | string[] | null;
        /**
         * Set the current value of the input widget.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @param {string|string[]|null} value
         * The value to set the input element to. For simple inputs like text
         * fields or selects, the value should be a - possibly empty - string.
         * Complex widgets such as `DynamicList` instances may accept string array
         * or `null` values.
         */
        setValue(value: string | string[] | null): void;
        /**
         * Set the current placeholder value of the input widget.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @param {string|string[]|null} value
         * The placeholder to set for the input element. Only applicable to text
         * inputs, not to radio buttons, selects or similar.
         */
        setPlaceholder(value: string | string[] | null): void;
        /**
         * Check whether the input value was altered by the user.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @returns {boolean}
         * Returns `true` if the input value has been altered by the user or
         * `false` if it is unchanged. Note that if the user modifies the initial
         * value and changes it back to the original state, it is still reported
         * as changed.
         */
        isChanged(): boolean;
        /**
         * Check whether the current input value is valid.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @returns {boolean}
         * Returns `true` if the current input value is valid or `false` if it does
         * not meet the validation constraints.
         */
        isValid(): boolean;
        /**
         * Returns the current validation error
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @returns {string}
         * The validation error at this time
         */
        getValidationError(): string;
        /**
         * Force validation of the current input value.
         *
         * Usually input validation is automatically triggered by various DOM events
         * bound to the input widget. In some cases it is required though to manually
         * trigger validation runs, e.g. when programmatically altering values.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @returns {boolean}
         */
        triggerValidation(): boolean;
        /**
         * Dispatch a custom (synthetic) event in response to received events.
         *
         * Sets up event handlers on the given target DOM node for the given event
         * names that dispatch a custom event of the given type to the widget root
         * DOM node.
         *
         * The primary purpose of this function is to set up a series of custom
         * uniform standard events such as `widget-update`, `validation-success`,
         * `validation-failure` etc. which are triggered by various different
         * widget specific native DOM events.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @param {Node} targetNode
         * Specifies the DOM node on which the native event listeners should be
         * registered.
         *
         * @param {string} synevent
         * The name of the custom event to dispatch to the widget root DOM node.
         *
         * @param {string[]} events
         * The native DOM events for which event handlers should be registered.
         */
        registerEvents(targetNode: Node, synevent: string, events: string[]): void;
        /**
         * Set up listeners for native DOM events that may update the widget value.
         *
         * Sets up event handlers on the given target DOM node for the given event
         * names which may cause the input value to update, such as `keyup` or
         * `onclick` events. In contrast to change events, such update events will
         * trigger input value validation.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @param {Node} targetNode
         * Specifies the DOM node on which the event listeners should be registered.
         *
         * @param {...string} events
         * The DOM events for which event handlers should be registered.
         */
        setUpdateEvents(targetNode: Node, ...events: string[]): void;
        /**
         * Set up listeners for native DOM events that may change the widget value.
         *
         * Sets up event handlers on the given target DOM node for the given event
         * names which may cause the input value to change completely, such as
         * `change` events in a select menu. In contrast to update events, such
         * change events will not trigger input value validation but they may cause
         * field dependencies to get re-evaluated and will mark the input widget
         * as dirty.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @param {Node} targetNode
         * Specifies the DOM node on which the event listeners should be registered.
         *
         * @param {...string} events
         * The DOM events for which event handlers should be registered.
         */
        setChangeEvents(targetNode: Node, ...events: string[]): void;
        /**
         * Render the widget, set up event listeners and return resulting markup.
         * @abstract
         * @instance
         * @memberof LuCI.ui.AbstractElement
         *
         * @returns {Node}
         * Returns a DOM Node or DocumentFragment containing the rendered
         * widget markup.
         */
        render(): Node;
    }>, {
        /** @type {any} */ value: any;
        /** @type {any} */ options: any;
        __init__(value: any, options: any): void;
        /** @override */
        render(): Node;
        /**
         * @private
         * @param {Node} hiddenEl
         * @returns {Node} hiddenEl
         */
        bind(hiddenEl: Node): Node;
        /** @override */
        getValue(): any;
        /** @override */
        setValue(value: any): void;
    }>>;
    FileUpload: import("./classtypes.js").LuCIClass<import("./classtypes.js").Merge<import("./classtypes.js").Merge<import("./classtypes.js").BaseInstance, {
        /**
         * Read the current value of the input widget.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @returns {string|string[]|null}
         * The current value of the input element. For simple inputs like text
         * fields or selects, the return value type will be a - possibly empty -
         * string. Complex widgets such as `DynamicList` instances may result in
         * an array of strings or `null` for unset values.
         */
        getValue(): string | string[] | null;
        /**
         * Set the current value of the input widget.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @param {string|string[]|null} value
         * The value to set the input element to. For simple inputs like text
         * fields or selects, the value should be a - possibly empty - string.
         * Complex widgets such as `DynamicList` instances may accept string array
         * or `null` values.
         */
        setValue(value: string | string[] | null): void;
        /**
         * Set the current placeholder value of the input widget.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @param {string|string[]|null} value
         * The placeholder to set for the input element. Only applicable to text
         * inputs, not to radio buttons, selects or similar.
         */
        setPlaceholder(value: string | string[] | null): void;
        /**
         * Check whether the input value was altered by the user.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @returns {boolean}
         * Returns `true` if the input value has been altered by the user or
         * `false` if it is unchanged. Note that if the user modifies the initial
         * value and changes it back to the original state, it is still reported
         * as changed.
         */
        isChanged(): boolean;
        /**
         * Check whether the current input value is valid.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @returns {boolean}
         * Returns `true` if the current input value is valid or `false` if it does
         * not meet the validation constraints.
         */
        isValid(): boolean;
        /**
         * Returns the current validation error
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @returns {string}
         * The validation error at this time
         */
        getValidationError(): string;
        /**
         * Force validation of the current input value.
         *
         * Usually input validation is automatically triggered by various DOM events
         * bound to the input widget. In some cases it is required though to manually
         * trigger validation runs, e.g. when programmatically altering values.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @returns {boolean}
         */
        triggerValidation(): boolean;
        /**
         * Dispatch a custom (synthetic) event in response to received events.
         *
         * Sets up event handlers on the given target DOM node for the given event
         * names that dispatch a custom event of the given type to the widget root
         * DOM node.
         *
         * The primary purpose of this function is to set up a series of custom
         * uniform standard events such as `widget-update`, `validation-success`,
         * `validation-failure` etc. which are triggered by various different
         * widget specific native DOM events.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @param {Node} targetNode
         * Specifies the DOM node on which the native event listeners should be
         * registered.
         *
         * @param {string} synevent
         * The name of the custom event to dispatch to the widget root DOM node.
         *
         * @param {string[]} events
         * The native DOM events for which event handlers should be registered.
         */
        registerEvents(targetNode: Node, synevent: string, events: string[]): void;
        /**
         * Set up listeners for native DOM events that may update the widget value.
         *
         * Sets up event handlers on the given target DOM node for the given event
         * names which may cause the input value to update, such as `keyup` or
         * `onclick` events. In contrast to change events, such update events will
         * trigger input value validation.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @param {Node} targetNode
         * Specifies the DOM node on which the event listeners should be registered.
         *
         * @param {...string} events
         * The DOM events for which event handlers should be registered.
         */
        setUpdateEvents(targetNode: Node, ...events: string[]): void;
        /**
         * Set up listeners for native DOM events that may change the widget value.
         *
         * Sets up event handlers on the given target DOM node for the given event
         * names which may cause the input value to change completely, such as
         * `change` events in a select menu. In contrast to update events, such
         * change events will not trigger input value validation but they may cause
         * field dependencies to get re-evaluated and will mark the input widget
         * as dirty.
         *
         * @instance
         * @memberof LuCI.ui.AbstractElement
         * @param {Node} targetNode
         * Specifies the DOM node on which the event listeners should be registered.
         *
         * @param {...string} events
         * The DOM events for which event handlers should be registered.
         */
        setChangeEvents(targetNode: Node, ...events: string[]): void;
        /**
         * Render the widget, set up event listeners and return resulting markup.
         * @abstract
         * @instance
         * @memberof LuCI.ui.AbstractElement
         *
         * @returns {Node}
         * Returns a DOM Node or DocumentFragment containing the rendered
         * widget markup.
         */
        render(): Node;
    }>, {
        /** @type {any} */ value: any;
        /** @type {any} */ options: any;
        __init__(value: any, options: any): void;
        /**
         * @private
         * @param {Node} browserEl
         * @returns {Node} hiddenEl
         */
        bind(browserEl: Node): Node;
        /** @override */
        render(): Promise<any>;
        /**
         * @private
         * @param {string} path
         * @returns {string}
         */
        truncatePath(path: string): string;
        /**
         * @private
         * @param {string} type
         * @returns {Node}
         */
        iconForType(type: string): Node;
        /**
         * @private
         * @param {string} path
         * @returns {string}
         */
        canonicalizePath(path: string): string;
        /**
         * @private
         * @param {string} path
         * @returns {string[]}
         */
        splitPath(path: string): string[];
        /**
         * @private
         * @param {string} path
         * @param {Event} ev
         */
        handleCreateDirectory(path: string, ev: Event): void;
        /**
         * @private
         * @param {string} path
         * @param {object[]} list
         * @param {Event} ev
         * @returns {Promise}
         */
        handleUpload(path: string, list: object[], ev: Event): Promise<any>;
        /**
         * @private
         * @param {string} path
         * @param {object} fileStat
         * @param {Event} ev
         * @returns {Promise}
         */
        handleDelete(path: string, fileStat: object, ev: Event): Promise<any>;
        /**
         * @private
         * @param {string} path
         * @param {object[]} list
         * @returns {Promise}
         */
        renderUpload(path: string, list: object[]): Promise<any>;
        /**
         * @private
         * @param {Node} container
         * @param {string} path
         * @param {object[]} list
         */
        renderListing(container: Node, path: string, list: object[]): void;
        /**
         * @private
         * @param {Event} ev
         */
        handleCancel(ev: Event): void;
        /**
         * @private
         * @param {Event} ev
         */
        handleReset(ev: Event): void;
        /**
         * @private
         * @param {string} path
         * @param {object} fileStat
         * @param {Event} ev
         */
        handleDownload(path: string, fileStat: object, ev: Event): void;
        /**
         * @private
         * @param {string} path
         * @param {object} fileStat
         * @param {Event} ev
         */
        handleSelect(path: string, fileStat: object, ev: Event): void;
        /**
         * @private
         * @param {Event} ev
         * @returns {Promise}
         */
        handleFileBrowser(ev: Event): Promise<any>;
        /** @override */
        getValue(): any;
        /** @override */
        setValue(value: any): void;
    }>>;
}>>;
