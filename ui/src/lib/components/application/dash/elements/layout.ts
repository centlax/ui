/** Imports */
import type { BaseProps } from '$lib/types/prop.js';
import type { Styles } from '$lib/types/ui.js';
import type { Snippet } from 'svelte';
import type { SvelteHTMLElements } from 'svelte/elements';

/** Styles */
const styles = {
	root: {
		layout: '@container/layout relative',
		background: 'bg-white dark:bg-neutral-900',
		sizing: 'h-screen'
	}
} satisfies Styles;
export const dashLayout = styles;

/** Props */
type Props = Omit<SvelteHTMLElements['div'], 'class'>;
export interface DashLayoutProps extends BaseProps<typeof dashLayout>, Props {
	children: Snippet;
}
