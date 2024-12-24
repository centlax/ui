/** Imports */
import type { Item } from '$lib/types/item.js';
import type { BaseProps } from '$lib/types/prop.js';
import type { Styles } from '$lib/types/ui.js';
import type { SvelteHTMLElements } from 'svelte/elements';

/** Styles */
const styles = {
	root: {
		spacing: 'mt-12 lg:mt-8'
	},
	is: {
		active: {
			layout:
				'-ml-px block border-l border-current pl-4 font-semibold text-sky-500 dark:text-sky-400'
		},
		inactive: {
			layout:
				'-ml-px  block border-l border-transparent pl-4 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300'
		}
	}
} satisfies Styles;
export const markHeaderItem = styles;

/** Props */
type Props = Omit<SvelteHTMLElements['div'], 'class'> & BaseProps<typeof markHeaderItem>;
export interface MarkHeaderItemProps extends Props {
	item: Item;
	mode?: 'pine' | 'dual' /** 'pine | 'dual' | 'sake' */;
	dismiss?: MarkHeaderItemProps['onclick'];
	as?: keyof HTMLElementTagNameMap;
}
