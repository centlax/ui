<script lang="ts">
	/** Imports  */
	import { fieldLabel$, type XFieldLabel } from './label.js';
	import { useUI } from '$lib/composables/ui.svelte.js';
	import { st, cn } from '$lib/utils/wind.js';

	/** Props  */
	let { children, attrs, ...props }: XFieldLabel = $props();

	/** Styles  */
	const ui = useUI(fieldLabel$, props.class, props.override);
</script>

	<label {...props} {...attrs} class={cn(st(ui.root), ui.class)}>
		{@render children?.()}
    </label>
