/**
 * @typedef {object} TailwindPlugin
 * @property {Function} matchUtilities - Adds utilities to tailwind
 * @property {Function} theme - Accesses tailwind's theme
 * @property {Function} addVariant - Adds a variant to tailwind
 * @property {Function} config - Accesses tailwind's configuration
 */
export declare var unused: {};
export type TailwindPlugin = {
    /**
     * - Adds utilities to tailwind
     */
    matchUtilities: Function;
    /**
     * - Accesses tailwind's theme
     */
    theme: Function;
    /**
     * - Adds a variant to tailwind
     */
    addVariant: Function;
    /**
     * - Accesses tailwind's configuration
     */
    config: Function;
};
