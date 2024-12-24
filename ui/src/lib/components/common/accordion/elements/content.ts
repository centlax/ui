/** Imports */
import type { BaseProps } from '$lib/types/prop.js';
import type { TransformKeysToKebab as ToKebab } from '$lib/types/utils.js';
import type { Styles } from '$lib/types/ui.js';
import type { Snippet } from 'svelte';
import type { SvelteHTMLElements } from 'svelte/elements';
import type { AccordionContentPropsWithoutHTML } from 'bits-ui';

/** Styles */
const styles = {
	root: {}
} satisfies Styles;
export const accordionContent = styles;

/** Props */
type OmitType<T> = Omit<T, 'class'>;
type Props = ToKebab<OmitType<SvelteHTMLElements['div']>> & Record<string, any>;
export interface AccordionContentProps extends AccordionContentPropsWithoutHTML {}
