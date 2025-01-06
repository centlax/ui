<script lang="ts">
	/** Imports */
	import type { ToKebab } from '$lib/types/utils.js';
	import { toCamel } from '$lib/utils/props.js';
	import { Accordion as Primitive } from 'bits-ui';
	import type { XAccordionItem } from './item.js';

	/** Props */
	let { as = 'div', attrs, children, ...props }: ToKebab<XAccordionItem> = $props();
</script>

<Primitive.Item {...toCamel(props)}>
	{#snippet child({ props: bits })}
		<svelte:element this={as} {...bits} {...attrs}>
			{@render children?.()}
		</svelte:element>
	{/snippet}
</Primitive.Item>
