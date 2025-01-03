import type { SvelteHTMLElements } from 'svelte/elements';

type Props = SvelteHTMLElements['button'];
export interface SheetCloseProps extends Props {
	as?: keyof HTMLElementTagNameMap;
}
