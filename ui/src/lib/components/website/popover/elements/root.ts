/** Imports */
import type { OmitBit } from '$lib/types/prop.js';
import type { PopoverRootProps } from 'bits-ui';

/** Props */
type Props = OmitBit<PopoverRootProps>;
export type XPopoverRoot = Props & {
	attrs?: object;
};
