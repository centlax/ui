<script lang="ts">
	/** Imports */
	import { type ContainerProps, container } from './container.js';
	import { useUI } from '$lib/composables/ui.js';
	import { cn, st } from '$lib/utils/wind.js';

	/** Props */
	let { ...props }: ContainerProps = $props();

	/** Styles */
	const ui = useUI(container, props.class, props.override);
</script>

<div id="container" data-ui="layout" {...props} class={cn(st(ui.root), ui.class)}>
	{@render props.children()}
</div>
