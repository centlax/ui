/** Imports */
import type { BaseProps } from '$lib/types/prop.js';
import type { Styles } from '$lib/types/ui.js';
import type { Snippet } from 'svelte';
import type { HTMLLabelAttributes } from 'svelte/elements';

/** Styles */
const styles = {
	root: {
		layout: 'block',
		typography: 'text-sm/6 font-medium text-neutral-900 dark:text-white'
	}
} satisfies Styles;
export const label = styles;

/** Props */
type Props = Omit<HTMLLabelAttributes, 'class'>;
export interface LabelProps extends BaseProps<typeof label>, Props {
	children?: Snippet;
	text?: string;
}
