import type { SvelteHTMLElements } from 'svelte/elements';

type Props = Omit<SvelteHTMLElements['nav'], 'class'>;

export interface SiteHeaderItemsProps extends Props {}
