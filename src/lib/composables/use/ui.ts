import { twJoin } from 'tailwind-merge';
import type { DeepStyles } from '$lib/types/index.js';

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
 * Merges two class strings based on the override flag.
 * @param {string} older - The original class string.
 * @param {string} newer - The new class string to be merged.
 * @param {boolean} override - Flag indicating whether to override or merge.
 * @returns {string} - The resulting class string.
 */
function merger(older: string, newer: string, override: boolean): string {
	return override ? newer : twJoin(older, newer);
}

/**
 * Merges the given styles and oclass objects.
 * @template T - The type of the styles object.
 * @param {T} styles - The base styles object.
 * @param {string | DeepStyle<T>} oclass - The additional styles object or a string class.
 * @returns {{ css: T; classer: string }} - The merged styles and class string.
 */
export function useUI<T extends Record<string, any>>(
	styles: T,
	oclass: string | DeepStyles<T>,
	override: boolean
): { css: T; classer: string } {
	let classer: string = '';
	let css: T = { ...styles };

	if (typeof oclass === 'string') {
		classer = oclass;
		return { css, classer };
	}

	for (const key in oclass) {
		if (oclass.hasOwnProperty(key)) {
			const stylesKid = styles[key];
			const oclassKid = oclass[key];

			if (typeof stylesKid === 'object' && typeof oclassKid === 'object') {
				css[key] = useUI(stylesKid, oclassKid as DeepStyles<typeof stylesKid>, override).css;
			} else if (typeof oclassKid === 'string' && classTypeKeys.has(key)) {
				css[key] = merger(stylesKid, oclassKid, override) as any;
			}
		}
	}

	return { css, classer };
}
