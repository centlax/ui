import { sharedUI } from '$lib/theme/shared.js';
export const css = {
	wrapper: 'relative',
	base: 'relative block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0',
	form: 'form-input',
	rounded: 'rounded-md',
	placeholder: 'placeholder-gray-400 dark:placeholder-gray-500',
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
	text: sharedUI.text,
	gap: sharedUI.gap,
	padding: sharedUI.padding.rectangle,
	leading: {
		padding: {
			xs: 'ps-8',
			sm: 'ps-9',
			md: 'ps-10',
			lg: 'ps-11',
			xl: 'ps-12'
		}
	},
	trailing: {
		padding: {
			xs: 'pe-8',
			sm: 'pe-9',
			md: 'pe-10',
			lg: 'pe-11',
			xl: 'pe-12'
		}
	},

	variant: {
		base: {
			outline: {
				white: `shadow-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-inset focus:ring-primary-500`,
				gray: `shadow-sm bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-inset focus:ring-primary-500`
			}
		},
		mask: {
			outline: `shadow-sm bg-transparent text-gray-900 dark:text-white ring-1 ring-inset ring-{color}-500 focus:ring-2 focus:ring-inset focus:ring-{color}-500`,
			none: 'bg-transparent focus:ring-0 focus:shadow-none'
		}
	},
	icon: {
		base: 'flex-shrink-0 text-gray-600 dark:text-gray-300',
		color: 'text-{color}-500',
		loading: 'animate-spin',
		size: sharedUI.icon.size,
		leading: {
			wrapper: 'absolute inset-y-0 start-0 flex items-center',
			pointer: 'pointer-events-none',
			padding: sharedUI.icon.padding.x
		},
		trailing: {
			wrapper: 'absolute inset-y-0 end-0 flex items-center',
			pointer: 'pointer-events-none',
			padding: sharedUI.icon.padding.x
		}
	}
};
