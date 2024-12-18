/** Imports */
import type { BaseProps } from '$lib/types/prop.js';
import type { Styles } from '$lib/types/ui.js';
import type { TransformKeysToKebab } from '$lib/types/utils.js';
import type { CreateTableOfContentsArgs } from '@melt-ui/svelte';
import type { Snippet } from 'svelte';
import type { SvelteHTMLElements } from 'svelte/elements';

/** Styles */
const styles = {
	root: {
		spacing: '-mx-2 space-y-2'
	}
} satisfies Styles;
export const markTable = styles;

/** Props */
type Props = Omit<SvelteHTMLElements['aside'], 'class'> &
	BaseProps<typeof markTable> &
	TransformKeysToKebab<CreateTableOfContentsArgs>;
export interface MarkTableProps extends Props {
	as?: keyof HTMLElementTagNameMap;
	north?: Snippet;
	children?: Snippet;
	south?: Snippet;
}
