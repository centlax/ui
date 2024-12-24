/* Imports */
import type { BaseProps } from '$lib/types/prop.js';
import type { Styles } from '$lib/types/ui.js';
import type { Snippet } from 'svelte';
import type { SvelteHTMLElements } from 'svelte/elements';

/** Styles */
const styles = {
	root: {}
} satisfies Styles;
export const tableDCell = styles;

/* Props */
type Props = Omit<SvelteHTMLElements['td'], 'class'>;
export interface TableDCellProps extends BaseProps<typeof tableDCell>, Props {
	text?: string;
}
