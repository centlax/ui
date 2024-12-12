import { createScrollArea } from '@melt-ui/svelte';
import type { ScrollProps } from './scroll.js';

export function createScroll(props: ScrollProps) {
	return createScrollArea({
		type: 'hover',
		dir: 'ltr'
	});
}
