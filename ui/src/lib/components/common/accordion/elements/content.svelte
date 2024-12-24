<script lang="ts">
	import { Accordion as Primitive } from 'bits-ui';
	import { createAccordion } from '../accordion.svelte.js';
	import type { AccordionContentProps } from './content.js';
	let { children, ...props }: AccordionContentProps = $props();

	const {
		elements: { content }
	} = createAccordion();
</script>

<Primitive.Content {...content(props)}>
	{@render children?.()}
</Primitive.Content>
