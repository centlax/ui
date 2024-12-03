import type { State, Utility } from '../types/ui.js';
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';
import type { ClassValue } from 'clsx';

/**
 * Combines multiple class lists into a single Tailwind-compatible class string.
 *
 * This function uses `clsx` for conditional class merging and `twMerge` to resolve Tailwind utility conflicts.
 *
 * @param inputs - The class lists to merge.
 * @returns A single merged class string.
 */
export function cn(...inputs: ClassValue[]): string {
	return twMerge(clsx(inputs));
}

/**
 * Converts multiple objects into a concatenated string of their non-object property values.
 *
 * Filters out nested objects and retains only non-object values, which are joined into a single string.
 *
 * @param objs - The objects to process.
 * @returns A string representation of the non-object property values.
 */
export function st(...objs: Utility[]): string {
	return objs
		.flatMap((obj) =>
			typeof obj === 'object' ? Object.values(obj).filter((value) => typeof value !== 'object') : []
		)
		.join(' ');
}

/**
 * Converts a state object into a space-separated string of its non-object property values.
 *
 * This function is similar to `st` but is specialized for `State` types.
 *
 * @param state - The state object to process.
 * @returns A string representation of the non-object property values, or an empty string if the input is invalid.
 */
export function statify(state: State): string {
	return state && typeof state === 'object'
		? Object.values(state)
				.filter((value) => typeof value !== 'object')
				.join(' ')
		: '';
}

/**
 * Generates a string of CSS custom properties for Tailwind color shades (50-950) of a given color.
 *
 * Each custom property follows the format `--color-{shade}: var(--color-{color}-{shade});`.
 *
 * @param color - The base color name (default is 'primary').
 * @returns A string of CSS variable definitions for the specified color.
 *
 * @example
 * // Returns CSS variables for the color "sky"
 * colorize('sky');
 * // Output: "--color-50: var(--color-sky-50); --color-100: var(--color-sky-100); ..."
 */
export function co(color: unknown = 'primary'): string {
	const shades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];
	return shades.map((shade) => `--color-${shade}: var(--color-${color}-${shade});`).join(' ');
}
