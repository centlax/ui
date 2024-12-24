/** Imports */
import type { TransformKeysToKebab as ToKebab } from '$lib/types/utils.js';
import type { CreateAccordionProps } from '@melt-ui/svelte';
import type { AccordionRootPropsWithoutHTML, AccordionRootSinglePropsWithoutHTML } from 'bits-ui';
import type { Snippet } from 'svelte';

/** Props */
type Props = ToKebab<CreateAccordionProps>;
export interface AccordionRootProps extends AccordionRootSinglePropsWithoutHTML {
	children?: Snippet;
}
