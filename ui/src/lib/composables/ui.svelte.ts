import { cn } from '$lib/utils/wind.js';
import type { DeepStyles } from '../types/ui.js';

// Array of allowed keys in the ClassType interface
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
function overrideMerge(older: string, newer: string, override?: boolean): string {
	return override ? newer : cn(older, newer);
}

/**
 * Merges the given styles and oclass objects.
 * @template T - The type of the styles object.
 * @param {T} styles - The base styles object.
 * @param {string | DeepStyles<T>} oclass - The additional styles object or a string class.
 * @param {boolean} override - Flag indicating whether to override styles.
 * @returns {{ css: T; classer: string }} - The merged styles and class string.
 */
export function useUI<T extends Record<string, unknown>>(
	styles: T,
	oclass: string | undefined | DeepStyles<T>,
	override: boolean | undefined
): T & { class?: string } {
	const css: T & { class?: string } = { ...styles };

	if (typeof oclass === 'string') {
		css.class = oclass;
		return css;
	}

	for (const key in oclass) {
		if (Object.prototype.hasOwnProperty.call(oclass, key)) {
			const stylesKid = styles[key];
			const oclassKid = oclass[key];

			if (
				typeof stylesKid === 'object' &&
				stylesKid !== null &&
				typeof oclassKid === 'object' &&
				oclassKid !== null
			) {
				css[key] = useUI(
					stylesKid as Record<string, unknown>,
					oclassKid as DeepStyles<typeof stylesKid>,
					override
				).css as T[Extract<keyof T, string>];
			} else if (typeof oclassKid === 'string' && classTypeKeys.has(key)) {
				css[key] = overrideMerge(stylesKid as string, oclassKid, override) as T[Extract<
					keyof T,
					string
				>];
			}
		}
	}

	return css;
}
