<script lang="ts">
	/** Imports */
	import { useUI } from '$lib/composables/ui.svelte.js';
	import { st, cn, co } from '$lib/utils/wind.js';
	import { input$, type XInput } from './root.js';

	/** Props */
	let { attrs, color = 'primary', value = $bindable(), ...props }: XInput = $props();

	/** Styles */
	const ui = useUI(input$, props.class, props.override);
</script>

<input bind:value {...props} {...attrs} style={co(color)} class={cn(st(ui.root), ui.class)} />
