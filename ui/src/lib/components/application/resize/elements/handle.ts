/** Imports */
import type { BaseProps } from '$lib/types/prop.js';
import type { Styles } from '$lib/types/ui.js';
import type { PaneResizerPropsWithoutHTML } from 'paneforge';
import type { SvelteHTMLElements } from 'svelte/elements';

/** Styles */
const styles = {
	root: {}
} satisfies Styles;
export const resizeHandle = styles;

/** Props */
type Props = Omit<SvelteHTMLElements['div'], 'class'> & BaseProps<typeof resizeHandle>;
export interface ResizeHandleProps extends Props, PaneResizerPropsWithoutHTML {
	id?: string;
}
