/** Imports */
import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';

/** Styles */
const styles = {
	root: {
		flex: 'relative mt-2 rounded-md shadow-sm'
	}
};
export const inputGroup = styles;

/** Props */
type Props = HTMLAttributes<HTMLDivElement>;
export interface InputGroupProps extends Props {
	children: Snippet;
}
