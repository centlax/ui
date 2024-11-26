<script lang="ts">
	/** Imports */
	import { st, cn } from '$lib/utils/wind.js';
	import { siteLayout, type SiteLayoutProps } from './layout.js';
	import { useUI } from '$lib/composables/ui.js';

	/** Props */
	let { ...props }: SiteLayoutProps = $props();

	/** Styles */
	const ui = useUI(siteLayout, props.class, props.override);
</script>

<div class={cn(st(ui.root), ui.class)} aria-label="Global">
	{@render props.children?.()}
</div>
