/** Imports */
import type { DeepStyles, Link, Props, Styles } from '$lib/types/index.js';

/** Styles */
const styles = {
	root: {
		flex: 'flex gap-8 flex-wrap'
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
export const footerLinks = styles;

/** Props */
export const props = {
	class: {} as string | DeepStyles<typeof footerLinks>,
	override: false,
	links: [] as Link[],
	notice: '&copy; 2024 Centlax, Inc. All rights reserved.'
} satisfies Props;
