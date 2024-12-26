/** Imports */
import type { BaseProps } from '$lib/types/prop.js';
import type { Styles } from '$lib/types/ui.js';
import type { ToKebab } from '$lib/types/utils.js';
import type { PopoverContentPropsWithoutHTML, WithoutChildrenOrChild } from 'bits-ui';
import type { SvelteHTMLElements } from 'svelte/elements';

/** Styles */
const styles = {
	root: {
		spacing: '-mx-2 space-y-2'
	}
} satisfies Styles;
export const siteAsideItem = styles;

/** Props */
type Props = Omit<SvelteHTMLElements['button'], 'class' | 'style' | 'dir'> &
	BaseProps<typeof siteAsideItem>;
type BitProps = ToKebab<WithoutChildrenOrChild<PopoverContentPropsWithoutHTML>>;
export interface PopoverTrigger extends Props, BitProps {}
