/** Imports */
import type { CreateDialogProps } from '@melt-ui/svelte';
import type { FadeParams, FlyParams } from 'svelte/transition';
import type { DeepStyles, Props, Styles } from '$lib/import.js';

/** Styles */
const styles = {
	root: {},
	overlay: {
		layout: 'fixed inset-0 z-50',
		background: 'bg-black/50',
		filter: 'backdrop-blur-sm'
	},
	content: {
		layout: 'fixed inset-y-0 right-0 top-0 z-50 h-full'
	}
} satisfies Styles;
export const sheet = styles;

/** Props */
export const props = {
	class: {} as string | DeepStyles<typeof sheet>,
	override: false,
	value: false,
	role: 'dialog' as CreateDialogProps['role'],
	scroll: true,
	outside: true,
	visible: true,
	portal: 'body' as CreateDialogProps['portal'],
	transition: {
		content: {
			in: { x: '100%', duration: 500, opacity: 1 },
			out: { x: '100%', duration: 300, opacity: 1 }
		},
		overlay: { duration: 150 }
	} as {
		content?: { in?: FlyParams; out?: FlyParams };
		overlay?: FadeParams;
	}
} satisfies Props;
