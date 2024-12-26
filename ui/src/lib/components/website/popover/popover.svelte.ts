import { toCamel } from '$lib/utils/props.js';
import type { PopoverContent } from './elements/content.js';

export function bitPopover() {
	function root(props: any) {
		return props;
	}
	function content(props: PopoverContent) {
		return toCamel(props);
	}
	function trigger(props: any) {
		return props;
	}

	return {
		contents: {},
		elements: {
			root,
			content,
			trigger
		},
		options: {},
		helpers: {},
		states: {}
	};
}
