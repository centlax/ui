/** Imports */
import type { BaseProps } from '$lib/types/prop.js';
import type { Styles } from '$lib/types/ui.js';
import type { Snippet } from 'svelte';
import type { SvelteHTMLElements } from 'svelte/elements';

/** Styles */
const styles = {
	root: {
		typography: 'text-xs font-semibold text-neutral-500',
		spacing: 'my-3 px-3'
	}
} satisfies Styles;
export const optionTitle = styles;

/** Props */
type Props = Omit<SvelteHTMLElements['h3'], 'class'>;
export interface OptionTitleProps extends BaseProps<typeof optionTitle>, Props {
	children?: Snippet;
	text?: string;
}
