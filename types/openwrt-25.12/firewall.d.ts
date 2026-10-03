declare const _default: import("./classtypes.js").Merge<import("./classtypes.js").BaseInstance, {
    getDefaults: () => Promise<any>;
    newZone: () => Promise<any>;
    addZone: (name: any) => Promise<any>;
    getZone: (name: any) => Promise<any>;
    getZones: () => Promise<any[]>;
    getZoneByNetwork: (network: any) => Promise<any>;
    deleteZone: (name: any) => Promise<boolean>;
    renameZone: (oldName: any, newName: any) => Promise<any>;
    deleteNetwork: (network: any) => Promise<any>;
    getColorForName: typeof getColorForName;
    getZoneColorStyle: (zone: any) => string;
}>;
export default _default;
/**
 * Generate a colour for a name.
 * @param {?string} forName
 * @returns {string}
 */
declare function getColorForName(forName: string | null): string;
