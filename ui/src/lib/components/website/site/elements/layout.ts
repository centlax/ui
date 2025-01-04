/** Imports */
import type { BaseProps } from '$lib/types/prop.js';
import type { Styles } from '$lib/types/ui.js';
import type { Snippet } from 'svelte';
import type { SvelteHTMLElements } from 'svelte/elements';

/** Styles */
const styles = {
	root: {
		background: 'bg-white dark:bg-neutral-900',
		sizing: 'h-svh sm:h-screen',
		flex: 'grid grid-rows-[auto_1fr_auto]'
	}
} satisfies Styles;
export const siteLayout = styles;

/** Props */
type Props = Omit<SvelteHTMLElements['div'], 'class'>;
export interface XSiteLayout extends BaseProps<typeof siteLayout>, Props {
	logo?: Snippet;
}
