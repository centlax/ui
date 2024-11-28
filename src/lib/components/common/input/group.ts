/** Imports */
import type { BaseProps } from '$lib/types/prop.js';
import type { Styles } from '$lib/types/ui.js';
import type { Snippet } from 'svelte';
import type { SvelteHTMLElements } from 'svelte/elements';
import clsx from 'clsx';

/** Styles */
//    disabled:ring-gray-200
const styles = {
	root: {
		layout: clsx(
			'relative isolate block',
			'[&_input]:has-[[data-ui=icon]:first-child]:pl-10 [&_input]:has-[[data-ui=icon]:last-child]:pr-10 '
		)
	}
} satisfies Styles;
export const inputGroup = styles;

/** Props */
type Props = Omit<SvelteHTMLElements['div'], 'class'>;
export interface InputGroupProps extends BaseProps<typeof inputGroup>, Props {
	children?: Snippet;
}
