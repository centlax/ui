import type { CreateReturn } from '$lib/types/create.js';

export function createCombobox(): CreateReturn {
	function root() {}
	function menu() {}
	function option() {}
	function optionGroup() {}

	return {
		elements: {},
		contents: {},
		options: {},
		states: {},
		helpers: {}
	};
}
