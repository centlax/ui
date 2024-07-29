import type { CreateDialogProps } from '@melt-ui/svelte';
import type { FadeParams } from 'svelte/transition';
import type { FlyAndScaleParams } from '$lib/theme/motion/fly-scale.js';
import type { DeepStyles, Props, Styles } from '$lib/types/utility.js';

export const props = {
	class: {} as string | DeepStyles<typeof modal>,
	override: false,
	value: false,
	role: 'dialog' as CreateDialogProps['role'],
	scroll: true,
	close: { outside: true as boolean | undefined },
	portal: 'body' as CreateDialogProps['portal'],
	visible: false,
	transition: {
		overlay: { duration: 150 },
		content: { duration: 200, y: 8, start: 0.96 }
	} as {
		overlay?: FadeParams;
		content?: FlyAndScaleParams;
	}
} satisfies Props;

const styles = {
	root: {},
	overlay: {
		layout: 'fixed inset-0 z-50',
		background: 'bg-black/50'
	},
	content: {
		layout: 'fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2'
	}
} satisfies Styles;
export const modal = styles;
