<script lang="ts">
	/** Imports */
	import { st, cn } from '$lib/utils/wind.js';
	import { siteMain, type SiteMainProps } from './main.js';
	import { useUI } from '$lib/composables/ui.js';

	/** Props */
	let { children, ...props }: SiteMainProps = $props();

	/** Styles */
	const ui = useUI(siteMain, props.class, props.override);
</script>

<main {...props} class={cn(st(ui.root), ui.class)}>
	{@render children()}
</main>
