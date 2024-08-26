/** Imports */
import type { DeepStyles, Props, Styles } from '$lib/types/utility.js';

/** Styles */
const styles = {
	root: {
		spacing: 'mx-auto px-4 sm:px-6 lg:px-8',
		sizing: 'max-w-screen-2xl'
	}
} satisfies Styles;
export const container = styles;

/** Props */
export const props = {
	class: {} as string | DeepStyles<typeof container>,
	override: false,
	as: 'div'
} satisfies Props;
