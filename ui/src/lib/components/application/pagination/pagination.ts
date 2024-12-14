/** Imports */
import type { Item } from '$lib/types/item.js';
import type { BaseProps } from '$lib/types/prop.js';
import type { Styles } from '$lib/types/ui.js';
import type { TransformKeysToKebab } from '$lib/types/utils.js';
import type { CreatePaginationProps } from '@melt-ui/svelte';
import type { Snippet } from 'svelte';
import type { SvelteHTMLElements } from 'svelte/elements';

/** Styles */
const styles = {
	root: {
		layout: 'flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6'
	}
} satisfies Styles;
export const pagination = styles;

/** Props */
type Props = Omit<SvelteHTMLElements['div'], 'class' | 'tabindex'> &
	TransformKeysToKebab<Omit<CreatePaginationProps, 'page'>>;
export interface PaginationProps extends BaseProps<typeof pagination>, Props {
	children?: Snippet;
	page?: number;
}
