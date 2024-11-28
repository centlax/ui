/** Imports  */
import type { BaseProps } from '$lib/types/prop.js';
import type { Styles } from '$lib/types/ui.js';
import type { Snippet } from 'svelte';
import type { HTMLAnchorAttributes, HTMLAttributes } from 'svelte/elements';

/** Styles */
const styles = {
	root: {
		spacing: 'space-y-2 [data-ui=control]'
	},
	help: {
		typography: 'text-sm text-neutral-500'
	},
	error: {
		typography: 'text-sm text-danger-500'
	}
} satisfies Styles;
export const field = styles;

/** Props  */
type Props = Omit<HTMLAttributes<HTMLDivElement>, 'class'>;
export interface FieldProps extends BaseProps<typeof field>, Props {
	children?: Snippet;
	label?: Snippet;
	hint?: Snippet | string;
	href?: HTMLAnchorAttributes['href'];
	error?: Snippet | string;
	help?: Snippet | string;
	name: string;
	'all-errors'?: boolean;
}
