<script lang="ts">
	/** Imports */
	import { Accordion as Primitive } from 'bits-ui';
	import { bitAccordion } from '../accordion.svelte.js';
	import type { AccordionContentProps } from './content.js';

	/** Props */
	let { children, ...props }: AccordionContentProps = $props();
	const {
		elements: { content }
	} = bitAccordion();
</script>

<Primitive.Content {...content(props)}>
	{@render children?.()}
</Primitive.Content>
