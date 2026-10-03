declare const _default: import("./classtypes.js").Merge<import("./classtypes.js").BaseInstance, {
    __name__: string;
    /**
     * Compile a validator expression string into an internal stack representation.
     *
     * @param {string} field field name
     * @param {string} type validator type
     * @param {boolean} optional whether the field is optional
     * @param {string} vfunc a validator function
     * @returns {Validator} Compiled token stack used by validators.
     */
    create(field: string, type: string, optional: boolean, vfunc: string): import("./classtypes.js").LuCIClass<import("./classtypes.js").Merge<import("./classtypes.js").BaseInstance, {
        /** @type {any} */ field: any;
        /** @type {any} */ optional: any;
        /** @type {any} */ vfunc: any;
        /** @type {any} */ vstack: any;
        /** @type {any} */ factory: any;
        __name__: string;
        __init__(field: any, type: any, optional: any, vfunc: any, validatorFactory: any): void;
        /**
         * Assert a condition and update field error state.
         *
         * @param {boolean} condition - Condition that must be true.
         * @param {string} message - Error message when assertion fails.
         * @returns {boolean} True when assertion is true, false otherwise.
         */
        assert(condition: boolean, message: string): boolean;
        /**
         * Apply a validation function by name or directly via function reference.
         * If a name is provided it resolves it via the factory's registered `types`.
         *
         * @param {string|function} name - Validator name or function.
         * @param {*} value - Value to validate (optional; defaults to field value).
         * @param {Array} args - Arguments passed to the validator function.
         * @returns {*} Validator result.
         */
        apply(name: string | Function, value: any, args: any[]): any;
        /**
         * Validate the associated field value using the compiled validator stack
         * and any additional validators provided at construction time.
         * Emits 'validation-failure' or 'validation-success' CustomEvents on the field.
         *
         * @returns {boolean} True if validation succeeds, false otherwise.
         */
        validate(): boolean;
    }>>;
    /**
     * Compile a validator expression string into an internal stack representation.
     *
     * @param {string} code - Validator expression string (e.g. `or(ipaddr,port)`).
     * @returns {Array} Compiled token stack used by validators.
     */
    compile(code: string): any[];
    /**
     * Parse an integer string. Returns NaN when not a valid integer.
     * @param {string} x
     * @returns {number} Integer or NaN
     */
    parseInteger(x: string): number;
    /**
     * Parse a decimal number string. Returns NaN when not a valid number.
     * @param {string} x
     * @returns {number} Decimal number or NaN
     */
    parseDecimal(x: string): number;
    /**
     * Parse IPv4 address into an array of 4 octets or return null on failure.
     * @param {string} x - IPv4 address string
     * @returns {Array<number>|null} Array of 4 octets or null.
     */
    parseIPv4(x: string): Array<number> | null;
    /**
     * Parse IPv6 address into an array of 8 16-bit words or return null on failure.
     * Supports IPv4-embedded IPv6 (::ffff:a.b.c.d) and zero-compression.
     * @param {string} x - IPv6 address string
     * @returns {Array<number>|null} Array of 8 16-bit words or null.
     */
    parseIPv6(x: string): Array<number> | null;
    /**
     * Collection of type handlers.
     * Each function consumes `this.value` and returns `this.assert` to report errors.
     *
     * All functions return the result of {@link LuCI.validation.Validator#assert assert()}.
     * @namespace types
     * @memberof LuCI.validation.ValidatorFactory
     */
    types: {
        /**
         * Assert a signed integer value (+/-).
         * @function LuCI.validation.ValidatorFactory.types#integer
         * @returns {@link LuCI.validation.Validator#assert assert()} {boolean}
         */
        integer(): any;
        /**
         * Assert an unsigned integer value (+).
         * @function LuCI.validation.ValidatorFactory.types#uinteger
         * @returns {@link LuCI.validation.Validator#assert assert()} {boolean}
         */
        uinteger(): any;
        /**
         * Assert a signed float value (+/-).
         * @function LuCI.validation.ValidatorFactory.types#float
         * @returns {@link LuCI.validation.Validator#assert assert()} {boolean}
         */
        float(): any;
        /**
         * Assert an unsigned float value (+).
         * @function LuCI.validation.ValidatorFactory.types#ufloat
         * @returns {@link LuCI.validation.Validator#assert assert()} {boolean}
         */
        ufloat(): any;
        /**
         * Assert an IPv4/6 address.
         * @function LuCI.validation.ValidatorFactory.types#ipaddr
         * @param {string} [nomask] reject a `/x` netmask.
         * @returns {@link LuCI.validation.Validator#assert assert()} {boolean}
         */
        ipaddr(nomask?: string): any;
        /**
         * Assert an IPv4 address.
         * @function LuCI.validation.ValidatorFactory.types#ip4addr
         * @param {string} [nomask] reject a `/x` netmask.
         * @returns {@link LuCI.validation.Validator#assert assert()} {boolean}
         */
        ip4addr(nomask?: string): any;
        /**
         * Assert an IPv6 address.
         * @function LuCI.validation.ValidatorFactory.types#ip6addr
         * @param {string} [nomask] reject a `/x` netmask.
         * @returns {@link LuCI.validation.Validator#assert assert()} {boolean}
         */
        ip6addr(nomask?: string): any;
        /**
         * Assert an IPv6 Link Local address.
         * @function LuCI.validation.ValidatorFactory.types#ip6ll
         * @param {string} [nomask] reject a `/x` netmask.
         * @returns {@link LuCI.validation.Validator#assert assert()} {boolean}
         */
        ip6ll(nomask?: string): any;
        /**
         * Assert an IPv6 UL address.
         * @function LuCI.validation.ValidatorFactory.types#ip6ula
         * @param {string} [nomask] reject a `/x` netmask.
         * @returns {@link LuCI.validation.Validator#assert assert()} {boolean}
         */
        ip6ula(nomask?: string): any;
        /**
         * Assert an IPv4 prefix.
         * @function LuCI.validation.ValidatorFactory.types#ip4prefix
         * @returns {@link LuCI.validation.Validator#assert assert()} {boolean}
         */
        ip4prefix(): any;
        /**
         * Assert an IPv6 prefix.
         * @function LuCI.validation.ValidatorFactory.types#ip6prefix
         * @returns {@link LuCI.validation.Validator#assert assert()} {boolean}
         */
        ip6prefix(): any;
        /**
         * Assert a IPv4/6 CIDR.
         * @function LuCI.validation.ValidatorFactory.types#cidr
         * @param {boolean} [negative] allow netmask forms with `/-...` to mark
         * negation of the range.
         * @returns {@link LuCI.validation.Validator#assert assert()} {boolean}
         */
        cidr(negative?: boolean): any;
        /**
         * Assert a IPv4 CIDR.
         * @function LuCI.validation.ValidatorFactory.types#cidr4
         * @param {boolean} [negative] allow netmask forms with `/-...`.
         * E.g. `192.0.2.1/-24` to mark negation of the range.
         * @returns {@link LuCI.validation.Validator#assert assert()} {boolean}
         */
        cidr4(negative?: boolean): any;
        /**
         * Assert a IPv6 CIDR.
         * @function LuCI.validation.ValidatorFactory.types#cidr6
         * @param {boolean} [negative] allow netmask forms with `/-...`.
         * E.g. `2001:db8:dead:beef::/-64` to mark negation of the range.
         * @returns {@link LuCI.validation.Validator#assert assert()} {boolean}
         */
        cidr6(negative?: boolean): any;
        /**
         * Assert an IPv4 network in address/netmask notation. E.g.
         * `192.0.2.1/255.255.255.0`
         * @function LuCI.validation.ValidatorFactory.types#ipnet4
         * @returns {@link LuCI.validation.Validator#assert assert()} {boolean}
         */
        ipnet4(): any;
        /**
         * Assert an IPv6 network in address/netmask notation. E.g.
         * `2001:db8:dead:beef::0001/ffff:ffff:ffff:ffff::`
         * @function LuCI.validation.ValidatorFactory.types#ipnet6
         * @returns {@link LuCI.validation.Validator#assert assert()} {boolean}
         */
        ipnet6(): any;
        /**
         * Assert a IPv6 host ID.
         * @function LuCI.validation.ValidatorFactory.types#ip6hostid
         * @returns {@link LuCI.validation.Validator#assert assert()} {boolean}
         */
        ip6hostid(): any;
        /**
         * Assert an IPv4/6 network in address/netmask (CIDR or mask) notation.
         * @function LuCI.validation.ValidatorFactory.types#ipmask
         * @param {boolean} [negative] allow netmask forms with `/-...` to mark
         * negation of the range.
         * @returns {@link LuCI.validation.Validator#assert assert()} {boolean}
         */
        ipmask(negative?: boolean): any;
        /**
         * Assert an IPv4 network in address/netmask (CIDR or mask) notation.
         * @function LuCI.validation.ValidatorFactory.types#ipmask4
         * @param {boolean} [negative] allow netmask forms with `/-...` to mark
         * negation of the range.
         * @returns {@link LuCI.validation.Validator#assert assert()} {boolean}
         */
        ipmask4(negative?: boolean): any;
        /**
         * Assert an IPv6 network in address/netmask (CIDR or mask) notation.
         * @function LuCI.validation.ValidatorFactory.types#ipmask6
         * @param {boolean} [negative] allow netmask forms with `/-...` to mark
         * negation of the range.
         * @returns {@link LuCI.validation.Validator#assert assert()} {boolean}
         */
        ipmask6(negative?: boolean): any;
        /**
         * Assert a valid IPv4/6 address range.
         * @function LuCI.validation.ValidatorFactory.types#iprange
         * @returns {@link LuCI.validation.Validator#assert assert()} {boolean}
         */
        iprange(): any;
        /**
         * Assert a valid IPv4 address range. E.g.
         * `192.0.2.1-192.0.2.254`.
         * @function LuCI.validation.ValidatorFactory.types#iprange4
         * @returns {@link LuCI.validation.Validator#assert assert()} {boolean}
         */
        iprange4(): any;
        /**
         * Assert a valid IPv6 address range. E.g.
         * `2001:db8:0f00:0000::-2001:db8:0f00:0000:ffff:ffff:ffff:ffff`.
         * @function LuCI.validation.ValidatorFactory.types#iprange6
         * @returns {@link LuCI.validation.Validator#assert assert()} {boolean}
         */
        iprange6(): any;
        /**
         * Assert a valid port value where `0 <= port <= 65535`.
         * @function LuCI.validation.ValidatorFactory.types#port
         * @returns {@link LuCI.validation.Validator#assert assert()} {boolean}
         */
        port(): any;
        /**
         * Assert a valid port or port range (port1-port2) where both ports are
         * positive integers, `port1 <= port2` and `port2 <= 65535` (`2^16 - 1`).
         * @function LuCI.validation.ValidatorFactory.types#portrange
         * @returns {@link LuCI.validation.Validator#assert assert()} {boolean}
         */
        portrange(): any;
        /**
         * Assert a valid (multicast) MAC address.
         * @function LuCI.validation.ValidatorFactory.types#macaddr
         * @param {boolean} [multicast] enforce a multicast MAC address.
         * @returns {@link LuCI.validation.Validator#assert assert()} {boolean}
         */
        macaddr(multicast?: boolean): any;
        /**
         * Assert a valid hostname or IP address.
         * @function LuCI.validation.ValidatorFactory.types#host
         * @param {boolean} [ipv4only] enforce IPv4 IPs only.
         * @returns {@link LuCI.validation.Validator#assert assert()} {boolean}
         */
        host(ipv4only?: boolean): any;
        /**
         * Validate hostname according to common rules.
         * @function LuCI.validation.ValidatorFactory.types#hostname
         * @param {boolean} [strict] reject leading underscores.
         * @returns {@link LuCI.validation.Validator#assert assert()} {boolean}
         */
        hostname(strict?: boolean): any;
        /**
         * Assert a valid UCI identifier, hostname or IP address range.
         * @function LuCI.validation.ValidatorFactory.types#network
         * @returns {@link LuCI.validation.Validator#assert assert()} {boolean}
         */
        network(): any;
        /**
         * Assert a valid host:port.
         * @function LuCI.validation.ValidatorFactory.types#hostport
         * @param {boolean} [ipv4only] restrict to IPv4 IPs only.
         * @returns {@link LuCI.validation.Validator#assert assert()} {boolean}
         */
        hostport(ipv4only?: boolean): any;
        /**
         * Assert a valid IPv4 address:port. E.g.
         * `192.0.2.10:80`
         * @function LuCI.validation.ValidatorFactory.types#ip4addrport
         * @param {boolean} [ipv4only] restrict to IPv4 IPs only.
         * @returns {@link LuCI.validation.Validator#assert assert()} {boolean}
         */
        ip4addrport(): any;
        /**
         * Assert a valid IPv4/6 address:port. E.g.
         * `192.0.2.10:80` or `[2001:db8:f00d:cafe::1]:8080`
         * @function LuCI.validation.ValidatorFactory.types#ipaddrport
         * @param {boolean} [bracket] mandate bracketed [IPv6] URI form IPs.
         * @returns {@link LuCI.validation.Validator#assert assert()} {boolean}
         */
        ipaddrport(bracket?: boolean): any;
        /**
         * Define a string separator `sep` for use in [tuple]{@link
         * LuCI.validation.ValidatorFactory.types#tuple}.
         * @function LuCI.validation.ValidatorFactory.types#sep
         * @param {string} str define the separator string
         * @returns {@link LuCI.validation.Validator#assert assert()} {boolean}
         */
        sep(str: string): any;
        /**
         * Tuple validator: accepts 1-N tokens separated by a given separator
         * {@link LuCI.validation.ValidatorFactory.types#sep sep}
         * (whitespace by default if {@link LuCI.validation.ValidatorFactory.types#sep sep}
         * is omitted) which will be validated against the 1-N types.
         *
         * This differs from {@link LuCI.validation.ValidatorFactory.types#and and}
         * by first splitting the input and applying each validator function
         * sequentially on the resulting array of the split string, whereby the
         * first type applies to the first value element, the second to the
         * second, and so on, to define a concrete order.
         *
         * {@link LuCI.validation.ValidatorFactory.types#sep sep}
         * can appear at any position in the list.
         *
         * @example
         *
         * tuple(ipaddr,port) // "192.0.2.1 88"
         *
         * tuple(host,port,sep(',')) // "taurus,8000"
         *
         * tuple(port,port,port,sep('-')) // "33-45-78"
         *
         * @function LuCI.validation.ValidatorFactory.types#tuple
         * @param {...function} types {@link LuCI.validation.ValidatorFactory.types
         * types validation functions}
         * @param {string} [sep()] function to define split separator string.
         * @returns {@link LuCI.validation.Validator#assert assert()} {boolean}
         */
        tuple(...args: Function[]): any;
        /**
         * Assert a valid (hexadecimal) WPA key of `8 <= length <= 63`, or hex if `length == 64`.
         * @function LuCI.validation.ValidatorFactory.types#wpakey
         * @returns {@link LuCI.validation.Validator#assert assert()} {boolean}
         */
        wpakey(): any;
        /**
         * Assert a valid (hexadecimal) WEP key.
         * @function LuCI.validation.ValidatorFactory.types#wepkey
         * @returns {@link LuCI.validation.Validator#assert assert()} {boolean}
         */
        wepkey(): any;
        /**
         * Assert a valid UCI identifier: `[a-zA-Z0-9_]+`.
         * @function LuCI.validation.ValidatorFactory.types#uciname
         * @returns {@link LuCI.validation.Validator#assert assert()} {boolean}
         */
        uciname(): any;
        /**
         * Assert a valid fw4 zone name UCI identifier: `[a-zA-Z_][a-zA-Z0-9_]+`
         * @function LuCI.validation.ValidatorFactory.types#ucifw4zonename
         * @returns {@link LuCI.validation.Validator#assert assert()} {boolean}
         */
        ucifw4zonename(): any;
        /**
         * Assert a valid network device name between 1 and 15 characters not
         * containing ":", "/", "%" or spaces.
         * @function LuCI.validation.ValidatorFactory.types#netdevname
         * @returns {@link LuCI.validation.Validator#assert assert()} {boolean}
         */
        netdevname(): any;
        /**
         * Assert a decimal value between `min` and `max`.
         * @example
         *range(-253, 253) // assert a value between -253 and +253
         *
         *'range(%u,%u)'.format(min_vid, feat.vid_option ? 4094 : num_vlans - 1);
         * // assert values calculated at runtime for VLAN IDs.
         * @function LuCI.validation.ValidatorFactory.types#range
         * @param {string} min set start of range.
         * @param {string} max set end of range.
         * @returns {@link LuCI.validation.Validator#assert assert()} {boolean}
         */
        range(min: string, max: string): any;
        /**
         * Assert a decimal value greater or equal to `min`.
         * @function LuCI.validation.ValidatorFactory.types#min
         * @param {string} min set start of range.
         * @returns {@link LuCI.validation.Validator#assert assert()} {boolean}
         */
        min(min: string): any;
        /**
         * Assert a decimal value lesser or equal to `max`.
         * @function LuCI.validation.ValidatorFactory.types#max
         * @param {string} max set end of range.
         * @returns {@link LuCI.validation.Validator#assert assert()} {boolean}
         */
        max(max: string): any;
        /**
         * Assert a string of [bytelen]{@link LuCI.validation.bytelen} length `len` characters.
         * @function LuCI.validation.ValidatorFactory.types#length
         * @param {string} len set the length.
         * @returns {@link LuCI.validation.Validator#assert assert()} {boolean}
         */
        length(len: string): any;
        /**
         * Assert a string value of [bytelen]{@link LuCI.validation.bytelen} length between `min` and `max` characters.
         * @function LuCI.validation.ValidatorFactory.types#rangelength
         * @param {string} min set the min length.
         * @param {string} max set the max length.
         * @returns {@link LuCI.validation.Validator#assert assert()} {boolean}
         */
        rangelength(min: string, max: string): any;
        /**
         * Assert a value of [bytelen]{@link LuCI.validation.bytelen} with at least `min` characters.
         * @function LuCI.validation.ValidatorFactory.types#minlength
         * @param {string} min set the min length.
         * @returns {@link LuCI.validation.Validator#assert assert()} {boolean}
         */
        minlength(min: string): any;
        /**
         * Assert a value of [bytelen]{@link LuCI.validation.bytelen} with at
         * most `max` characters.
         * @function LuCI.validation.ValidatorFactory.types#maxlength
         * @param {string} max set the max length.
         * @returns {@link LuCI.validation.Validator#assert assert()} {boolean}
         */
        maxlength(max: string): any;
        /**
         * Logical OR `||` to build a more complex expression. Allows multiple
         * types within a single field.
         *
         * See also {@link LuCI.validation.ValidatorFactory.types#and and}
         * @function LuCI.validation.ValidatorFactory.types#or
         * @param {string} ...args other [types validation functions]{@link
         * LuCI.validation.ValidatorFactory.types}
         * @returns {@link LuCI.validation.Validator#assert assert()} {boolean}
         * @example
         * or([ipmask("true")]{@link
         * LuCI.validation.ValidatorFactory.types#ipmask},[iprange]{@link
         * LuCI.validation.ValidatorFactory.types#iprange})
         */
        or(...args: any[]): any;
        /**
         * Logical AND `&&` to build more complex expressions. Enforces all
         * types on the input string.
         *
         *
         * See also {@link LuCI.validation.ValidatorFactory.types#or or}
         * @function LuCI.validation.ValidatorFactory.types#and
         * @param {string} ...args  other [types validation functions]{@link
         * LuCI.validation.ValidatorFactory.types}
         * @returns {@link LuCI.validation.Validator#assert assert()} {boolean}
         * @example
         *
         * and([minlength(3)]{@link
         * LuCI.validation.ValidatorFactory.types#minlength},[maxlength(20)]{@link
         * LuCI.validation.ValidatorFactory.types#maxlength})
         */
        and(...args: any[]): any;
        /**
         * Assert any type, optionally preceded by `!`.
         *
         * Example:`list(neg(macaddr))` mandates a list of MAC values, which may
         * also be prefixed with a single `!`; the MAC strings are validated
         * after `!` are removed from all entries.
         *```
         * 01:02:03:04:05:06
         * !01:02:03:04:05:07
         * 01:02:03:04:05:08
         *```
         * @function LuCI.validation.ValidatorFactory.types#neg
         * @param {string} ...args other [types validation functions]{@link
         * LuCI.validation.ValidatorFactory.types}
         * @returns {@link LuCI.validation.Validator#assert assert()} {boolean}
         */
        neg(...args: any[]): any;
        /**
         * Assert a list of a type.
         *
         * @function LuCI.validation.ValidatorFactory.types#list
         * @param {string} subvalidator other [types validation functions]{@link
         * LuCI.validation.ValidatorFactory.types}
         * @param {string} subargs arguments to pass to the `subvalidator`
         * @returns {@link LuCI.validation.Validator#assert assert()} {boolean}
         * @example
         * list(string)
         */
        list(subvalidator: string, subargs: string): any;
        /**
         * Assert a valid phone number dial string: `[0-9*#!.]+`.
         * @function LuCI.validation.ValidatorFactory.types#phonedigit
         * @returns {@link LuCI.validation.Validator#assert assert()} {boolean}
         */
        phonedigit(): any;
        /**
         * Assert a string of the form `HH:MM:SS`.
         * @function LuCI.validation.ValidatorFactory.types#timehhmmss
         * @returns {@link LuCI.validation.Validator#assert assert()} {boolean}
         */
        timehhmmss(): any;
        /**
         * Assert a string of the form `YYYY-MM-DD`.
         * @function LuCI.validation.ValidatorFactory.types#dateyyyymmdd
         * @returns {@link LuCI.validation.Validator#assert assert()} {boolean}
         */
        dateyyyymmdd(): any;
        /**
         * Assert unique values among lists.
         * @function LuCI.validation.ValidatorFactory.types#unique
         * @param {string} subvalidator other [types validation functions]{@link
         * LuCI.validation.ValidatorFactory.types}
         * @param {string} subargs arguments to subvalidators
         * @returns {@link LuCI.validation.Validator#assert assert()} {boolean}
         */
        unique(subvalidator: string, subargs: string): any;
        /**
         * Assert a hexadecimal string.
         * @example
         * FFFE // valid
         * FFF  // invalid
         * @function LuCI.validation.ValidatorFactory.types#hexstring
         * @returns {@link LuCI.validation.Validator#assert assert()} {boolean}
         */
        hexstring(): any;
        /**
         * Assert a string type, optionally matching `param`.
         * @function LuCI.validation.ValidatorFactory.types#string
         * @param {string} [param] define an optional exact string
         * @returns {@link LuCI.validation.Validator#assert assert()} {boolean}
         */
        string(param?: string): any;
        /**
         * Assert a directory string. This is a hold-over from Lua to maintain
         * compatibility and is a stub function.
         * @function LuCI.validation.ValidatorFactory.types#directory
         * @returns {boolean} Always returns true.
         */
        directory(): boolean;
        /**
         * Assert a file string. This is a hold-over from Lua to maintain
         * compatibility and is a stub function.
         * @function LuCI.validation.ValidatorFactory.types#file
         * @returns {boolean} Always returns true.
         */
        file(): boolean;
        /**
         * Assert a device string. This is a hold-over from Lua to maintain
         * compatibility and is a stub function.
         * @function LuCI.validation.ValidatorFactory.types#device
         * @returns {boolean} Always returns true.
         */
        device(): boolean;
    };
}>;
export default _default;
/**
 * @class Validator
 * @classdesc
 *
 * @memberof LuCI.validation
 * @param {string} field - the UI field to validate.
 * @param {string} type - type of validator.
 * @param {boolean} optional - set the validation result as optional.
 * @param {vfunc} function - validation function.
 * @param {ValidatorFactory} validatorFactory - a ValidatorFactory instance.
 * @returns {Validator} a Validator instance.
 */
