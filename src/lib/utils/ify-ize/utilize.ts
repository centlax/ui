// utilize.ts
import { colors } from '../../theme/colors.js';
import type { Color } from '$lib/types/index.js';
import { hexToRgb } from '$lib/helpers/index.js';

/**
 * Returns a string of tailwind color shades ( 50-950) for a given color.
 * @param color The color name or primary color.
 * @returns A string of css variables as shades of color ex: --color-500: 14 161 244;.
 * @example of return, given color of sky:
 * --color-50: 240 249 255; --color-100: 224 242 254; --color-200: 186 230 253;
 * --color-300: 125 211 252; --color-400: 56 189 248; --color-500: 14 165 233;
 * --color-600: 2 132 199; --color-700: 3 105 161; --color-800: 7 89 133;
 * --color-900: 12 74 110; --color-950: 8 47 73;
 */
export function colorize(color?: any): string {
	if (!color || typeof color !== 'string') {
		throw new Error('Invalid color input. Color must be a non-empty string.');
	}
	const shades = colors[(color as Color['fore']) || 'primary'];
	if (!shades) {
		throw new Error(`Color '${color}' not found in the colors object.`);
	}
	return Object.entries(shades)
		.map(([key, value]) => `--color-${key}: ${hexToRgb(value)};`)
		.join(' '); // Join the custom properties into a single string
}
