/** Imports */
import type { DeepStyles, Styles, Props, Colors } from '$lib/types/index.js';

/** styles */
const styles = {
	root: {
		layout: 'relative overflow-hidden',
		flex: 'flex gap-3',
		border: 'rounded-lg',
		spacing: 'p-4',
		sizing: 'w-full'
	},
	opt: {
		variant: {
			solid: {
				background: 'bg-color-500',
				typography: 'text-white dark:text-gray-900'
			},
			outline: {
				typography: 'text-color-500 ring-1 ring-inset ring-color-500'
			},
			soft: {
				background: 'bg-color-50 dark:bg-color-500 dark:bg-opacity-10',
				typography: 'text-color-500'
			},
			subtle: {
				background: 'bg-color-50 dark:bg-color-500 dark:bg-opacity-10',
				typography: 'text-color-500',
				border: 'ring-1 ring-inset ring-color-500 ring-opacity-25 dark:ring-opacity-25'
			}
		}
	},
	west: {
		flex: 'flex-shrink-0',
		icon: {
			sizing: 'size-5'
		}
	},
	center: {
		flex: '',
		title: { typography: 'text-sm font-medium' },
		description: { typography: 'mt-1 text-sm leading-4 opacity-90' }
	},
	east: {}
} satisfies Styles;
export const alert = styles;

/** Props */
export const props = {
	class: {} as string | DeepStyles<typeof alert>,
	override: false,
	title: '',
	description: '',
	// i-fluent-info-24-regular
	icon: '' as string,
	color: 'primary' as Colors['mask'],
	variant: 'solid' as keyof typeof alert.opt.variant
	/** variant */
} satisfies Props;
