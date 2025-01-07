/** Imports */
import type { BaseProps } from '$lib/types/prop.js';
import type { Styles } from '$lib/types/ui.js';
import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';

/** Styles */
const styles = {
	root: {
		layout: 'overflow-hidden',
		background: 'bg-white dark:bg-neutral-900',
		border: `divide-y divide-neutral-200 dark:divide-neutral-800 rounded-lg ring-1 ring-neutral-200 dark:ring-neutral-800`,
		effect: 'shadow',
		spacing: 'px-4 py-5 sm:px-6'
	}
} satisfies Styles;
export const card$ = styles;

/** Props */
type Props = Omit<HTMLAttributes<HTMLDivElement>, 'class'>;
export type XCard = BaseProps<typeof card$> & Props;
