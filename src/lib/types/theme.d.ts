import { useConfig } from '$lib/composables/use/config.ts';

const { colors } = useConfig();

/**
 *  Define interface for color with foreground color
 */

export interface Colors {
	mask: (typeof colors.mask)[number];
	base: BaseColors;
}

/**
 * Define size options
 */

export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
