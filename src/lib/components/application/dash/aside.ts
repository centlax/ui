/** Imports */
import type { Item } from '$lib/types/item.js';
import type { BaseProps } from '$lib/types/prop.js';
import type { Styles } from '$lib/types/ui.js';
import { statify } from '$lib/utils/wind.js';
import type { Snippet } from 'svelte';
import type { SvelteHTMLElements } from 'svelte/elements';

/** Styles */
const styles = {
	root: {
		layout: '@container/aside overflow-y-auto',
		flex: 'flex h-full grow flex-col gap-y-5',
		border: 'ring-1 ring-black/10 dark:ring-white/10',
		background: 'bg-white dark:bg-neutral-900',
		spacing: 'px-6 pb-4 '
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
			ul: {
				spacing: '-mx-2 space-y-1',
				li: {
					a: {
						flex: 'group flex gap-x-3 ',
						typography: 'font-semibold text-sm/6 ',
						border: 'rounded-md',
						spacing: 'py-1.5 px-2',
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
								background: 'hover:bg-neutral-50 dark:hover:bg-neutral-800'
							}
						}
					},
					icon: {
						flex: 'shrink-0',
						sizing: 'size-6 '
					}
				}
			}
		}
	},
	south: {}
} satisfies Styles;
export const dashAside = styles;

/** Props */
type Props = Omit<SvelteHTMLElements['aside'], 'class' | 'title'>;

export interface DashAsideProps<T extends Item<T>> extends BaseProps<typeof dashAside>, Props {
	children?: Snippet;
	north?: Snippet;
	south?: Snippet;
	items: T[];
	'item-dismiss'?: DashAsideProps<T>['onclick'];
	mode?: 'pine' /** | 'dual' | 'sake' */;
}
