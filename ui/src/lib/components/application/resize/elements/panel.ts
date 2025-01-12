/** Imports */
import type { BaseProps } from '$lib/types/prop.js';
import type { Styles } from '$lib/types/ui.js';
import type { PanePropsWithoutHTML } from 'paneforge';
import type { SvelteHTMLElements } from 'svelte/elements';

/** Styles */
const styles = {
	root: {}
} satisfies Styles;
export const resizePanel$ = styles;

/** Props */
type Props = Omit<SvelteHTMLElements['div'], 'class'> & BaseProps<typeof resizePanel$>;
export interface XResizePanel extends Props, PanePropsWithoutHTML {
	id?: string;
}
