<script lang="ts">
	/** Imports */
	import { createSwitch, createSync, melt } from '@melt-ui/svelte';
	import { _switch, type SwitchProps } from './switch.js';
	import { useUI } from '$lib/composables/ui.js';
	import { cn, co, st } from '$lib/utils/wind.js';

	/** Props */
	let { checked = $bindable(false), ...props }: SwitchProps = $props();

	const {
		elements: { root, input },
		states
	} = createSwitch();
	const sync = createSync(states);
	$effect(() => {
		sync.checked(checked, (c) => (checked = c));
	});

	/** Styles */
	const ui = useUI(_switch, props.class, props.override);
</script>

<button
	aria-label="switch"
	role="switch"
	aria-checked={checked}
	{...props}
	use:melt={$root}
	style={co(props.color)}
	class={cn(st(ui.root), ui.class)}
>
	<span data-checked={checked} class={st(ui.thumb)}>
		{@render props.children?.()}
	</span>
	<input use:melt={$input} />
</button>

<style>
	button {
		--thumb: var(--size, 1.5rem);
		--padding: calc(var(--thumb) / 10);
		--width: calc(var(--thumb) * 2);
		--heigth: calc(var(--thumb) * 1.2);
	}
</style>
