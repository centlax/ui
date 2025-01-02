import { createAccordion, type CreateAccordionProps } from '@melt-ui/svelte';
import { getContext, setContext } from 'svelte';

const key = Symbol('accordion');
export function useAccordion(root: boolean = false) {
	let params = $state<CreateAccordionProps>();

	function set() {
		const accordion = createAccordion(params);
		setContext(key, accordion);
		return createAccordion();
	}

	function get() {
		return getContext<ReturnType<typeof createAccordion>>(key);
	}
	return root ? set() : get();
}
