<script lang="ts">
	/** Imports */
	import { melt } from '@melt-ui/svelte';
	import { slide } from 'svelte/transition';
	import type { CollapsibleContentProps } from './content.js';
	import { useCollapsible } from '../collapse.svelte.js';

	/** Props */
	let { as = 'div', children, ...props }: CollapsibleContentProps = $props();
	const {
		elements: { content },
		states: { open }
	} = useCollapsible();
</script>

{#if $open}
	<svelte:element this={as} use:melt={$content} {...props} transition:slide>
		{@render children?.()}
	</svelte:element>
{/if}
