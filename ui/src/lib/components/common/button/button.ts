/** Imports */
import type { BaseProps } from '$lib/types/prop.js';
import type { Styles, Utility } from '$lib/types/ui.js';
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
	is: {
		square: {},
		block: {}
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
				background: 'bg-color-500 data-events:hover:bg-color-600',
				border: `ring-1 ring-inset ring-color-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-color-500`,
				typography: 'text-white',
				effect: 'shadow-sm'
			},
			outline: {
				background: 'data-events:hover:bg-color-50 dark:data-events:hover:bg-color-950',
				border: `ring-1 ring-inset ring-current focus-visible:ring-2 focus-visible:ring-color-500`,
				typography: 'text-color-500 ',
				effect: 'shadow-sm'
			},
			soft: {
				background: `bg-color-50 data-events:bg-color-100 dark:bg-color-950 data:events:hover:bg-color-900`,
				border: `focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-color-500`,
				typography: 'text-color-500'
			},
			subtle: {
				background: `bg-color-50 data-events:bg-color-100 dark:bg-color-950 data:events:hover:bg-color-900`,
				border: `focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-color-500`,
				typography: 'text-color-500'
			},
			ghost: {
				background: 'data-events:hover:bg-color-50 dark:data-events:hover:bg-color-950',
				border: `focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-color-500`,
				typography: 'text-color-500'
			}
		}
	},
	load: {
		layout: 'absolute inset-0',
		flex: 'flex items-center justify-center',
		background: 'bg-inherit',
		icon: {
			animation: 'animate-spin',
			svg: 'i-fluent-arrow-sync-24-filled',
			sizing: 'size-6'
		}
	}
} satisfies Styles;
export const button = styles;

type Props = Omit<HTMLButtonAttributes & HTMLAnchorAttributes, 'class'>;
export interface ButtonProps extends BaseProps<typeof styles>, Props {
	children?: Snippet;
	color?: string;
	loading?: boolean;
	text?: string;
}
