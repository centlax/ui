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
	},

	opt: {
		size: {
			xs: {
				flex: 'gap-x-1',
				typography: 'text-sm',
				spacing: 'px-2 py-1',
				border: 'rounded'
			},
			sm: {
				flex: 'gap-x-1',
				typography: 'text-sm',
				spacing: 'px-2 py-1',
				border: 'rounded'
			},
			md: {
				flex: 'gap-x-1.5',
				typography: 'text-sm',
				spacing: 'px-2.5 py-1.5',
				border: 'rounded-md'
			},
			lg: {
				flex: 'gap-x-2',
				typography: 'text-sm',
				spacing: 'px-3.5 py-2.5',
				border: 'rounded-md'
			},
			xl: {
				flex: 'gap-x-2',
				typography: 'text-sm',
				spacing: 'px-4 py-3',
				border: 'rounded-md'
			}
		},
		variant: {
			solid: {
				color: {
					background: 'bg-color-500 data-events:hover:bg-color-600',
					border: `ring-1 ring-inset ring-color-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-color-500`,
					typography: 'text-white',
					effect: 'shadow-sm'
				},
				'black-white': {
					background: `bg-black dark:bg-white data-events:hover:bg-gray-800 dark:data-events:hover:bg-gray-200`,
					border: 'focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500',
					typography: 'text-white dark:text-gray-900',
					effect: 'shadow-sm'
				}
			},
			outline: {
				color: {
					background: 'data-events:hover:bg-color-50 dark:data-events:hover:bg-color-950',
					border: `ring-1 ring-inset ring-current focus-visible:ring-2 focus-visible:ring-color-500`,
					typography: 'text-color-500 ',
					effect: 'shadow-sm'
				},
				'black-white': {
					background: 'data-events:hover:bg-black/5 dark:data-events:hover:bg-white/5',
					border: `ring-1 ring-inset ring-gray-500/30 focus-visible:ring-2 focus-visible:ring-primary-500`,
					typography: 'text-gray-900 dark:text-white',
					effect: 'shadow-sm'
				}
			},
			soft: {
				color: {
					background: `bg-color-50 data-events:bg-color-100 dark:bg-color-950 data:events:hover:bg-color-900`,
					border: `focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-color-500`,
					typography: 'text-color-500'
				},
				'black-white': {
					background: 'bg-gray-500/10 data-events:hover:bg-gray-500/20',
					border: `focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary-500`,
					typography: 'text-gray-900 dark:text-white'
				}
			},
			subtle: {
				color: {
					background: `bg-color-50 data-events:bg-color-100 dark:bg-color-950 data:events:hover:bg-color-900`,
					border: `focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-color-500`,
					typography: 'text-color-500'
				},
				'black-white': {
					background: 'bg-gray-500/10 data-events:hover:bg-gray-500/20',
					border: `focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary-500`,
					typography: 'text-gray-900 dark:text-white'
				}
			},
			ghost: {
				color: {
					background: 'data-events:hover:bg-color-50 dark:data-events:hover:bg-color-950',
					border: `focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-color-500`,
					typography: 'text-color-500'
				},
				'black-white': {
					background: 'data-events:hover:bg-black/10 dark:data-events:hover:bg-white/10',
					border: `focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary-500`,
					typography: 'text-gray-900 dark:text-white'
				}
			}
		}
	},
	load: {
		layout: 'absolute inset-0',
		flex: 'flex items-center justify-center',
		background: 'bg-inherit',
		icon: {
			animation: 'animate-spin',
			svg: 'i-fluent-arrow-sync-24-filled'
		}
	}
} satisfies Styles;

export const button = styles;

type Props = Omit<HTMLButtonAttributes & HTMLAnchorAttributes, 'class'>;
export interface ButtonProps extends BaseProps<typeof button>, Props {
	children?: Snippet;
	color?: string;
	loading?: boolean;
	text?: string;
}
