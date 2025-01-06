import type { HTMLAnchorAttributes } from 'svelte/elements';

export interface ItemBase {
	/**
	 * Href for the link
	 */
	href?: HTMLAnchorAttributes['href'];
	/**
	 * Label for the link
	 */
	title?: string;
	/**
	 * Text for the link
	 */
	text?: string;
	/**
	 * Description for the link
	 */
	description?: string;
	/**
	 * Alternative property for nested links
	 */
	items?: Item<any>[]; // Use 'any' to allow items with different generic types
}

export type Item<T extends Record<string, unknown> = Record<string, unknown>> = T & ItemBase;
