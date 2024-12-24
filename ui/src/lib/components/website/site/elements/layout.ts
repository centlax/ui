/** Imports */
import type { BaseProps } from '$lib/types/prop.js';
import type { Styles } from '$lib/types/ui.js';
import type { Component, Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';
import type Aside from './aside.svelte';

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
type Props = Omit<HTMLAttributes<HTMLElement>, 'class' | 'children'>;
export interface SiteLayoutProps extends BaseProps<typeof siteLayout>, Props {
	children?: Snippet;
}
