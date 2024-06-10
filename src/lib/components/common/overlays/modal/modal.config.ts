import type { FlyAndScaleParams } from '$lib/theme/motion/fly-scale.js';
import type { Styles, Props, DeepStyles } from '$lib/types/utility.js';
import type { CreateDialogProps } from '@melt-ui/svelte';

export const props = {
	class: {} as string | DeepStyles<typeof modal>,
	override: false,
	open: false,
	role: 'dialog' as CreateDialogProps['role'],
	scroll: true,
	close: { outsie: true as boolean | undefined },
	portal: 'body' as CreateDialogProps['portal'],
	visible: false,
	motion: { duration: 200, y: 8, start: 0.96 } as FlyAndScaleParams
} satisfies Props;

const styles = {
	root: {},
	overlay: {
		layout: 'fixed inset-0 z-50',
		background: 'bg-black/50'
	},
	trigger: {
		flex: 'inline-flex',
		sizing: 'w-fit'
	},
	content: {
		layout: 'fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2'
	}
} satisfies Styles;
export const modal = styles;
