/** Imports */
import type { Item } from '$lib/types/item.js';
import type { BaseProps } from '$lib/types/prop.js';
import type { Styles } from '$lib/types/ui.js';
import type { SvelteHTMLElements } from 'svelte/elements';

/** Styles */
const styles = {
	root: {
		spacing: '-mx-2 space-y-2'
	}
} satisfies Styles;
export const markTableItem = styles;

/** Props */
type Props = Omit<SvelteHTMLElements['main'], 'class'> & BaseProps<typeof markTableItem>;
export interface MarkTableItemProps extends Props {
	item: Item;
	as?: keyof HTMLElementTagNameMap;
}
