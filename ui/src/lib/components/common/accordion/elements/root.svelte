<script lang="ts">
	import { Accordion as Primitive } from 'bits-ui';
	import { bitAccordion } from '../accordion.svelte.js';
	import type { AccordionRootProps } from './root.js';
	let { children, ...props }: AccordionRootProps = $props();

	const {
		elements: { root }
	} = bitAccordion();
</script>

<Primitive.Root {...root(props)}>
	{#snippet child({ props: bits })}
		<div {...bits}>
			{@render children?.()}
		</div>
	{/snippet}
</Primitive.Root>
