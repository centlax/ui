<script lang="ts">
	/** Imports */
	import { st, cn } from '$lib/utils/wind.js';
	import { siteLayout, type SiteLayoutProps } from './layout.js';
	import { useUI } from '$lib/composables/ui.js';
	import Aside from './aside.svelte';

	/** Props */
	let { ...props }: SiteLayoutProps = $props();

	/** Styles */
	const ui = useUI(siteLayout, props.class, props.override);
</script>

<div id="site-layout" class={cn(st(ui.root), ui.class)} aria-label="site-layout">
	{@render props.children?.()}
</div>

<style>
	:root {
		--site-height: 5rem;
		--site-width: 25rem;
	}
</style>
