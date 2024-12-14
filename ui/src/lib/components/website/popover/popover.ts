/** Imports */
import type { BaseProps } from '$lib/types/prop.js';
import type { TransitionParams } from '$lib/types/transition.js';
import type { TransformKeysToKebab } from '$lib/types/utils.js';
import type { Styles } from '$lib/types/ui.js';
import type { CreatePopoverProps } from '@melt-ui/svelte';
import type { Snippet } from 'svelte';
import type { SvelteHTMLElements } from 'svelte/elements';
import type { FadeParams } from 'svelte/transition';

/** Styles */
const styles = {
	root: {
		layout: 'z-10'
	},
	arrow: {}
} satisfies Styles;
export const popover = styles;

/** Props */
type Props = Omit<SvelteHTMLElements['div'], 'class'> &
	Omit<TransformKeysToKebab<CreatePopoverProps>, 'open' | 'positioning'>;

export interface PopoverProps extends BaseProps<typeof popover>, Props {
	children?: Snippet;
	trigger?: Snippet;
	content?: Snippet;
	float?: CreatePopoverProps['positioning'];
	open?: boolean;
	transition?: TransitionParams<FadeParams>;
	as?: keyof HTMLElementTagNameMap;
	'trigger-as'?: keyof HTMLElementTagNameMap;
	anchor?: HTMLElement;
}
