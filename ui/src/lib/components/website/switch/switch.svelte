<script lang="ts">
	/** Imports */
	import { _switch, type SwitchProps } from './switch.js';
	import { useUI } from '$lib/composables/ui.js';
	import { cn, co, st } from '$lib/utils/wind.js';
	import { bitSwitch } from './switch.svelte.js';
	import { Switch as Primitive } from 'bits-ui';

	/** Props */
	let { checked = $bindable(false), ...props }: SwitchProps = $props();
	const {
		elements: { root, input },
		states
	} = bitSwitch(props);

	/** Styles */
	const ui = useUI(_switch, props.class, props.override);
</script>

<Primitive.Root id="button" style={co(props.color)} class={cn(st(ui.root), ui.class)}>
	{#snippet child({ props: bits })}
		<button {...bits}>
			<Primitive.Thumb children={props.children} class={st(ui.thumb)} />
		</button>
	{/snippet}
</Primitive.Root>

<style>
	button {
		--thumb: var(--size, 1.5rem);
		--padding: calc(var(--thumb) / 10);
		--width: calc(var(--thumb) * 2);
		--heigth: calc(var(--thumb) * 1.2);
	}
</style>
