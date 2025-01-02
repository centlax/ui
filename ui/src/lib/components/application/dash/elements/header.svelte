<script lang="ts">
	/** Imports */
	import { type DashHeaderProps, dashHeader } from './header.js';
	import { useUI } from '$lib/composables/ui.js';
	import { cn, st } from '$lib/utils/wind.js';

	/** Props */
	let { west, east, children, ...props }: DashHeaderProps = $props();

	/** styles */
	const ui = useUI(dashHeader, props.class, props.override);
</script>

<header>
	{@render children?.()}
</header>
