import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';

export interface ElementProps extends HTMLAttributes<HTMLDivElement> {
	this: keyof HTMLElementTagNameMap;
	as: 'trigger' | 'close';
	children?: Snippet;
}
