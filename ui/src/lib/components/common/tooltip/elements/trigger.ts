/** Imports */
import type { OmitBit } from '$lib/types/prop.js';
import type { TooltipTriggerProps } from 'bits-ui';

/** Props */
type Props = OmitBit<TooltipTriggerProps>;
export interface XTooltipTrigger extends Props {
    as?: keyof HTMLElementTagNameMap;
    attrs?: object;
}
