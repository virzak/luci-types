declare const _default: import("./classtypes.js").Merge<import("./classtypes.js").BaseInstance, {
    /**
     * Obtains a listing of the specified directory.
     *
     * @param {string} path
     * The directory path to list.
     *
     * @returns {Promise<LuCI.fs.FileStatEntry[]>}
     * Returns a promise resolving to an array of stat detail objects or
     * rejecting with an error stating the failure reason.
     */
    list(path: string): Promise<LuCI.fs.FileStatEntry[]>;
    /**
     * Return file stat information on the specified path.
     *
     * @param {string} path
     * The filesystem path to stat.
     *
     * @returns {Promise<LuCI.fs.FileStatEntry>}
     * Returns a promise resolving to a stat detail object or
     * rejecting with an error stating the failure reason.
     */
    stat(path: string): Promise<LuCI.fs.FileStatEntry>;
    /**
     * Return symlink aware file stat information on the specified path. This
     * call differs from stat in that it gives information about the symlink
     * instead of following the symlink, whereby size is the length of the
     * string of the symlink target path and file name.
     *
     * @param {string} path
     * The filesystem path to lstat.
     *
     * @returns {Promise<LuCI.fs.FileStatEntry>}
     * Returns a promise resolving to a stat detail object or
     * rejecting with an error stating the failure reason.
     */
    lstat(path: string): Promise<LuCI.fs.FileStatEntry>;
    /**
     * Read the contents of the given file and return them.
     * Note: this function is unsuitable for obtaining binary data.
     *
     * @param {string} path
     * The file path to read.
     *
     * @returns {Promise<string>}
     * Returns a promise resolving to a string containing the file contents or
     * rejecting with an error stating the failure reason.
     */
    read(path: string): Promise<string>;
    /**
     * Write the given data to the specified file path.
     * If the specified file path does not exist, it will be created, given
     * sufficient permissions.
     *
     * Note: `data` will be converted to a string using `String(data)` or to
     * `''` when it is `null`.
     *
     * @param {string} path
     * The file path to write to.
     *
     * @param {*} [data]
     * The file data to write. If it is null, it will be set to an empty
     * string.
     *
     * @param {number} [mode]
     * The permissions to use on file creation. Default is 420 (0644).
     *
     * @returns {Promise<number>}
     * Returns a promise resolving to `0` or rejecting with an error stating
     * the failure reason.
     */
    write(path: string, data?: any, mode?: number): Promise<number>;
    /**
     * Unlink the given file.
     *
     * @param {string} path
     * The file path to remove.
     *
     * @returns {Promise<number>}
     * Returns a promise resolving to `0` or rejecting with an error stating
     * the failure reason.
     */
    remove(path: string): Promise<number>;
    /**
     * Execute the specified command, optionally passing params and
     * environment variables.
     *
     * Note: The `command` must be either the path to an executable,
     * or a basename without arguments in which case it will be searched
     * in $PATH. If specified, the values given in `params` will be passed
     * as arguments to the command.
     *
     * The key/value pairs in the optional `env` table are translated to
     * `setenv()` calls prior to running the command.
     *
     * @param {string} command
     * The command to invoke.
     *
     * @param {string[]} [params]
     * The arguments to pass to the command.
     *
     * @param {Object.<string, string>} [env]
     * Environment variables to set.
     *
     * @returns {Promise<LuCI.fs.FileExecResult>}
     * Returns a promise resolving to an object describing the execution
     * results or rejecting with an error stating the failure reason.
     */
    exec(command: string, params?: string[], env?: {
        [x: string]: string;
    }): Promise<LuCI.fs.FileExecResult>;
    /**
     * Read the contents of the given file, trim leading and trailing white
     * space and return the trimmed result. In case of errors, return an empty
     * string instead.
     *
     * Note: this function is useful to read single-value files in `/sys`
     * or `/proc`.
     *
     * This function is guaranteed to not reject its promises, on failure,
     * an empty string will be returned.
     *
     * @param {string} path
     * The file path to read.
     *
     * @returns {Promise<string>}
     * Returns a promise resolving to the file contents or the empty string
     * on failure.
     */
    trimmed(path: string): Promise<string>;
    /**
     * Read the contents of the given file, split it into lines, trim
     * leading and trailing white space of each line and return the
     * resulting array.
     *
     * This function is guaranteed to not reject its promises, on failure,
     * an empty array will be returned.
     *
     * @param {string} path
     * The file path to read.
     *
     * @returns {Promise<string[]>}
     * Returns a promise resolving to an array containing the stripped lines
     * of the given file or `[]` on failure.
     */
    lines(path: string): Promise<string[]>;
    /**
     * Read the contents of the given file and return them, bypassing ubus.
     *
     * This function will read the requested file through the cgi-io
     * helper applet at `/cgi-bin/cgi-download` which bypasses the ubus rpc
     * transport. This is useful to fetch large file contents which might
     * exceed the ubus message size limits or which contain binary data.
     *
     * The cgi-io helper will enforce the same access permission rules as
     * the ubus based read call.
     *
     * @param {string} path
     * The file path to read.
     *
     * @param {"blob"|"text"|"json"} [type=text]
     * The expected type of read file contents. Valid values are `text` to
     * interpret the contents as string, `json` to parse the contents as JSON
     * or `blob` to return the contents as Blob instance.
     *
     * @returns {Promise<*>}
     * Returns a promise resolving with the file contents interpreted according
     * to the specified type or rejecting with an error stating the failure
     * reason.
     */
    read_direct(path: string, type?: "blob" | "text" | "json"): Promise<any>;
    /**
     * Execute the specified command, bypassing ubus.
     *
     * Note: The `command` must be either the path to an executable,
     * or a basename without arguments in which case it will be searched
     * in $PATH. If specified, the values given in `params` will be passed
     * as arguments to the command.
     *
     * This function will invoke the requested commands through the cgi-io
     * helper applet at `/cgi-bin/cgi-exec` which bypasses the ubus rpc
     * transport. This is useful to fetch large command outputs which might
     * exceed the ubus message size limits or which contain binary data.
     *
     * The cgi-io helper will enforce the same access permission rules as
     * the ubus based exec call.
     *
     * @param {string} command
     * The command to invoke.
     *
     * @param {string[]} [params]
     * The arguments to pass to the command.
     *
     * @param {"blob"|"text"|"json"} [type=text]
     * The expected output type of the invoked program. Valid values are
     * `text` to interpret the output as string, `json` to parse the output
     * as JSON or `blob` to return the output as Blob instance.
     *
     * @param {boolean} [latin1=false]
     * Whether to encode the command line as Latin1 instead of UTF-8. This
     * is usually not needed but can be useful for programs that cannot
     * handle UTF-8 input.
     *
     * @param {boolean} [stderr=false]
     * Whether to include stderr output in command output. This is usually
     * not needed but can be useful to execute a command and get full output.
     *
     * @param {function()} [responseProgress=null]
     * An optional request callback function which receives ProgressEvent
     * instances as sole argument during the HTTP response transfer. This is
     * usually not needed but can be useful to receive realtime command
     * output before command exit.
     *
     * @returns {Promise<*>}
     * Returns a promise resolving with the command stdout output interpreted
     * according to the specified type or rejecting with an error stating the
     * failure reason.
     */
    exec_direct(command: string, params?: string[], type?: "blob" | "text" | "json", latin1?: boolean, stderr?: boolean, responseProgress?: () => any): Promise<any>;
}>;
export default _default;
export type FileStatEntry = any;
export type FileExecResult = any;
