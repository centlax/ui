/** Imports */
import type { Item } from '$lib/types/item.js';
import type { BaseProps } from '$lib/types/prop.js';
import type { Styles } from '$lib/types/ui.js';
import type { SvelteHTMLElements } from 'svelte/elements';

/** Styles */
const styles = {
	root: {
		spacing: 'max-w-8xl mx-auto px-4 sm:px-6 md:px-8'
	}
} satisfies Styles;
export const markMain = styles;

/** Props */
type Props = Omit<SvelteHTMLElements['main'], 'class'> & BaseProps<typeof markMain>;
export interface MarkMainProps extends Props {
	as?: keyof HTMLElementTagNameMap;
}
