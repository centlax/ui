/** Imports */
import type { OmitBit } from '$lib/types/prop.js';
import type { TransitionParams } from '$lib/types/transition.js';
import type { AccordionContentProps } from 'bits-ui';
import type { SlideParams } from 'svelte/transition';

/** Props */
type Props = OmitBit<AccordionContentProps>;
export interface XAccordionContent extends Props {
	as?: keyof HTMLElementTagNameMap;
	attrs?: object;
	transition?: TransitionParams<SlideParams>;
}
