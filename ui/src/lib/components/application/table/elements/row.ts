/* Imports */
import type { BaseProps } from '$lib/types/prop.js';
import type { Styles } from '$lib/types/ui.js';
import type { SvelteHTMLElements } from 'svelte/elements';

/** Styles */
const styles = {
	root: {}
} satisfies Styles;
export const tableRow = styles;

/* Props */
type Props = Omit<SvelteHTMLElements['tr'], 'class'>;
export interface TableRowProps extends BaseProps<typeof tableRow>, Props {}
