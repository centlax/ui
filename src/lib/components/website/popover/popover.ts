/** Imports */

import type { BaseProps } from '$lib/types/prop.js';
import type { TransitionParams } from '$lib/types/transition.js';
import type { TransformKeysToKebab } from '$lib/types/utils.js';
import type { Styles } from '$lib/types/ui.js';
import type { CreatePopoverProps } from '@melt-ui/svelte';
import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';
import type { FadeParams } from 'svelte/transition';

/** Styles */
const styles = {
	root: {},
	arrow: {}
} satisfies Styles;
export const popover = styles;

/** Props */
type Props = Omit<HTMLAttributes<HTMLElement>, 'class'> &
	Omit<TransformKeysToKebab<CreatePopoverProps>, 'value' | 'positioning' | 'onOpenChange' | 'ids'>;

export interface PopoverProps extends BaseProps<typeof popover>, Props {
	children?: Snippet;
	trigger?: Snippet;
	content?: Snippet;
	float?: CreatePopoverProps['positioning'];
	value?: boolean;
	transition?: TransitionParams<FadeParams>;
	as?: keyof HTMLElementTagNameMap;
	'trigger-as'?: keyof HTMLElementTagNameMap;
}
