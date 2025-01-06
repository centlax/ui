/** Imports */
import type { OmitBit } from '$lib/types/prop.js';
import type { TransitionParams } from '$lib/types/transition.js';
import type { CollapsibleContentProps } from 'bits-ui';
import type { SlideParams } from 'svelte/transition';

/** Props */
type Props = OmitBit<CollapsibleContentProps>;
export interface XCollapseContent extends Props {
	as?: keyof HTMLElementTagNameMap;
	attrs?: object;
	transition?: TransitionParams<SlideParams>;
}
