<script lang="ts">
	/** Imports */
	import type { ToKebab } from '$lib/types/utils.js';
	import { toCamel } from '$lib/utils/props.js';
	import { Tooltip as Primitive } from 'bits-ui';
	import type { XTooltipRoot } from './root.js';

	/** Props */
	let { open = $bindable(false), attrs, children, ...props }: ToKebab<XTooltipRoot> = $props();
</script>

<Primitive.Provider>
	<Primitive.Root bind:open {...toCamel(props)} {...attrs}>
		{@render children?.()}
	</Primitive.Root>
</Primitive.Provider>
