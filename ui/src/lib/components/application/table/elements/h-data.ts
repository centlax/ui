/* Imports */
import type { BaseProps } from '$lib/types/prop.js';
import type { Styles } from '$lib/types/ui.js';
import type { SvelteHTMLElements } from 'svelte/elements';

/** Styles */
const styles = {
	root: {
		spacing: 'px-3 py-3.5',
		typography: 'text-left text-sm font-semibold text-white'
	}
} satisfies Styles;
export const tableHCell = styles;

/* Props */
type Props = Omit<SvelteHTMLElements['td'], 'class'>;
export interface TableHCellProps extends BaseProps<typeof tableHCell>, Props {
	text?: string;
}
