import type { DeepStyles, Props, Styles } from '$lib/types/utility.js';

export const props = {
	class: {} as string | DeepStyles<typeof card>,
	override: false,
	as: 'div'
} satisfies Props;

const styles = {
	root: {
		layout: 'overflow-hidden',
		background: 'bg-white dark:bg-gray-900',
		border: `divide-y divide-gray-200 dark:divide-gray-800 rounded-lg ring-1 ring-gray-200 dark:ring-gray-800`,
		effect: 'shadow'
	},
	north: {
		spacing: 'px-4 py-5 sm:px-6'
	},
	center: {
		spacing: 'px-4 py-5 sm:p-6'
	},
	south: {
		spacing: 'px-4 py-5 sm:p-6'
	}
} satisfies Styles;

export const card = styles;
