<script lang="ts">
	/** Imports */
	import { useUI } from '$lib/composables/ui.svelte.js';
	import { cn, st } from '$lib/utils/wind.js';
	import { card$, type XCard } from './card.js';

	/** Props UCard */
	let { children, ...props }: XCard = $props();

	/** Styles */
	const ui = useUI(card$, props.class, props.override);
</script>

<div data-name="card" {...props} class={cn(st(ui.root), ui.class)}>
	{@render children?.()}
</div>
