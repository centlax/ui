/** Imports */
import type { BaseProps } from '$lib/types/prop.js';
import type { Styles } from '$lib/types/ui.js';
import type { CollapsibleTriggerPropsWithoutHTML } from 'bits-ui';
import type { SvelteHTMLElements } from 'svelte/elements';

/** Styles */
const styles = {
	root: {}
} satisfies Styles;
export const drawerClose = styles;

/** Props */
type Props = Omit<SvelteHTMLElements['div'], 'class' | 'style'> & BaseProps<typeof drawerClose>;
export interface CollapsibleTriggerProps extends Props, CollapsibleTriggerPropsWithoutHTML {
	id?: string;
}
