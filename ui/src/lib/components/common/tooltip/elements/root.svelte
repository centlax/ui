<script lang="ts">
	import type { TooltipContentProps } from './root.js';
	import { createTooltip, melt } from '@melt-ui/svelte';
	import { fade } from 'svelte/transition';

	let { children, ...props }: TooltipContentProps = $props();

	const {
		elements: { content, trigger },
		states: { open }
	} = createTooltip();
</script>

{@render children?.()}

{#if $open}
	<div use:melt={$content} {...props} transition:fade={{ duration: 100 }}>
		{@render props.content?.()}
	</div>
{/if}
