import type { Colors } from '$lib/theme/colors.js';
import { shareUI } from '$lib/theme/share.js';
export type InputVariant = 'outline' | 'none';
export type InputColor = Colors['fore'] | Colors['root'] | 'white';

export const css = {
	wrapper: 'relative has-[:disabled]:opacity-75',
	base: 'shadow-sm ring-inset text-gray-900 dark:text-white font-medium relative block w-full disabled:cursor-not-allowed focus:outline-none border-0',
	ring: 'ring-1 ring-inset focus:ring-2',
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
	text: shareUI.text,
	gap: shareUI.gap,
	padding: {
		base: shareUI.padding.rectangle,
		dir: {
			east: {
				xs: 'ps-8',
				sm: 'ps-9',
				md: 'ps-10',
				lg: 'ps-11',
				xl: 'ps-12'
			},
			west: {
				xs: 'pe-8',
				sm: 'pe-9',
				md: 'pe-10',
				lg: 'pe-11',
				xl: 'pe-12'
			}
		}
	},
	variant: {
		outline: {
			white: `shadow-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-primary-600 dark:focus:ring-primary-500`,
			gray: `shadow-sm bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400`,
			transparent: `shadow-sm bg-transparent text-gray-900 dark:text-white ring-1 ring-inset  focus:ring-2`
		},
		none: {
			white: `bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-0 focus:shadow-none`,
			gray: `bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-0 focus:shadow-none`,
			transparent: `bg-transparent focus:ring-0 focus:shadow-none`
		}
	},
	icon: {
		base: 'flex-shrink-0',
		load: 'animate-spin',
		color: {
			light: 'text-gray-400 dark:text-gray-600',
			dark: 'text-gray-400 dark:text-gray-600',
			mask: 'text-inheret'
		},
		size: {
			xs: 'size-4',
			sm: 'size-5',
			md: 'size-5',
			lg: 'size-5',
			xl: 'size-6'
		},
		pointer: 'pointer-events-none',
		east: {
			wrapper: 'absolute inset-y-0 start-0 flex items-center',
			padding: {
				xs: 'px-2.5',
				sm: 'px-2.5',
				md: 'px-3',
				lg: 'px-3.5',
				xl: 'px-3.5'
			}
		},
		west: {
			wrapper: 'absolute inset-y-0 end-0 flex items-center',
			padding: {
				xs: 'px-2.5',
				sm: 'px-2.5',
				md: 'px-3',
				lg: 'px-3.5',
				xl: 'px-3.5'
			}
		}
	}
};