export const Validator: import("./classtypes.js").LuCIClass<import("./classtypes.js").Merge<import("./classtypes.js").BaseInstance, {
    /** @type {any} */ field: any;
    /** @type {any} */ optional: any;
    /** @type {any} */ vfunc: any;
    /** @type {any} */ vstack: any;
    /** @type {any} */ factory: any;
    __name__: string;
    __init__(field: any, type: any, optional: any, vfunc: any, validatorFactory: any): void;
    /**
     * Assert a condition and update field error state.
     *
     * @param {boolean} condition - Condition that must be true.
     * @param {string} message - Error message when assertion fails.
     * @returns {boolean} True when assertion is true, false otherwise.
     */
    assert(condition: boolean, message: string): boolean;
    /**
     * Apply a validation function by name or directly via function reference.
     * If a name is provided it resolves it via the factory's registered `types`.
     *
     * @param {string|function} name - Validator name or function.
     * @param {*} value - Value to validate (optional; defaults to field value).
     * @param {Array} args - Arguments passed to the validator function.
     * @returns {*} Validator result.
     */
    apply(name: string | Function, value: any, args: any[]): any;
    /**
     * Validate the associated field value using the compiled validator stack
     * and any additional validators provided at construction time.
     * Emits 'validation-failure' or 'validation-success' CustomEvents on the field.
     *
     * @returns {boolean} True if validation succeeds, false otherwise.
     */
    validate(): boolean;
}>>;
/**
 * @classdesc
 * Factory to create Validator instances and compile validation expressions.
 *
 * @memberof LuCI.validation
 * @class ValidatorFactory
 * @hideconstructor
 */
