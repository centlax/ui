/** Imports */
import type { OmitBit } from '$lib/types/prop.js';
import type { DialogTriggerProps } from 'bits-ui';

/** Props */
type Props = OmitBit<DialogTriggerProps>;
export interface XSheetTrigger extends Props {
    as?: keyof HTMLElementTagNameMap;
    attrs?: object;
}
