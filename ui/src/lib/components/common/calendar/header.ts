/** Imports */
import type { BaseProps } from '$lib/types/prop.js';
import type { Styles } from '$lib/types/ui.js';
import type { Snippet } from 'svelte';
import type { SvelteHTMLElements } from 'svelte/elements';

/** Styles */
const styles = {
	root: {
		flex: 'flex items-center justify-between px-1.5'
	},
	heading: {
		layout: 'relative',
		flex: 'text-center font-medium truncate mx-auto'
	},
	prev: {
		flex: 'flex'
	},
	popover: {
		flex: 'w-[10rem] rounded  bg-neutral-800/10 p-1.5 text-sm font-medium outline-none ring-1 ring-white/10 backdrop-blur-lg',
		trigger: {}
	},

	next: {
		flex: 'flex'
	}
} satisfies Styles;
export const calendarHeader = styles;

/** Props */
type Props = Omit<SvelteHTMLElements['header'], 'class'>;
export interface CalendarHeaderProps extends BaseProps<typeof calendarHeader>, Props {
	children?: Snippet;
}
