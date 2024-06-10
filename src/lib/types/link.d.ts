import { HTMLAnchorAttributes } from 'svelte/elements';
export interface Link extends HTMLAnchorAttributes {
	label?: string;
	description?: string;
	active?: boolean;
	class?: string;
	disabled?: boolean;
	icon?: string | any;
	children?: Link[];
}
