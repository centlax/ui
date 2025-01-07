/** Imports */
import type { Item } from '$lib/types/item.js';
import type { BaseProps } from '$lib/types/prop.js';
import type { Styles } from '$lib/types/ui.js';
import type { SvelteHTMLElements } from 'svelte/elements';

/** Styles */
const styles = {
	root: {
		flex: 'flex flex-1 flex-col gap-y-7'
	},
	box: {
		flex: 'flex flex-1 flex-col gap-y-7 data-[last=true]:last:justify-end',
		title: {
			typography: 'font-semibold',
			spacing: 'mb-3'
		},
		list: {
			spacing: '-mx-2 space-y-1',
			item: {
				layout: 'group flex w-full gap-x-3 rounded-md',
				background: 'data-[selected=true]:bg-[--ui-bg-muted] hover:bg-[--ui-bg-muted]',
				typography: 'data-[selected=true]:text-[--ui-text] text-neutral-600 font-medium text-sm/6',
				spacing: 'px-2.5 py-1.5',
				icon: {
					flex: 'shrink-0',
					typography: 'text-black',
					background: 'data-[selected=true]:bg-[--ui-text]',
					sizing: 'size-6'
				},
				badge: {
					typography: 'whitespace-nowrap text-center  text-xs/5 font-medium text-gray-600',
					background: 'bg-[--ui-bg]',
					border: 'rounded-full ring-1 ring-inset ring-[--ui-border]',
					spacing: 'ml-auto px-2.5 py-0.5',
					sizing: 'w-9 min-w-max'
				}
			}
		}
	}
} satisfies Styles;
export const dashAItems$ = styles;

/** Props */
type Props = Omit<SvelteHTMLElements['nav'], 'class'> & BaseProps<typeof dashAItems$>;
export interface XDashAItems extends Props {
	data: Item<{ badge?: string; icon?: string }>[];
	attrs?: object;
}
