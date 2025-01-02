<script lang="ts">
	/** Imports */
	import { useUI } from '$lib/composables/ui.js';
	import { st, cn, co } from '$lib/utils/wind.js';
	import { input, type InputProps } from './root.js';

	/** Props */
	let { attrs, color = 'primary', value = $bindable(), ...props }: InputProps = $props();

	/** Styles */
	const ui = useUI(input, props.class, props.override);
	let css = $state({
		input: cn(st(ui.root), ui.class)
	});
	let node = $state(null!);

	$effect(() => {
		if (props.action) {
			props.action(node);
		}
	});
</script>

<input bind:value {...props} {...attrs} style={co(color)} class={css.input} />
