/** Imports */
import type { BaseProps } from '$lib/types/prop.js';
import type { TransformKeysToKebab as ToKebab } from '$lib/types/utils.js';
import type { Styles } from '$lib/types/ui.js';
import type { Snippet } from 'svelte';
import type { AccordionTriggerPropsWithoutHTML } from 'bits-ui';

/** Styles */
const styles = {
	root: {}
} satisfies Styles;
export const accordionTrigger = styles;

/** Props */
export interface AccordionTriggerProps extends AccordionTriggerPropsWithoutHTML {
	children?: Snippet;
}
