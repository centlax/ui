import type { Item } from '$lib/types/item.js';

/**
 * Finds the index of the current page item based on the current URL pathname or a given string.
 *
 * @param links - An array of navigation items.
 * @param current - An optional string to use instead of `window.location.pathname`.
 * @returns The index of the matching navigation item or `-1` if no match is found.
 */
export function findCurrentPageIndex(links: Item[], current?: string): number {
	const pathname = current || window.location.pathname;
	const index = links.findIndex((item) => item.href === pathname);
	return index; // This will return -1 if no match is found.
}
