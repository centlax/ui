/** Imports */
import type { BaseProps } from '$lib/types/prop.js';
import type { Styles } from '$lib/types/ui.js';
import type { Snippet } from 'svelte';
import type { SvelteHTMLElements } from 'svelte/elements';

/** Styles */
const styles = {
	root: {
		layout: '@container/header sticky top-0 z-40',
		flex: 'flex sm:gap-x-6 h-16 shrink-0 items-center gap-x-4 ',
		border: 'border-b border-black/10 dark:border-white/10',
		spacing: 'px-3 sm:px-4 lg:px-6 lg:pl-[--dash-width]',
		filter: 'backdrop-blur-md',
		effect: 'shadow-sm'
	},
	west: {
		flex: 'flex items-center'
	},
	center: {
		flex: 'flex flex-1 justify-between gap-x-4 self-stretch lg:gap-x-6'
	},
	east: {
		flex: 'flex items-center gap-x-4 lg:gap-x-6'
	}
} satisfies Styles;
export const dashHeader = styles;

/** Props */
type Props = Omit<SvelteHTMLElements['header'], 'class'>;
export interface DashHeaderProps extends BaseProps<typeof dashHeader>, Props {
	children?: Snippet;
	west?: Snippet;
	east?: Snippet;
}
