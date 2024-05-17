import { ui } from '$lib/ui.config.js';

export const styles = {
	root: {
		base: 'focus:outline-none focus-visible:outline-0 flex-shrink-0',
		disabled: 'disabled:cursor-not-allowed disabled:opacity-75',
		font: ui.share.font
	},
	rounded: ui.share.rounded,
	truncate: 'text-left break-all line-clamp-1',
	block: 'w-full flex justify-center items-center',
	inline: 'inline-flex items-center',
	text: ui.share.text,
	gap: ui.share.gap,
	padding: ui.share.padding,
	variant: {
		solid: {
			mask: {
				base: `shadow-sm text-white bg-color-500 hover:bg-color-600 disabled:bg-color-500`,
				ring: 'ring-1 ring-inset ring-color-400 hover:ring-color-500 focus-visible:ring-0',
				outline: `focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-color-500`
			},
			white: {
				base: `shadow-sm bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800/50`,
				text: 'text-gray-900 dark:text-white',
				disabled: 'disabled:bg-white dark:disabled:bg-gray-900',
				ring: 'ring-1 ring-inset ring-gray-300 dark:ring-gray-700',
				focus: 'focus-visible:ring-2 focus-visible:ring-primary-500'
			},
			gray: {
				base: `shadow-sm bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700/50`,
				text: 'text-gray-700 dark:text-gray-200',
				disabled: 'disabled:bg-gray-50  dark:disabled:bg-gray-800',
				ring: 'ring-1 ring-inset ring-gray-300 dark:ring-gray-700',
				focus: 'focus-visible:ring-2 focus-visible:ring-primary-500'
			},
			black: {
				base: `shadow-sm bg-gray-900 hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-100`,
				text: 'text-white dark:text-gray-900',
				disabled: 'disabled:bg-gray-900 dark:disabled:bg-white',
				focus: 'focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500'
			}
		},
		outline: {
			mask: {
				base: 'hover:bg-color-50 dark:hover:bg-color-950',
				text: 'text-color-500',
				disabled: 'disabled:bg-transparent dark:disabled:bg-transparent',
				ring: 'ring-1 ring-inset ring-current',
				focus: 'focus-visible:ring-2 focus-visible:ring-color-500'
			},
			// added
			white: {
				base: 'hover:bg-color-50 dark:hover:bg-color-950',
				text: 'text-color-500',
				disabled: 'disabled:bg-transparent dark:disabled:bg-transparent',
				ring: 'ring-1 ring-inset ring-current',
				focus: 'focus-visible:ring-2 focus-visible:ring-color-500'
			},
			// added
			gray: {
				base: 'hover:bg-color-50 dark:hover:bg-color-950',
				text: 'text-color-500',
				disabled: 'disabled:bg-transparent dark:disabled:bg-transparent',
				ring: 'ring-1 ring-inset ring-current',
				focus: 'focus-visible:ring-2 focus-visible:ring-color-500'
			},
			// added
			black: {
				base: 'hover:bg-color-50 dark:hover:bg-color-950',
				text: 'text-color-500',
				disabled: 'disabled:bg-transparent dark:disabled:bg-transparent',
				ring: 'ring-1 ring-inset ring-current',
				focus: 'focus-visible:ring-2 focus-visible:ring-color-500'
			}
		},
		soft: {
			mask: {
				base: `bg-color-50 hover:bg-color-100 dark:bg-color-950 dark:hover:bg-color-900`,
				text: 'text-color-500',
				disabled: 'disabled:bg-color-50 dark:disabled:bg-color-950',
				focus: 'focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-color-500'
			},
			// added
			white: {
				base: `bg-color-50 hover:bg-color-100 dark:bg-color-950 dark:hover:bg-color-900`,
				text: 'text-color-500',
				disabled: 'disabled:bg-color-50 dark:disabled:bg-color-950',
				focus: 'focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-color-500'
			},
			// added
			gray: {
				base: `bg-color-50 hover:bg-color-100 dark:bg-color-950 dark:hover:bg-color-900`,
				text: 'text-color-500',
				disabled: 'disabled:bg-color-50 dark:disabled:bg-color-950',
				focus: 'focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-color-500'
			},
			// added
			black: {
				base: `bg-color-50 hover:bg-color-100 dark:bg-color-950 dark:hover:bg-color-900`,
				text: 'text-color-500',
				disabled: 'disabled:bg-color-50 dark:disabled:bg-color-950',
				focus: 'focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-color-500'
			}
		},
		ghost: {
			mask: {
				base: `hover:bg-color-50 dark:hover:bg-color-950`,
				text: 'text-color-500',
				disabled: 'disabled:bg-transparent dark:disabled:bg-transparent',
				focus: 'focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-color-500'
			},

			white: {
				base: 'hover:bg-white dark:hover:bg-gray-900',
				text: 'text-gray-900 dark:text-white ',
				focus: 'focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500'
			},
			gray: {
				base: 'hover:bg-gray-50 dark:hover:bg-gray-800',
				text: 'text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white ',
				focus: 'focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500'
			},
			// added
			black: {
				base: 'underline-offset-4 hover:underline',
				text: 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200',
				focus: 'focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500'
			}
		},
		link: {
			mask: {
				base: 'underline-offset-4 hover:underline hover:decoration-dashed',
				text: 'text-color-500 hover:text-color-600',
				disabled: 'disabled:text-color-500',
				focus: 'focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-color-500'
			},
			// added
			white: {
				base: 'underline-offset-4 hover:underline',
				text: 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200',
				focus: 'focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500'
			},
			gray: {
				base: 'underline-offset-4 hover:underline',
				text: 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200',
				focus: 'focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500'
			},
			black: {
				base: 'underline-offset-4 hover:underline ',
				text: 'text-gray-900 dark:text-white',
				focus: 'focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500'
			}
		}
	},
	icon: {
		base: 'flex-shrink-0',
		loading: 'animate-spin',
		size: ui.share.icon.size
	}
};
