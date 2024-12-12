/** Imports */
import type { BaseProps } from '$lib/types/prop.js';
import type { Styles } from '$lib/types/ui.js';
import type { Snippet } from 'svelte';
import type { SvelteHTMLElements } from 'svelte/elements';

/** Styles */
const styles = {
	root: {}
} satisfies Styles;
export const command = styles;

/** Props */
type Props = Omit<SvelteHTMLElements['div'], 'class'>;
export interface CommandProps extends BaseProps<typeof command>, Props {
	children?: Snippet;
	preview?: Snippet<[string]>;
}
