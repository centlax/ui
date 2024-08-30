/** Imports */
import type { CreateScrollAreaProps } from '@melt-ui/svelte';
import type { DeepStyles, Props, Styles } from '$lib/types/utility.js';

/** Styles */
const styles = {
	root: {},
	viewport: {
		sizing: '',
		content: {}
	},
	barX: {
		flex: '',
		thumb: {}
	},
	barY: {
		flex: '',
		thumb: {}
	},
	corner: {}
} satisfies Styles;
export const scroll = styles;

/** Props */
export const props = {
	class: {} as string | DeepStyles<typeof scroll>,
	override: false,
	type: 'hover' as CreateScrollAreaProps['type'],
	delay: 500 as CreateScrollAreaProps['hideDelay']
} satisfies Props;
