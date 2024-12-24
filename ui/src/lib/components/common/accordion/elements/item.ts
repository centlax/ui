/** Imports */
import type { BaseProps } from '$lib/types/prop.js';
import type { TransformKeysToKebab as ToKebab } from '$lib/types/utils.js';
import type { Styles } from '$lib/types/ui.js';
import type { SvelteHTMLElements } from 'svelte/elements';
import type { AccordionItemProps as MeltAccordionItemProps } from '@melt-ui/svelte';
import type { Snippet } from 'svelte';
import type { AccordionItemPropsWithoutHTML } from 'bits-ui';

/** Styles */
const styles = {
	root: {}
} satisfies Styles;
export const accordionItem = styles;

/** Props */

export interface AccordionItemProps extends AccordionItemPropsWithoutHTML {
	value?: string;
	disabled?: boolean;
	childreb?: Snippet;
}
