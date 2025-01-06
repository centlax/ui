/** Imports */
import type { OmitBit } from '$lib/types/prop.js';
import type { PopoverCloseProps } from 'bits-ui';

/** Props */
type Props = OmitBit<PopoverCloseProps>;
export interface XPopoverClose extends Props {
	as?: keyof HTMLElementTagNameMap;
	attrs?: object;
}
