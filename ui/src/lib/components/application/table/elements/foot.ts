/* Imports */
import type { BaseProps } from '$lib/types/prop.js';
import type { Styles } from '$lib/types/ui.js';
import type { Snippet } from 'svelte';
import type { SvelteHTMLElements } from 'svelte/elements';

/** Styles */
const styles = {
	root: {}
} satisfies Styles;
export const tableFoot = styles;

/* Props */
type Props = Omit<SvelteHTMLElements['tfoot'], 'class'>;
export interface TableFootProps extends BaseProps<typeof tableFoot>, Props {
	children?: Snippet;
	actions?: Snippet[];
}
