<script lang="ts">
	/** Imports */
	import type { ToKebab } from '$lib/types/utils.js';
	import { toCamel } from '$lib/utils/props.js';
	import { Tooltip as Primitive } from 'bits-ui';
	import type { XTooltipContent } from './content.js';
	import { useTransition } from '$lib/composables/transition.svelte.js';
	import { fade } from 'svelte/transition';

	/** Props */
	let { attrs, as = 'div', children, ...props }: ToKebab<XTooltipContent> = $props();

	/** Styles */
	const transition = useTransition();
	const txn = $state(
		transition.set(props.transition, {
			duration: 200
		})
	);
</script>

<Primitive.Portal>
	<Primitive.Content forceMount {...toCamel(props)}>
		{#snippet child({ props: bits, open })}
			{#if open}
				<svelte:element this={as} in:fade={txn.in} out:fade={txn.out} {...bits} {...attrs}>
					{@render children?.()}
				</svelte:element>
			{/if}
		{/snippet}
	</Primitive.Content>
</Primitive.Portal>
