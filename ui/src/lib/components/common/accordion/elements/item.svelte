<script lang="ts">
	import { Accordion as Primitive } from 'bits-ui';
	import { bitAccordion } from '../accordion.svelte.js';
	import type { AccordionItemProps } from './item.js';
	let { children, ...props }: AccordionItemProps = $props();

	const {
		elements: { item }
	} = bitAccordion();
</script>

<Primitive.Item {...item(props)}>
	{@render children?.()}
</Primitive.Item>
