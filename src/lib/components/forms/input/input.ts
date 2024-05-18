import type { HTMLInputAttributes } from 'svelte/elements';
import type { Color, DeepPartial, Size } from '$lib/types/index.js';
import { styles } from './input.styles.js';

type InputColor = keyof typeof styles.variant.solid;
export interface Input {
	icon: string | { leading?: string; trailing?: string; loading?: string };
	loading: boolean;
	trailing: boolean;
	leading: boolean;
	delay: number;
	padded: boolean;
	size: Size;
	type: HTMLInputAttributes['type'];
	hide: boolean;
	mask: boolean;
	value: HTMLInputAttributes['value'];
	el: HTMLInputElement | null;
	rounded: boolean;
	color: Color['fore'] | Exclude<InputColor, 'mask'>;
	variant: keyof typeof styles.variant;
	class: string | DeepPartial<typeof styles>;
}
