<script lang="ts">
	/** Imports */
	import { createProgress, melt } from '@melt-ui/svelte';
	import { progress, type SliderProps, progressOptions as options } from './progress.js';
	import { useUI } from '$lib/composables/ui.js';
	import { cn, co, st } from '$lib/utils/wind.js';
	import { writable } from 'svelte/store';

	/** Props */
	let { value = writable(30), color = 'primary', ...props }: SliderProps = $props();

	const {
		elements: { root },
		options: { max }
	} = createProgress({
		defaultValue: props['default-value'] ?? options['defaultValue'],
		value,
		onValueChange: props['on-value-change'],
		max: props['max'] ?? options['max']
	});

	const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
	sleep(1000).then(() => {
		value.set(75);
	});

	/** Styles */
	const ui = useUI(progress, props.class, props.override);
</script>

<div style={co(color)} use:melt={$root} class={cn(st(ui.root), ui.class)}>
	<div
		class="bg-color-500 h-full w-full rounded-full transition-transform duration-[660ms]
        ease-[cubic-bezier(0.65,0,0.35,1)]"
		style={`transform: translateX(-${100 - (100 * ($value ?? 0)) / ($max ?? 1)}%)`}
	></div>
</div>
