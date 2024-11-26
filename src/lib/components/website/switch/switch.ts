/** Imports */
import type { BaseProps } from '$lib/types/prop.js';
import type { Styles } from '$lib/types/ui.js';
import { statify } from '$lib/utils/wind.js';
import type { Snippet } from 'svelte';
import type { HTMLButtonAttributes } from 'svelte/elements';

/** Styles */
const styles = {
	root: {
		grid: 'grid grid-cols-2 gap-1',
		sizing: 'w-fit',
		layout: ' cursor-pointer overflow-hidden transition-colors  ',
		background:
			'data-[state=unchecked]:bg-gray-200 dark:data-[state=unchecked]:bg-gray-800 data-[state=checked]:bg-primary-500',
		spacing: 'p-0.5',
		border: statify({
			default: 'rounded-full focus:outline-none',
			focus: 'focus:ring-2 focus:ring-primary-500 focus:ring-offset-2'
		})
	},
	thumb: {
		layout: 'relative ',
		grid: 'col-span-1',
		spacing: 'size-6',
		checked: {
			layout: 'absolute inset-0 ',
			border: 'rounded-full',
			background: 'bg-white dark:bg-gray-600 shadow-sm'
		}
	}
} satisfies Styles;
export const _switch = styles;

/** Props */
type Props = Omit<HTMLButtonAttributes, 'class' | 'value'>;
export interface SwitchProps extends BaseProps<typeof _switch>, Props {
	children?: Snippet;
	value?: boolean;
}
