/** Imports */
import type { Item } from '$lib/types/item.js';
import type { BaseProps } from '$lib/types/prop.js';
import type { Styles } from '$lib/types/ui.js';
import type { Snippet } from 'svelte';
import type { SvelteHTMLElements } from 'svelte/elements';

/** Styles */
const styles = {
	root: {
		sizing: 'w-full',
		border: 'border-b border-[--ui-border]',
		
	},
	box: {
		layout: 'container',
		flex: 'flex items-center justify-between',
		sizing: 'h-[--ui-land-header-height] '
	}
} satisfies Styles;
export const landHeader$ = styles;

/** Props */
type Props = Omit<SvelteHTMLElements['header'], 'class'>;
export interface XLandHeader extends BaseProps<typeof landHeader$>, Props {
	emblem?: Snippet;
}
