import { twJoin, twMerge } from 'tailwind-merge';
export function hexToRgb(hex) {
    // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
    const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function (_, r, g, b) {
        return r + r + g + g + b + b;
    });
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
        ? `${parseInt(result[1], 16)} ${parseInt(result[2], 16)} ${parseInt(result[3], 16)}`
        : null;
}
/**
 * Merges multiple class lists into a single class string.
 *
 * @param classLists - The class lists to merge.
 * @returns The merged class string.
 *
 * The function joins every string from index 0 to (n-2) with twJoin,
 * then includes the last string separately in the twMerge.
 */
export function merge(...classLists) {
    if (classLists.length === 0)
        return '';
    const allExceptLast = classLists.slice(0, -1);
    const last = classLists[classLists.length - 1];
    return twMerge(twJoin(...allExceptLast), last);
}
export * from './ify-ize/utilify.js';
