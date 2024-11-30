/** Imports */
import type { BaseProps } from '$lib/types/prop.js';
import type { Styles } from '$lib/types/ui.js';
import type { Snippet } from 'svelte';
import type { SvelteHTMLElements } from 'svelte/elements';
import type { DashProps } from './dash.svelte.js';

/** Styles */
const styles = {
	root: {
		layout: '@container/main',
		sizing: 'h-screen ',
		spacing: 'py-10 px-3 sm:px-4 lg:ml-6 lg:px-6 lg:pl-[--dash-width]'
	}
} satisfies Styles;
export const dashMain = styles;

/** Props */
type Props = Omit<SvelteHTMLElements['main'], 'class'>;
export interface DashMainProps extends BaseProps<typeof dashMain>, Props {
	children?: Snippet;
}
