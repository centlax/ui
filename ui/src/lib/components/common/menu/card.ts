/** Imports */
import type { Item } from '$lib/types/item.js';
import type { BaseProps } from '$lib/types/prop.js';
import type { Styles } from '$lib/types/ui.js';
import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';

/** Styles */
const styles = {
	root: {
		typography: 'text-color-500',
		sizing: 'size-5',
		border: 'rounded-full border-gray-300 dark:border-gray-700 focus:ring-color-600'
	}
} satisfies Styles;
export const menuCard = styles;

/** Props */
type Props = Omit<HTMLAttributes<HTMLElement>, 'class'>;
export interface MenuCardProps extends BaseProps<typeof menuCard>, Props {
	children?: Snippet;
	as?: keyof HTMLElementTagNameMap;
}
