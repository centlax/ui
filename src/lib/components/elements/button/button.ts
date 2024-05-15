import type { Size } from '$lib/types/index.js';
import type { HTMLAnchorAttributes } from 'svelte/elements';
import type { SafelistColors } from '$lib/theme/safelist.js';
import { css } from './button.styles.js';
export interface Button {
	href?: HTMLAnchorAttributes['href'];
	icon?: string | { leading?: string; trailing?: string; loading?: string };
	label?: string;
	truncate?: boolean;
	loading?: boolean;
	block?: boolean;
	trailing?: boolean;
	leading?: boolean;
	square?: boolean;
	padded?: boolean;
	size?: Size;
	rounded?: boolean;
	variant?: keyof typeof css.variant.mask;
	color?: SafelistColors | 'white' | 'gray' | 'black';
	action?: Function;
}
