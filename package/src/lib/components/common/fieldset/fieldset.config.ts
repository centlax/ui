/** Imports */
import type { DeepStyles, Props, Styles } from '$lib/types/index.js';

/** Styles */
const styles = {
	root: {
		spacing: 'space-y-1'
	},
	north: { flex: 'flex justify-between' },
	label: {
		layout: 'block',
		typography: 'text-sm font-medium leading-6 text-gray-600 dark:text-gray-400'
	},
	hint: {
		typography:
			'text-sm leading-6 text-gray-500 data-[this=ancor]:text-primary-500 data-[this=ancor]:font-medium'
	},
	help: { typography: 'text-xs text-gray-500' },
	error: { typography: 'text-xs text-red-500' }
} satisfies Styles;
export const fieldset = styles;

/** Props */
export const props = {
	class: {} as string | DeepStyles<typeof fieldset>,
	override: false,
	label: '',
	name: '',
	help: '',
	error: '',
	hint: '',
	href: ''
} satisfies Props;
