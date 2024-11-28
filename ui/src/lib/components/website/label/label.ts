/** Imports */
import type { BaseProps } from '$lib/types/prop.js';
import type { Styles } from '$lib/types/ui.js';
import type { Snippet } from 'svelte';
import type { HTMLLabelAttributes } from 'svelte/elements';

/** Styles */
const styles = {
	root: {
		flex: 'flex justify-between',
		typography: 'block text-sm/6 font-medium text-neutral-900 dark:bg-white'
	}
} satisfies Styles;
export const label = styles;

/** Props */
type Props = Omit<HTMLLabelAttributes, 'class'>;
export interface LabelProps extends BaseProps<typeof label>, Props {
	children?: Snippet;
}
