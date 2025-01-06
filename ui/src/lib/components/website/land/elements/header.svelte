<script lang="ts">
	/** Imports */
	import { useUI } from '$lib/composables/ui.svelte.js';
	import { st, cn } from '$lib/utils/wind.js';
	import { siteHeader, type SiteHeaderProps } from './header.js';

	/** Props */
	let { children, ...props }: SiteHeaderProps = $props();

	/** Styles */
	const ui = useUI(siteHeader, props.class, props.override);
</script>

<header
	class="flex h-[--ui-land-header-height] items-center justify-between border-b border-[--ui-border] px-4 sm:px-6 lg:px-8"
	aria-label="global"
>
	{@render children?.()}
</header>

<style>
	:root {
		--ui-land-header-height: 4rem;
	}
</style>
