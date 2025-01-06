import type { Item } from '$lib/types/item.js';
import type { SvelteHTMLElements } from 'svelte/elements';

type Props = Omit<SvelteHTMLElements['nav'], 'class'>;

export interface XSiteHItems extends Props {
	data: Item<{ icon?: string }>[];
}
