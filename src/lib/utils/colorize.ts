import { colors } from '../theme/colors.js';
import { hexToRgb } from '$lib/utils/index.js';
import type { Color } from '$lib/types/index.js';

export function colorize(color?: any) {
	const _color = color as Color['fore'];
	return `${Object.entries(colors[_color || 'primary'])
		.map(([key, value]) => `--color-${key}: ${hexToRgb(value)};`)
		.join(' ')}`;
}
