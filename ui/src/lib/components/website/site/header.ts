/** Imports */
import type { Item } from '$lib/types/item.js';
import type { BaseProps } from '$lib/types/prop.js';
import type { Styles } from '$lib/types/ui.js';
import type { Snippet } from 'svelte';
import type { SvelteHTMLElements } from 'svelte/elements';

/** Styles */
const styles = {
	/** absolute inset-x-0 top-0 z-50  for staying up */
	root: {
		layout: 'flex items-center justify-between',
		typography: 'text-neutral-900 dark:text-white'
	},
	west: {
		flex: 'flex flex-1 lg:flex-auto justify-between'
	},
	center: {
		layout: 'hidden lg:flex lg:gap-x-12',
		trigger: {},
		content: {}
	},

	east: {
		layout: 'hidden lg:flex lg:flex-1 lg:justify-end'
	}
} satisfies Styles;
export const siteHead = styles;

/** Props */

type Props = Omit<SvelteHTMLElements['header'], 'class'>;
export interface SiteHeadProps<T extends Item<T>> extends BaseProps<typeof siteHead>, Props {
	items: T[];
	west?: Snippet;
	children?: Snippet;
	east?: Snippet;
	trigger?: Snippet<[T]>;
	content?: Snippet<[T]>;
	logo?: Snippet;
}
