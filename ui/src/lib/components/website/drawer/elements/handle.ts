/** Imports */
import type { BaseProps } from '$lib/types/prop.js';
import type { Styles } from '$lib/types/ui.js';
import type { SvelteHTMLElements } from 'svelte/elements';
import type { DrawerHandlePropsWithoutHTML } from 'vaul-svelte';

/** Styles */
const styles = {
	root: {}
} satisfies Styles;
export const drawerHandle = styles;

/** Props */
type Props = Omit<SvelteHTMLElements['div'], 'class' | 'style'> & BaseProps<typeof drawerHandle>;
export interface DrawerHandleProps extends Props, DrawerHandlePropsWithoutHTML {
	id?: string;
}
