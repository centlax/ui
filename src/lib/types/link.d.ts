import type { HTMLAnchorAttributes } from 'svelte/elements';
export type Link = {
	label?: string;
	description?: string;
	active?: boolean;
	class?: string;
	disabled?: boolean;
	icon?: string | unknown;
	links?: Link[];
} & HTMLAnchorAttributes;

export type AccordionLink = Omit<Link, 'id'> & {
	id: string; // Make `id` required
};
