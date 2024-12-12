/** Imports */
import type { BaseProps } from '$lib/types/prop.js';
import type { TransitionParams } from '$lib/types/transition.js';
import type { Styles } from '$lib/types/ui.js';
import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';
import type { SlideParams } from 'svelte/transition';

/** Styles */
const styles = {
	root: {},
	trigger: {},
	content: {}
} satisfies Styles;
export const accordionItem = styles;

/** Props */
type Props = Omit<HTMLAttributes<HTMLSpanElement>, 'class'>;
export interface AccordionItemProps extends BaseProps<typeof accordionItem>, Props {
	children?: Snippet;
	value: string;
	disabled?: boolean;
	trigger?: Snippet;
	content?: Snippet;
	transition?: TransitionParams<SlideParams>;
	id: string;
}
