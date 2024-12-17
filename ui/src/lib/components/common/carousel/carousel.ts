/** Imports */
import type { BaseProps } from '$lib/types/prop.js';
import type { Styles } from '$lib/types/ui.js';
import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';

/** Styles */
const styles = {
	root: {}
} satisfies Styles;
export const carousel = styles;

/** Props */
type Props = Omit<HTMLAttributes<HTMLDivElement>, 'class'>;
export interface CarouselProps extends BaseProps<typeof carousel>, Props {
	children?: Snippet;
	north?: Snippet;
	south?: Snippet;
	thin?: boolean;
}
