/** Imports */
import type { BaseProps } from '$lib/types/prop.js';
import type { TransitionParams } from '$lib/types/transition.js';
import type { TransformKeysToKebab } from '$lib/types/utils.js';
import type { Styles } from '$lib/types/ui.js';
import type { CreatePopoverProps, PopoverElements } from '@melt-ui/svelte';
import type { Snippet } from 'svelte';
import type { SvelteHTMLElements } from 'svelte/elements';
import type { FadeParams } from 'svelte/transition';
import type { Action, ActionReturn } from 'svelte/action';
import type { MeltActionReturn } from '@melt-ui/svelte/internal/types';

/** Styles */
const styles = {
	root: {
		layout: 'z-10'
	},
	overlay: {},
	arrow: {}
} satisfies Styles;
export const popover = styles;

/** Props */
type Props = Omit<SvelteHTMLElements['div'], 'class'> &
	Omit<
		TransformKeysToKebab<
			CreatePopoverProps & {
				customAnchor?: HTMLElement | null;
			}
		>,
		'open' | 'positioning'
	>;

export interface PopoverProps extends BaseProps<typeof popover>, Props {
	children?: Snippet<[]>;
	trigger?: Snippet;
	content?: Snippet;
	close?: Snippet;
	float?: CreatePopoverProps['positioning'];
	open?: boolean;
	transition?: TransitionParams<FadeParams>;
	as?: keyof HTMLElementTagNameMap;
}
