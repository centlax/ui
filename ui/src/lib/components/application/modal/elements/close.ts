/** Imports */
import type { OmitBit } from '$lib/types/prop.js';
import type { DialogCloseProps } from 'bits-ui';

/** Props */
type Props = OmitBit<DialogCloseProps>;
export interface XModalClose extends Props {
	as?: keyof HTMLElementTagNameMap;
	attrs?: object;
}
