<script lang="ts">
	/** Imports */
	import type { ToKebab } from '$lib/types/utils.js';
	import { toCamel } from '$lib/utils/props.js';
	import { Dialog as Primitive } from 'bits-ui';
	import type { XSheetRoot } from './root.js';

	/** Props */
	let { open = $bindable(false), attrs, children, ...props }: ToKebab<XSheetRoot> = $props();
</script>

<Primitive.Root bind:open {...toCamel(props)} {...attrs}>
	{@render children?.()}
</Primitive.Root>
