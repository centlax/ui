import { createTableOfContents } from '@melt-ui/svelte';
import type { MarkTableProps } from './table.js';

export function createMarkTable(props: MarkTableProps) {
	return createTableOfContents({
		selector: props['selector'],
		exclude: props['exclude'],
		scrollOffset: props['scroll-offset'],
		scrollBehaviour: props['scroll-behaviour'],
		activeType: props['active-type'],
		headingFilterFn: props['heading-filter-fn'],
		scrollFn: props['scroll-fn'],
		pushStateFn: props['push-state-fn']
	});
}
