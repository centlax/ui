import type { HTMLAnchorAttributes } from 'svelte/elements';

export interface Item<T extends Record<string, unknown> = unknown> extends T {
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
	items?: Item<T>[];
}
