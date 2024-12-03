/** Imports */
import type { Item } from '$lib/types/item.js';
import type { BaseProps } from '$lib/types/prop.js';
import type { Styles } from '$lib/types/ui.js';
import type { SvelteHTMLElements } from 'svelte/elements';

/** Styles */
const styles = {
	root: {
		spacing:
			'mt-3 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm'
	},
	trigger: {
		flex: 'relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none aria-expanded:ring-2 aria-expanded:ring-primary-600 sm:text-sm/6'
	},
	option: {
		flex: 'elative cursor-default select-none mx-1 rounded py-2 pl-3 pr-9 text-gray-900 hover:bg-primary-600 hover:text-white'
	}
} satisfies Styles;
export const selectMenu = styles;

/** Props */
type Props = Omit<SvelteHTMLElements['aside'], 'class'> & BaseProps<typeof selectMenu>;
export interface SelectMenuProps extends Props {
	items: Item[];
}
