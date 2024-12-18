import { createAccordion as _createAccordion, type Accordion } from '@melt-ui/svelte';
import { type AccordionProps } from './accordion.js';
import { getContext, hasContext, setContext } from 'svelte';

const defaults = {
	multiple: false,
	disabled: false,
	forceVisible: false
};

export function createAccordion<Multiple extends boolean = false>(
	props: AccordionProps<Multiple>
): Accordion<Multiple> {
	return _createAccordion<Multiple>({
		multiple: props['multiple'] ?? (defaults['multiple'] as Multiple),
		disabled: props['disabled'] ?? defaults['disabled'],
		forceVisible: props['force-visible'] ?? defaults['forceVisible'],
		defaultValue: props['default-value'],
		onValueChange: props['on-value-change']
	});
}

export function ctxAccordion() {
	const key = Symbol('accordion');
	function set(accordion: Accordion) {
		setContext(key, accordion);
	}
	function get(): Accordion {
		return getContext<Accordion>(key);
	}

	function has(): boolean {
		return hasContext(key);
	}

	return {
		set,
		get,
		has
	};
}
