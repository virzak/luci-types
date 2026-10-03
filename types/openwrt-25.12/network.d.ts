declare const _default: import("./classtypes.js").Merge<import("./classtypes.js").BaseInstance, {
    /**
     * Converts the given prefix size in bits to a netmask.
     *
     * @function
     *
     * @param {number} bits
     * The prefix size in bits.
     *
     * @param {boolean} [v6=false]
     * Whether to convert the bits value into an IPv4 netmask (`false`) or
     * an IPv6 netmask (`true`).
     *
     * @returns {null|string}
     * Returns a string containing the netmask corresponding to the bit count
     * or `null` when the given amount of bits exceeds the maximum possible
     * value of `32` for IPv4 or `128` for IPv6.
     */
    prefixToMask: typeof prefixToMask;
    /**
     * Converts the given netmask to a prefix size in bits.
     *
     * @function
     *
     * @param {string} netmask
     * The netmask to convert into a bits count.
     *
     * @param {boolean} [v6=false]
     * Whether to parse the given netmask as IPv4 (`false`) or IPv6 (`true`)
     * address.
     *
     * @returns {null|number}
     * Returns the number of prefix bits contained in the netmask or `null`
     * if the given netmask value was invalid.
     */
    maskToPrefix: typeof maskToPrefix;
    /**
     * Converts a given {@link LuCI.network.WifiEncryption encryption entry}
     * into a human readable string such as `mixed WPA/WPA2 PSK (TKIP, CCMP)`
     * or `WPA3 SAE (CCMP)`.
     *
     * @function
     *
     * @param {LuCI.network.WifiEncryption} encryption
     * The wireless encryption entry to convert.
     *
     * @returns {null|string}
     * Returns the description string for the given encryption entry or
     * `null` if the given entry was invalid.
     */
    formatWifiEncryption: typeof formatWifiEncryption;
    /**
     * Flushes the local network state cache and fetches updated information
     * from the remote `ubus` apis.
     *
     * @returns {Promise<Object>}
     * Returns a promise resolving to the internal network state object.
     */
    flushCache(): Promise<any>;
    /**
     * Instantiates the given {@link LuCI.network.Protocol Protocol} back-end,
     * optionally using the given network name.
     *
     * @param {string} protoname
     * The protocol back-end to use, e.g. `static` or `dhcp`.
     *
     * @param {string} [netname=__dummy__]
     * The network name to use for the instantiated protocol. This should be
     * usually set to one of the interfaces described in /etc/config/network
     * but it is allowed to omit it, e.g. to query protocol capabilities
     * without the need for an existing interface.
     *
     * @returns {null|LuCI.network.Protocol}
     * Returns the instantiated protocol back-end class or `null` if the given
     * protocol isn't known.
     */
    getProtocol(protoname: string, netname?: string): null | LuCI.network.Protocol;
    /**
     * Obtains instances of all known {@link LuCI.network.Protocol Protocol}
     * back-end classes.
     *
     * @returns {Array<LuCI.network.Protocol>}
     * Returns an array of protocol class instances.
     */
    getProtocols(): Array<LuCI.network.Protocol>;
    /**
     * Registers a new {@link LuCI.network.Protocol Protocol} subclass
     * with the given methods and returns the resulting subclass value.
     *
     * This function internally calls
     * {@link LuCI.baseclass.extend baseclass.extend()} on the `Network.Protocol`
     * base class.
     *
     * @param {string} protoname
     * The name of the new protocol to register.
     *
     * @param {Object<string, *>} methods
     * The member methods and values of the new `Protocol` subclass to
     * be passed to {@link LuCI.baseclass.extend baseclass.extend()}.
     *
     * @returns {LuCI.network.Protocol}
     * Returns the new `Protocol` subclass.
     */
    registerProtocol(protoname: string, methods: {
        [x: string]: any;
    }): LuCI.network.Protocol;
    /**
     * Registers a new regular expression pattern to recognize
     * virtual interfaces.
     *
     * @param {RegExp} pat
     * A `RegExp` instance to match a virtual interface name
     * such as `6in4-wan` or `tun0`.
     */
    registerPatternVirtual(pat: RegExp): void;
    /**
     * Registers a new human readable translation string for a `Protocol`
     * error code.
     *
     * @param {string} code
     * The `ubus` protocol error code to register a translation for, e.g.
     * `NO_DEVICE`.
     *
     * @param {string} message
     * The message to use as a translation for the given protocol error code.
     *
     * @returns {boolean}
     * Returns `true` if the error code description has been added or `false`
     * if either the arguments were invalid or if there already was a
     * description for the given code.
     */
    registerErrorCode(code: string, message: string): boolean;
    /**
     * Adds a new network of the given name and update it with the given
     * uci option values.
     *
     * If a network with the given name already exist but is empty, then
     * this function will update its option, otherwise it will do nothing.
     *
     * @param {string} name
     * The name of the network to add. Must be in the format `[a-zA-Z0-9_]+`.
     *
     * @param {Object<string, string|string[]>} [options]
     * An object of uci option values to set on the new network or to
     * update in an existing, empty network.
     *
     * @returns {Promise<null|LuCI.network.Protocol>}
     * Returns a promise resolving to the `Protocol` subclass instance
     * describing the added network or resolving to `null` if the name
     * was invalid or if a non-empty network of the given name already
     * existed.
     */
    addNetwork(name: string, options?: {
        [x: string]: string | string[];
    }): Promise<null | LuCI.network.Protocol>;
    /**
     * Get a {@link LuCI.network.Protocol Protocol} instance describing
     * the network with the given name.
     *
     * @param {string} name
     * The logical interface name of the network get, e.g. `lan` or `wan`.
     *
     * @returns {Promise<null|LuCI.network.Protocol>}
     * Returns a promise resolving to a
     * {@link LuCI.network.Protocol Protocol} subclass instance describing
     * the network or `null` if the network did not exist.
     */
    getNetwork(name: string): Promise<null | LuCI.network.Protocol>;
    /**
     * Gets an array containing all known networks.
     *
     * @returns {Promise<Array<LuCI.network.Protocol>>}
     * Returns a promise resolving to a name-sorted array of
     * {@link LuCI.network.Protocol Protocol} subclass instances
     * describing all known networks.
     */
    getNetworks(): Promise<Array<LuCI.network.Protocol>>;
    /**
     * Deletes the given network and its references from the network and
     * firewall configuration.
     *
     * @param {string} name
     * The name of the network to delete.
     *
     * @returns {Promise<boolean>}
     * Returns a promise resolving to either `true` if the network and
     * references to it were successfully deleted from the configuration or
     * `false` if the given network could not be found.
     */
    deleteNetwork(name: string): Promise<boolean>;
    /**
     * Rename the given network and its references to a new name.
     *
     * @param {string} oldName
     * The current name of the network.
     *
     * @param {string} newName
     * The name to rename the network to, must be in the format
     * `[a-z-A-Z0-9_]+`.
     *
     * @returns {Promise<boolean>}
     * Returns a promise resolving to either `true` if the network was
     * successfully renamed or `false` if the new name was invalid, if
     * a network with the new name already exists or if the network to
     * rename could not be found.
     */
    renameNetwork(oldName: string, newName: string): Promise<boolean>;
    /**
     * Get a {@link LuCI.network.Device Device} instance describing the
     * given network device.
     *
     * @param {string} name
     * The name of the network device to get, e.g. `eth0` or `br-lan`.
     *
     * @returns {Promise<null|LuCI.network.Device>}
     * Returns a promise resolving to the `Device` instance describing
     * the network device or `null` if the given device name could not
     * be found.
     */
    getDevice(name: string): Promise<null | LuCI.network.Device>;
    /**
     * Get a sorted list of all found network devices.
     *
     * @returns {Promise<Array<LuCI.network.Device>>}
     * Returns a promise resolving to a sorted array of `Device` class
     * instances describing the network devices found on the system.
     */
    getDevices(): Promise<Array<LuCI.network.Device>>;
    /**
     * Test if a given network device name is in the list of patterns for
     * device names to ignore.
     *
     * Ignored device names are usually Linux network devices which are
     * spawned implicitly by kernel modules such as `tunl0` or `hwsim0`
     * and which are unsuitable for use in network configuration.
     *
     * @param {string} name
     * The device name to test.
     *
     * @returns {boolean}
     * Returns `true` if the given name is in the ignore-pattern list,
     * else returns `false`.
     */
    isIgnoredDevice(name: string): boolean;
    /**
     * Get a {@link LuCI.network.WifiDevice WifiDevice} instance describing
     * the given wireless radio.
     *
     * @param {string} devname
     * The configuration name of the wireless radio to look up, e.g. `radio0`
     * for the first mac80211 phy on the system.
     *
     * @returns {Promise<null|LuCI.network.WifiDevice>}
     * Returns a promise resolving to the `WifiDevice` instance describing
     * the underlying radio device or `null` if the wireless radio could not
     * be found.
     */
    getWifiDevice(devname: string): Promise<null | LuCI.network.WifiDevice>;
    /**
     * Obtain a list of all configured radio devices.
     *
     * @returns {Promise<Array<LuCI.network.WifiDevice>>}
     * Returns a promise resolving to an array of `WifiDevice` instances
     * describing the wireless radios configured in the system.
     * The order of the array corresponds to the order of the radios in
     * the configuration.
     */
    getWifiDevices(): Promise<Array<LuCI.network.WifiDevice>>;
    /**
     * Get a {@link LuCI.network.WifiNetwork WifiNetwork} instance describing
     * the given wireless network.
     *
     * @param {string} netname
     * The name of the wireless network to look up. This may be either an uci
     * configuration section ID, a network ID in the form `radio#.network#`
     * or a Linux network device name like `wlan0` which is resolved to the
     * corresponding configuration section through `ubus` runtime information.
     *
     * @returns {Promise<null|LuCI.network.WifiNetwork>}
     * Returns a promise resolving to the `WifiNetwork` instance describing
     * the wireless network or `null` if the corresponding network could not
     * be found.
     */
    getWifiNetwork(netname: string): Promise<null | LuCI.network.WifiNetwork>;
    /**
     * Get an array of all {@link LuCI.network.WifiNetwork WifiNetwork}
     * instances describing the wireless networks present on the system.
     *
     * @returns {Promise<Array<LuCI.network.WifiNetwork>>}
     * Returns a promise resolving to an array of `WifiNetwork` instances
     * describing the wireless networks. The array will be empty if no networks
     * are found.
     */
    getWifiNetworks(): Promise<Array<LuCI.network.WifiNetwork>>;
    /**
     * Adds a new wireless network to the configuration and sets its options
     * to the provided values.
     *
     * @param {Object<string, string|string[]>} options
     * The options to set for the newly added wireless network. This object
     * must at least contain a `device` property which is set to the radio
     * name the new network belongs to.
     *
     * @returns {Promise<null|LuCI.network.WifiNetwork>}
     * Returns a promise resolving to a `WifiNetwork` instance describing
     * the newly added wireless network or `null` if the given options
     * were invalid or if the associated radio device could not be found.
     */
    addWifiNetwork(options: {
        [x: string]: string | string[];
    }): Promise<null | LuCI.network.WifiNetwork>;
    /**
     * Deletes the given wireless network from the configuration.
     *
     * @param {string} netname
     * The name of the network to remove. This may be either a
     * network ID in the form `radio#.network#` or a Linux network device
     * name like `wlan0` which is resolved to the corresponding configuration
     * section through `ubus` runtime information.
     *
     * @returns {Promise<boolean>}
     * Returns a promise resolving to `true` if the wireless network has been
     * successfully deleted from the configuration or `false` if it could not
     * be found.
     */
    deleteWifiNetwork(netname: string): Promise<boolean>;
    getStatusByRoute(addr: any, mask: any): any;
    getStatusByAddress(addr: any): any;
    /**
     * Get IPv4 wan networks.
     *
     * This function looks up all networks having a default `0.0.0.0/0` route
     * and returns them as an array.
     *
     * @returns {Promise<Array<LuCI.network.Protocol>>}
     * Returns a promise resolving to an array of `Protocol` subclass
     * instances describing the found default route interfaces.
     */
    getWANNetworks(): Promise<Array<LuCI.network.Protocol>>;
    /**
     * Get IPv6 wan networks.
     *
     * This function looks up all networks having a default `::/0` route
     * and returns them as an array.
     *
     * @returns {Promise<Array<LuCI.network.Protocol>>}
     * Returns a promise resolving to an array of `Protocol` subclass
     * instances describing the found IPv6 default route interfaces.
     */
    getWAN6Networks(): Promise<Array<LuCI.network.Protocol>>;
    /**
     * Returns the topologies of all swconfig switches found on the system.
     *
     * @returns {Promise<Object<string, LuCI.network.SwitchTopology>>}
     * Returns a promise resolving to an object containing the topologies
     * of each switch. The object keys correspond to the name of the switches
     * such as `switch0`, the values are
     * {@link LuCI.network.SwitchTopology SwitchTopology} objects describing
     * the layout.
     */
    getSwitchTopologies(): Promise<{
        [x: string]: LuCI.network.SwitchTopology;
    }>;
    instantiateNetwork(name: any, proto: any): any;
    instantiateDevice(name: any, network: any, extend: any): any;
    instantiateWifiDevice(radioname: any, radiostate: any): any;
    instantiateWifiNetwork(sid: any, radioname: any, radiostate: any, netid: any, netstate: any, hostapd: any): any;
    lookupWifiNetwork(netname: any): any;
    /**
     * Obtains the network device name of the given object.
     *
     * @param {LuCI.network.Protocol|LuCI.network.Device|LuCI.network.WifiDevice|LuCI.network.WifiNetwork|string} obj
     * The object to get the device name from.
     *
     * @returns {null|string}
     * Returns a string containing the device name or `null` if the given
     * object could not be converted to a name.
     */
    getIfnameOf(obj: LuCI.network.Protocol | LuCI.network.Device | LuCI.network.WifiDevice | LuCI.network.WifiNetwork | string): null | string;
    /**
     * Queries the internal DSL modem type from board information.
     *
     * @returns {Promise<null|string>}
     * Returns a promise resolving to the type of the internal modem
     * (e.g. `vdsl`) or to `null` if no internal modem is present.
     */
    getDSLModemType(): Promise<null | string>;
    /**
     * Queries aggregated information about known hosts.
     *
     * This function aggregates information from various sources such as
     * DHCP lease databases, ARP and IPv6 neighbour entries, wireless
     * association list etc. and returns a {@link LuCI.network.Hosts Hosts}
     * class instance describing the found hosts.
     *
     * @returns {Promise<LuCI.network.Hosts>}
     * Returns a `Hosts` instance describing a host known on the system.
     */
    getHostHints(): Promise<LuCI.network.Hosts>;
}>;
export default _default;
/**
 * An encryption entry describes active wireless encryption settings
 * such as the used key management protocols, active ciphers and
 * protocol versions.
 */
export type LuCI_network_WifiEncryption = {
    [x: string]: boolean | (string | number)[];
};
/**
 * Describes a swconfig switch topology by specifying the CPU
 * connections and external port labels of a switch.
 */
export type SwitchTopology = {
    [x: string]: any;
};
/**
 * A wireless scan result object describes a neighbouring wireless
 * network found in the vicinity.
 */
export type WifiScanResult = {
    [x: string]: string | number | {
        [x: string]: boolean | (string | number)[];
    };
};
/**
 * A wireless peer entry describes the properties of a remote wireless
 * peer associated with a local network.
 */
export type WifiPeerEntry = {
    [x: string]: string | number | boolean | {
        [x: string]: number | boolean;
    };
};
/**
 * A wireless rate entry describes the properties of a wireless
 * transmission rate to or from a peer.
 */
export type WifiRateEntry = {
    [x: string]: number | boolean;
};
declare function prefixToMask(bits: any, v6: any): any;
declare function maskToPrefix(mask: any, v6: any): number;
declare function formatWifiEncryption(enc: any): string;
