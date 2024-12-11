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
export const markTable = styles;

/** Props */
type Props = Omit<SvelteHTMLElements['aside'], 'class'> & BaseProps<typeof markTable>;
export interface MarkTableProps extends Props {
	item: Item;
	mode?: 'pine' | 'dual' /** 'pine | 'dual' | 'sake' */;
	as?: keyof HTMLElementTagNameMap;
}
