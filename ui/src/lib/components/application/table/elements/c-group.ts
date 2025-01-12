/* Imports */
import type { BaseProps } from '$lib/types/prop.js';
import type { Styles } from '$lib/types/ui.js';
import type { SvelteHTMLElements } from 'svelte/elements';

/** Styles */
const styles = {
	root: {}
} satisfies Styles;
export const tableGCol = styles;

/* Props */
type Props = Omit<SvelteHTMLElements['colgroup'], 'class'>;
export interface XTableGCol extends BaseProps<typeof tableGCol>, Props {
	attrs?: object;
}
