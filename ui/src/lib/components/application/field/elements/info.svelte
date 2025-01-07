<script lang="ts">
	/** Imports  */
	import { fieldInfo$, type XFieldInfo } from './info.js';
	import { useUI } from '$lib/composables/ui.svelte.js';
	import { st, cn } from '$lib/utils/wind.js';
	import { fade } from 'svelte/transition';

	/** Props  */
	let { children, attrs, ...props }: XFieldInfo = $props();

	/** Styles  */
	const ui = useUI(fieldInfo$, props.class, props.override);
</script>

	<p transition:fade {...props} {...attrs} class={cn(st(ui.root), ui.class)}>
		{@render children?.()}
	</p>
