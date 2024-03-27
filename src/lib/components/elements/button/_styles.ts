import { share } from '$lib/theme/share.js';
import type { Color } from '$lib/types/index.js';

const quick = {
	variant: {
		solid: {
			pswd: (color: Color): string => {
				return `shadow-sm text-white dark:text-gray-900 
                        bg-${color}-600 dark:bg-${color}-500 
                        disabled:bg-${color}-600 dark:disabled:bg-${color}-500 
                        hover:bg-${color}-700 dark:hover:bg-${color}-600
                        focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 
                        focus-visible:outline-${color}-600 dark:focus-visible:outline-${color}-500`;
			},
			wbg: ''
		},
		ghost: {
			pswd: (color: Color): string => {
				return `text-${color}-600 dark:text-${color}-500 
                        hover:bg-${color}-50 dark:hover:bg-${color}-950 
                        disabled:bg-transparent dark:disabled:bg-transparent 
                        focus-visible:ring-2 focus-visible:ring-inset 
                        focus-visible:ring-${color}-600 dark:focus-visible:ring-${color}-500`;
			},
			wbg: ''
		},
		outline: {
			pswd: (color: Color): string => {
				return `ring-1 ring-inset ring-current 
                        text-${color}-600 dark:text-${color}-500 
                        hover:bg-${color}-50 dark:hover:bg-${color}-950 
                        disabled:bg-transparent dark:disabled:bg-transparent 
                        focus-visible:ring-2 
                        focus-visible:ring-${color}-600 dark:focus-visible:ring-${color}-500`;
			},
			wbg: ''
		},
		soft: {
			pswd: (color: Color): string => {
				return `text-${color}-600 dark:text-${color}-500 
                        bg-${color}-50 dark:bg-${color}-950 
                        hover:bg-${color}-100 dark:hover:bg-${color}-900
                        disabled:bg-${color}-50 dark:disabled:bg-${color}-950 
                        focus-visible:ring-2 focus-visible:ring-inset 
                        focus-visible:ring-${color}-600 dark:focus-visible:ring-${color}-500`;
			},
			wbg: ''
		}
	}
};

export const ui = {
	base: 'focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0',
	font: 'font-medium',
	rounded: 'rounded-md',
	truncate: 'text-left break-all line-clamp-1',
	block: 'w-full flex justify-center items-center',
	inline: 'inline-flex items-center',
	size: share.size,
	gap: share.gap,
	padding: {
		default: share.padding,
		square: share.square
	},
	shape: {
		default: '',
		ellipse: '',
		Circle: ''
	},
	variant: {
		solid: {
			primary: quick.variant.solid.pswd('primary'),
			success: quick.variant.solid.pswd('success'),
			warning: quick.variant.solid.pswd('warning'),
			danger: quick.variant.solid.pswd('danger'),
			white:
				quick.variant.solid.wbg +
				'shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-900 dark:text-white bg-white hover:bg-gray-50 disabled:bg-white dark:bg-gray-900 dark:hover:bg-gray-800/50 dark:disabled:bg-gray-900 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400',
			black:
				quick.variant.solid.wbg +
				'shadow-sm text-white dark:text-gray-900 bg-gray-900 hover:bg-gray-800 disabled:bg-gray-900 dark:bg-white dark:hover:bg-gray-100 dark:disabled:bg-white focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400',
			gray:
				quick.variant.solid.wbg +
				'shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-700 dark:text-gray-200 bg-gray-50 hover:bg-gray-100 disabled:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700/50 dark:disabled:bg-gray-800 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400'
		},
		ghost: {
			primary: quick.variant.ghost.pswd('primary'),
			success: quick.variant.ghost.pswd('success'),
			warning: quick.variant.ghost.pswd('warning'),
			danger: quick.variant.ghost.pswd('danger'),
			white:
				quick.variant.ghost.wbg +
				'text-gray-900 dark:text-white hover:bg-white dark:hover:bg-gray-900 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400',
			dark: quick.variant.ghost.wbg + ''
		},
		outline: {
			primary: quick.variant.outline.pswd('primary'),
			success: quick.variant.outline.pswd('success'),
			warning: quick.variant.outline.pswd('warning'),
			danger: quick.variant.outline.pswd('danger'),
			light: quick.variant.outline.wbg + '',
			dark: quick.variant.outline.wbg + ''
		},
		soft: {
			primary: quick.variant.soft.pswd('primary'),
			success: quick.variant.soft.pswd('success'),
			warning: quick.variant.soft.pswd('warning'),
			danger: quick.variant.soft.pswd('danger'),
			light: quick.variant.soft.wbg + '',
			dark: quick.variant.soft.wbg + ''
		}
	},
	icon: {
		base: 'flex-shrink-0',
		loading: 'animate-spin',
		size: share.icon.size
	},
	default: {
		size: 'sm',
		variant: 'solid',
		color: 'primary',
		loading: {
			icon: 'i-heroicons-arrow-path-20-solid'
		}
	}
};
