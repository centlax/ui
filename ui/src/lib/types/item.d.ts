import type { HTMLAnchorAttributes } from 'svelte/elements';

export interface Item<T extends Record<string, unknown> = unknown> extends HTMLAnchorAttributes, T {
	/**
	 * Label for the link
	 */
	label?: string;

	/**
	 * Description for the link
	 */
	description?: string;

	/**
	 * Alternative property for nested links
	 */
	items?: Item<T>[];

	[key?: string]: unknown;
}
