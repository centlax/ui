<script lang="ts">
	/** Imports */
	import { useUI } from '$lib/composables/ui.svelte.js';
	import { type DashMainProps, dashMain } from './main.js';

	/** Props */
	let { children, ...props }: DashMainProps = $props();

	/** Styles */
	const ui = useUI(dashMain, props.class, props.override);
</script>

<main class="h-full bg-[--ui-bg] p-[--ui-dash-space] xl:ml-[--ui-dash-aside-width]">
	{@render children?.()}
</main>
