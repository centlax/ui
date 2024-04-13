import { HTMLAnchorAttributes } from 'svelte/elements';
export interface Link extends HTMLAnchorAttributes {
	label?: string;
	exact?: boolean;
	active?: boolean;
	description?: string;
	class?: string;
	disabled?: boolean;
	icon?: string;
	children?: Link[];
}

export interface AsideLink extends Link {
	icon?: string;
	iconClass?: string;
}

export type FooterLink = Link;
