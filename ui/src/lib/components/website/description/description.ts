/* Imports */
import type { BaseProps } from '$lib/types/prop.js';
import type { Styles } from '$lib/types/ui.js';
import type { HTMLAttributes } from 'svelte/elements';

/** Styles */
const styles = {
	root: {}
} satisfies Styles;
export const description = styles;

/* Props */
type Props = Omit<HTMLAttributes<HTMLParagraphElement>, 'class'>;
export interface DescriptionProps extends BaseProps<typeof description>, Props {
	text?: string;
}
