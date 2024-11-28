/** Imports */
import type { BaseProps } from '$lib/types/prop.js';
import type { Styles } from '$lib/types/ui.js';
import { statify } from '$lib/utils/wind.js';
import type { HTMLInputAttributes } from 'svelte/elements';

/** Styles */
//    disabled:ring-gray-200
const styles = {
	root: {
		layout: 'block ',
		background: 'bg-white/5 disabled:bg-white/10 disabled:opacity-50',
		typography: statify({
			default: 'text-neutral-900 dark:text-white placeholder:text-neutral-500 sm:text-sm/6',
			disabled: 'disabled:text-gray-500'
		}),
		border: statify({
			default: 'rounded-md border-0 ring-1 ring-inset ring-neutral-300 dark:ring-neutral-700',
			focus: 'focus:ring-2 focus:ring-inset focus:ring-color-500 dark:focus:ring-color-500'
		}),
		spacing: ' py-1.5 ',
		sizing: 'w-full',
		effect: 'shadow-sm',
		interactive: 'disabled:cursor-not-allowed'
	}
} satisfies Styles;
export const input = styles;

/** Props */
type Props = Omit<HTMLInputAttributes, 'class'>;
export interface InputProps extends BaseProps<typeof input>, Props {
	color?: string;
}
