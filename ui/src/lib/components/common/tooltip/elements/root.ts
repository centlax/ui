/** Imports */
import type { OmitBit } from '$lib/types/prop.js';
import type { TooltipRootProps } from 'bits-ui';

/** Props */
type Props = OmitBit<TooltipRootProps>;
export type XTooltipRoot = Props & {
	attrs?: object;
};
