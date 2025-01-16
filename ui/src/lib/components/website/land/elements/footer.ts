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
		spacing: 'py-2 sm:py-4 md:py-6 lg:py-8'
	},
	box: {
		flex: 'flex',
		sizing: 'w-full'
	},

} satisfies Styles;
export const landFooter$ = styles;

/** Props */
type Props = Omit<SvelteHTMLElements['footer'], 'class'>;
export interface XLandFooter extends BaseProps<typeof landFooter$>, Props {
	items?: Item[];
	north?: Snippet;
	west?: Snippet;
	children?: Snippet;
	east?: Snippet;
	south?: Snippet;
}
