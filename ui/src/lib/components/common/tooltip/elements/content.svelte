<script lang="ts">
	import { ctxTooltip } from '../tooltip.svelte.js';
	import type { TooltipContentProps } from './content.js';
	import { melt } from '@melt-ui/svelte';
	import { fade } from 'svelte/transition';
	let { children, ...props }: TooltipContentProps = $props();

	const ctx = ctxTooltip();
	const {
		elements: { content, arrow },
		states: { open }
	} = ctx.get();
</script>

{#if $open}
	<div
		use:melt={$content}
		{...props}
		transition:fade={{ duration: 100 }}
		class=" z-10 rounded-lg bg-white shadow"
	>
		<div use:melt={$arrow}></div>
		{@render children?.()}
	</div>
{/if}
