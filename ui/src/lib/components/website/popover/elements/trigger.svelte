<script lang="ts">
	/** Imports */
	import { Popover as Primitive } from 'bits-ui';
	import type { PopoverTrigger } from './trigger.js';
	import { bitPopover } from '../popover.svelte.js';

	/** Props */
	let { children, ...props }: PopoverTrigger = $props();
	const {
		elements: { trigger }
	} = bitPopover();
</script>

<Primitive.Trigger {...trigger(props)}>
	{@render children?.()}
</Primitive.Trigger>
