<script lang="ts">
	/** Imports */
	import { _switch, type SwitchProps } from './switch.js';
	import { useUI } from '$lib/composables/ui.svelte.js';
	import { cn, co, st } from '$lib/utils/wind.js';
	import { bitSwitch } from './switch.svelte.js';

	/** Props */
	let { checked = $bindable(false), ...props }: SwitchProps = $props();

	/** Styles */
	const ui = useUI(_switch, props.class, props.override);
</script>

<button> edf </button>

<style>
	button {
		--thumb: var(--size, 1.5rem);
		--padding: calc(var(--thumb) / 10);
		--width: calc(var(--thumb) * 2);
		--heigth: calc(var(--thumb) * 1.2);
	}
</style>
