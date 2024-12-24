/** Imports */
import type { BaseProps } from '$lib/types/prop.js';
import type { Styles } from '$lib/types/ui.js';
import type { PaneGroupPropsWithoutHTML } from 'paneforge';
import type { SvelteHTMLElements } from 'svelte/elements';

/** Styles */
const styles = {
	root: {}
} satisfies Styles;
export const resizeLayout = styles;

/** Props */
type Props = Omit<SvelteHTMLElements['div'], 'class'> & BaseProps<typeof resizeLayout>;
export interface ResizeLayoutProps extends Props, PaneGroupPropsWithoutHTML {
	id?: string;
}
