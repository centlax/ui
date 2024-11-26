/** Imports */
import type { BaseProps } from '$lib/types/prop.js';
import type { Styles } from '$lib/types/ui.js';
import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';

/** Styles */
const styles = {
	root: {
		background: 'bg-white dark:bg-neutral-900 h-screen'
	}
} satisfies Styles;
export const siteLayout = styles;

/** Props */
type Props = Omit<HTMLAttributes<HTMLElement>, 'class'>;
export interface SiteLayoutProps extends BaseProps<typeof siteLayout>, Props {
	children?: Snippet;
}
