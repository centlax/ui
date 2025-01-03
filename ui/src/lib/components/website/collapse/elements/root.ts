/** Imports */
import type { ToKebab } from '$lib/types/utils.js';
import type { CreateCollapsibleProps } from '@melt-ui/svelte';
import type { SvelteHTMLElements } from 'svelte/elements';

/** Props */
type Props = SvelteHTMLElements['div'] & ToKebab<Omit<CreateCollapsibleProps, 'open'>>;
export interface CollapsibleRootProps extends Props {
	as?: keyof HTMLElementTagNameMap;
	open?: boolean;
}
