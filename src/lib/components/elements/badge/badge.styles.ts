export const css = {
	base: 'inline-flex items-center overflow-hidden',
	font: 'font-medium',
	size: {
		rectangle: {
			xs: 'text-xs px-1.5 py-0.5',
			sm: 'text-xs px-2 py-1',
			md: 'text-sm px-2 py-1',
			lg: 'text-sm px-2.5 py-1.5',
			xl: 'text-sm px-2.5 py-1.5'
		},
		square: {
			xs: 'text-xs p-0.5',
			sm: 'text-xs p-1',
			md: 'text-sm p-1',
			lg: 'text-sm p-1.5',
			xl: 'text-sm p-1.5'
		}
	},
	gap: {
		xs: 'gap-x-0.5',
		sm: 'gap-x-1',
		md: 'gap-x-1',
		lg: 'gap-x-1.5',
		xl: 'gap-x-1.5'
	},
	variant: {
		base: {
			solid: {
				white: `ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-900 dark:text-white bg-white dark:bg-gray-900`,
				gray: `'ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-700 dark:text-gray-200 bg-gray-50 dark:bg-gray-800`,
				black: `text-white dark:text-gray-900 bg-gray-900 dark:bg-white`
			}
		},
		mask: {
			solid: 'bg-{color}-500 text-white dark:text-gray-900',
			outline: 'text-{color}-500 ring-1 ring-inset ring-{color}-500',
			soft: 'bg-{color}-50 dark:bg-{color}-500 dark:bg-opacity-10 text-{color}-500',
			subtle:
				'bg-{color}-50 dark:bg-{color}-500 dark:bg-opacity-10 text-{color}-500 ring-1 ring-inset ring-{color}-500 ring-opacity-25 dark:ring-opacity-25'
		}
	},
	icon: {
		remove: {
			variant: {
				solid: 'hover:bg-gray-500/50',
				outline: 'hover:bg-gray-500/20',
				soft: 'hover:bg-gray-500/10',
				subtle: 'hover:bg-gray-500/10'
			}
		}
	}
};
