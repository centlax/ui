import type { Snippet } from 'svelte';

const styles = {};
export const popover = styles;

export interface PopoverProps {
	children?: Snippet;
	trigger?: Snippet;
	value: boolean;
	overlay?: boolean;
}
