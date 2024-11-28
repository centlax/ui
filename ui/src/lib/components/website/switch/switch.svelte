<script lang="ts">
	/** Imports */
	import { createSwitch, createSync, melt } from '@melt-ui/svelte';
	import { cubicInOut } from 'svelte/easing';
	import { crossfade } from 'svelte/transition';
	import { _switch, type SwitchProps } from './switch.js';
	import { useUI } from '$lib/composables/ui.js';
	import { cn, st } from '$lib/utils/wind.js';

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

	let bits: boolean[] = [false, true];
	const [send, receive] = crossfade({
		duration: 250,
		easing: cubicInOut
	});

	/** Styles */
	const ui = useUI(_switch, props.class, props.override);
</script>

<button data-ui="switch" {...props} use:melt={$root} class={cn(st(ui.root), ui.class)}>
	{#each bits as bit}
		<span class={st(ui.thumb)}>
			{#if bit === value}
				<span
					class={st(ui.thumb.checked)}
					in:send={{ key: 'checked' }}
					out:receive={{ key: 'checked' }}
				>
					{@render props.children?.()}
				</span>
			{/if}
		</span>
	{/each}
	<input use:melt={$input} />
</button>
