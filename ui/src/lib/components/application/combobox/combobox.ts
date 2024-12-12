/** Imports */
import type { BaseProps } from '$lib/types/prop.js';
import type { Styles } from '$lib/types/ui.js';
import type { Snippet } from 'svelte';
import type { SvelteHTMLElements } from 'svelte/elements';

/** Styles */
const styles = {
	root: {}
} satisfies Styles;
export const combobox = styles;

/** Props */
type Props = Omit<SvelteHTMLElements['div'], 'class'>;
export interface ComboboxProps extends BaseProps<typeof combobox>, Props {
	children?: Snippet;
}
