<script lang="ts">
	/** Imports */
	import { createSlider, melt } from '@melt-ui/svelte';
	import { slider, type SliderProps, sliderOptions as options } from './slider.js';
	import { useUI } from '$lib/composables/ui.js';
	import { cn, co, st } from '$lib/utils/wind.js';

	/** Props */
	let { color = 'primary', ...props }: SliderProps = $props();

	const {
		elements: { root, range, thumbs, ticks },
		states
	} = createSlider({
		defaultValue: props['default-value'] ?? options['defaultValue'],
		onValueChange: props['on-value-change'],
		onValueCommitted: props['on-value-committed'],
		value: props['value'],
		min: props['min'] ?? options['min'],
		max: props['max'] ?? options['max'],
		step: props['step'] ?? options['step'],
		orientation: props['orientation'] ?? options['orientation'],
		dir: props['dir'] ?? options['dir'],
		disabled: props['disabled'] ?? options['disabled'],
		autoSort: props['auto-sort'] ?? options['autoSort'],
		rootElement: props['root-element'] ?? options['rootElement']
	});

	/** Styles */
	const ui = useUI(slider, props.class, props.override);
</script>

<span style={co(color)} use:melt={$root} class={cn(st(ui.root), ui.class)}>
	<span class={st(ui.track)}>
		<span use:melt={$range} class={st(ui.track.range)}></span>
	</span>
	{#if props.ticks}
		{#each $ticks as tick}
			<span use:melt={tick} class={st(ui.trick)}></span>
		{/each}
	{/if}

	{#each $thumbs as thumb, i}
		<span use:melt={thumb} class={st(ui.thumb)}>{i}</span>
	{/each}
</span>
