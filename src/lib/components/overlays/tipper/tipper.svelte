<script lang="ts">
	import { backUI } from '$lib/theme/overlay.js';
	import { createTooltip, melt } from '@melt-ui/svelte';
	import type { Floating } from '$lib/types/index.d.js';
	import { fade } from 'svelte/transition';
	import { twJoin } from 'tailwind-merge';
	// props
	let classProp: string = '';
	export { classProp as class };
	export let as: string = 'div';
	export let state: 'open' | 'close' = 'close';
	export let value: boolean = false;
	export let placement: Floating['placement'] = 'top';
	// config
	const {
		elements: { trigger, content, arrow },
		states: { open }
	} = createTooltip({
		positioning: {
			placement: placement
		},
		openDelay: 0,
		closeDelay: 0,
		closeOnPointerDown: false,
		forceVisible: true,
		onOpenChange: ({ next }) => {
			return (value = next);
		}
	});
	$: state = $open ? 'open' : 'close';
</script>

<svelte:element this={as} use:melt={$trigger} aria-label="Add">
	<slot {state} />
</svelte:element>

{#if $open}
	<div use:melt={$content} transition:fade={{ duration: 100 }} class={twJoin('z-50', classProp)}>
		<div use:melt={$arrow} />
		<slot name="content" />
	</div>
{/if}
