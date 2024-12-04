<script lang="ts">
	/** Imports */
	import { createSwitch, createSync, melt } from '@melt-ui/svelte';
	import { _switch, type SwitchProps } from './switch.js';
	import { useUI } from '$lib/composables/ui.js';
	import { cn, co, st } from '$lib/utils/wind.js';

	/** Props */
	let { value = $bindable(false), ...props }: SwitchProps = $props();

	const {
		elements: { root, input },
		states
	} = createSwitch();
	const sync = createSync(states);
	$effect(() => {
		sync.checked(value, (v) => (value = v));
	});

	/** Styles */
	const ui = useUI(_switch, props.class, props.override);
</script>

<button
	aria-label="switch"
	role="switch"
	aria-checked="false"
	use:melt={$root}
	style={co(props.color)}
	class={cn(st(ui.root), ui.class)}
>
	<span data-checked={value} class={st(ui.thumb)}></span>
	<input use:melt={$input} />
</button>

<style>
	button {
		--size: 1.5rem;
		--padding: calc(var(--size) / 10);
		--width: calc(var(--size) * 2);
		--heigth: calc(var(--size) * 1.2);
	}
</style>
