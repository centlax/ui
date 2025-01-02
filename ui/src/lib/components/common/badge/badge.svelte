<script lang="ts">
	/** Imports */
	import { type BadgeProps, badge } from './badge.js';
	import { useUI } from '$lib/composables/ui.js';
	import { st, cn } from '$lib/utils/wind.js';

	/** Props */
	let { as = 'span', ...props }: BadgeProps = $props();

	/** Styles */
	const ui = useUI(badge, props.class, props.override);
</script>

<svelte:element this={as} data-name="badge" {...props} class={cn(st(ui.root), ui.class)}>
	{@render props.children?.()}
</svelte:element>
