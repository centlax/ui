/** Imports */
import type { FlyAndScaleParams } from '$lib/theme/transition/fly-scale.js';
import type { BaseProps, OmitBit } from '$lib/types/prop.js';
import type { TransitionParams } from '$lib/types/transition.js';
import type { Styles } from '$lib/types/ui.js';
import type { DialogContentProps } from 'bits-ui';

/** Styles */
const styles = {
    root: {
		flex: 'fixed z-50 left-[50%] top-[50%]  -translate-x-1/2 -translate-y-1/2 focus:outline-none'
	}
} satisfies Styles

export const modal$ = styles

/** Props */
type Props = OmitBit<Omit<DialogContentProps, 'class'>>;
export interface XModalContent extends Props, BaseProps<typeof modal$> {
    as?: keyof HTMLElementTagNameMap;
    attrs?: object;
    transition?: TransitionParams<FlyAndScaleParams>;
}
