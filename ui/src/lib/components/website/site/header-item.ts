/** Imports */
import type { Item } from '$lib/types/item.js';
import type { BaseProps } from '$lib/types/prop.js';
import type { Styles } from '$lib/types/ui.js';
import type { SvelteHTMLElements } from 'svelte/elements';

/** Styles */
const styles = {
	root: {
		layout: 'flex items-center justify-between',
		typography: 'text-neutral-900 dark:text-white'
	}
} satisfies Styles;
export const siteHeaderItem = styles;

/** Props */

type Props = Omit<SvelteHTMLElements['div'], 'class'>;
export interface SiteHeaderItemProps extends BaseProps<typeof siteHeaderItem>, Props {
	item: Item;
}
