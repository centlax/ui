<script lang="ts">
	/** Imports */
	import { createDialog, createSync, melt } from '@melt-ui/svelte';
	import { fade, fly } from 'svelte/transition';
	import { type SheetProps } from './sheet.js';

	/** Props */
	let { value = $bindable(false), ...props }: SheetProps = $props();

	/** Config */
	const {
		elements: { overlay, content, portalled, trigger },
		states
	} = createDialog();
	const sync = createSync(states);
	$effect(() => {
		sync.open(value, (v) => (value = v));
	});
</script>

{#if props.trigger}
	<div role="button" use:melt={$trigger}>
		{@render props.trigger()}
	</div>
{/if}

{#if value}
	<div use:melt={$portalled}>
		<div use:melt={$overlay} transition:fade></div>
		<div {...props} use:melt={$content} transition:fly>
			{#if props.children}
				{@render props.children()}
			{/if}
		</div>
	</div>
{/if}
