declare const _exports: {
    importDefault: typeof importDefault;
};
export = _exports;
/**
 * Gets the underlying default import of a module.
 *
 * This is used to handle internal imoprts from Tailwind, since Tailwind Play
 * handles these imports differently.
 *
 * @template T
 * @param {T | { __esModule: unknown, default: T }} mod The module
 * @returns {T} The bare export
 */
declare const importDefault: <T>(mod: T | {
    __esModule: unknown;
    default: T;
}) => T;
