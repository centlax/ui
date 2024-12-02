import type { Item } from '$lib/types/item.js';
import type { BaseProps } from '$lib/types/prop.js';
import type { Styles } from '$lib/types/ui.js';
import { statify } from '$lib/utils/wind.js';
import type { SvelteHTMLElements } from 'svelte/elements';

const styles = {
	root: {
		layout: 'relative',
		flex: 'flex flex-col'
	},
	trigger: {
		typography: 'text-sm/6 font-semibold text-neutral-900 dark:text-white'
	},
	content: {
		spacing: 'mt-6 space-y-4',
		flex: 'flex flex-col',
		item: {
			typography: statify({
				default: 'text-sm/6 text-neutral-600 dark:text-neutral-400 ',
				hover: 'hover:text-neutral-900 dark:hover:text-white'
			})
		}
	}
} satisfies Styles;
export const siteFooterItem = styles;

type Props = Omit<SvelteHTMLElements['aside'], 'class'>;
export interface SiteFooterItemProps extends BaseProps<typeof siteFooterItem>, Props {
	item: Item;
}
