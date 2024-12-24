<script lang="ts">
	import { Accordion as Primitive } from 'bits-ui';
	import type { AccordionTriggerProps } from './trigger.js';
	import { createAccordion } from '../accordion.svelte.js';
	let { children, ...props }: AccordionTriggerProps = $props();

	const {
		elements: { trigger }
	} = createAccordion();
</script>

<Primitive.Trigger {...trigger(props)}>
	{@render children?.()}
</Primitive.Trigger>
