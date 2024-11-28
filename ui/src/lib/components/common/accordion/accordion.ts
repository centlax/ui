/** Imports */
import type { Item } from '$lib/types/item.js';
import type { BaseProps } from '$lib/types/prop.js';
import type { TransitionParams } from '$lib/types/transition.js';
import type { TransformKeysToKebab } from '$lib/types/utils.js';
import type { Styles } from '$lib/types/ui.js';
import type { CreateAccordionProps } from '@melt-ui/svelte';
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
export const accordion = styles;

/** Props */
type Props = Omit<HTMLAttributes<HTMLElement>, 'class'> &
	Omit<TransformKeysToKebab<CreateAccordionProps>, 'value'>;
export interface AccordionProps<T extends Item<T>> extends BaseProps<typeof accordion>, Props {
	children?: Snippet;
	trigger?: Snippet<[T]>;
	content?: Snippet<[T]>;
	items: T[];
	transition?: TransitionParams<SlideParams>;
	as?: keyof HTMLElementTagNameMap;
}
