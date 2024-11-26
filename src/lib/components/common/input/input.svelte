<script lang="ts">
	/** Imports */
	import { ctxField } from '$lib/composables/form.js';
	import { useUI } from '$lib/composables/ui.js';
	import { st, cn } from '$lib/utils/wind.js';
	import { input, type InputProps } from './input.js';

	/** Props */
	let { value = $bindable(), ...props }: InputProps = $props();

	const field = ctxField();
	const has = field.has();
	const { proxy } = field.get();

	let attrs = $state({
		...props,
		...(has.proxy ? proxy.constraints : {})
	});

	/** Styles */
	const ui = useUI(input, props.class, props.override);
	let css = $state({
		input: cn(st(ui.root), ui.class)
	});

	/** Melt Context */
</script>

<input {...attrs} bind:value class={css.input} />
