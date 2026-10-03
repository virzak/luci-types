declare const _default: import("../classtypes.js").Merge<import("../classtypes.js").BaseInstance, {
    LogreadBox: (logtag: any, name: any) => import("../classtypes.js").LuCIClass<import("../classtypes.js").Merge<import("../classtypes.js").Merge<import("../classtypes.js").BaseInstance, {
        __name__: string;
        __init__(): Promise<any>;
        load(): any | Promise<any>;
        render(): Node | Promise<Node>;
        handleSave(ev: Event): any | Promise<any>;
        handleSaveApply(ev: Event, mode: number): any | Promise<any>;
        handleReset(ev: Event): any | Promise<any>;
        addFooter(): DocumentFragment;
    }>, {
        logFacilityFilter: string;
        invertLogFacilitySearch: boolean;
        logSeverityFilter: string;
        invertLogSeveritySearch: boolean;
        logTextFilter: string;
        invertLogTextSearch: boolean;
        logTagFilter: any;
        logName: any;
        fetchMaxRows: number;
        facilities: string[][];
        severity: string[][];
        retrieveLog(): Promise<{
            value: any;
            rows: any;
        }>;
        pollLog(): Promise<void>;
        load(): Promise<{
            value: any;
            rows: any;
        }>;
        render(loglines: any): HTMLElement;
        handleSaveApply: any;
        handleSave: any;
        handleReset: any;
    }>>;
}>;
export default _default;
