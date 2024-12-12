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
	},
	links: {
		is: {
			active: {
				layout:
					'group mb-4 flex items-center font-semibold text-sky-500 lg:text-sm lg:leading-6 dark:text-sky-400'
			},
			inactive: {
				layout:
					'group mb-4 flex items-center font-medium text-neutral-700 hover:text-neutral-900 lg:text-sm lg:leading-6 dark:text-neutral-400 dark:hover:text-neutral-300'
			}
		},
		icon: {
			is: {
				active: {
					layout:
						'fill-indigo-300 group-hover:fill-indigo-400 dark:fill-neutral-500 dark:group-hover:fill-indigo-300'
				},
				inactive: {
					layout:
						'fill-neutral-300 group-hover:fill-indigo-400 dark:fill-neutral-500 dark:group-hover:fill-indigo-300'
				}
			}
		}
	}
} satisfies Styles;
export const markAside = styles;

/** Props */
type Props = Omit<SvelteHTMLElements['aside'], 'class'>;
export interface MarkAsideProps extends BaseProps<typeof markAside>, Props {
	items: Item[];
	'top-items': Item[];
	north?: Snippet;
	children?: Snippet;
	south?: Snippet;
}
