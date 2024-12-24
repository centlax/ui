<script lang="ts">
	import { Accordion as Primitive } from 'bits-ui';
	import { createAccordion } from '../accordion.svelte.js';
	import type { AccordionItemProps } from './item.js';
	let { children, ...props }: AccordionItemProps = $props();

	const {
		elements: { item }
	} = createAccordion();
</script>

<Primitive.Item {...item(props)}>
	{@render children?.()}
</Primitive.Item>
