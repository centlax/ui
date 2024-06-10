import type { DeepStyles, Props, Styles } from '$lib/types/utility.js';
import { type CreatePopoverProps } from '@melt-ui/svelte';
import type { FadeParams } from 'svelte/transition';

export const props = {
	class: {} as string | DeepStyles<typeof styles>,
	override: false,
	open: false,
	float: { placement: 'bottom' } as CreatePopoverProps['positioning'],
	arrow: 0,
	pointer: true,
	transition: { duration: 100 } as FadeParams,
	visible: false,
	portal: 'body' as CreatePopoverProps['portal'],
	delay: { open: 100 as number | undefined, close: 200 as number | undefined },
	hover: false,
	group: false as string | boolean
} satisfies Props;

const styles = {
	trigger: {
		flex: 'inline-flex',
		sizing: 'w-fit'
	},
	arrow: {},
	content: {
		layout: 'z-10'
	}
} satisfies Styles;

export const tooltip = styles;
