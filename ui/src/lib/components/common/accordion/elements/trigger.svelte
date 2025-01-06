<script lang="ts">
	/** Imports */
	import type { ToKebab } from '$lib/types/utils.js';
	import { toCamel } from '$lib/utils/props.js';
	import { Accordion as Primitive } from 'bits-ui';
	import type { XAccordionTrigger } from './trigger.js';

	/** Props */
	let { as = 'button', attrs, children, ...props }: ToKebab<XAccordionTrigger> = $props();
</script>

<Primitive.Trigger {...toCamel(props)}>
	{#snippet child({ props: bits })}
		<svelte:element this={as} {...bits} {...attrs}>
			{@render children?.()}
		</svelte:element>
	{/snippet}
</Primitive.Trigger>
