import type { ClassType, Color, DeepStyle, Size } from '$lib/types/index.js';
import type { HTMLAnchorAttributes } from 'svelte/elements';
import { styles } from './button.styles.js';

type ButtonColor = keyof typeof styles.opt.variant.solid;

export interface Button {
	href: HTMLAnchorAttributes['href'];
	icon: string | { leading?: string; trailing?: string; loading?: string };
	label: string;
	truncate: boolean;
	loading: boolean;
	block: boolean;
	trailing: boolean;
	leading: boolean;
	square: boolean;
	padded: boolean;
	size: Size;
	rounded: boolean;
	variant: keyof typeof styles.opt.variant;
	class: string | DeepStyle<typeof styles>;
	color: Color['fore'] | Exclude<ButtonColor, 'mask'>;
	action: Function;
}
