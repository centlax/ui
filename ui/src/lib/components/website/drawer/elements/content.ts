/** Imports */
import type { BaseProps } from '$lib/types/prop.js';
import type { Styles } from '$lib/types/ui.js';
import type { SvelteHTMLElements } from 'svelte/elements';
import type {
	DrawerContentPropsWithoutHTML,
	DrawerOverlayPropsWithoutHTML,
	DrawerPortalPropsWithoutHTML
} from 'vaul-svelte';

/** Styles */
const styles = {
	root: {},
	overay: {}
} satisfies Styles;
export const drawerContent = styles;

/** Props */
export type DrawerPortalProps = DrawerPortalPropsWithoutHTML;
type Props = Omit<SvelteHTMLElements['div'], 'class' | 'style'> & BaseProps<typeof drawerContent>;
export interface DrawerContentProps extends Props, DrawerContentPropsWithoutHTML {
	id?: string;
}

export interface DrawerOverlayProps
	extends Omit<SvelteHTMLElements['div'], 'class' | 'style'>,
		DrawerOverlayPropsWithoutHTML {
	id?: string;
}
