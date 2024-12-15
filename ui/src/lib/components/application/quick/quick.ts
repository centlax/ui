/* Imports */
import type { BaseProps } from '$lib/types/prop.js';
import type { Styles } from '$lib/types/ui.js';
import type { Snippet } from 'svelte';
import type { SvelteHTMLElements } from 'svelte/elements';

/** Styles */
const styles = {
	root: {
		layout: 'block'
	}
} satisfies Styles;
export const quick = styles;

/* Props */
type Props = Omit<SvelteHTMLElements['button'], 'class'>;
export interface QuickProps extends BaseProps<typeof quick>, Props {
	children?: Snippet;
	actions?: Snippet[];
}
