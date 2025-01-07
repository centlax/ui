/** Imports */
import type { BaseProps } from '$lib/types/prop.js';
import type { Styles } from '$lib/types/ui.js';
import type { SvelteHTMLElements } from 'svelte/elements';

/** Styles */
const styles = {
	root: {
		sizing: 'max-w-screen-2xl',
		spacing: 'mx-auto px-4 sm:px-6 lg:px-8'
	}
} satisfies Styles;
export const container$ = styles;

/** Props */
type Props = Omit<SvelteHTMLElements['div'], 'class'>;
export type XContainer = BaseProps<typeof container$> & Props;
