import { createScrollArea, type CreateScrollAreaProps } from '@melt-ui/svelte';
import type { ScrollViewProps } from './view.js';

const defaults: CreateScrollAreaProps = {
	type: 'hover',
	hideDelay: 600,
	dir: 'ltr'
};
export function createScrollView(props: ScrollViewProps) {
	return createScrollArea({
		type: props['type'] ?? defaults['type'],
		hideDelay: props['hide-delay'] ?? defaults['hideDelay'],
		dir: props['dir'] ?? defaults['dir']
	});
}
