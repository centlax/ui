/** Imports */
import type { Item } from '$lib/types/item.js';
import type { BaseProps } from '$lib/types/prop.js';
import type { Styles } from '$lib/types/ui.js';
import type { Snippet } from 'svelte';
import type { SvelteHTMLElements } from 'svelte/elements';

/** Styles */
const styles = {
	root: {
		layout: 'flex items-center justify-between',
		typography: 'text-neutral-900 dark:text-white',
		sizing: 'w-full'
	},
	west: {
		flex: 'flex lg:flex-1'
	},
	center: {
		layout: 'hidden lg:flex lg:gap-x-12',
	},

	east: {
		layout: 'hidden lg:flex lg:flex-1 lg:justify-end'
	}
} satisfies Styles;
export const siteHeader = styles;

/** Props */

type Props = Omit<SvelteHTMLElements['header'], 'class'>;
export interface SiteHeaderProps extends BaseProps<typeof siteHeader>, Props {
	items: Item[];
	west?: Snippet;
	children?: Snippet;
	east?: Snippet;
	logo?: Snippet;
}
