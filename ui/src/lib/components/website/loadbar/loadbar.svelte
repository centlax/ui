<script lang="ts">
	/** Imports */
	import { loadbar, type LoadbarProps } from './loadbar.js';
	import { cn, st } from '$lib/utils/wind.js';
	import { useUI } from '$lib/composables/ui.js';
	import { createLoadbar } from './loadbar.svelte.js';

	/** Props */
	let { ...props }: LoadbarProps = $props();
	const _ = createLoadbar(props);

	/** Styles */
	const ui = useUI(loadbar, props.class, props.override);
</script>

<div {...props} class={cn(loadbar, st(ui.root), ui.class)}></div>
