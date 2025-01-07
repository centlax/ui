/** Imports  */
import type { BaseProps } from '$lib/types/prop.js';
import type { Styles } from '$lib/types/ui.js';
import type { SvelteHTMLElements } from 'svelte/elements';

/** Styles */
const styles = {
	root: {
		spacing: 'space-y-2'
	}
} satisfies Styles;
export const fieldGroup$ = styles;

/** Props  */
type Props = Omit<SvelteHTMLElements['fieldset'], 'class'>;
export interface XFieldGroup extends BaseProps<typeof fieldGroup$>, Props {
	attrs?: object;
}
