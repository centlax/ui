/** Imports */
import type { Item } from '$lib/types/item.js';
import type { BaseProps } from '$lib/types/prop.js';
import type { Styles } from '$lib/types/ui.js';
import type { Snippet } from 'svelte';
import type { SvelteHTMLElements } from 'svelte/elements';
import type { DashAsideItemProps } from './aside-item.js';

/** Styles */
const styles = {
	root: {
		layout: '@container/aside overflow-y-auto overflow-x-hidden',
		flex: 'flex h-full grow flex-col gap-y-5',
		border: 'ring-1 ring-black/10 dark:ring-white/10',
		background: 'bg-white dark:bg-neutral-900',
		spacing: 'px-6 pb-4'
	},
	
	north: {
		flex: 'flex shrink-0 items-center',
		sizing: 'h-[--dash-height]'
	},
	center: {
		flex: 'flex flex-1 flex-col gap-y-7 last:justify-end ',
		item: {
			spacing: 'last:mt-auto',
			title: {
				typography: 'text-xs/6 font-semibold text-neutral-400'
			},
			items: {
				grid: 'grid grid-cols-1 gap-y-1.5',
				spacing: '-mx-2'
			}
		}
	},
	south: {}
} satisfies Styles;
export const dashAside = styles;

/** Props */
type Props = Omit<SvelteHTMLElements['aside'], 'class' | 'title'>;

export interface DashAsideProps extends BaseProps<typeof dashAside>, Props {
	children?: Snippet;
	north?: Snippet;
	south?: Snippet;
	items: Item[];
	mode?: DashAsideItemProps['mode'];
	'item-dismiss'?: DashAsideProps['onclick'];
	'show-title'?: boolean;
}
