/** Imports */
import type { ToKebab } from '$lib/types/utils.js';
import type { CreateAccordionProps } from '@melt-ui/svelte';
import type { SvelteHTMLElements } from 'svelte/elements';

/** Props */
type OmitType<T> = Omit<T, 'class'>;
type Props = SvelteHTMLElements['div'] & ToKebab<CreateAccordionProps>;
export interface AccordionRootProps extends Props {}
