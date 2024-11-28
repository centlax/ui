/** Imports */
import type { Item } from '$lib/types/item.js';
import type { BaseProps } from '$lib/types/prop.js';
import type { Styles } from '$lib/types/ui.js';
import type { Snippet } from 'svelte';
import type { SvelteHTMLElements } from 'svelte/elements';

/** Styles */
const styles = {
	root: {
		layout: 'lg:pt-18 mx-auto mt-32 w-full bg-neutral-900 px-6 pb-8 pt-10 sm:mt-56 sm:pt-24 lg:px-8'
	},
	north: {},
	west: { flex: 'mb-16 w-[20rem] md:flex' },
	center: { flex: 'flex flex-grow flex-wrap justify-between gap-8' },
	east: {},
	south: {}
} satisfies Styles;
export const siteFooter = styles;

/** Props */
type Props = Omit<SvelteHTMLElements['footer'], 'class'>;
export interface SiteFootProps<T extends Item<T>> extends BaseProps<typeof siteFooter>, Props {
	items: T[];
	north?: Snippet;
	west?: Snippet;
	topp?: Snippet;
	children?: Snippet;
	trigger?: Snippet<[T]>;
	content?: Snippet<[T]>;
	east?: Snippet;
	south?: Snippet;
	notice?: string;
	logo?: Snippet;
}
