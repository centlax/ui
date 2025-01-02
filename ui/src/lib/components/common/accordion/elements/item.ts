/** Imports */
import type { TransformKeysToKebab as ToKebab } from '$lib/types/utils.js';
import type { Styles } from '$lib/types/ui.js';
import type { SvelteHTMLElements } from 'svelte/elements';
import type { CreateAccordionProps } from '@melt-ui/svelte';

/** Styles */
const styles = {
	root: {}
} satisfies Styles;
export const accordionItem = styles;

/** Props */

type Props = SvelteHTMLElements['div'];
export interface AccordionItemProps extends Props {
	id: string;
}
