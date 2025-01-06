<script lang="ts">
	/** Imports */
	import type { ToKebab } from '$lib/types/utils.js';
	import { toCamel } from '$lib/utils/props.js';
	import { Dialog as Primitive } from 'bits-ui';
	import type { XModalClose } from './close.js';

	/** Props */
	let { as = 'button', attrs, children, ...props }: ToKebab<XModalClose> = $props();
</script>

<Primitive.Close {...toCamel(props)}>
	{#snippet child({ props: bits })}
		<svelte:element this={as} {...bits} {...attrs}>
			{@render children?.()}
		</svelte:element>
	{/snippet}
</Primitive.Close>
