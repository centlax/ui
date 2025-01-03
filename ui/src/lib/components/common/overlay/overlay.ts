/** Imports */
import type { BaseProps } from '$lib/types/prop.js';
import type { Styles } from '$lib/types/ui.js';
import type { Action } from 'svelte/action';
import type { SvelteHTMLElements } from 'svelte/elements';

/** Styles */
const styles = {
	root: {
		layout: 'fixed inset-0  z-50 transition-colors bg-black/50 backdrop-blur-sm'
	}
} satisfies Styles;
export const overlay$ = styles;

/** Props */
type Props = Omit<SvelteHTMLElements['div'], 'class'>;
export type OverlayProps = BaseProps<typeof overlay$> &
	Props & {
		melt: any
	};
