<script lang="ts">
	/** Imports */
	import { useUI } from '$lib/composables/ui.js';
	import { st, cn } from '$lib/utils/wind.js';
	import { siteAside, type SiteAsideProps } from './aside.js';

	/** Props */
	let { items, ...props }: SiteAsideProps = $props();

	/** Styles */
	const ui = useUI(siteAside, props.class, props.override);
</script>

<aside class={cn(st(ui.root), ui.class)}></aside>
