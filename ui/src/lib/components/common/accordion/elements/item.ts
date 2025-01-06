/** Imports */
import type { OmitBit } from '$lib/types/prop.js';
import type { AccordionItemProps } from 'bits-ui';

/** Props */
type Props = OmitBit<AccordionItemProps>;
export interface XAccordionItem extends Props {
	as?: keyof HTMLElementTagNameMap;
	attrs?: object;
}
