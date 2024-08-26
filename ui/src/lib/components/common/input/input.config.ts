/** Imports */
import type { HTMLInputAttributes } from 'svelte/elements';
import type { DeepStyles, Props, Styles } from '$lib/types/index.js';

/** Styles */
const styles = {
	root: {
		layout: 'relative isolate'
	},
	input: {
		layout: 'block',
		sizing: 'w-full',
		interactive: 'disabled:cursor-not-allowed',
		effect: 'disabled:opacity-75 shadow-sm',
		typography: 'text-sm font-medium placeholder-gray-500/80',
		background: 'bg-transparent dark:bg-transparent disabled:bg-gray-200 dark:disabled:bg-gray-800',
		border: `focus:outline-none border-0 
		ring-1 ring-inset ring-gray-500/30 
		focus:ring-2 focus:ring-inset focus:ring-primary-500 `
	},
	west: {
		layout: 'absolute inset-y-0 left-0',
		flex: 'flex items-center',
		interactive: 'pointer-events-none'
	},
	east: {
		layout: 'absolute inset-y-0 right-0',
		flex: 'flex items-center',
		interactive: 'pointer-events-none'
	},
	opt: {
		size: {
			xs: {
				spacing: 'px-2 py-1',
				border: 'rounded'
			},
			sm: {
				spacing: 'px-2.5 py-1.5',
				border: 'rounded'
			},
			md: {
				spacing: 'px-3 py-2 ',
				border: 'rounded-md'
			},
			lg: {
				spacing: 'px-3.5 py-2.5',
				border: 'rounded-md'
			},
			xl: {
				spacing: 'px-4 py-3',
				border: 'rounded-md'
			}
		}
	}
} satisfies Styles;
export const input = styles;

/** Props */
export const props = {
	class: {} as string | DeepStyles<typeof input>,
	override: false,
	value: '' as HTMLInputAttributes['value'],
	size: 'md' as keyof typeof input.opt.size
} satisfies Props;
