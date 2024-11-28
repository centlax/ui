/** Imports */
import type { BaseProps } from '$lib/types/prop.js';
import type { Styles } from '$lib/types/ui.js';
import type { Snippet } from 'svelte';
import type { HTMLInputAttributes } from 'svelte/elements';

/** Styles */
const styles = {
	root: {
		typography: 'text-color-500',
		sizing: 'size-5  ',
		border: 'rounded-full border-neutral-300 dark:border-neutral-700 focus:ring-color-500'
	}
} satisfies Styles;
export const checkbox = styles;

/** Props */
type Props = Omit<HTMLInputAttributes, 'class'>;
export interface CheckboxProps extends BaseProps<typeof checkbox>, Props {
	children?: Snippet;
	color?: string;
}
