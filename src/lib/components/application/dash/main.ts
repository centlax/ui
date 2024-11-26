/** Imports */
//import type { Link } from '$lib/types/link.js';
import type { BaseProps } from '$lib/types/prop.js';
import type { Styles } from '$lib/types/ui.js';
import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';

/** Styles */
const styles = {
	root: {}
} satisfies Styles;
export const dashMain = styles;

/** Props */
type Props = Omit<HTMLAttributes<HTMLElement>, 'class'>;

export interface DashMainProps extends BaseProps<typeof dashMain>, Props {
	children?: Snippet;
}
