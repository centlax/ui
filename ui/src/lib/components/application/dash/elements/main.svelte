<script lang="ts">
	/** Imports */
	import { useUI } from '$lib/composables/ui.js';
	import { type DashMainProps, dashMain } from './main.js';

	/** Props */
	let { children, ...props }: DashMainProps = $props();

	/** Styles */
	const ui = useUI(dashMain, props.class, props.override);
</script>

<main>
	{@render children?.()}
</main>
