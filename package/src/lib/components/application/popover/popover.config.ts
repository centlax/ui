import type { CreatePopoverProps } from '@melt-ui/svelte';
import type { FadeParams } from 'svelte/transition';
import type { DeepStyles, Props, Styles } from '$lib/types/utility.js';

export const props = {
	class: {} as string | DeepStyles<typeof popover>,
	override: false,
	open: false,
	float: { placement: 'top' } as CreatePopoverProps['positioning'],
	scroll: false,
	overlay: false,
	visible: true,
	trap: false,
	arrow: 0,
	pointer: true,
	portal: 'body' as CreatePopoverProps['portal'],
	transition: { duration: 100 } as FadeParams
} satisfies Props;

const styles = {
	overlay: {
		layout: 'fixed inset-0 z-50',
		background: 'bg-black/50'
	},
	trigger: {
		flex: 'inline-flex',
		sizing: 'w-fit'
	},
	arrow: {},
	content: {
		layout: 'z-50'
	}
} satisfies Styles;

export const popover = styles;
