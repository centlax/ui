/** Imports */
import type { Item } from '$lib/types/item.js';
import type { BaseProps } from '$lib/types/prop.js';
import type { Styles } from '$lib/types/ui.js';
import type { Snippet } from 'svelte';
import type { SvelteHTMLElements } from 'svelte/elements';

/** Styles */
const styles = {
	root: {
		sizing:
			'fixed inset-0 left-[max(0px,calc(50%-45rem))] right-auto top-[3.8125rem] z-20 hidden w-[19rem] overflow-y-auto pb-10 pl-8 pr-6 lg:block'
	}
} satisfies Styles;
export const markAside = styles;

/** Props */
type Props = Omit<SvelteHTMLElements['aside'], 'class'>;
export interface MarkAsideProps extends BaseProps<typeof markAside>, Props {
	items: Item[];
	north?: Snippet;
	children?: Snippet;
	south?: Snippet;
}
