/** Imports */
import type { Item } from '$lib/types/item.js';
import type { BaseProps } from '$lib/types/prop.js';
import type { Styles } from '$lib/types/ui.js';
import type { Snippet } from 'svelte';
import type { SvelteHTMLElements } from 'svelte/elements';

/** Styles */
const styles = {
	root: {
		layout: 'relative',
		background: 'bg-white/90 dark:bg-neutral-900/90',
		border: 'border-t border-black/10 dark:border-white/10',
		spacing: 'py-10'
	},
	north: {
		flex: 'flex',
		sizing: 'w-full'
	},
	contain: {
		flex: 'flex justify-between gap-5',
		west: {},
		center: {
			flex: 'flex flex-grow flex-wrap justify-start gap-10 sm:gap-20',
			sizing: 'w-fit'
		},
		east: {}
	},
	south: {
		grid: 'grid grid-cols-1',
		border: 'divide-y divide-black/10 dark:divide-white/10'
	}
} satisfies Styles;
export const siteFooter = styles;

/** Props */
type Props = Omit<SvelteHTMLElements['footer'], 'class'>;
export interface SiteFootProps extends BaseProps<typeof siteFooter>, Props {
	items: Item[];
	north?: Snippet;
	west?: Snippet;
	children?: Snippet;
	east?: Snippet;
	south?: Snippet;
}
