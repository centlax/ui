/** Imports */
import type { Item } from '$lib/types/item.js';
import type { BaseProps } from '$lib/types/prop.js';
import type { Styles } from '$lib/types/ui.js';
import type { SvelteHTMLElements } from 'svelte/elements';

/** Styles */
const styles = {
	root: {
		layout: 'divide-y divide-neutral-500/10',
		sizing: 'h-full sm:ring-1 sm:ring-black/10 dark:sm:ring-white/10',
		background: 'bg-white dark:bg-neutral-900',
		spacing: 'px-6 py-6'
	}
} satisfies Styles;
export const siteAsideItem = styles;

/** Props */
type Props = Omit<SvelteHTMLElements['div'], 'class'>;
export interface SiteAsideItemProps extends BaseProps<typeof siteAsideItem>, Props {
	item: Item;
}
