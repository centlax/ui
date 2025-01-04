<script lang="ts">
	/** Imports */
	import { useUI } from '$lib/composables/ui.js';
	import { st, cn } from '$lib/utils/wind.js';
	import { siteHeader, type SiteHeaderProps } from './header.js';

	/** Props */
	let { children, ...props }: SiteHeaderProps = $props();

	/** Styles */
	const ui = useUI(siteHeader, props.class, props.override);
</script>

<header class="border-b border-[--ui-border]" aria-label="global">
	<nav class="mx-auto flex items-center justify-between p-6 lg:px-8" aria-label="Global">
		{@render children?.()}
	</nav>
</header>
