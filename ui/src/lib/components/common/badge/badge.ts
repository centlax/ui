/** Imports */
import type { MainProps } from '$lib/types/prop.js';
import type { Styles } from '$lib/types/ui.js';
import type { SvelteHTMLElements } from 'svelte/elements';

/** Styles  */
const styles = {
	root: {
		flex: 'flex justify-center items-center gap-x-1',
		border: 'rounded-full ring-1 ring-inset ring-gray-500/30',
		typography: 'text-xs font-medium whitespace-nowrap text-[--ui-text]',
		spacing: 'py-1 px-1.5',
		sizing: 'min-w-10 w-fit'
	}
} satisfies Styles;
export const badge$ = styles;

/** Props */
type Props = Omit<SvelteHTMLElements['span'], 'class'>;
export interface XBadge extends MainProps<typeof badge$>, Props {
	text?: string;
}
