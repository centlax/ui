import { uify, type ToStrClass } from '$lib/utils/ui.js';
import type { SvelteHTMLElements } from 'svelte/elements';
import type { AccordionContentProps } from './elements/content.js';
import type { AccordionRootProps } from './elements/root.js';
import type { BaseProps } from '$lib/types/prop.js';
import { accordionItem, type AccordionItemProps } from './elements/item.js';
import type { AccordionTriggerProps } from './elements/trigger.js';

export function createAccordion() {
	function root(props: AccordionRootProps): AccordionRootProps {
		return { ...props };
	}

	function item(props: AccordionItemProps): ToStrClass<AccordionItemProps> {
		return { ...props, class: uify(accordionItem, props.class, props.override) };
	}

	function trigger(props: AccordionTriggerProps): ToStrClass<AccordionTriggerProps> {
		return { ...props, class: '' };
	}

	function content(props: AccordionContentProps): ToStrClass<AccordionContentProps> {
		return { ...props, class: '' };
	}

	return {
		contexts: {},
		elements: {
			root,
			item,
			trigger,
			content
		}
	};
}
