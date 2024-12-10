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
import type { WhenTrue } from '@melt-ui/svelte/internal/types';

/** Styles */
const styles = {
	root: {},
	item: {},
	trigger: {},
	content: {}
} satisfies Styles;
export const accordion = styles;

/** Props */
type Value<Multiple extends boolean = false> = Multiple extends false ? string : string[];
export type MeltValue<T extends boolean> =
	| WhenTrue<false | T, string[], string, string | string[]>
	| undefined;
type Props<T extends boolean> = Omit<HTMLAttributes<HTMLElement>, 'class'> &
	TransformKeysToKebab<Omit<CreateAccordionProps<T>, 'value' | 'multiple'>>;
export interface AccordionProps<Multiple extends boolean>
	extends BaseProps<typeof accordion>,
		Props<Multiple> {
	children?: Snippet;
	multiple?: Multiple;
	trigger?: Snippet<[Item]>;
	content?: Snippet<[Item]>;
	value?: Value<Multiple>;
	items: Item[];
	transition?: TransitionParams<SlideParams>;
	as?: keyof HTMLElementTagNameMap;
	'trigger-as'?: keyof HTMLElementTagNameMap;
}
