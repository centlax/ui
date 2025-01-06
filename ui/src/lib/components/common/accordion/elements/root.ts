/** Imports */
import type { OmitBit } from '$lib/types/prop.js';
import type { AccordionRootProps } from 'bits-ui';

/** Props */
type Props = OmitBit<AccordionRootProps>;
export type XAccordionRoot = Props & {
	attrs?: object;
};
