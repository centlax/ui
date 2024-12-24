/** Imports */
import type { Item } from '$lib/types/item.js';
import type { BaseProps } from '$lib/types/prop.js';
import type { Styles } from '$lib/types/ui.js';
import type { Snippet } from 'svelte';
import type { SvelteHTMLElements } from 'svelte/elements';

/** Styles */
const styles = {
	root: {
		spacing: 'antialiased text-neutral-500 dark:text-neutral-400 bg-white dark:bg-neutral-900'
	},
	header: {
		layout:
			'supports-backdrop-blur:bg-white/60 sticky top-0 z-40 w-full flex-none bg-white/95 backdrop-blur transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.06] dark:bg-transparent'
	},
	aside: {
		layout:
			'fixed inset-0 left-[max(0px,calc(50%-45rem))] right-auto top-[3.8125rem] z-20 hidden w-[19rem] overflow-y-auto pb-10 pl-8 pr-6 lg:block'
	},
	main: {
		layout: 'lg:pl-[19.5rem]'
	},
	table: {},
	footer: {}
} satisfies Styles;
export const markLayout = styles;

/** Props */
type Props = Omit<SvelteHTMLElements['div'], 'class'> & BaseProps<typeof markLayout>;
export interface MarkLayoutProps extends Props {
	as?: keyof HTMLElementTagNameMap;
	children?: Snippet;
}
