import type { SvelteHTMLElements } from 'svelte/elements';

type Props = Omit<SvelteHTMLElements['aside'], 'class'>;
export interface SiteHeaderEast extends Props {}
