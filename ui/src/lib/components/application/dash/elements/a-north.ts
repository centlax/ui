/** Imports */
import type { Item } from '$lib/types/item.js';
import type { BaseProps } from '$lib/types/prop.js';
import type { Styles } from '$lib/types/ui.js';
import type { Snippet } from 'svelte';
import type { SvelteHTMLElements } from 'svelte/elements';

/** Styles */
const styles = {
	root: {
		flex: 'flex flex-1 flex-col gap-y-7'
	}
} satisfies Styles;
export const dashANorth$ = styles;

/** Props */
type Props = Omit<SvelteHTMLElements['div'], 'class'> & BaseProps<typeof dashANorth$>;
export interface XDashANorth extends Props {
	attrs?: object;
	emblem?: Snippet;
}
