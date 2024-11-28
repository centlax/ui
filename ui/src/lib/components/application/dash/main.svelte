<script lang="ts">
	/** Imports */
	import { useUI } from '$lib/composables/ui.js';
	import { cn, st } from '$lib/utils/wind.js';
	import { type DashMainProps, dashMain } from './main.js';

	/** Props */
	let { children, ...props }: DashMainProps = $props();

	/** Styles */
	const ui = useUI(dashMain, props.class, props.override);
</script>

<main class={cn(st(ui.root), ui.class)}>
	{@render children?.()}
</main>
