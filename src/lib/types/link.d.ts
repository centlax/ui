import { HTMLAnchorAttributes } from 'svelte/elements';
export interface Link extends HTMLAnchorAttributes {
	label?: string;
	description?: string;
	active?: boolean;
	class?: string;
	disabled?: boolean;
	icon?: string;
	children?: Link[];
}

export interface AccordionLink extends Link {
	id: string;
}
export interface AsideLink extends Link {
	icon?: string;
	iconClass?: string;
}

export type FooterLink = Link;
export type HeaderLink = Link;
