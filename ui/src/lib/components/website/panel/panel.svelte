<script lang="ts">
	/** Imports */
	import { panel, type PanelProps } from './panel.js';
	import { useUI } from '$lib/composables/ui.js';
	import { st, cn } from '$lib/utils/wind.js';
	import { createPanel } from './panel.svelte.js';
	import { createSync, melt } from '@melt-ui/svelte';
	import { cubicInOut } from 'svelte/easing';
	import { crossfade } from 'svelte/transition';

	/** Props */
	let { items, value = $bindable(''), ...props }: PanelProps = $props();
	const {
		elements: { root, list, content, trigger },
		states
	} = createPanel(props);
	const sync = createSync(states);
	$effect(() => {
		sync.value(value, (v) => (value = v));
	});

	/** Styles */
	const ui = useUI(panel, props.class, props.override);

	const triggers = [
		{ id: 'tab-1', title: 'Account' },
		{ id: 'tab-2', title: 'Password' }
	];

	const [send, receive] = crossfade({
		duration: 250,
		easing: cubicInOut
	});
</script>

<div use:melt={$root} class={st(ui.root)}>
	<div use:melt={$list} class={cn(st(ui.list), ui.class)}>
		{#if items}
			{#each items as item, i (i)}
				<button use:melt={$trigger(`tab-${i + 1}`)} class={st(ui.list.trigger)}>
					{@render props.trigger?.(item)}
					{#if value === `tab-${i + 1}`}
						<div in:send={{ key: 'trigger' }} out:receive={{ key: 'trigger' }}></div>
					{/if}
				</button>
			{/each}
		{/if}
	</div>
	{#each props.tabs as tab, i (i)}
		<div class={st(ui.content)} use:melt={$content(`tab-${i + 1}`)}>
			{@render tab()}
		</div>
	{/each}
</div>
