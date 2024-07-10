import type { DeepStyles } from '../../types/index.js';
/**
 * Merges the given styles and oclass objects.
 * @template T - The type of the styles object.
 * @param {T} styles - The base styles object.
 * @param {string | DeepStyle<T>} oclass - The additional styles object or a string class.
 * @returns {{ css: T; classer: string }} - The merged styles and class string.
 */
export declare function useUI<T extends Record<string, any>>(styles: T, oclass: string | DeepStyles<T>, override: boolean): {
    css: T;
    classer: string;
};
