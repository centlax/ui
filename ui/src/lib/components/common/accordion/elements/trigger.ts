/** Imports */
import type { OmitBit } from '$lib/types/prop.js';
import type { AccordionTriggerProps } from 'bits-ui';

/** Props */
type Props = OmitBit<AccordionTriggerProps>;
export interface XAccordionTrigger extends Props {
	as?: keyof HTMLElementTagNameMap;
	attrs?: object;
}
