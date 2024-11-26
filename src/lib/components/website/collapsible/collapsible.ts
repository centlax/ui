/** Imports */
import type { BaseProps } from '$lib/types/prop.js';
import type { TransitionParams } from '$lib/types/transition.js';
import type { TransformKeysToKebab } from '$lib/types/utils.js';
import type { Styles } from '$lib/types/ui.js';
import type { CreateCollapsibleProps } from '@melt-ui/svelte';
import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';
import type { SlideParams } from 'svelte/transition';

/** Styles */
const styles = {
	root: {},
	item: {},
	trigger: {},
	content: {}
} satisfies Styles;
export const collapsible = styles;

/** Props */
type Props = Omit<HTMLAttributes<HTMLElement>, 'class'> &
	Omit<TransformKeysToKebab<CreateCollapsibleProps>, 'value'>;
export interface CollapsibleProps extends BaseProps<typeof collapsible>, Props {
	children?: Snippet;
	trigger?: Snippet<[boolean]>;
	content?: Snippet;
	transition?: TransitionParams<SlideParams>;
	value?: boolean;
	as?: keyof HTMLElementTagNameMap;
}
