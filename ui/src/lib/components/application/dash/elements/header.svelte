<script lang="ts">
	/** Imports */
	import { type DashHeaderProps, dashHeader } from './header.js';
	import { useUI } from '$lib/composables/ui.js';

	/** Props */
	let { west, east, children, ...props }: DashHeaderProps = $props();

	/** styles */
	const ui = useUI(dashHeader, props.class, props.override);
</script>

<header class="sticky top-0 z-40 flex h-[--ui-dash-header-height] bg-[--ui-bg] shrink-0 items-center gap-x-6 border-b border-[--ui-border] px-4 shadow-xs sm:px-6 lg:px-8">
	{@render children?.()}
</header>

<style>
	:root {
		--ui-dash-header-height: 3rem;
	}
</style>
