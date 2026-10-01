declare const _exports: {
    addBaseStyles: typeof addBaseStyles;
    addBaseSizeUtilities: typeof addBaseSizeUtilities;
    addColorUtilities: typeof addColorUtilities;
    addRoundedUtilities: typeof addRoundedUtilities;
    addSizeUtilities: typeof addSizeUtilities;
};
export = _exports;
import typedefs = require('./typedefs');
/**
 * Base resets to make the plugin's utilities work
 *
 * @param {typedefs.TailwindPlugin} tailwind - Tailwind's plugin object
 * @param {'standard' | 'peseudoelements'} preferredStrategy - The preferred
 *    scrollbar styling strategy: standards track or pseudoelements
 */
declare const addBaseStyles: ({ addBase }: typedefs.TailwindPlugin, preferredStrategy: 'standard' | 'peseudoelements') => void;
/**
 * Adds scrollbar-COMPONENT-COLOR utilities for every scrollbar component.
 *
 * @param {typedefs.TailwindPlugin} tailwind - Tailwind's plugin object
 */
declare const addColorUtilities: ({ matchUtilities, theme }: typedefs.TailwindPlugin) => void;
/**
 * Adds scrollbar-COMPONENT-rounded-VALUE utilities for every scrollbar
 * component.
 *
 * @param {typedefs.TailwindPlugin} tailwind - Tailwind's plugin object
 */
declare const addRoundedUtilities: ({ theme, matchUtilities }: typedefs.TailwindPlugin) => void;
/**
 * @param {typedefs.TailwindPlugin} tailwind - Tailwind's plugin object
 * @param {'standard' | 'peseudoelements'} preferredStrategy - The preferred
 *    scrollbar styling strategy: standards track or pseudoelements
 */
declare const addBaseSizeUtilities: ({ addUtilities }: typedefs.TailwindPlugin, preferredStrategy: 'standard' | 'peseudoelements') => void;
/**
 * Adds scrollbar-w-* and scrollbar-h-* utilities
 *
 * @param {typedefs.TailwindPlugin} tailwind - Tailwind's plugin object
 */
declare const addSizeUtilities: ({ matchUtilities, theme }: typedefs.TailwindPlugin) => void;
