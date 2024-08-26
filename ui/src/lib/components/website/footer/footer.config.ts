/** Imports */
import type { DeepStyles, Link, Props, Styles } from '$lib/types/index.js';

/** Styles */
const styles = {
	root: {
		custom: 'container' /** found in config preset */
	},
	north: {
		flex: 'flex sm:flex-col lg:flex-row gap-10 justify-between'
	},
	south: {
		spacing: 'py-4 mt-10',
		sizing: 'w-full',
		border: 'border-t border-gray-500/20',
		typography: 'text-center',
		notice: {
			typography: 'text-sm text-gray-600 dark:text-gray-400'
		}
	}
} satisfies Styles;
export const footer = styles;

/** Props */
export const props = {
	class: {} as string | DeepStyles<typeof footer>,
	override: false,
	links: [] as Link[],
	notice: `&copy; ${new Date().getFullYear()} Centlax, Inc. All rights reserved.`
} satisfies Props;
