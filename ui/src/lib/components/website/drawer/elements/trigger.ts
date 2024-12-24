/** Imports */
import type { BaseProps } from '$lib/types/prop.js';
import type { Styles } from '$lib/types/ui.js';
import type { DialogTriggerPropsWithoutHTML } from 'bits-ui';
import type { SvelteHTMLElements } from 'svelte/elements';

/** Styles */
const styles = {
	root: {}
} satisfies Styles;
export const drawerTrigger = styles;

/** Props */
type Props = Omit<SvelteHTMLElements['button'], 'class' | 'style'> &
	BaseProps<typeof drawerTrigger>;
export interface DrawerTriggerProps extends Props, DialogTriggerPropsWithoutHTML {
	id?: string;
}
