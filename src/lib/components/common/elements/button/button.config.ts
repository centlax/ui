import type { DeepStyles, Props, Colors, Styles } from '$lib/types/index.js';

type ButtonColor = keyof typeof styles.opt.variant.solid;
type ButtonVariant = keyof typeof styles.opt.variant;

export const props = {
	class: {} as string | DeepStyles<typeof button>,
	override: false,
	loading: false,
	disabled: false,
	circle: false,
	square: false,
	href: '',
	label: '',
	icon: {} as string | { east?: string; west?: string },
	color: 'blaite' as Colors['mask'] | Exclude<ButtonColor, 'color'>,
	variant: 'solid' as ButtonVariant,
	size: 'md' as 'xs' | 'sm' | 'md' | 'lg' | 'xl'
} satisfies Props;

const styles = {
	root: {
		flex: 'flex flex-shrink-0 items-center',
		border: 'focus:outline-none focus-visible:outline-0',
		effect: 'disabled:opacity-75',
		interactive: 'cursor-pointer disabled:cursor-not-allowed',
		typography: 'font-semibold',
		sizing: '[&>[data-slot=icon]]:size-5'
	},
	opt: {
		size: {
			xs: {
				flex: 'gap-x-1',
				typography: 'text-xs',
				spacing: 'px-2 py-1 data-[square=true]:px-1',
				border: 'rounded data-[circle=true]:rounded-full'
			},
			sm: {
				flex: 'gap-x-1',
				typography: 'text-sm',
				spacing: 'px-2 py-1 data-[square=true]:px-1',
				border: 'rounded'
			},
			md: {
				flex: 'gap-x-1.5',
				typography: 'text-sm',
				spacing: 'px-2.5 py-1.5 data-[square=true]:px-1.5',
				border: 'rounded-md data-[circle=true]:rounded-full'
			},
			lg: {
				flex: 'gap-x-2',
				typography: 'text-sm',
				spacing: 'px-3 py-2 data-[square=true]:px-2',
				border: 'rounded-md data-[circle=true]:rounded-full'
			},
			xl: {
				flex: 'gap-x-2',
				typography: 'text-base',
				spacing: 'px-3 py-2 data-[square=true]:px-2',
				border: 'rounded-md data-[circle=true]:rounded-full'
			}
		},
		variant: {
			solid: {
				color: {
					background: 'bg-color-500 hover:bg-color-600 disabled:bg-color-500',
					border: `focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-color-500`,
					typography: 'text-white',
					effect: 'shadow-sm'
				},
				blaite: {
					background: `bg-black dark:bg-white hover:bg-gray-800 dark:hover:bg-gray-200 disabled:bg-gray-900 dark:disabled:bg-white`,
					border: 'focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500',
					typography: 'text-white dark:text-gray-900',
					effect: 'shadow-sm'
				}
			}
		}
	},
	attr: {
		icon: {
			load: {
				svg: 'i-fluent-arrow-sync-20-regular',
				motion: 'animate-spin'
			}
		}
	}
} satisfies Styles;
export const button = styles;
