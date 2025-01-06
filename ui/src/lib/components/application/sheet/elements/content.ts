/** Imports */
import type { BaseProps, OmitBit } from '$lib/types/prop.js';
import type { TransitionParams } from '$lib/types/transition.js';
import type { Styles } from '$lib/types/ui.js';
import type { DialogContentProps } from 'bits-ui';
import type { FlyParams } from 'svelte/transition';

/** Styles */
const styles = {
	root: {
		flex: 'fixed z-50',
		border: 'focus:outline-none',
		opt: {
			from: {
				top: { layout: 'inset-x-0 top-0' },
				bottom: { layout: 'inset-x-0 bottom-0' },
				left: { layout: 'inset-y-0 left-0' },
				right: { layout: 'inset-y-0 right-0' }
			}
		}
	}
} satisfies Styles
export const sheet$ = styles

/** Props */
type Props = OmitBit<Omit<DialogContentProps, 'class'>>;
export interface XSheetContent extends Props, BaseProps<typeof sheet$> {
    as?: keyof HTMLElementTagNameMap;
    attrs?: object;
    side?: 'top' | 'bottom' | 'right' | 'left';
    transition?: TransitionParams<FlyParams>;
}

/** Utils */
export const fromTransition = (dir: 'top' | 'bottom' | 'right' | 'left') => {
	const axis = dir === 'top' || dir === 'bottom' ? 'y' : 'x';
	const sign = dir === 'top' || dir === 'left' ? '-' : '';
	const value = `${sign}100%`;

	return {
		in: { [axis]: value, duration: 500, opacity: 1 },
		out: { [axis]: value, duration: 300, opacity: 1 }
	};
};
