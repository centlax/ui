/** Imports */
import type { Item } from '$lib/types/item.js';
import type { BaseProps } from '$lib/types/prop.js';
import type { Styles } from '$lib/types/ui.js';
import { statify } from '$lib/utils/wind.js';
import type { SvelteHTMLElements } from 'svelte/elements';

/** Styles */
const styles = {
	root: {
		spacing: '-mx-2 space-y-2'
	},
	opt: {
		pine: {
			spacing: 'mt-2 px-2'
		},
		dual: {
			flex: 'flex flex-col',
			background: 'bg-white dark:bg-neutral-900/80',
			border: 'border-r border-black/10 dark:border-white/10',
			filter: 'backdrop-blur-lg',
			sizing: 'h-full w-[--dash-width]',
			spacing: 'ml-3 p-4'
		},
		sake: {}
	},
	trigger: {
		flex: 'flex items-center w-full gap-x-3',
		typography: 'font-semibold text-left text-sm/6 ',
		border: 'rounded-md',
		spacing: 'py-1.5 pr-2 pl-2 data-[subitem=true]:pl-9',
		is: {
			active: {
				typography: 'text-neutral-900  dark:text-white',
				background: 'bg-neutral-50 dark:bg-neutral-800',
				border: 'ring-1 ring-black/[0.025] dark:ring-white/[0.085]',
				effect: 'shadow-sm'
			},
			inactive: {
				typography: statify({
					default: 'text-neutral-600 dark:text-neutral-400',
					hover: 'hover:text-neutral-900 dark:hover:text-white'
				}),
				background: 'hover:bg-neutral-50 dark:hover:bg-neutral-800',
				effect: 'hover:shadow-sm'
			}
		},
		icon: {
			flex: 'shrink-0',
			sizing: 'size-5',
			typography: 'text-inherit'
		},
		chevron: {
			flex: 'shrink-0',
			sizing: 'size-5',
			spacing: 'ml-auto',
			transform: 'data-[expand=true]:rotate-90 transition-transform duration-[150ms] ease-in-out',
			typography: 'text-inherit'
		}
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
