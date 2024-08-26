/** Imports */
import type { DeepStyles, Link, Props, Styles } from '$lib/types/index.js';

/** Styles */
const styles = {
	root: {
		flex: 'mx-auto w-[18rem] max-w-full sm:w-[25rem]'
	},
	column: {
		sizing: 'min-w-32',
		title: {
			typography: 'text-sm font-semibold leading-6 text-gray-900 dark:text-white'
		},
		ul: {
			spacing: 'mt-6 space-y-4',
			li: {
				custom: '',
				ancor: {
					typography: 'text-sm leading-6 text-gray-600 dark:text-gray-400'
				}
			}
		}
	}
} satisfies Styles;
export const accordion = styles;

/** Props */
export const props = {
	class: {} as string | DeepStyles<typeof accordion>,
	override: false,
	links: [] as Link[]
} satisfies Props;
