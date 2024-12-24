/** Imports */
import type { BaseProps } from '$lib/types/prop.js';
import type { Styles } from '$lib/types/ui.js';
import type { SvelteHTMLElements } from 'svelte/elements';
import type {
	DrawerOverlayPropsWithoutHTML,
	DrawerPortalPropsWithoutHTML,
	DrawerRootPropsWithoutHTML
} from 'vaul-svelte';

/** Styles */
const styles = {
	root: {}
} satisfies Styles;
export const drawerRoot = styles;

/** Props */

type Props = Omit<SvelteHTMLElements['div'], 'class' | 'style'> & BaseProps<typeof drawerRoot>;
export type DrawerRootProps = Props & DrawerRootPropsWithoutHTML;
