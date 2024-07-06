import type { DeepStyles, Props, Styles } from '$lib/types/index.js';

export const props = {
	class: {} as string | DeepStyles<typeof media>,
	override: false
} satisfies Props;

const styles = {
	root: {
		flex: 'flex'
	}
} satisfies Styles;
export const media = styles;
