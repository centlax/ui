/** Imports */
import type { BaseProps } from '$lib/types/prop.js';
import type { Styles } from '$lib/types/ui.js';
//import { statify } from '$lib/utils/wind.js';
import type { Snippet } from 'svelte';
import type { HTMLAnchorAttributes, HTMLButtonAttributes } from 'svelte/elements';

/** Styles */
const styles = {
	root: {
		layout: 'relative overflow-hidden backdrop-blur-sm',
		flex: 'flex justify-center items-center',
		border: 'focus:outline-none focus-visible:outline-0',
		effect: 'disabled:opacity-75',
		interactive: 'cursor-pointer disabled:cursor-not-allowed',
		typography: 'font-semibold'
	}
} satisfies Styles;

export const button = styles;

type Props = Omit<HTMLButtonAttributes & HTMLAnchorAttributes, 'class'>;
export interface ButtonProps extends BaseProps<typeof button>, Props {
	children?: Snippet;
	color?: string;
}
