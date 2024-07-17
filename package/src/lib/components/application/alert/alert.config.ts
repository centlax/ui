/** Imports */
import { UButton, UAvatar } from '$lib/index.js';
import type { DeepStyles, Styles, Props, Colors } from '$lib/types/index.js';
import type { ComponentProps } from 'svelte';

/** styles */
const styles = {
	root: {
		flex: 'flex gap-x-4'
	},
	west: {
		flex: 'flex-shrink-0',
		icon: {
			sizing: 'size-5'
		}
	},
	center: {
		flex: '',
		title: { typography: 'text-sm font-medium' },
		description: { typography: 'mt-1 text-sm leading-4 opacity-90' }
	},
	east: {}
} satisfies Styles;
export const alert = styles;

/** Props */
const _props = {
	class: {} as string | DeepStyles<typeof alert>,
	override: false,
	title: '',
	description: '',
	icon: 'i-fluent-info-24-regular' as string,
	avatar: {} as ComponentProps<UAvatar>,
	dismiss: {} as ComponentProps<UButton>,
	actions: [] as ComponentProps<UButton>[],
	color: 'primary' as Colors['mask']
	/** variant */
} satisfies Props;
export const props: Props = _props;
