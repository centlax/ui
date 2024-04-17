<script lang="ts">
	import { createPopover, melt } from '@melt-ui/svelte';
	import { fade } from 'svelte/transition';
	import { backUI, overUI } from '$lib/theme/overlay.js';
	import { twJoin } from 'tailwind-merge';
	import type { Floating } from '$lib/types/index.d.js';
	// props
	export let state: 'open' | 'close' = 'close';
	export let value: boolean = false;
	export let as: string = 'div';
	export let placement = 'bottom' as keyof Floating['placement'];
	export let arrow: boolean = false;
	export let overlay: boolean = false;
	export let prevent_scroll: boolean = true;
	export let arrow_size: number = 8;
	export let outer_close: boolean = true;
	export let portal: string | HTMLElement | null = 'body';
	let classProp: string = '';
	export { classProp as class };
	// config

	const {
		elements: { trigger, content, overlay: _overlay, arrow: _arrow, close },
		states: { open }
	} = createPopover({
		forceVisible: true,
		preventScroll: prevent_scroll,
		arrowSize: arrow_size,
		closeOnOutsideClick: outer_close,
		portal: portal,
		onOpenChange: ({ next }) => {
			return (value = next);
		},
		positioning: placement
	});
	$: $open = value;
</script>

<svelte:element this={as} use:melt={$trigger}>
	<slot {state} />
</svelte:element>

{#if $open}
	{#if overlay}
		<div use:melt={$_overlay} transition:fade={{ duration: 150 }} class={overUI.base} />
	{/if}

	<div use:melt={$content} transition:fade={{ duration: 100 }} class={twJoin('z-50', classProp)}>
		{#if arrow}
			<div class="arrow" use:melt={$_arrow} />
		{/if}
		<slot name="content" />
		<div use:melt={$close}>
			<slot name="close" />
		</div>
	</div>
{/if}
