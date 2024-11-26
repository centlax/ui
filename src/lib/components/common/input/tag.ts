/** Imports */
import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';

/** Styles */
const styles = {
	root: {
		flex: 'flex items-center gap-2'
	}
};
export const inputTag = styles;

/** Props */
type Props = HTMLAttributes<HTMLDivElement>;
export interface InputTagProps extends Props {
	children: Snippet;
}
