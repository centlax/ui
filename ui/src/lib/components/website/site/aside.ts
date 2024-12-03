/** Imports */
import type { Item } from '$lib/types/item.js';
import type { BaseProps } from '$lib/types/prop.js';
import type { Styles } from '$lib/types/ui.js';
import type { Snippet } from 'svelte';
import type { SvelteHTMLElements } from 'svelte/elements';

/** Styles */
const styles = {
	root: {
		sizing: 'h-full sm:ring-1 sm:ring-black/10 dark:sm:ring-white/10',
		background: 'bg-white dark:bg-neutral-900',
		spacing: 'px-6 py-6'
	},

	north: {
		layout: 'flex items-center justify-between'
	},
	center: {
		spacing: 'mt-6 flow-root space-y-2'
	},
	south: {}
} satisfies Styles;
export const siteAside = styles;

/** Props */
type Props = Omit<SvelteHTMLElements['aside'], 'class'>;
export interface SiteAsideProps extends BaseProps<typeof siteAside>, Props {
	items: Item[];
	north?: Snippet;
	children?: Snippet;
	south?: Snippet;
}
