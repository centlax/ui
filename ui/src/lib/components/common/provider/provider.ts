/** Imports */
import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';

/** Props */
export interface ProviderProps extends HTMLAttributes<HTMLDivElement> {
	children: Snippet;
	toast?: Snippet;
}
