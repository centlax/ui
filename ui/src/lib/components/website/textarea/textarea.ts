/** Imports */
import type { BaseProps } from '$lib/types/prop.js';
import type { Styles } from '$lib/types/ui.js';
import type { Snippet } from 'svelte';
import type { SvelteHTMLElements } from 'svelte/elements';

const styles = {
	root: {}
} satisfies Styles;
export const textarea = styles;

/** Props */
type Props = Omit<SvelteHTMLElements['textarea'], 'class'>;
export interface TextareaProps extends BaseProps<typeof textarea>, Props {
	children?: Snippet;
}
