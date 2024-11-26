/** Imports */
import type { Item } from '$lib/types/item.js';
import type { BaseProps } from '$lib/types/prop.js';
import type { Styles } from '$lib/types/ui.js';
import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';

/** Styles */
// title: { typography: 'text-xs/6 font-semibold text-neutral-400'},
// 	<!-- Current: "bg-neutral-50 text-indigo-600", Default: "text-neutral-700 hover:text-indigo-600 hover:bg-neutral-50" -->
const styles = {
	root: {
		flex: '@container/aside flex grow flex-col gap-y-5 h-full overflow-y-auto px-6 py-4',
		border: 'ring-1 ring-black/10 dark:ring-white/10',
		background: 'bg-white dark:bg-neutral-900',
		layout: ' '
	},
	popover: {
		layout: 'z-50 -mt-2 ml-5 h-full w-[18rem] border-r border-black/10 bg-white p-2'
	},
	collapsible: {
		layout: 'mt-1 px-2'
	},
	trigger: {
		flex: 'flex w-full items-center gap-x-3 rounded-md py-1.5 px-2 text-left text-sm/6 font-semibold text-neutral-600 dark:text-neutral-400 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800',
		is: {
			icon: { layout: 'ml-auto size-3 shrink-0' },
			'icon-rotate': {
				layout: 'rotate-90 text-neutral-500'
			},
			'icon-default': {
				layout: 'text-neutral-400'
			}
		}
	},
	content: {
		flex: 'flex w-full items-center gap-x-3 rounded-md py-2 text-left text-sm/6 font-semibold text-neutral-700 hover:bg-neutral-50',
		opt: {
			pine: { flex: 'pl-9 pr-2' },
			dual: { flex: 'px-2' },
			sike: { flex: 'px-2' }
		}
	},
	div: {
		flex: 'flex  flex-1 flex-col justify-between gap-y-3',
		nav: {
			flex: 'flex flex-col gap-y-1',
			ul: {
				layout: '-mx-2 space-y-1',
				item: {
					flex: '',
					opt: {}
				}
			}
		}
	}
} satisfies Styles;
export const dashAside = styles;

/** Props */
type Props = Omit<HTMLAttributes<HTMLElement>, 'class' | 'title'>;

export interface DashAsideProps<T extends Item<T>> extends BaseProps<typeof dashAside>, Props {
	children?: Snippet;
	trigger?: Snippet<[T]>;
	content?: Snippet<[T]>;
	title?: Snippet<[T]>;
	north?: Snippet;
	south?: Snippet;
	items: T[];
	mode?: 'pine' | 'dual' | 'sake';
	divider?: boolean;
}
