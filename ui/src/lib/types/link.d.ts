import type { HTMLAnchorAttributes } from 'svelte/elements';
export type Link = {
	label?: string;
	title?: Link['title'];
	description?: string;
	content?: Link['children'];
	active?: boolean;
	class?: string;
	disabled?: boolean;
	icon?: string | unknown;
	links?: Link[];
	children?: Link['links'];
} & HTMLAnchorAttributes;

export type AccordionLink = Omit<Link, 'id'> & {
	id: string; // Make `id` required
};
