/* Imports */
import type { BaseProps } from '$lib/types/prop.js';
import type { Styles } from '$lib/types/ui.js';
import type { Snippet } from 'svelte';
import type { SvelteHTMLElements } from 'svelte/elements';

/** Styles */
const styles = {
	root: {
		layout: 'overflow-hidden',
		background: 'bg-white dark:bg-neutral-900 ',
		border: 'divide-y divide-neutral-200 dark:divide-neutral-800',
		spacing: 'm-10'
	}
} satisfies Styles;
export const tableRoot = styles;

/* Props */
type Props = Omit<SvelteHTMLElements['table'], 'class'>;
export interface TableRootProps extends BaseProps<typeof tableRoot>, Props {
	sample?: object;
}
