/** Imports */

import type { BaseProps } from '$lib/types/prop.js';
import type { Styles } from '$lib/types/ui.js';
import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';

/** Styles */
const styles = {
	root: {
		layout: 'overflow-hidden',
		background: 'bg-white dark:bg-gray-900',
		border: `divide-y divide-gray-200 dark:divide-gray-800 rounded-lg ring-1 ring-gray-200 dark:ring-gray-800`,
		effect: 'shadow'
	},
	north: {
		spacing: 'px-4 py-5 sm:px-6'
	},
	center: {
		spacing: 'px-4 py-5 sm:p-6'
	},
	south: {
		spacing: 'px-4 py-4 sm:px-6'
	}
} satisfies Styles;
export const card = styles;

/** Props */
type Props = Omit<HTMLAttributes<HTMLDivElement>, 'class'>;
export interface CardProps extends BaseProps<typeof card>, Props {
	children?: Snippet;
	north?: Snippet;
	south?: Snippet;
	thin?: boolean;
}
