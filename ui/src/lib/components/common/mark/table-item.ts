/** Imports */
import type { Item } from '$lib/types/item.js';
import type { BaseProps } from '$lib/types/prop.js';
import type { Styles } from '$lib/types/ui.js';
import type { TransformKeysToKebab } from '$lib/types/utils.js';
import type { TableOfContentsItem } from '@melt-ui/svelte';
import type { SvelteHTMLElements } from 'svelte/elements';

/** Styles */
const styles = {
	root: {
		spacing: '-mx-2 space-y-2'
	}
} satisfies Styles;
export const markTableItem = styles;

/** Props */
type Props = Omit<SvelteHTMLElements['main'], 'class'> &
	BaseProps<typeof markTableItem> &
	TransformKeysToKebab<TableOfContentsItem>;
export interface MarkTableItemProps extends Props {
	item: Item;
	as?: keyof HTMLElementTagNameMap;
}
