/** Imports */
import type { SvelteHTMLElements } from 'svelte/elements';

/** Props */
type Props = SvelteHTMLElements['div'];
export interface CollapsibleContentProps extends Props {
	as?: keyof HTMLElementTagNameMap;
}
