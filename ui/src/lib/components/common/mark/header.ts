/** Imports */
import type { Item } from '$lib/types/item.js';
import type { BaseProps } from '$lib/types/prop.js';
import type { Styles } from '$lib/types/ui.js';
import type { Snippet } from 'svelte';
import type { SvelteHTMLElements } from 'svelte/elements';

/** Styles */
const styles = {
	root: {
		spacing:
			'supports-backdrop-blur:bg-white/60 sticky top-0 z-40 w-full flex-none  backdrop-blur transition-colors duration-500 lg:z-50 lg:border-b lg:border-neutral-900/10 dark:border-neutral-50/[0.06] bg-transparent'
	}
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
}
