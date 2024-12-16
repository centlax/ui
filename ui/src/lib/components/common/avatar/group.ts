/** Imports */
import type { BaseProps } from '$lib/types/prop.js';
import type { TransformKeysToKebab } from '$lib/types/utils.js';
import type { Styles } from '$lib/types/ui.js';
import type { CreateAvatarProps } from '@melt-ui/svelte';
import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';

/** Styles */
const styles = {
	root: {
		layout: 'isolate mt-3 flex -space-x-2 overflow-hidden'
	}
} satisfies Styles;
export const avatarGroup = styles;
// for image == inline-block h-12 w-12 rounded-full ring-2 ring-white
/** Props */
type Props = Omit<HTMLAttributes<HTMLSpanElement>, 'class'> &
	TransformKeysToKebab<CreateAvatarProps>;
export interface AvatarGroupProps extends BaseProps<typeof avatarGroup>, Props {
	children?: Snippet;
	as?: keyof HTMLElementTagNameMap;
}
