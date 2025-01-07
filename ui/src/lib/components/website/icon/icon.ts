/* Imports */
import type { BaseProps } from '$lib/types/prop.js';
import type { Styles } from '$lib/types/ui.js';
import type { SvelteHTMLElements } from 'svelte/elements';

/** Styles */
const styles = {
	root: {
		layout: 'block'
	}
} satisfies Styles;
export const icon$ = styles;

/* Props */
type Props = Omit<SvelteHTMLElements['span'], 'class'>;
export interface XIcon extends BaseProps<typeof icon$>, Props {
	name: string;
	attrs?: object
}
