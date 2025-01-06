import type { SvelteHTMLElements } from 'svelte/elements';

type Props = Omit<SvelteHTMLElements['div'], 'class'>;

export interface SiteHeaderWestProps extends Props {
	'on-open-aside'?: SvelteHTMLElements['button']['onclick'];
}
