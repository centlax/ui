import type { Link } from '$lib/types/item.js';

export function findCurrentPage(links: Link[], current?: string): Link {
	const pathname = current || window.location.pathname;
	return links.find((item) => item.href === pathname) || links[0];
}
