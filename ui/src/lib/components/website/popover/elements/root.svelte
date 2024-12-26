<script lang="ts">
	/** Imports */
	import { Popover as Primitive } from 'bits-ui';
	import type { PopoverRoot } from './root.js';
	import { bitPopover } from '../popover.svelte.js';

	/** Props */
	let { children, ...props }: PopoverRoot = $props();
	const {
		elements: { root }
	} = bitPopover();
</script>

<Primitive.Root {...root(props)}>
	{@render children?.()}
</Primitive.Root>
