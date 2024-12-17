<script lang="ts" generics="Multiple extends boolean = false">
	/** Imports */
	import { kbd, type KbdProps } from './kbd.js';
	import { cn, st } from '$lib/utils/wind.js';
	import { useUI } from '$lib/composables/ui.js';

	/** Props */
	let { ...props }: KbdProps<Multiple> = $props();

	/** Styles */
	const ui = useUI(kbd, props.class, props.override);
</script>

<kbd class={cn(st(ui.root), ui.class)}>
	{#if props['multiple']}
		{#each props.value as val}
			{val}
		{/each}
	{:else}
		{props.value}
	{/if}
</kbd>
