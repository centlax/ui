<script lang="ts">
	/** Imports */
	import { useUI } from '$lib/composables/ui.svelte.js';
	import { st, cn } from '$lib/utils/wind.js';
	import { inputGroup$, type XInputGroup } from './group.js';

	/** Props */
	let { children, attrs, ...props }: XInputGroup = $props();

	/** Styles */
	const ui = useUI(inputGroup$, props.class, props.override);
</script>

<div {...props} {...attrs} class={cn(st(ui.root), ui.class)}>
	{@render children?.()}
</div>
