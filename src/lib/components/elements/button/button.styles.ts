import { sharedUI } from '$lib/theme/shared.js';
const quick = {
	variant: {
		base: {
			ring: 'focus-visible:ring-2 focus-visible:ring-primary-500',
			solidWhiteGray: 'shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700'
		},
		mask: {
			ringText: 'focus-visible:ring-2 focus-visible:ring-{color}-500 text-{color}-500'
		}
	}
};
export const css = {
	base: 'focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0',
	font: sharedUI.font,
	rounded: sharedUI.rounded,
	truncate: 'text-left break-all line-clamp-1',
	block: 'w-full flex justify-center items-center',
	inline: 'inline-flex items-center',
	text: sharedUI.text,
	gap: sharedUI.gap,
	padding: sharedUI.padding,
	variant: {
		base: {
			solid: {
				white: `${quick.variant.base.ring} ${quick.variant.base.solidWhiteGray} shadow-sm  text-gray-900 dark:text-white bg-white dark:bg-gray-900 hover:bg-gray-50 disabled:bg-white dark:hover:bg-gray-800/50 dark:disabled:bg-gray-900`,
				gray: `${quick.variant.base.ring} ${quick.variant.base.solidWhiteGray} shadow-sm text-gray-700 dark:text-gray-200 bg-gray-50 hover:bg-gray-100 disabled:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700/50 dark:disabled:bg-gray-800`,
				black: `${quick.variant.base.ring} shadow-sm text-white dark:text-gray-900 bg-gray-900 hover:bg-gray-800 disabled:bg-gray-900 dark:bg-white dark:hover:bg-gray-100 dark:disabled:bg-white focus-visible:ring-inset`
			},
			ghost: {
				white: `${quick.variant.base.ring} text-gray-900 dark:text-white hover:bg-white dark:hover:bg-gray-900 focus-visible:ring-inset`,
				gray: `${quick.variant.base.ring} text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 focus-visible:ring-inset`,
				get black() {
					return this.white;
				}
			},
			link: {
				gray: `${quick.variant.base.ring} text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 underline-offset-4 hover:underline focus-visible:ring-inset`,
				black: `${quick.variant.base.ring} text-gray-900 dark:text-white underline-offset-4 hover:underline focus-visible:ring-inset`,
				get white() {
					return this.black;
				}
			}
		},
		mask: {
			solid: `shadow-sm text-white bg-{color}-500 hover:bg-{color}-600 disabled:bg-{color}-500 ring-1 ring-inset ring-{color}-400 hover:ring-{color}-500 focus-visible:ring-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-{color}-500`,
			outline: `${quick.variant.mask.ringText} ring-1 ring-inset ring-current hover:bg-{color}-50 disabled:bg-transparent dark:hover:bg-{color}-950 dark:disabled:bg-transparent`,
			soft: `${quick.variant.mask.ringText} bg-{color}-50 hover:bg-{color}-100 disabled:bg-{color}-50 dark:bg-{color}-950 dark:hover:bg-{color}-900 dark:disabled:bg-{color}-950 focus-visible:ring-inset`,
			ghost: `${quick.variant.mask.ringText} hover:bg-{color}-50 disabled:bg-transparent dark:hover:bg-{color}-950 dark:disabled:bg-transparent focus-visible:ring-inset`,
			link: `${quick.variant.mask.ringText} hover:text-{color}-600 disabled:text-{color}-500 underline-offset-4 hover:underline hover:decoration-dashed focus-visible:ring-inset`
		}
	},
	icon: {
		base: 'flex-shrink-0',
		loading: 'animate-spin',
		size: sharedUI.icon.size
	}
};
