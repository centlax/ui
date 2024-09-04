/** Imports */
import type { DeepStyles, Props, Styles } from '$lib/types/utility.js';

/** Styles */
const styles = {
	root: {
		flex: 'flex [&>div]:flex [&>div]:gap-6 justify-between',
		sizing: 'w-70 h-full',
		spacing: 'px-3 py-6',
		background: 'bg-white/80 dark:bg-gray-900/80',
		border: 'border-r border-gray-200 dark:border-gray-800'
	},
	north: {
		custom: '',
		flex: 'flex flex-col ',
		header: {}
	},
	south: {}
} satisfies Styles;
export const sidebar = styles;

/** Props */
export const props = {
	class: {} as string | DeepStyles<typeof sidebar>,
	override: false,
	mode: 'pine' as 'pine' | 'dual' | 'slim'
} satisfies Props;
