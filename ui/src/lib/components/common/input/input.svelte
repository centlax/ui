<script lang="ts">
	/** Imports */
	import { useUI } from '$lib/composables/ui.js';
	import { st, cn, co } from '$lib/utils/wind.js';
	import { input, type InputProps } from './input.js';

	/** Props */
	let { color = 'primary', value = $bindable(), ...props }: InputProps = $props();

	/** Styles */
	const ui = useUI(input, props.class, props.override);
	let css = $state({
		input: cn(st(ui.root), ui.class)
	});
</script>

<input {...props} style={co(color)} bind:value class={css.input} />
