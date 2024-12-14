/** Imports */
import type { Item } from '$lib/types/item.js';
import type { BaseProps } from '$lib/types/prop.js';
import type { Styles } from '$lib/types/ui.js';
import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';

/** Styles */
const styles = {
	root: {
		typography:
			'mx-auto max-w-xl transform divide-y divide-gray-100 overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black/5 transition-all'
	}
} satisfies Styles;
export const menuCard = styles;

/** Props */
type Props = Omit<HTMLAttributes<HTMLElement>, 'class'>;
export interface MenuCardProps extends BaseProps<typeof menuCard>, Props {
	children?: Snippet;
	as?: keyof HTMLElementTagNameMap;
}
