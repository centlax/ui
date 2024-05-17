import type { HTMLInputAttributes } from 'svelte/elements';
import type { Color, Size } from '$lib/types/index.js';

export interface Input {
	icon: string | { leading?: string; trailing?: string; loading?: string };
	loading: boolean;
	trailing: boolean;
	leading: boolean;
	delay: number;
	padded: boolean;
	size: Size;
	color: Color['fore'] | 'white' | 'gray';
	variant: 'outline' | 'none';
	type: HTMLInputAttributes['type'];
	hide: boolean;
	mask: boolean;
	value: HTMLInputAttributes['value'];
	el: HTMLInputElement | null;
	rounded: boolean;
}
