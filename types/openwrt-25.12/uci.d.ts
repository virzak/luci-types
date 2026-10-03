declare const _default: import("./classtypes.js").Merge<import("./classtypes.js").BaseInstance, {
    __init__(): void;
    callLoad: import("./rpc.js").LuCI_rpc_invokeFn;
    callOrder: import("./rpc.js").LuCI_rpc_invokeFn;
    callAdd: import("./rpc.js").LuCI_rpc_invokeFn;
    callSet: import("./rpc.js").LuCI_rpc_invokeFn;
    callDelete: import("./rpc.js").LuCI_rpc_invokeFn;
    callApply: import("./rpc.js").LuCI_rpc_invokeFn;
    callConfirm: import("./rpc.js").LuCI_rpc_invokeFn;
    /**
     * Generates a new, unique section ID for the given configuration.
     *
     * Note that the generated ID is temporary, it will get replaced by an
     * identifier in the form `cfgXXXXXX` once the configuration is saved
     * by the remote `ubus` UCI api.
     *
     * @param {string} conf
     * The configuration to generate the new section ID for.
     *
     * @returns {string}
     * A newly generated, unique section ID in the form `newXXXXXX`
     * where `X` denotes a hexadecimal digit.
     */
    createSID(conf: string): string;
    /**
     * Resolves a given section ID in extended notation to the internal
     * section ID value.
     *
     * @param {string} conf
     * The configuration to resolve the section ID for.
     *
     * @param {string} sid
     * The section ID to resolve. If the ID is in the form `@typename[#]`,
     * it will get resolved to an internal anonymous ID in the forms
     * `cfgXXXXXX`/`newXXXXXX` or to the name of a section in case it points
     * to a named section. When the given ID is not in extended notation,
     * it will be returned as-is.
     *
     * @returns {string|null}
     * Returns the resolved section ID or the original given ID if it was
     * not in extended notation. Returns `null` when an extended ID could
     * not be resolved to existing section ID.
     */
    resolveSID(conf: string, sid: string): string | null;
    reorderSections(): Promise<void> | Promise<any[]>;
    loadPackage(packageName: any): Promise<any>;
    /**
     * Loads the given UCI configurations from the remote `ubus` api.
     *
     * Loaded configurations are cached and only loaded once. Subsequent
     * load operations of the same configurations will return the cached
     * data.
     *
     * To force reloading a configuration, it has to be unloaded with
     * {@link LuCI.uci#unload uci.unload()} first.
     *
     * @param {string|string[]} packages
     * The name of the configuration or an array of configuration
     * names to load.
     *
     * @returns {Promise<string[]>}
     * Returns a promise resolving to the names of the configurations
     * that have been successfully loaded.
     */
    load(packages: string | string[]): Promise<string[]>;
    /**
     * Unloads the given UCI configurations from the local cache.
     *
     * @param {string|string[]} packages
     * The name of the configuration or an array of configuration
     * names to unload.
     */
    unload(packages: string | string[]): void;
    /**
     * Adds a new section of the given type to the given configuration,
     * optionally named according to the given name.
     *
     * @param {string} conf
     * The name of the configuration to add the section to.
     *
     * @param {string} type
     * The type of the section to add.
     *
     * @param {string} [name]
     * The name of the section to add. If the name is omitted, an anonymous
     * section will be added instead.
     *
     * @returns {string}
     * Returns the section ID of the newly added section which is equivalent
     * to the given name for non-anonymous sections.
     */
    add(conf: string, type: string, name?: string): string;
    /**
     * Clones an existing section of the given type to the given configuration,
     * optionally named according to the given name.
     *
     * @param {string} conf
     * The name of the configuration into which to clone the section.
     *
     * @param {string} type
     * The type of the section to clone.
     *
     * @param {string} srcsid
     * The source section id to clone.
     *
     * @param {boolean} [put_next]
     * Whether to put the cloned item next (true) or last (false: default).
     *
     * @param {string} [name]
     * The name of the new cloned section. If the name is omitted, an anonymous
     * section will be created instead.
     *
     * @returns {string}
     * Returns the section ID of the newly cloned section which is equivalent
     * to the given name for non-anonymous sections.
     */
    clone(conf: string, type: string, srcsid: string, put_next?: boolean, name?: string): string;
    /**
     * Removes the section with the given ID from the given configuration.
     *
     * @param {string} conf
     * The name of the configuration to remove the section from.
     *
     * @param {string} sid
     * The ID of the section to remove.
     */
    remove(conf: string, sid: string): void;
    /**
     * Enumerates the sections of the given configuration, optionally
     * filtered by type.
     *
     * @param {string} conf
     * The name of the configuration to enumerate the sections for.
     *
     * @param {string} [type]
     * Enumerate only sections of the given type. If omitted, enumerate
     * all sections.
     *
     * @param {LuCI.uci.sections} [cb]
     * An optional callback to invoke for each enumerated section.
     *
     * @returns {Array<LuCI.uci.SectionObject>}
     * Returns a sorted array of the section objects within the given
     * configuration, filtered by type, if a type has been specified.
     */
    sections(conf: string, type?: string, cb?: LuCI.uci.sections): Array<LuCI.uci.SectionObject>;
    /**
     * Gets the value of the given option within the specified section
     * of the given configuration or the entire section object if the
     * option name is omitted.
     *
     * @param {string} conf
     * The name of the configuration to read the value from.
     *
     * @param {string} sid
     * The name or ID of the section to read.
     *
     * @param {string} [opt]
     * The option name to read the value from. If the option name is
     * omitted or `null`, the entire section is returned instead.
     *
     * @returns {null|string|string[]|LuCI.uci.SectionObject}
     * - Returns a string containing the option value in case of a
     *   plain UCI option.
     * - Returns an array of strings containing the option values in
     *   case of `option` pointing to an UCI list.
     * - Returns a {@link LuCI.uci.SectionObject section object} if
     *   the `option` argument has been omitted or is `null`.
     * - Returns `null` if the config, section or option has not been
     *   found or if the corresponding configuration is not loaded.
     */
    get(conf: string, sid: string, opt?: string): null | string | string[] | LuCI.uci.SectionObject;
    /**
     * Sets the value of the given option within the specified section
     * of the given configuration.
     *
     * If either config, section or option is null, or if `option` begins
     * with a dot, the function will do nothing.
     *
     * @param {string} conf
     * The name of the configuration to set the option value in.
     *
     * @param {string} sid
     * The name or ID of the section to set the option value in.
     *
     * @param {string} opt
     * The option name to set the value for.
     *
     * @param {null|string|string[]} val
     * The option value to set. If the value is `null` or an empty string,
     * the option will be removed, otherwise it will be set or overwritten
     * with the given value.
     */
    set(conf: string, sid: string, opt: string, val: null | string | string[]): void;
    /**
     * Remove the given option within the specified section of the given
     * configuration.
     *
     * This function is a convenience wrapper around
     * `uci.set(config, section, option, null)`.
     *
     * @param {string} conf
     * The name of the configuration to remove the option from.
     *
     * @param {string} sid
     * The name or ID of the section to remove the option from.
     *
     * @param {string} opt
     * The name of the option to remove.
     * @returns {null}
     */
    unset(conf: string, sid: string, opt: string): null;
    /**
     * Gets the value of the given option or the entire section object of
     * the first found section of the specified type or the first found
     * section of the entire configuration if no type is specified.
     *
     * @param {string} conf
     * The name of the configuration to read the value from.
     *
     * @param {string} [type]
     * The type of the first section to find. If it is `null`, the first
     * section of the entire config is read, otherwise the first section
     * matching the given type.
     *
     * @param {string} [opt]
     * The option name to read the value from. If the option name is
     * omitted or `null`, the entire section is returned instead.
     *
     * @returns {null|string|string[]|LuCI.uci.SectionObject}
     * - Returns a string containing the option value in case of a
     *   plain UCI option.
     * - Returns an array of strings containing the option values in
     *   case of `option` pointing to an UCI list.
     * - Returns a {@link LuCI.uci.SectionObject section object} if
     *   the `option` argument has been omitted or is `null`.
     * - Returns `null` if the config, section or option has not been
     *   found or if the corresponding configuration is not loaded.
     */
    get_first(conf: string, type?: string, opt?: string): null | string | string[] | LuCI.uci.SectionObject;
    /**
     * A special case of `get` that always returns either `true` or
     * `false`.
     *
     * Many configuration files contain boolean settings, such as
     * `enabled` or `advanced_mode`, where there is no consistent
     * definition for the values.  This function allows users to
     * enter any of the values `"yes"`, `"on"`, `"true"`, `"enabled"`
     * or `1` in their config files and we return the expected boolean
     * result.
     *
     * Character case is not significant, so for example, any of
     * "YES", "Yes" or "yes" will be interpreted as a `true` value.
     *
     * @param {string} conf
     * The name of the configuration to read.
     *
     * @param {string} type
     * The section type to read.
     *
     * @param {string} [opt]
     * The option name from which to read the value. If the option
     * name is omitted or `null`, the value `false` is returned.
     *
     * @returns {boolean}
     * - Returns boolean `true` if the configuration value is defined
     *   and looks like a true value, otherwise returns `false`.
     *
     * See the
     * {@link https://openwrt.org/docs/guide-developer/config-scripting#reading_booleans|Developers Guide}
     * for more.
     */
    get_bool(conf: string, type: string, opt?: string): boolean;
    /**
     * Sets the value of the given option within the first found section
     * of the given configuration matching the specified type or within
     * the first section of the entire config when no type has is specified.
     *
     * If either config, type or option is null, or if `option` begins
     * with a dot, the function will do nothing.
     *
     * @param {string} conf
     * The name of the configuration to set the option value in.
     *
     * @param {string} [type]
     * The type of the first section to find. If it is `null`, the first
     * section of the entire config is written to, otherwise the first
     * section matching the given type is used.
     *
     * @param {string} opt
     * The option name to set the value for.
     *
     * @param {null|string|string[]} val
     * The option value to set. If the value is `null` or an empty string,
     * the option will be removed, otherwise it will be set or overwritten
     * with the given value.
     * @returns {null}
     */
    set_first(conf: string, type?: string, opt: string, val: null | string | string[]): null;
    /**
     * Removes the given option within the first found section of the given
     * configuration matching the specified type or within the first section
     * of the entire config when no type has is specified.
     *
     * This function is a convenience wrapper around
     * `uci.set_first(config, type, option, null)`.
     *
     * @param {string} conf
     * The name of the configuration to set the option value in.
     *
     * @param {string} [type]
     * The type of the first section to find. If it is `null`, the first
     * section of the entire config is written to, otherwise the first
     * section matching the given type is used.
     *
     * @param {string} opt
     * The option name to set the value for.
     *
     * @returns {null}
     */
    unset_first(conf: string, type?: string, opt: string): null;
    /**
     * Move the first specified section within the given configuration
     * before or after the second specified section.
     *
     * @param {string} conf
     * The configuration to move the section within.
     *
     * @param {string} sid1
     * The ID of the section to move within the configuration.
     *
     * @param {string} [sid2]
     * The ID of the target section for the move operation. If the
     * `after` argument is `false` or not specified, the section named by
     * `sid1` will be moved before this target section, if the `after`
     * argument is `true`, the `sid1` section will be moved after this
     * section.
     *
     * When the `sid2` argument is `null`, the section specified by `sid1`
     * is moved to the end of the configuration.
     *
     * @param {boolean} [after=false]
     * When `true`, the section `sid1` is moved after the section `sid2`,
     * when `false`, the section `sid1` is moved before `sid2`.
     *
     * If `sid2` is null, then this parameter has no effect and the section
     * `sid1` is moved to the end of the configuration instead.
     *
     * @returns {boolean}
     * Returns `true` when the section was successfully moved, or `false`
     * when either the section specified by `sid1` or by `sid2` is not found.
     */
    move(conf: string, sid1: string, sid2?: string, after?: boolean): boolean;
    /**
     * Submits all local configuration changes to the remove `ubus` api,
     * adds, removes and reorders remote sections as needed and reloads
     * all loaded configurations to resynchronize the local state with
     * the remote configuration values.
     *
     * @returns {string[]}
     * Returns a promise resolving to an array of configuration names which
     * have been reloaded by the save operation.
     */
    save(): string[];
    /**
     * Instructs the remote `ubus` UCI api to commit all saved changes with
     * rollback protection and attempts to confirm the pending commit
     * operation to cancel the rollback timer.
     *
     * @param {number} [timeout=10]
     * Override the confirmation timeout after which a rollback is triggered.
     *
     * @returns {Promise<number>}
     * Returns a promise resolving/rejecting with the `ubus` RPC status code.
     */
    apply(timeout?: number): Promise<number>;
    /**
     * Fetches uncommitted UCI changes from the remote `ubus` RPC api.
     *
     * @function
     * @returns {Promise<Object<string, Array<LuCI.uci.ChangeRecord>>>}
     * Returns a promise resolving to an object containing the configuration
     * names as keys and arrays of related change records as values.
     */
    changes: import("./rpc.js").LuCI_rpc_invokeFn;
}>;
export default _default;
/**
 * A section object represents the options and their corresponding values
 * enclosed within a configuration section, as well as some additional
 * meta data such as sort indexes and internal ID.
 *
 * Any internal metadata fields are prefixed with a dot which isn't
 * an allowed character for normal option names.
 */
export type SectionObject = {
    [x: string]: string | number | boolean | string[];
};
/**
 * The sections callback is invoked for each section found within
 * the given configuration and receives the section object and its
 * associated name as arguments.
 */
export type LuCI_uci_sections = (section: LuCI.uci.SectionObject, sid: string) => any;
/**
 * An UCI change record is a plain array containing the change operation
 * name as first element, the affected section ID as second argument
 * and an optional third and fourth argument whose meanings depend on
 * the operation.
 */
export type ChangeRecord = string[];
