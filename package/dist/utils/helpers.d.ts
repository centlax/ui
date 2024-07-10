export declare function hexToRgb(hex: string): string | null;
/**
 * Merges multiple class lists into a single class string.
 *
 * @param classLists - The class lists to merge.
 * @returns The merged class string.
 *
 * The function joins every string from index 0 to (n-2) with twJoin,
 * then includes the last string separately in the twMerge.
 */
export declare function merge(...classLists: string[]): string;
export * from './ify-ize/utilify.js';
