declare const _default: import("../classtypes").Merge<import("../classtypes").BaseInstance, {
    /**
     * Seed the PRNG state.
     *
     * The seed is treated as a 32-bit integer; the lower 16 bits are stored
     * in `s[0]`, the upper 16 bits in `s[1]`. `s[2]` and `s[3]` are zeroed.
     *
     * @param {number} n - Seed value (32-bit integer)
     * @returns {void}
     */
    seed: (n: number) => void;
    /**
     * Produce the next PRNG 32-bit integer.
     *
     * Advances the internal state and returns a 32-bit pseudo-random integer
     * derived from the current state.
     *
     * @returns {number} 32-bit pseudo-random integer (JS number)
     */
    int: () => number;
    /**
     * Return a pseudo-random value.
     *
     * Overloads:
     * - get() -> number in [0, 1]
     * - get(upper) -> integer in [1, upper]
     * - get(lower, upper) -> integer in [lower, upper]
     *
     * @param {number} [lower=0] - Lower bound (when two args supplied)
     * @param {number} [upper=0] - Upper bound (when one or two args supplied)
     * @returns {number} Random value (float in [0,1] or integer in requested range)
     */
    get: (...args: any[]) => number;
    /**
     * Derive a deterministic hex color from an input string.
     *
     * The color is produced by seeding the PRNG from a string-derived
     * hash and producing RGB components. Returns a `#rrggbb` hex string.
     *
     * @param {string} string - Input string used to derive the color
     * @returns {string} Hex color string in `#rrggbb` format
     */
    derive_color: (string: string) => string;
}>;
export default _default;
