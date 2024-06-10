import type { DeepStyles, Props, Styles } from '$lib/types/utility.js';
import { type CreateDialogProps } from '@melt-ui/svelte';
import type { FadeParams, FlyParams } from 'svelte/transition';

export const props = {
	class: {} as string | DeepStyles<typeof drawer>,
	override: false,
	open: false,
	role: 'dialog' as CreateDialogProps['role'],
	scroll: true,
	outside: true,
	visible: true,
	portal: 'body' as CreateDialogProps['portal'],
	transition: {
		content: { x: 350, duration: 300, opacity: 1 },
		overlay: { duration: 150 }
	} as { content?: FlyParams; overlay?: FadeParams }
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
		layout: 'fixed right-0 top-0 z-50 '
	}
} satisfies Styles;
export const drawer = styles;
