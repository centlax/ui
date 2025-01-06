/** Imports */
import type { OmitBit } from '$lib/types/prop.js';
import type { DialogRootProps } from 'bits-ui';

/** Props */
type Props = OmitBit<DialogRootProps>;
export type XModalRoot = Props & {
	attrs?: object;
};
