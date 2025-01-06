/** Imports */
import type { OmitBit } from '$lib/types/prop.js';
import type { CollapsibleRootProps } from 'bits-ui';

/** Props */
type Props = OmitBit<CollapsibleRootProps>;
export type XCollapseRoot = Props & {
	as?: keyof HTMLElementTagNameMap;
	attrs?: object;
};
