/** Imports */
import type { BaseProps } from '$lib/types/prop.js';
import type { Styles } from '$lib/types/ui.js';
import type { Snippet } from 'svelte';
import type { SvelteHTMLElements } from 'svelte/elements';

/** Styles */
const styles = {
	root: {}
} satisfies Styles;
export const calendarFooter = styles;

/** Props */
type Props = Omit<SvelteHTMLElements['footer'], 'class'>;
export interface CalendarFooterProps extends BaseProps<typeof calendarFooter>, Props {
	children?: Snippet;
}
