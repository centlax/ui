<script lang="ts">
	/** Imports */
	import { Popover as Primitive } from 'bits-ui';
	import type { PopoverContent } from './content.js';
	import { bitPopover } from '../popover.svelte.js';

	/** Props */
	let { children, ...props }: PopoverContent = $props();
	const {
		elements: { content }
	} = bitPopover();
</script>

<Primitive.Content {...content(props)}>
	{@render children?.()}
	<Primitive.Arrow />
</Primitive.Content>
