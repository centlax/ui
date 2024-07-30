import type { CreatePopoverProps } from '@melt-ui/svelte';
import type { DeepStyles, Props, Styles } from '$lib/types/utility.js';
import type { FlyAndScaleParams } from '$lib/theme/motion/fly-scale.js';

export const props = {
	class: {} as string | DeepStyles<typeof popover>,
	override: false,
	float: { placement: 'bottom' } as CreatePopoverProps['positioning'],
	value: false,
	scroll: false,
	overlay: false,
	portal: 'body' as CreatePopoverProps['portal'],
	transition: { duration: 100 } as FlyAndScaleParams
} satisfies Props;

const styles = {
	root: {
		layout: 'z-50'
	},
	overlay: {
		layout: 'fixed inset-0 z-50',
		background: 'bg-black/50'
	}
} satisfies Styles;

export const popover = styles;
