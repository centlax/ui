/** Imports */
import type { DeepStyles, Props, Styles, Size } from '$lib/types/index.js';

/** Styles */
const styles = {
	wrapper: { layout: 'relative' },
	root: {
		layout: 'relative block',
		sizing: 'w-full',
		interactive: 'disabled:cursor-not-allowed',
		effect: 'disabled:opacity-75',
		typography: 'font-medium placeholder-gray-600 dark:placeholder-gray-400',
		background: 'bg-transparent dark:bg-transparent',
		border: `focus:outline-none border-0 ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-inset focus:ring-primary-500 dark:focus:ring-primary-500`
	},
	west: {
		layout: 'absolute inset-y-0 left-0',
		flex: 'flex items-center',
		interactive: 'pointer-events-none'
	},
	east: {
		layout: 'absolute inset-y-0 right-0',
		flex: 'flex items-center',
		interactive: 'pointer-events-none'
	},
	opt: {
		size: {
			xs: {
				typography: 'text-xs',
				spacing: 'px-2 py-1 data-[west=true]:pl-8 data-[east=true]:pr-8',
				border: 'rounded',
				side: {
					spacing: 'data-[side=west]:pl-2 data-[side=east]:pr-2'
				}
			},
			sm: {
				typography: 'text-sm',
				spacing: 'px-2 py-1 data-[west=true]:pl-10 data-[east=true]:pr-10 ',
				border: 'rounded',
				side: {
					spacing: 'data-[side=west]:pl-3 data-[side=east]:pr-3'
				}
			},
			md: {
				typography: 'text-sm',
				spacing: 'px-2.5 py-1.5 data-[west=true]:pl-9 data-[east=true]:pr-11',
				border: 'rounded-md',
				side: {
					spacing: 'data-[side=west]:pl-3 data-[side=east]:pr-3'
				}
			},
			lg: {
				typography: 'text-sm',
				spacing: 'px-3 py-2 data-[west=true]:pl-12 data-[east=true]:pr-12',
				border: 'rounded-md',
				side: {
					spacing: 'data-[side=west]:pl-3 data-[side=east]:pr-3'
				}
			},
			xl: {
				typography: 'text-base',
				spacing: 'px-3 py-2 data-[west=true]:pl-12 data-[east=true]:pr-12',
				border: 'rounded-md',
				side: {
					spacing: 'data-[side=west]:pl-3 data-[side=east]:pr-3'
				}
			}
		},
	},

} satisfies Styles;
export const input = styles;

/** Props */
export const props = {
	class: {} as string | DeepStyles<typeof input>,
	override: false,
	size: 'md' as Size,
	icon: {} as string | { west?: string; east?: string },
	loading: false,
} satisfies Props;
