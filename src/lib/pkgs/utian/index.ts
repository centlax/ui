import { twJoin, twMerge } from 'tailwind-merge';
import type { DeepStyles, Utility } from './type.js';

/**
 * Merges multiple class lists into a single class string.
 *
 * @param classLists - The class lists to merge.
 * @returns The merged class string.
 *
 * The function joins every string from index 0 to (n-2) with twJoin,
 * then includes the last string separately in the twMerge.
 */
export function merge(...classLists: string[]): string {
	if (classLists.length === 0) return '';

	const allExceptLast = classLists.slice(0, -1);
	const last = classLists[classLists.length - 1];

	return twMerge(twJoin(...allExceptLast), last);
}

/**
 * Converts multiple objects into a single string by concatenating non-object property values.
 * If the input is not an object, it returns an empty string.
 * @param {...Object} objs The objects to be converted into a string.
 * @returns A string representation of the non-object properties of the input objects.
 */
export function stringify(...objs: Utility[]): string {
	return objs
		.flatMap((obj) =>
			typeof obj === 'object' ? Object.values(obj).filter((value) => typeof value !== 'object') : []
		)
		.join(' ');
}

const classTypeKeys = new Set([
	'layout',
	'flex',
	'grid',
	'spacing',
	'sizing',
	'typography',
	'background',
	'border',
	'effect',
	'filter',
	'table',
	'transition',
	'animation',
	'transform',
	'motion',
	'interactive',
	'svg',
	'accessible',
	'custom'
]);

/**
 * Merges two class strings, conditionally overriding the older class with the newer one.
 * @param {string} older The existing class string.
 * @param {string} newer The new class string to merge.
 * @param {boolean} override Whether the new class should override the older one.
 * @returns The merged class string.
 */
function overrideMerge(older: string, newer: string, override: boolean): string {
	return override ? newer : twJoin(older, newer);
}

/**
 * Recursively processes a style object, converting it into usable class strings and CSS objects.
 * If `styles` has a root object, it will merge the stringified root with the classer string.
 * @param {string | DeepStyles<T>} styles The styles object or string.
 * @param {boolean} override Whether the newer styles should override existing ones.
 * @returns An object with `css` and `classer` properties.
 */
export function useUI<T extends Record<string, unknown>>(
	styles?: string | DeepStyles<T>,
	override?: boolean
): { css: T; classer: string } {
	let classer: string = '';
	const css = {} as T;

	if (typeof styles === 'string') {
		classer = styles;
		return { css, classer };
	}

	// Iterate over the keys in the styles object
	for (const key in styles) {
		if (Object.prototype.hasOwnProperty.call(styles, key)) {
			const styleValue = styles[key];

			// Check if the style value is an object (possibly nested)
			if (typeof styleValue === 'object' && !Array.isArray(styleValue) && styleValue !== null) {
				// Recursively call useUI on nested objects and assign the result
				(css as Record<string, unknown>)[key] = useUI(
					styleValue as DeepStyles<Record<string, unknown>>,
					override
				).css;
			} else if (typeof styleValue === 'string' && classTypeKeys.has(key)) {
				// If it's a string and in classTypeKeys, merge the class values
				(css as Record<string, unknown>)[key] = overrideMerge(
					styleValue,
					styleValue,
					override || false
				);
			}
		}
	}

	// If the styles object contains a `root` object, process and merge it with classer

	if (styles && 'root' in styles && typeof styles.root === 'object') {
		classer = merge(stringify(styles.root as Utility), classer);
	}

	return { css, classer };
}
