<script lang="ts">
	/** Imports */
	import type { ToKebab } from '$lib/types/utils.js';
	import { toCamel } from '$lib/utils/props.js';
	import { Collapsible as Primitive } from 'bits-ui';
	import type { XCollapseContent } from './content.js';
	import { useTransition } from '$lib/composables/transition.js';
	import { slide } from 'svelte/transition';

	/** Props */
	let { attrs, as = 'div', children, ...props }: ToKebab<XCollapseContent> = $props();

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
