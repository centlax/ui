<script lang="ts">
	/** Imports */
	import { type DashHeaderProps, dashHeader } from './header.js';
	import { useUI } from '$lib/composables/ui.js';
	import { cn, st } from '$lib/internal/utils/wind.js';

	/** Props */
	let { west, east, children, ...props }: DashHeaderProps = $props();

	/** styles */
	const ui = useUI(dashHeader, props.class, props.override);
</script>

<header class={cn(st(ui.root), ui.class)}>
	<div class={st(ui.west)}>
		{@render west?.()}
	</div>

	<div class={st(ui.center)}>
		{@render children?.()}
	</div>

	<div class={st(ui.east)}>
		{@render east?.()}
	</div>
</header>
