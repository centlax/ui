<script lang="ts">
	/** Imports */
	import { type BadgeProps, badge } from './badge.js';
	import { useUI } from '$lib/composables/ui.js';
	import { st, cn } from '$lib/utils/wind.js';

	/** Props */
	let { ...props }: BadgeProps = $props();

	/** Styles */
	const ui = useUI(badge, props.class, props.override);
</script>

<span data-ui="badge" {...props} class={cn(st(ui.root), ui.class)}>
	{@render props.children?.()}
</span>
