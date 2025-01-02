/** Imports */
import type { Styles } from '$lib/types/ui.js';
import type { Snippet } from 'svelte';
import type { SvelteHTMLElements } from 'svelte/elements';

/** Styles */
const styles = {
	root: {
		layout: 'relative z-10'
	},
	trigger: {},
	arrow: {}
} satisfies Styles;
export const tooltip = styles;

/** Props */

type Props = SvelteHTMLElements['div'];
export interface TooltipContentProps extends Props {
	children?: Snippet;
	content?: Snippet;
}
