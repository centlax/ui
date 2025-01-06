<script lang="ts">
	/** Imports */
	import type { ToKebab } from '$lib/types/utils.js';
	import { toCamel } from '$lib/utils/props.js';
	import { Accordion as Primitive } from 'bits-ui';
	import type { XAccordionRoot } from './root.js';

	/** Props */
	let { attrs, children, ...props }: ToKebab<XAccordionRoot> = $props();
</script>

<Primitive.Root {...toCamel(props)} {...attrs}>
	{@render children?.()}
</Primitive.Root>
