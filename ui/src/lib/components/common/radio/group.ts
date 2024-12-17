/** Imports */
import type { BaseProps } from '$lib/types/prop.js';
import type { Styles } from '$lib/types/ui.js';
import type { Snippet } from 'svelte';
import type { SvelteHTMLElements } from 'svelte/elements';

/** Styles */
const styles = {
	root: {
		layout: 'flex flex-col gap-3 data-[orientation=horizontal]:flex-row'
	}
} satisfies Styles;
export const radioGroup = styles;

/** Props */
type Props = Omit<SvelteHTMLElements['div'], 'class'>;
export interface RadioGroupProps extends BaseProps<typeof radioGroup>, Props {
	children?: Snippet;
}
