/** Imports */
import type { BaseProps } from '$lib/types/prop.js';
import type { Styles } from '$lib/types/ui.js';
import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';

/** Styles */
const styles = {
	root: {
		sizing: 'max-w-screen-2xl',
		spacing: 'mx-auto px-4 sm:px-6 lg:px-8'
	}
} satisfies Styles;
export const container = styles;

/** Props */
type Props = Omit<HTMLAttributes<HTMLDivElement>, 'class'>;
export interface ContainerProps extends BaseProps<typeof container>, Props {
	children: Snippet;
}
