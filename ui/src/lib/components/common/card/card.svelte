<script lang="ts">
	/** Imports */
	import { useUI } from '$lib/composables/ui.js';
	import { cn, st } from '$lib/internal/utils/wind.js';
	import { card, type CardProps } from './card.js';

	/** Props */
	let { ...props }: CardProps = $props();

	/** Styles */
	const ui = useUI(card, props.class, props.override);
</script>

<div data-ui="card" {...props} class={cn(st(ui.root), ui.class)}>
	{#if props.north}
		<div class={st(ui.north)}>{@render props.north()}</div>
	{/if}
	{#if props.children}
		<div class={st(ui.center)}>{@render props.children()}</div>
	{/if}
	{#if props.south}
		<div class={st(ui.south)}>{@render props.south()}</div>
	{/if}
</div>
