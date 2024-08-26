/** Imports */
import type { DeepStyles, Props, Styles } from '$lib/types/utility.js';

/** Styles */
const styles = {
	root: {
		layout: 'relative',
		background: 'bg-gray-200 data-[state=checked]:bg-primary-500',
		flex: 'flex',
		sizing: 'size-fit',
		spacing: 'p-0.5',
		border: `rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2`,
		interactive: 'cursor-pointer',
		transition: 'transition-colors'
	},
	state: {
		layout: 'relative block',
		sizing: 'size-6',
		interactive: 'pointer-events-none',
		thumb: {
			layout: 'absolute inset-0 bg-white',
			background: 'bg-white',
			border: 'rounded-full',
			effect: 'shadow'
		}
	}
} satisfies Styles;
export const _switch = styles;

/** Props */
export const props = {
	class: {} as string | DeepStyles<typeof _switch>,
	override: false,
	value: false
} satisfies Props;
