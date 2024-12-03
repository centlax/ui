/** Imports */
import type { Item } from '$lib/types/item.js';
import type { BaseProps } from '$lib/types/prop.js';
import type { Styles } from '$lib/types/ui.js';
import { statify } from '$lib/utils/wind.js';
import type { SvelteHTMLElements } from 'svelte/elements';

/** Styles */
const styles = {
	root: {
		layout: 'overflow-hidden',
		background: 'bg-white  dark:bg-neutral-900/90',
		border: 'rounded-xl border border-black/10  dark:border-white/10',
		effect: 'shadow-sm',
		filter: 'backdrop-blur-md',
		spacing: 'p-2.5'
	},
	trigger: {
		flex: 'flex items-center gap-x-1',
		typography: 'text-sm/6 font-semibold text-neutral-900 dark:text-white',
		chevron: {
			flex: 'flex-none',
			typography: 'text-neutral-500',
			sizing: 'size-5'
		}
	},
	content: {
		layout: 'group relative',
		flex: 'flex items-center gap-x-6',
		background: 'hover:bg-neutral-100 dark:hover:bg-neutral-800',
		border: 'rounded-[calc(theme(borderRadius.lg)-1px)]',
		spacing: 'p-2',
		typography: 'text-sm/6',
		west: {
			flex: 'flex size-10 flex-none items-center justify-center rounded-lg bg-neutral-100 ring-1 ring-black/10 group-hover:bg-white dark:bg-neutral-800 dark:ring-white/5 dark:group-hover:bg-neutral-900',
			icon: {
				sizing: 'size-6',
				typography: statify({
					default: 'text-neutral-600 dark:text-neutral-400',
					hover: 'group-hover:text-neutral-900 dark:group-hover:text-white'
				})
			}
		},
		east: {
			flex: 'flex-auto',
			typography: 'text-sm',
			title: {
				layout: 'block',
				typography: 'text-neutral-900 dark:text-white font-semibold'
			},
			description: {
				spacing: 'mt-1',
				typography: 'text-neutral-600 dark:text-neutral-400 leading-5'
			}
		}
	}
} satisfies Styles;
export const siteHeaderItem = styles;

/** Props */

type Props = Omit<SvelteHTMLElements['div'], 'class'>;
export interface SiteHeaderItemProps extends BaseProps<typeof siteHeaderItem>, Props {
	item: Item;
}
