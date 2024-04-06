import { shareUI } from '$lib/theme/share.js';
const quick = {
	va: /* variant */ {
		ou: /* outline */ {
			ld: /* light and dark */ 'ring-gray-300 dark:ring-gray-600',
			ma: /* mask */ 'bg-transparent caret-current ring-current'
		}
	}
};

export const css = {
	wrapper: 'relative has-[:disabled]:opacity-75',
	base: 'shadow-sm text-gray-900 dark:text-white font-medium relative block w-full disabled:cursor-not-allowed focus:outline-none border-0',
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
		quick: quick.va.ou,
		outline: {
			light: 'bg-white dark:bg-gray-900',
			dark: 'bg-gray-50 dark:bg-gray-800'
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
