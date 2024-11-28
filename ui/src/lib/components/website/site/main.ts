/** Imports */
import type { BaseProps } from '$lib/types/prop.js';
import type { Styles } from '$lib/types/ui.js';
import type { Snippet } from 'svelte';
import type { SvelteHTMLElements } from 'svelte/elements';

/** Styles */
const styles = {
	root: {}
} satisfies Styles;
export const siteMain = styles;

/** Props */
type Props = Omit<SvelteHTMLElements['main'], 'class'>;
export interface SiteMainProps extends BaseProps<typeof siteMain>, Props {
	children: Snippet;
}
