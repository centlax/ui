import { shareUI } from '$lib/theme/share.js';
const quick = {
	variant: {
		outline:{
			base: 'shadow-sm',
			white_gray: 'text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400',
		}
	}
}

export const css = {
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
	text: shareUI.text,
	gap: shareUI.gap,
	padding: shareUI.padding.rectangle,
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
		base: 'shadow-sm',
		outline: (color: string) => {
			if (color === 'white') {
				return `${quick.variant.outline.base} ${quick.variant.outline.white_gray} bg-white dark:bg-gray-900`;
			} else if (color === 'gray') {
				return `${quick.variant.outline.base} ${quick.variant.outline.base} bg-gray-50 dark:bg-gray-800`;
			} else {
				return `${quick.variant.outline.base} bg-transparent text-gray-900 dark:text-white ring-1 ring-inset ring-{color}-500 dark:ring-{color}-400 focus:ring-2 focus:ring-{color}-500 dark:focus:ring-{color}-400`;
			}
		}
	},
	icon: {
		base: 'flex-shrink-0 text-gray-400 dark:text-gray-500',
		color: 'text-{color}-500 dark:text-{color}-400',
		loading: 'animate-spin',
		size: {
			xs: 'h-4 w-4',
			sm: 'h-5 w-5',
			md: 'h-5 w-5',
			lg: 'h-5 w-5',
			xl: 'h-6 w-6'
		},
		leading: {
			wrapper: 'absolute inset-y-0 start-0 flex items-center',
			pointer: 'pointer-events-none',
			padding: {
				xs: 'px-2.5',
				sm: 'px-2.5',
				md: 'px-3',
				lg: 'px-3.5',
				xl: 'px-3.5'
			}
		},
		trailing: {
			wrapper: 'absolute inset-y-0 end-0 flex items-center',
			pointer: 'pointer-events-none',
			padding: {
				'2xs': 'px-2',
				xs: 'px-2.5',
				sm: 'px-2.5',
				md: 'px-3',
				lg: 'px-3.5',
				xl: 'px-3.5'
			}
		}
	},
	default: {
		size: 'sm',
		color: 'white',
		variant: 'outline',
		loadingIcon: 'i-heroicons-arrow-path-20-solid'
	}
};
