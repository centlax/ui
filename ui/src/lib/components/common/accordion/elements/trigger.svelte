<script lang="ts">
	import { Accordion as Primitive } from 'bits-ui';
	import type { AccordionTriggerProps } from './trigger.js';
	import { bitAccordion } from '../accordion.svelte.js';
	let { children, ...props }: AccordionTriggerProps = $props();

	const {
		elements: { trigger }
	} = bitAccordion();
</script>

<Primitive.Trigger {...trigger(props)}>
	{@render children?.()}
</Primitive.Trigger>
