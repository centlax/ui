<script lang="ts">
	/** Imports  */
	import { fieldWarn$, type XFieldWarn } from './warn.js';
	import { useUI } from '$lib/composables/ui.svelte.js';
	import { st, cn } from '$lib/utils/wind.js';
	import { fade } from 'svelte/transition';

	/** Props  */
	let { children, attrs, ...props }: XFieldWarn = $props();

	/** Styles  */
	const ui = useUI(fieldWarn$, props.class, props.override);
</script>

<p transition:fade {...props} {...attrs} class={cn(st(ui.root), ui.class)}>
	{@render children?.()}
</p>
