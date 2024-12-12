/** Imports */
import type { BaseProps } from '$lib/types/prop.js';
import type { Styles } from '$lib/types/ui.js';
import type { Snippet } from 'svelte';
import type { SvelteHTMLElements } from 'svelte/elements';

/** Styles */
const styles = {
	root: {}
} satisfies Styles;
export const optionGroup = styles;

/** Props */
type Props = Omit<SvelteHTMLElements['optgroup'], 'class'>;
export interface OptionGroupProps extends BaseProps<typeof optionGroup>, Props {
	children?: Snippet;
	id: string;
}
