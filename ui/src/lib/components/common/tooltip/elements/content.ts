/** Imports */
import type { OmitBit } from '$lib/types/prop.js';
import type { TransitionParams } from '$lib/types/transition.js';
import type { TooltipContentProps } from 'bits-ui';
import type { FadeParams } from 'svelte/transition';

/** Props */
type Props = OmitBit<TooltipContentProps>;
export interface XTooltipContent extends Props {
	as?: keyof HTMLElementTagNameMap;
	attrs?: object;
	transition?: TransitionParams<FadeParams>;
}
