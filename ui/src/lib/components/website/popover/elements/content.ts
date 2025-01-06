/** Imports */
import type { OmitBit } from '$lib/types/prop.js';
import type { TransitionParams } from '$lib/types/transition.js';
import type { Styles } from '$lib/types/ui.js';
import type { PopoverContentProps } from 'bits-ui';
import type { FadeParams } from 'svelte/transition';

/** Styles */
const styles = {} satisfies Styles;

/** Props */
type Props = OmitBit<PopoverContentProps>;
export interface XPopoverContent extends Props {
	as?: keyof HTMLElementTagNameMap;
	attrs?: object;
	transition?: TransitionParams<FadeParams>;
}
