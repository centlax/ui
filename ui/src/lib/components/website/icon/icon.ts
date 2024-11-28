/* Imports */
import type { BaseProps } from '$lib/types/prop.js';
import type { Styles } from '$lib/types/ui.js';
import type { HTMLAttributes } from 'svelte/elements';

/** Styles */
const styles = {
	root: {
		layout: 'block'
	}
} satisfies Styles;
export const icon = styles;

/* Props */
type Props = Omit<HTMLAttributes<HTMLSpanElement>, 'class'>;
export interface IconProps extends BaseProps<typeof icon>, Props {
	name: string;
}
