<script lang="ts">
	/** Imports */
	import { useUI } from '$lib/composables/ui.js';
	import { st, cn } from '$lib/internal/utils/wind.js';
	import { markLayout, type MarkLayoutProps } from './layout.js';

	/** Props */
	let { as = 'div', ...props }: MarkLayoutProps = $props();

	/** Styles */
	const ui = useUI(markLayout, props.class, props.override);
</script>

<svelte:element this={as} class={cn(st(ui.root), ui.class)}>
	{@render props.children?.()}
</svelte:element>

<style>
	:root {
		--mark-width: var(--width, 20rem);
		--mark-heigth: var(--height, 3rem);
		--mark-aside-width: calc(var(--mark-width) * 1);
		--mark-table-width: calc(var(--mark-width) * 1);
	}
</style>
