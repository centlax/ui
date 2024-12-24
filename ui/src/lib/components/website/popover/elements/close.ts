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
export const siteAsideItem = styles;

/** Props */
type Props = Omit<SvelteHTMLElements['aside'], 'class'> & BaseProps<typeof siteAsideItem>;
export interface SiteAsideItemProps extends Props {
	item: Item;
	mode?: 'pine' | 'dual' /** 'pine | 'dual' | 'sake' */;
	dismiss?: SiteAsideItemProps['onclick'];
}
