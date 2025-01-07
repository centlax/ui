/** Imports */
import type { MainProps } from '$lib/types/prop.js';
import type { ToKebab } from '$lib/types/utils.js';
import type { Styles } from '$lib/types/ui.js';
import type { CreateAvatarProps } from '@melt-ui/svelte';
import type { SvelteHTMLElements } from 'svelte/elements';

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
		interactive: 'select-none',
		sizing: 'size-full',
		border: 'rounded-[inherit]'
	},
	fallback: {
		typography: 'text-3xl font-medium text-white dark:text-neutral-900'
	}
} satisfies Styles;
export const avatar = styles;

/** Props */
type Props = Omit<SvelteHTMLElements['span'], 'class'> & CreateAvatarProps;
export interface XAvatar extends MainProps<typeof avatar>, Props {
	icon?: string;
	alt?: string;
}
