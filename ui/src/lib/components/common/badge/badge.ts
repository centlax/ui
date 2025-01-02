/** Imports */
import type { BaseProps, MainProps } from '$lib/types/prop.js';
import type { Styles } from '$lib/types/ui.js';
import type { Snippet } from 'svelte';
import type { HTMLAttributes, SvelteHTMLElements } from 'svelte/elements';

/** Styles  */
const styles = {
	root: {
		flex: 'flex justify-center items-center gap-x-1',
		border: 'rounded-full ring-1 ring-inset ring-gray-500/30',
		typography: 'text-xs font-medium whitespace-nowrap text-white dark:text-neutral-900',
		spacing: 'py-1 px-1.5',
		sizing: 'min-w-10 w-fit'
	}
} satisfies Styles;
export const badge = styles;

/** Props */

type Props = Omit<SvelteHTMLElements['span'], 'class'>;
export interface BadgeProps extends MainProps<typeof badge>, Props {
	children?: Snippet;
}
