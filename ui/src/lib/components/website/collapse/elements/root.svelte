<script lang="ts">
	/** Imports */
	import type { ToKebab } from '$lib/types/utils.js';
	import { toCamel } from '$lib/utils/props.js';
	import { Collapsible as Primitive } from 'bits-ui';
	import type { XCollapseRoot } from './root.js';

	/** Props */
	let {
		open = $bindable(false),
		as = 'div',
		attrs,
		children,
		...props
	}: ToKebab<XCollapseRoot> = $props();
</script>

<Primitive.Root bind:open {...toCamel(props)} {...attrs}>
	{#snippet child({ props: bits })}
		<svelte:element this={as} {...bits}>
			{@render children?.()}
		</svelte:element>
	{/snippet}
</Primitive.Root>
