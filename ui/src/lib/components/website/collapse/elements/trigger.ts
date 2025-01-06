/** Imports */
import type { OmitBit } from '$lib/types/prop.js';
import type { CollapsibleTriggerProps } from 'bits-ui';

/** Props */
type Props = OmitBit<CollapsibleTriggerProps>;
export interface XCollapseTrigger extends Props {
	as?: keyof HTMLElementTagNameMap;
	attrs?: object;
}
