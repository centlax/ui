/** Imports */
import type { BaseProps } from '$lib/types/prop.js';
import type { Styles } from '$lib/types/ui.js';
import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';

/** Styles */
const styles = {
	root: {
		layout: '@container/dash',
		sizing: 'h-full bg-primary-500',
		background: 'bg-white dark:bg-neutral-900'
	}
} satisfies Styles;
export const dashLayout = styles;

/** Props */
type Props = Omit<HTMLAttributes<HTMLDivElement>, 'class'>;
export interface DashLayoutProps extends BaseProps<typeof dashLayout>, Props {
	children: Snippet;
	height?: number;
	width?: number;
}
