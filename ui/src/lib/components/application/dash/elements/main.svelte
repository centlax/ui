<script lang="ts">
	/** Imports */
	import { useUI } from '$lib/composables/ui.js';
	import { type DashMainProps, dashMain } from './main.js';

	/** Props */
	let { children, ...props }: DashMainProps = $props();

	/** Styles */
	const ui = useUI(dashMain, props.class, props.override);
</script>

<main class="xl:ml-[--ui-dash-aside-width] bg-[--ui-bg] p-[--ui-dash-space] h-full ">
	{@render children?.()}
</main>
