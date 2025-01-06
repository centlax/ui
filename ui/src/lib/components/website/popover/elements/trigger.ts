/** Imports */
import type { OmitBit } from '$lib/types/prop.js';
import type { PopoverTriggerProps } from 'bits-ui';

/** Props */
type Props = OmitBit<PopoverTriggerProps>;
export interface XPopoverTrigger extends Props {
	as?: keyof HTMLElementTagNameMap;
	attrs?: object;
}
