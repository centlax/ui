<script lang="ts">
	/** Imports */
	import { type XContainer, container$ } from './container.js';
	import { useUI } from '$lib/composables/ui.svelte.js';
	import { cn, st } from '$lib/utils/wind.js';

	/** Props */
	let { children, ...props }: XContainer = $props();

	/** Styles */
	const ui = useUI(container$, props.class, props.override);
</script>

<div data-name="container" {...props} class={cn(st(ui.root), ui.class)}>
	{@render children?.()}
</div>
