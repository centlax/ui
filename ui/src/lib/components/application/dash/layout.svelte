<script lang="ts">
	/** Imports */
	import { useUI } from '$lib/composables/ui.js';
	import { st, cn } from '$lib/utils/wind.js';
	import { dashLayout, type DashLayoutProps } from './layout.js';

	/** Props */
	let { ...props }: DashLayoutProps = $props();

	/** styles */
	const ui = useUI(dashLayout, props.class, props.override);
</script>

<div id="dash-layout" class={cn(st(ui.root), ui.class)}>
	{@render props.children?.()}
</div>

<style>
	:root {
		--dash-width: 20rem;
		--dash-height: 4rem;
	}
</style>
