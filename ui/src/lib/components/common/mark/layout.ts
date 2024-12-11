/** Imports */
import type { Item } from '$lib/types/item.js';
import type { BaseProps } from '$lib/types/prop.js';
import type { Styles } from '$lib/types/ui.js';
import type { Snippet } from 'svelte';
import type { SvelteHTMLElements } from 'svelte/elements';

/** Styles */
const styles = {
	root: {
		spacing: 'antialiased text-neutral-500 dark:text-neutral-400 bg-white dark:bg-neutral-900'
	}
} satisfies Styles;
export const markLayout = styles;

/** Props */
type Props = Omit<SvelteHTMLElements['div'], 'class'> & BaseProps<typeof markLayout>;
export interface MarkLayoutProps extends Props {
	as?: keyof HTMLElementTagNameMap;
	children?: Snippet;
}
