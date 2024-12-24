/** Imports */
import type { Item } from '$lib/types/item.js';
import type { BaseProps } from '$lib/types/prop.js';
import type { Styles } from '$lib/types/ui.js';
import type { Snippet } from 'svelte';
import type { SvelteHTMLElements } from 'svelte/elements';

/** Styles */
const styles = {
	root: {},
	west: {},
	center: {},
	east: {},
	south: {}
} satisfies Styles;
export const markHeader = styles;

/** Props */
type Props = Omit<SvelteHTMLElements['header'], 'class'> & BaseProps<typeof markHeader>;
export interface MarkHeaderProps extends Props {
	as?: keyof HTMLElementTagNameMap;
	items?: Item[];
	west?: Snippet;
	children?: Snippet;
	east?: Snippet;
	south?: Snippet;
}
