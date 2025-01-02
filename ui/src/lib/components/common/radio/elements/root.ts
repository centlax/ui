/** Imports */
import type { BaseProps } from '$lib/types/prop.js';
import type { Styles } from '$lib/types/ui.js';
import type { Snippet } from 'svelte';
import type { SvelteHTMLElements } from 'svelte/elements';

/** Styles */
const styles = {
	root: {
		layout:
			'group grid size-6 cursor-default border border-gray-300 place-items-center rounded-full bg-white shadow-sm hover:bg-primary-100'
	}
} satisfies Styles;
export const radio = styles;

/** Props */
type Props = Omit<SvelteHTMLElements['button'], 'class'>;
export interface RadioProps extends BaseProps<typeof radio>, Props {
	children?: Snippet;
	value: string;
	disabled?: boolean;
}
