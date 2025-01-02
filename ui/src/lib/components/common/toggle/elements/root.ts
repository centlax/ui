/** Imports */
import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';

/** Props */
type Props = HTMLAttributes<HTMLElement>;
export interface ToggleProps extends Props {
	children: Snippet;
	state?: 'on' | 'off';
	as?: keyof HTMLElementTagNameMap;
}
