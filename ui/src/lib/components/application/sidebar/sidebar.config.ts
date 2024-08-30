/** Imports */
import type { DeepStyles, Props, Styles } from '$lib/types/utility.js';

/** Styles */
const styles = {
	root: {
		flex: 'flex [&>div]:flex [&>div]:gap-6 justify-between',
		sizing: 'w-80 h-full',
		spacing: 'px-6 py-8',
		background: 'bg-white/80 dark:bg-gray-900/80',
		border: 'border-r border-gray-200 dark:border-gray-800'
	},
	north: {
		custom: '',
		header: {}
	},
	south: {}
} satisfies Styles;
export const sidebar = styles;

/** Props */
export const props = {
	class: {} as string | DeepStyles<typeof sidebar>,
	override: false
} satisfies Props;
