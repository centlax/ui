/* Imports */
import type { BaseProps } from '$lib/types/prop.js';
import type { Styles } from '$lib/types/ui.js';
import type { SvelteHTMLElements } from 'svelte/elements';

/** Styles */
const styles = {
	root: {
		spacing: 'px-3 py-4',
		typography: 'whitespace-nowrap text-sm text-gray-300'
	}
} satisfies Styles;
export const tableDCell = styles;

/* Props */
type Props = Omit<SvelteHTMLElements['td'], 'class'>;
export interface TableDCellProps extends BaseProps<typeof tableDCell>, Props {
	text?: string;
}
