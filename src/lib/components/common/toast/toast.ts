/** Imports */
import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';

/** Styles */
const styles = {};
export const toast = styles;

/** Props */
export interface ToastProps extends HTMLAttributes<HTMLDivElement> {
	children?: Snippet;
}
