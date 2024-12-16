<script lang="ts">
	/** Imports */
	import { useUI } from '$lib/composables/ui.js';
	import { st, cn, co } from '$lib/internal/utils/wind.js';
	import { getContext, hasContext } from 'svelte';
	import { input, type InputProps } from './input.js';
	import { melt } from '@melt-ui/svelte';

	/** Props */
	let { color = 'primary', value = $bindable(), ...props }: InputProps = $props();

	/** Styles */
	const ui = useUI(input, props.class, props.override);
	let css = $state({
		input: cn(st(ui.root), ui.class)
	});

	const attrs = $state({
		...props,
		style: co(color),
		class: css.input
	});
</script>

<input bind:value {...props} style={co(color)} class={css.input} />
