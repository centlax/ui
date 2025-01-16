<script lang="ts">
	/** Imports */
	import { useUI } from '$lib/composables/ui.svelte.js';
	import { st, cn } from '$lib/utils/wind.js';
	import { landHeader$, type XLandHeader } from './header.js';

	/** Props */
	let { children, ...props }: XLandHeader = $props();

	/** Styles */
	const ui = useUI(landHeader$, props.class, props.override);
</script>

<header class={cn(st(ui.root), ui.class)} aria-label="global">
	<div class={st(ui.box)}>
		{@render children?.()}
	</div>
</header>

<style>
	:root {
		--ui-land-header-height: 3.5rem;
	}
</style>