export const ValidatorFactory: import("./classtypes.js").LuCIClass<import("./classtypes.js").Merge<import("./classtypes.js").BaseInstance, {
    __name__: string;
    /**
     * Compile a validator expression string into an internal stack representation.
     *
     * @param {string} field field name
     * @param {string} type validator type
     * @param {boolean} optional whether the field is optional
     * @param {string} vfunc a validator function
     * @returns {Validator} Compiled token stack used by validators.
     */
    create(field: string, type: string, optional: boolean, vfunc: string): import("./classtypes.js").LuCIClass<import("./classtypes.js").Merge<import("./classtypes.js").BaseInstance, {
        /** @type {any} */ field: any;
        /** @type {any} */ optional: any;
        /** @type {any} */ vfunc: any;
        /** @type {any} */ vstack: any;
        /** @type {any} */ factory: any;
        __name__: string;
        __init__(field: any, type: any, optional: any, vfunc: any, validatorFactory: any): void;
        /**
         * Assert a condition and update field error state.
         *
         * @param {boolean} condition - Condition that must be true.
         * @param {string} message - Error message when assertion fails.
         * @returns {boolean} True when assertion is true, false otherwise.
         */
        assert(condition: boolean, message: string): boolean;
        /**
         * Apply a validation function by name or directly via function reference.
         * If a name is provided it resolves it via the factory's registered `types`.
         *
         * @param {string|function} name - Validator name or function.
         * @param {*} value - Value to validate (optional; defaults to field value).
         * @param {Array} args - Arguments passed to the validator function.
         * @returns {*} Validator result.
         */
        apply(name: string | Function, value: any, args: any[]): any;
        /**
         * Validate the associated field value using the compiled validator stack
         * and any additional validators provided at construction time.
         * Emits 'validation-failure' or 'validation-success' CustomEvents on the field.
         *
         * @returns {boolean} True if validation succeeds, false otherwise.
         */
        validate(): boolean;
    }>>;
    /**
     * Compile a validator expression string into an internal stack representation.
     *
     * @param {string} code - Validator expression string (e.g. `or(ipaddr,port)`).
     * @returns {Array} Compiled token stack used by validators.
     */
    compile(code: string): any[];
    /**
     * Parse an integer string. Returns NaN when not a valid integer.
     * @param {string} x
     * @returns {number} Integer or NaN
     */
    parseInteger(x: string): number;
    /**
     * Parse a decimal number string. Returns NaN when not a valid number.
     * @param {string} x
     * @returns {number} Decimal number or NaN
     */
    parseDecimal(x: string): number;
    /**
     * Parse IPv4 address into an array of 4 octets or return null on failure.
     * @param {string} x - IPv4 address string
     * @returns {Array<number>|null} Array of 4 octets or null.
     */
    parseIPv4(x: string): Array<number> | null;
    /**
     * Parse IPv6 address into an array of 8 16-bit words or return null on failure.
     * Supports IPv4-embedded IPv6 (::ffff:a.b.c.d) and zero-compression.
     * @param {string} x - IPv6 address string
     * @returns {Array<number>|null} Array of 8 16-bit words or null.
     */
    parseIPv6(x: string): Array<number> | null;
    /**
     * Collection of type handlers.
     * Each function consumes `this.value` and returns `this.assert` to report errors.
     *
     * All functions return the result of {@link LuCI.validation.Validator#assert assert()}.
     * @namespace types
     * @memberof LuCI.validation.ValidatorFactory
     */
    types: {
        /**
         * Assert a signed integer value (+/-).
         * @function LuCI.validation.ValidatorFactory.types#integer
         * @returns {@link LuCI.validation.Validator#assert assert()} {boolean}
         */
        integer(): any;
        /**
         * Assert an unsigned integer value (+).
         * @function LuCI.validation.ValidatorFactory.types#uinteger
         * @returns {@link LuCI.validation.Validator#assert assert()} {boolean}
         */
        uinteger(): any;
        /**
         * Assert a signed float value (+/-).
         * @function LuCI.validation.ValidatorFactory.types#float
         * @returns {@link LuCI.validation.Validator#assert assert()} {boolean}
         */
        float(): any;
        /**
         * Assert an unsigned float value (+).
         * @function LuCI.validation.ValidatorFactory.types#ufloat
         * @returns {@link LuCI.validation.Validator#assert assert()} {boolean}
         */
        ufloat(): any;
        /**
         * Assert an IPv4/6 address.
         * @function LuCI.validation.ValidatorFactory.types#ipaddr
         * @param {string} [nomask] reject a `/x` netmask.
         * @returns {@link LuCI.validation.Validator#assert assert()} {boolean}
         */
        ipaddr(nomask?: string): any;
        /**
         * Assert an IPv4 address.
         * @function LuCI.validation.ValidatorFactory.types#ip4addr
         * @param {string} [nomask] reject a `/x` netmask.
         * @returns {@link LuCI.validation.Validator#assert assert()} {boolean}
         */
        ip4addr(nomask?: string): any;
        /**
         * Assert an IPv6 address.
         * @function LuCI.validation.ValidatorFactory.types#ip6addr
         * @param {string} [nomask] reject a `/x` netmask.
         * @returns {@link LuCI.validation.Validator#assert assert()} {boolean}
         */
        ip6addr(nomask?: string): any;
        /**
         * Assert an IPv6 Link Local address.
         * @function LuCI.validation.ValidatorFactory.types#ip6ll
         * @param {string} [nomask] reject a `/x` netmask.
         * @returns {@link LuCI.validation.Validator#assert assert()} {boolean}
         */
        ip6ll(nomask?: string): any;
        /**
         * Assert an IPv6 UL address.
         * @function LuCI.validation.ValidatorFactory.types#ip6ula
         * @param {string} [nomask] reject a `/x` netmask.
         * @returns {@link LuCI.validation.Validator#assert assert()} {boolean}
         */
        ip6ula(nomask?: string): any;
        /**
         * Assert an IPv4 prefix.
         * @function LuCI.validation.ValidatorFactory.types#ip4prefix
         * @returns {@link LuCI.validation.Validator#assert assert()} {boolean}
         */
        ip4prefix(): any;
        /**
         * Assert an IPv6 prefix.
         * @function LuCI.validation.ValidatorFactory.types#ip6prefix
         * @returns {@link LuCI.validation.Validator#assert assert()} {boolean}
         */
        ip6prefix(): any;
        /**
         * Assert a IPv4/6 CIDR.
         * @function LuCI.validation.ValidatorFactory.types#cidr
         * @param {boolean} [negative] allow netmask forms with `/-...` to mark
         * negation of the range.
         * @returns {@link LuCI.validation.Validator#assert assert()} {boolean}
         */
        cidr(negative?: boolean): any;
        /**
         * Assert a IPv4 CIDR.
         * @function LuCI.validation.ValidatorFactory.types#cidr4
         * @param {boolean} [negative] allow netmask forms with `/-...`.
         * E.g. `192.0.2.1/-24` to mark negation of the range.
         * @returns {@link LuCI.validation.Validator#assert assert()} {boolean}
         */
        cidr4(negative?: boolean): any;
        /**
         * Assert a IPv6 CIDR.
         * @function LuCI.validation.ValidatorFactory.types#cidr6
         * @param {boolean} [negative] allow netmask forms with `/-...`.
         * E.g. `2001:db8:dead:beef::/-64` to mark negation of the range.
         * @returns {@link LuCI.validation.Validator#assert assert()} {boolean}
         */
        cidr6(negative?: boolean): any;
        /**
         * Assert an IPv4 network in address/netmask notation. E.g.
         * `192.0.2.1/255.255.255.0`
         * @function LuCI.validation.ValidatorFactory.types#ipnet4
         * @returns {@link LuCI.validation.Validator#assert assert()} {boolean}
         */
        ipnet4(): any;
        /**
         * Assert an IPv6 network in address/netmask notation. E.g.
         * `2001:db8:dead:beef::0001/ffff:ffff:ffff:ffff::`
         * @function LuCI.validation.ValidatorFactory.types#ipnet6
         * @returns {@link LuCI.validation.Validator#assert assert()} {boolean}
         */
        ipnet6(): any;
        /**
         * Assert a IPv6 host ID.
         * @function LuCI.validation.ValidatorFactory.types#ip6hostid
         * @returns {@link LuCI.validation.Validator#assert assert()} {boolean}
         */
        ip6hostid(): any;
        /**
         * Assert an IPv4/6 network in address/netmask (CIDR or mask) notation.
         * @function LuCI.validation.ValidatorFactory.types#ipmask
         * @param {boolean} [negative] allow netmask forms with `/-...` to mark
         * negation of the range.
         * @returns {@link LuCI.validation.Validator#assert assert()} {boolean}
         */
        ipmask(negative?: boolean): any;
        /**
         * Assert an IPv4 network in address/netmask (CIDR or mask) notation.
         * @function LuCI.validation.ValidatorFactory.types#ipmask4
         * @param {boolean} [negative] allow netmask forms with `/-...` to mark
         * negation of the range.
         * @returns {@link LuCI.validation.Validator#assert assert()} {boolean}
         */
        ipmask4(negative?: boolean): any;
        /**
         * Assert an IPv6 network in address/netmask (CIDR or mask) notation.
         * @function LuCI.validation.ValidatorFactory.types#ipmask6
         * @param {boolean} [negative] allow netmask forms with `/-...` to mark
         * negation of the range.
         * @returns {@link LuCI.validation.Validator#assert assert()} {boolean}
         */
        ipmask6(negative?: boolean): any;
        /**
         * Assert a valid IPv4/6 address range.
         * @function LuCI.validation.ValidatorFactory.types#iprange
         * @returns {@link LuCI.validation.Validator#assert assert()} {boolean}
         */
        iprange(): any;
        /**
         * Assert a valid IPv4 address range. E.g.
         * `192.0.2.1-192.0.2.254`.
         * @function LuCI.validation.ValidatorFactory.types#iprange4
         * @returns {@link LuCI.validation.Validator#assert assert()} {boolean}
         */
        iprange4(): any;
        /**
         * Assert a valid IPv6 address range. E.g.
         * `2001:db8:0f00:0000::-2001:db8:0f00:0000:ffff:ffff:ffff:ffff`.
         * @function LuCI.validation.ValidatorFactory.types#iprange6
         * @returns {@link LuCI.validation.Validator#assert assert()} {boolean}
         */
        iprange6(): any;
        /**
         * Assert a valid port value where `0 <= port <= 65535`.
         * @function LuCI.validation.ValidatorFactory.types#port
         * @returns {@link LuCI.validation.Validator#assert assert()} {boolean}
         */
        port(): any;
        /**
         * Assert a valid port or port range (port1-port2) where both ports are
         * positive integers, `port1 <= port2` and `port2 <= 65535` (`2^16 - 1`).
         * @function LuCI.validation.ValidatorFactory.types#portrange
         * @returns {@link LuCI.validation.Validator#assert assert()} {boolean}
         */
        portrange(): any;
        /**
         * Assert a valid (multicast) MAC address.
         * @function LuCI.validation.ValidatorFactory.types#macaddr
         * @param {boolean} [multicast] enforce a multicast MAC address.
         * @returns {@link LuCI.validation.Validator#assert assert()} {boolean}
         */
        macaddr(multicast?: boolean): any;
        /**
         * Assert a valid hostname or IP address.
         * @function LuCI.validation.ValidatorFactory.types#host
         * @param {boolean} [ipv4only] enforce IPv4 IPs only.
         * @returns {@link LuCI.validation.Validator#assert assert()} {boolean}
         */
        host(ipv4only?: boolean): any;
        /**
         * Validate hostname according to common rules.
         * @function LuCI.validation.ValidatorFactory.types#hostname
         * @param {boolean} [strict] reject leading underscores.
         * @returns {@link LuCI.validation.Validator#assert assert()} {boolean}
         */
        hostname(strict?: boolean): any;
        /**
         * Assert a valid UCI identifier, hostname or IP address range.
         * @function LuCI.validation.ValidatorFactory.types#network
         * @returns {@link LuCI.validation.Validator#assert assert()} {boolean}
         */
        network(): any;
        /**
         * Assert a valid host:port.
         * @function LuCI.validation.ValidatorFactory.types#hostport
         * @param {boolean} [ipv4only] restrict to IPv4 IPs only.
         * @returns {@link LuCI.validation.Validator#assert assert()} {boolean}
         */
        hostport(ipv4only?: boolean): any;
        /**
         * Assert a valid IPv4 address:port. E.g.
         * `192.0.2.10:80`
         * @function LuCI.validation.ValidatorFactory.types#ip4addrport
         * @param {boolean} [ipv4only] restrict to IPv4 IPs only.
         * @returns {@link LuCI.validation.Validator#assert assert()} {boolean}
         */
        ip4addrport(): any;
        /**
         * Assert a valid IPv4/6 address:port. E.g.
         * `192.0.2.10:80` or `[2001:db8:f00d:cafe::1]:8080`
         * @function LuCI.validation.ValidatorFactory.types#ipaddrport
         * @param {boolean} [bracket] mandate bracketed [IPv6] URI form IPs.
         * @returns {@link LuCI.validation.Validator#assert assert()} {boolean}
         */
        ipaddrport(bracket?: boolean): any;
        /**
         * Define a string separator `sep` for use in [tuple]{@link
         * LuCI.validation.ValidatorFactory.types#tuple}.
         * @function LuCI.validation.ValidatorFactory.types#sep
         * @param {string} str define the separator string
         * @returns {@link LuCI.validation.Validator#assert assert()} {boolean}
         */
        sep(str: string): any;
        /**
         * Tuple validator: accepts 1-N tokens separated by a given separator
         * {@link LuCI.validation.ValidatorFactory.types#sep sep}
         * (whitespace by default if {@link LuCI.validation.ValidatorFactory.types#sep sep}
         * is omitted) which will be validated against the 1-N types.
         *
         * This differs from {@link LuCI.validation.ValidatorFactory.types#and and}
         * by first splitting the input and applying each validator function
         * sequentially on the resulting array of the split string, whereby the
         * first type applies to the first value element, the second to the
         * second, and so on, to define a concrete order.
         *
         * {@link LuCI.validation.ValidatorFactory.types#sep sep}
         * can appear at any position in the list.
         *
         * @example
         *
         * tuple(ipaddr,port) // "192.0.2.1 88"
         *
         * tuple(host,port,sep(',')) // "taurus,8000"
         *
         * tuple(port,port,port,sep('-')) // "33-45-78"
         *
         * @function LuCI.validation.ValidatorFactory.types#tuple
         * @param {...function} types {@link LuCI.validation.ValidatorFactory.types
         * types validation functions}
         * @param {string} [sep()] function to define split separator string.
         * @returns {@link LuCI.validation.Validator#assert assert()} {boolean}
         */
        tuple(...args: Function[]): any;
        /**
         * Assert a valid (hexadecimal) WPA key of `8 <= length <= 63`, or hex if `length == 64`.
         * @function LuCI.validation.ValidatorFactory.types#wpakey
         * @returns {@link LuCI.validation.Validator#assert assert()} {boolean}
         */
        wpakey(): any;
        /**
         * Assert a valid (hexadecimal) WEP key.
         * @function LuCI.validation.ValidatorFactory.types#wepkey
         * @returns {@link LuCI.validation.Validator#assert assert()} {boolean}
         */
        wepkey(): any;
        /**
         * Assert a valid UCI identifier: `[a-zA-Z0-9_]+`.
         * @function LuCI.validation.ValidatorFactory.types#uciname
         * @returns {@link LuCI.validation.Validator#assert assert()} {boolean}
         */
        uciname(): any;
        /**
         * Assert a valid fw4 zone name UCI identifier: `[a-zA-Z_][a-zA-Z0-9_]+`
         * @function LuCI.validation.ValidatorFactory.types#ucifw4zonename
         * @returns {@link LuCI.validation.Validator#assert assert()} {boolean}
         */
        ucifw4zonename(): any;
        /**
         * Assert a valid network device name between 1 and 15 characters not
         * containing ":", "/", "%" or spaces.
         * @function LuCI.validation.ValidatorFactory.types#netdevname
         * @returns {@link LuCI.validation.Validator#assert assert()} {boolean}
         */
        netdevname(): any;
        /**
         * Assert a decimal value between `min` and `max`.
         * @example
         *range(-253, 253) // assert a value between -253 and +253
         *
         *'range(%u,%u)'.format(min_vid, feat.vid_option ? 4094 : num_vlans - 1);
         * // assert values calculated at runtime for VLAN IDs.
         * @function LuCI.validation.ValidatorFactory.types#range
         * @param {string} min set start of range.
         * @param {string} max set end of range.
         * @returns {@link LuCI.validation.Validator#assert assert()} {boolean}
         */
        range(min: string, max: string): any;
        /**
         * Assert a decimal value greater or equal to `min`.
         * @function LuCI.validation.ValidatorFactory.types#min
         * @param {string} min set start of range.
         * @returns {@link LuCI.validation.Validator#assert assert()} {boolean}
         */
        min(min: string): any;
        /**
         * Assert a decimal value lesser or equal to `max`.
         * @function LuCI.validation.ValidatorFactory.types#max
         * @param {string} max set end of range.
         * @returns {@link LuCI.validation.Validator#assert assert()} {boolean}
         */
        max(max: string): any;
        /**
         * Assert a string of [bytelen]{@link LuCI.validation.bytelen} length `len` characters.
         * @function LuCI.validation.ValidatorFactory.types#length
         * @param {string} len set the length.
         * @returns {@link LuCI.validation.Validator#assert assert()} {boolean}
         */
        length(len: string): any;
        /**
         * Assert a string value of [bytelen]{@link LuCI.validation.bytelen} length between `min` and `max` characters.
         * @function LuCI.validation.ValidatorFactory.types#rangelength
         * @param {string} min set the min length.
         * @param {string} max set the max length.
         * @returns {@link LuCI.validation.Validator#assert assert()} {boolean}
         */
        rangelength(min: string, max: string): any;
        /**
         * Assert a value of [bytelen]{@link LuCI.validation.bytelen} with at least `min` characters.
         * @function LuCI.validation.ValidatorFactory.types#minlength
         * @param {string} min set the min length.
         * @returns {@link LuCI.validation.Validator#assert assert()} {boolean}
         */
        minlength(min: string): any;
        /**
         * Assert a value of [bytelen]{@link LuCI.validation.bytelen} with at
         * most `max` characters.
         * @function LuCI.validation.ValidatorFactory.types#maxlength
         * @param {string} max set the max length.
         * @returns {@link LuCI.validation.Validator#assert assert()} {boolean}
         */
        maxlength(max: string): any;
        /**
         * Logical OR `||` to build a more complex expression. Allows multiple
         * types within a single field.
         *
         * See also {@link LuCI.validation.ValidatorFactory.types#and and}
         * @function LuCI.validation.ValidatorFactory.types#or
         * @param {string} ...args other [types validation functions]{@link
         * LuCI.validation.ValidatorFactory.types}
         * @returns {@link LuCI.validation.Validator#assert assert()} {boolean}
         * @example
         * or([ipmask("true")]{@link
         * LuCI.validation.ValidatorFactory.types#ipmask},[iprange]{@link
         * LuCI.validation.ValidatorFactory.types#iprange})
         */
        or(...args: any[]): any;
        /**
         * Logical AND `&&` to build more complex expressions. Enforces all
         * types on the input string.
         *
         *
         * See also {@link LuCI.validation.ValidatorFactory.types#or or}
         * @function LuCI.validation.ValidatorFactory.types#and
         * @param {string} ...args  other [types validation functions]{@link
         * LuCI.validation.ValidatorFactory.types}
         * @returns {@link LuCI.validation.Validator#assert assert()} {boolean}
         * @example
         *
         * and([minlength(3)]{@link
         * LuCI.validation.ValidatorFactory.types#minlength},[maxlength(20)]{@link
         * LuCI.validation.ValidatorFactory.types#maxlength})
         */
        and(...args: any[]): any;
        /**
         * Assert any type, optionally preceded by `!`.
         *
         * Example:`list(neg(macaddr))` mandates a list of MAC values, which may
         * also be prefixed with a single `!`; the MAC strings are validated
         * after `!` are removed from all entries.
         *```
         * 01:02:03:04:05:06
         * !01:02:03:04:05:07
         * 01:02:03:04:05:08
         *```
         * @function LuCI.validation.ValidatorFactory.types#neg
         * @param {string} ...args other [types validation functions]{@link
         * LuCI.validation.ValidatorFactory.types}
         * @returns {@link LuCI.validation.Validator#assert assert()} {boolean}
         */
        neg(...args: any[]): any;
        /**
         * Assert a list of a type.
         *
         * @function LuCI.validation.ValidatorFactory.types#list
         * @param {string} subvalidator other [types validation functions]{@link
         * LuCI.validation.ValidatorFactory.types}
         * @param {string} subargs arguments to pass to the `subvalidator`
         * @returns {@link LuCI.validation.Validator#assert assert()} {boolean}
         * @example
         * list(string)
         */
        list(subvalidator: string, subargs: string): any;
        /**
         * Assert a valid phone number dial string: `[0-9*#!.]+`.
         * @function LuCI.validation.ValidatorFactory.types#phonedigit
         * @returns {@link LuCI.validation.Validator#assert assert()} {boolean}
         */
        phonedigit(): any;
        /**
         * Assert a string of the form `HH:MM:SS`.
         * @function LuCI.validation.ValidatorFactory.types#timehhmmss
         * @returns {@link LuCI.validation.Validator#assert assert()} {boolean}
         */
        timehhmmss(): any;
        /**
         * Assert a string of the form `YYYY-MM-DD`.
         * @function LuCI.validation.ValidatorFactory.types#dateyyyymmdd
         * @returns {@link LuCI.validation.Validator#assert assert()} {boolean}
         */
        dateyyyymmdd(): any;
        /**
         * Assert unique values among lists.
         * @function LuCI.validation.ValidatorFactory.types#unique
         * @param {string} subvalidator other [types validation functions]{@link
         * LuCI.validation.ValidatorFactory.types}
         * @param {string} subargs arguments to subvalidators
         * @returns {@link LuCI.validation.Validator#assert assert()} {boolean}
         */
        unique(subvalidator: string, subargs: string): any;
        /**
         * Assert a hexadecimal string.
         * @example
         * FFFE // valid
         * FFF  // invalid
         * @function LuCI.validation.ValidatorFactory.types#hexstring
         * @returns {@link LuCI.validation.Validator#assert assert()} {boolean}
         */
        hexstring(): any;
        /**
         * Assert a string type, optionally matching `param`.
         * @function LuCI.validation.ValidatorFactory.types#string
         * @param {string} [param] define an optional exact string
         * @returns {@link LuCI.validation.Validator#assert assert()} {boolean}
         */
        string(param?: string): any;
        /**
         * Assert a directory string. This is a hold-over from Lua to maintain
         * compatibility and is a stub function.
         * @function LuCI.validation.ValidatorFactory.types#directory
         * @returns {boolean} Always returns true.
         */
        directory(): boolean;
        /**
         * Assert a file string. This is a hold-over from Lua to maintain
         * compatibility and is a stub function.
         * @function LuCI.validation.ValidatorFactory.types#file
         * @returns {boolean} Always returns true.
         */
        file(): boolean;
        /**
         * Assert a device string. This is a hold-over from Lua to maintain
         * compatibility and is a stub function.
         * @function LuCI.validation.ValidatorFactory.types#device
         * @returns {boolean} Always returns true.
         */
        device(): boolean;
    };
}>>;
