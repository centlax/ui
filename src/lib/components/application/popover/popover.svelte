<script lang="ts">
	/** Imports */
	import { createPopover, createSync, melt } from '@melt-ui/svelte';
	import type { PopoverProps } from './popover.js';

	/** Props */
	let { value = $bindable(), ...props }: PopoverProps = $props();
	export function toggle() {
		value = !value;
	}

	/** Config */
	const {
		elements: { trigger, content, overlay, arrow },
		states
	} = createPopover({});
	const sync = createSync(states);
	$effect(() => {
		sync.open(value, (v) => (value = v));
	});

	/** UI */
</script>

{#if props.trigger}
	<div role="button" use:melt={$trigger}>
		{@render props.trigger()}
	</div>
{/if}

{#if value}
	{#if props.overlay}
		<div use:melt={$overlay}></div>
	{/if}
	<div {...props} use:melt={$content}>
		{#if props.children}
			{@render props.children()}
		{/if}
	</div>
{/if}
