/* Imports */
import type { BaseProps } from '$lib/types/prop.js';
import type { Styles } from '$lib/types/ui.js';
import type { SvelteHTMLElements } from 'svelte/elements';

/** Styles */
const styles = {
	root: {}
} satisfies Styles;
export const tableHead = styles;

/* Props */
type Props = Omit<SvelteHTMLElements['thead'], 'class'>;
export interface TableHeadProps extends BaseProps<typeof tableHead>, Props {}
