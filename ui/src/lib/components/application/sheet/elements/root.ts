/** Imports */
import type { ToKebab } from '$lib/types/utils.js';
import type { CreateDialogProps } from '@melt-ui/svelte';
import type { Snippet } from 'svelte';

/** Props */
type Props = ToKebab<Pick<CreateDialogProps, 'onOpenChange'>>;
export interface SheetRootProps extends Props {
	children?: Snippet;
	open?: boolean;
}
