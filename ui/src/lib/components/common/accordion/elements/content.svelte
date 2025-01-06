<script lang="ts">
	/** Imports */
	import type { ToKebab } from '$lib/types/utils.js';
	import { toCamel } from '$lib/utils/props.js';
	import { Accordion as Primitive } from 'bits-ui';
	import type { XAccordionContent } from './content.js';
	import { useTransition } from '$lib/composables/transition.svelte.js';
	import { slide } from 'svelte/transition';

	/** Props */
	let { attrs, as = 'div', children, ...props }: ToKebab<XAccordionContent> = $props();

	/** Styles */
	const transition = useTransition();
	const txn = $state(
		transition.set(props.transition, {
			duration: 200
		})
	);
</script>

<Primitive.Content {...toCamel(props)}>
	{#snippet child({ props: bits, open })}
		{#if open}
			<svelte:element this={as} in:slide={txn.in} out:slide={txn.out} {...bits} {...attrs}>
				{@render children?.()}
			</svelte:element>
		{/if}
	{/snippet}
</Primitive.Content>
