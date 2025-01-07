/** Imports */
import type { BaseProps } from '$lib/types/prop.js';
import type { TransitionParams } from '$lib/types/transition.js';
import type { Styles } from '$lib/types/ui.js';
import type { TransformKeysToKebab } from '$lib/types/utils.js';
import type { CreateToasterProps } from '@melt-ui/svelte';
import type { Snippet } from 'svelte';
import type { FlipParams } from 'svelte/animate';
import type { SvelteHTMLElements } from 'svelte/elements';
import type { FlyParams } from 'svelte/transition';

/** Styles */
const styles = {
	root: {
		layout: 'fixed right-0 top-0 z-50 md:bottom-0 md:top-auto',
		flex: 'flex flex-col items-end gap-2',
		sizing: 'w-[20rem]',
		spacing: 'm-4'
	},
	content: {
		sizing: 'w-full'
	}
} satisfies Styles;
export const toast = styles;

/** Props */

type Props = Omit<SvelteHTMLElements['div'], 'class'> &
	Omit<TransformKeysToKebab<CreateToasterProps>, 'value' | 'onOpenChange' | 'ids'>;
export interface ToastProps extends BaseProps<typeof toast>, Props {
	children?: Snippet;
	content?: Snippet;
	trigger?: Snippet;
	value?: boolean;
	transition?: TransitionParams<FlyParams>;
	animate?: FlipParams;
	as?: keyof HTMLElementTagNameMap;
}
