import type { CreateReturn } from '$lib/types/create.js';
import { createPopover as _createPopover, type CreatePopoverProps } from '@melt-ui/svelte';

export function createPopover(): CreateReturn {
	function root() {}
	function content() {}
	function trigger() {}
	function close() {}
	return {
		contents: {},
		elements: {
			root,
			content,
			trigger,
			close
		},
		options: {},
		helpers: {},
		states: {}
	};
}
