/* Imports */
import type { BaseProps } from '$lib/types/prop.js';
import type { Styles } from '$lib/types/ui.js';
import type { Snippet } from 'svelte';
import type { SvelteHTMLElements } from 'svelte/elements';

/** Styles */
const styles = {
	root: {}
} satisfies Styles;
export const tableCaption = styles;

/* Props */
type Props = Omit<SvelteHTMLElements['caption'], 'class'>;
export interface TableCaptionProps extends BaseProps<typeof tableCaption>, Props {
	text?: string;
}
