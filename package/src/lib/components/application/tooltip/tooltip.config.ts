/** Imports */
import type { CreatePopoverProps } from '@melt-ui/svelte';
import type { FadeParams } from 'svelte/transition';
import type { DeepStyles, Props, Styles } from '$lib/types/utility.js';

/** Styles */
const styles = {
	root: {
		layout: 'z-10'
	},
	arrow: {}
} satisfies Styles;
export const tooltip = styles;

/** Props */
export const props = {
	class: {} as string | DeepStyles<typeof styles>,
	override: false,
	value: false,
	float: { placement: 'bottom' } as CreatePopoverProps['positioning'],
	arrow: 0,
	pointer: true,
	transition: { y: 8, duration: 150 } as FadeParams,
	visible: false,
	portal: 'body' as CreatePopoverProps['portal'],
	delay: { open: 100 as number | undefined, close: 200 as number | undefined },
	hover: false,
	group: false as string | boolean
} satisfies Props;
