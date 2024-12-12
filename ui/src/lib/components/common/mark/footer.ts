/** Imports */
import type { Item } from '$lib/types/item.js';
import type { BaseProps } from '$lib/types/prop.js';
import type { Styles } from '$lib/types/ui.js';
import type { Snippet } from 'svelte';
import type { SvelteHTMLElements } from 'svelte/elements';

/** Styles */
const styles = {
	root: {
		spacing: 'py-5 text-sm leading-6 lg:pl-[22rem] lg:pr-[20rem]'
	}
} satisfies Styles;
export const markFooter = styles;

/** Props */
type Props = Omit<SvelteHTMLElements['footer'], 'class'> & BaseProps<typeof markFooter>;
export interface MarkFooterProps extends Props {
	as?: keyof HTMLElementTagNameMap;
	north?: Snippet;
	children?: Snippet;
	south?: Snippet;
}
