/** Imports */
import type { MainProps } from '$lib/types/prop.js';
import type { Styles } from '$lib/types/ui.js';
import type { ToKebab } from '$lib/types/utils.js';
import type { CreateAccordionProps } from '@melt-ui/svelte';
import type { SvelteHTMLElements } from 'svelte/elements';

/** Styles */
const styles = {
	root: {}
} satisfies Styles;
export const accordionTrigger = styles;

/** Props */
type OmitType<T> = Omit<T, 'class'>;
type Props = SvelteHTMLElements['button'];
export interface AccordionTriggerProps extends Props {
	id: string;
}
