import { createPagination as _createPagination, type CreatePaginationProps } from '@melt-ui/svelte';
import type { PaginationProps } from './pagination.js';

const defaults: CreatePaginationProps = {
	count: 5,
	perPage: 1,
	siblingCount: 1,
	defaultPage: 1
};

export function createPagination(props: PaginationProps) {
	return _createPagination({
		count: props['count'] ?? defaults['count'],
		perPage: props['per-page'] ?? defaults['perPage'],
		defaultPage: props['sibling-count'] ?? defaults['siblingCount'],
		siblingCount: props['sibling-count'] ?? defaults['siblingCount'],
		onPageChange: props['on-page-change']
	});
}
