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
		layout: 'relative',
		sizing: 'size-6',
		flex: 'flex items-center justify-center',
		border: 'rounded-full ring-2 ring-white dark:ring-neutral-900',
		background: 'bg-neutral-200 dark:bg-neutral-800'
	},
	image: {
		interactive: 'select-none ',
		sizing: 'size-full',
		border: 'rounded-[inherit]'
	},
	fallback: {
		typography: 'text-3xl font-medium text-white dark:text-neutral-900'
	}
} satisfies Styles;
export const avatar = styles;

/** Props */
type Props = Omit<HTMLAttributes<HTMLSpanElement>, 'class'> &
	TransformKeysToKebab<CreateAvatarProps>;
export interface AvatarProps extends BaseProps<typeof avatar>, Props {
	fallback?: Snippet;
	alt?: string;
}
