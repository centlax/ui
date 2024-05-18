import { ui } from '$lib/ui.config.js';
export const styles = {
	root: 'relative',
	input: {
		base: 'relative block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0',
		form: 'form-input',
		rounded: ui.share.rounded,
		placeholder: 'placeholder-gray-500',
		text: ui.share.text,
		gap: ui.share.gap,
		padding: {
			auto: ui.share.padding.rectangle,
			none: 'p-0'
		}
	},
	file: {
		base: 'file:cursor-pointer file:rounded-l-md file:absolute file:left-0 file:inset-y-0 file:font-medium file:m-0 file:border-0 file:ring-1 file:ring-gray-300 dark:file:ring-gray-700 file:text-gray-900 dark:file:text-white file:bg-gray-50 hover:file:bg-gray-100 dark:file:bg-gray-800 dark:hover:file:bg-gray-700/50',
		padding: {
			xs: 'ps-[87px]',
			sm: 'ps-[96px]',
			md: 'ps-[98px]',
			lg: 'ps-[100px]',
			xl: 'ps-[109px]'
		}
	},
	leading: {
		xs: 'ps-8',
		sm: 'ps-9',
		md: 'ps-10',
		lg: 'ps-11',
		xl: 'ps-12'
	},
	trailing: {
		xs: 'pe-8',
		sm: 'pe-9',
		md: 'pe-10',
		lg: 'pe-11',
		xl: 'pe-12'
	},
	variant: {
		solid: {
			mask: {
				base: 'shadow-sm bg-transparent',
				text: 'text-gray-900 dark:text-white caret-color-500',
				ring: 'ring-1 ring-inset ring-color-500',
				focus: 'focus:ring-2 focus:ring-inset focus:ring-color-500'
			},
			white: {
				base: 'shadow-sm bg-white dark:bg-gray-900',
				text: 'text-gray-900 dark:text-white',
				ring: 'ring-1 ring-inset ring-gray-300 dark:ring-gray-700',
				focus: 'focus:ring-2 focus:ring-inset dark:focus:ring-primary-500'
			},
			gray: {
				base: 'shadow-sm bg-gray-200 dark:bg-gray-800',
				text: 'text-gray-900 dark:text-white',
				ring: 'ing-1 ring-inset ring-gray-300 dark:ring-gray-700',
				focus: 'focus:ring-2 focus:ring-inset focus:ring-primary-500'
			}
		},
		outline: {
			mask: {
				base: 'shadow-sm bg-transparent',
				text: 'text-gray-900 dark:text-white caret-color-500',
				ring: 'ring-1 ring-inset ring-color-500',
				focus: 'focus:ring-2 focus:ring-inset focus:ring-color-500'
			},
			white: {
				base: 'shadow-sm bg-white dark:bg-gray-900',
				text: 'text-gray-900 dark:text-white',
				ring: 'ring-1 ring-inset ring-gray-300 dark:ring-gray-700',
				focus: 'focus:ring-2 focus:ring-inset dark:focus:ring-primary-500'
			},
			gray: {
				base: 'shadow-sm bg-gray-50 dark:bg-gray-800',
				text: 'text-gray-900 dark:text-white',
				ring: 'ing-1 ring-inset ring-gray-300 dark:ring-gray-700',
				focus: 'focus:ring-2 focus:ring-inset focus:ring-primary-500'
			}
		},
		ghost: {
			mask: { base: 'bg-transparent focus:ring-0 focus:shadow-none' },
			white: { base: 'bg-transparent focus:ring-0 focus:shadow-none' },
			gray: { base: 'bg-transparent focus:ring-0 focus:shadow-none' }
		}
	},
	icon: {
		base: 'flex-shrink-0 text-gray-600 dark:text-gray-300',
		color: 'text-color-500',
		loading: 'animate-spin',
		size: ui.share.icon.size,
		leading: {
			wrapper: 'absolute inset-y-0 start-0 flex items-center',
			pointer: 'pointer-events-none',
			padding: ui.share.icon.padding.x
		},
		trailing: {
			wrapper: 'absolute inset-y-0 end-0 flex items-center',
			pointer: 'pointer-events-none',
			padding: ui.share.icon.padding.x
		}
	}
};
