/** Imports */
import type { SvelteHTMLElements } from 'svelte/elements';

/** Props */
type Props = SvelteHTMLElements['button'];
export interface CollapsibleTriggerProps extends Props {
	as?: keyof HTMLElementTagNameMap;
}
