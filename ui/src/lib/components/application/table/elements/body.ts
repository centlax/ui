/* Imports */
import type { BaseProps } from '$lib/types/prop.js';
import type { Styles } from '$lib/types/ui.js';
import type { SvelteHTMLElements } from 'svelte/elements';

/** Styles */
const styles = {
	root: {}
} satisfies Styles;
export const tableBody = styles;

/* Props */
type Props = Omit<SvelteHTMLElements['tbody'], 'class'>;
export interface TableBodyProps extends BaseProps<typeof tableBody>, Props {}
