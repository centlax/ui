/* Imports */
import type { BaseProps } from '$lib/types/prop.js';
import type { Styles } from '$lib/types/ui.js';
import type { SvelteHTMLElements } from 'svelte/elements';

/** Styles */
const styles = {
	root: {}
} satisfies Styles;
export const tableCol = styles;

/* Props */
type Props = Omit<SvelteHTMLElements['col'], 'class'>;
export interface TableColProps extends BaseProps<typeof tableCol>, Props {}
