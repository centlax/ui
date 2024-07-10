import { useConfig } from '../composables/use/config.ts';

const { colors } = useConfig();

/**
 *  Define interface for color with foreground color
 */

export interface Colors {
	mask: (typeof colors.mask)[number];
	base: (typeof colors.base)[number];
}

/**
 * Define size options
 */

export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
