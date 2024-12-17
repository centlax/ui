<script lang="ts">
	import { melt } from '@melt-ui/svelte';
	import { ctxRadioGroup } from './group.svelte.js';
	import { radio, type RadioProps } from './radio.js';
	import { useUI } from '$lib/composables/ui.js';
	import { cn, st } from '$lib/utils/wind.js';

	let { ...props }: RadioProps = $props();

	const ctx = ctxRadioGroup();
	const {
		elements: { item },
		helpers: { isChecked }
	} = ctx.get();

	const ui = useUI(radio, props.class, props.override);
</script>

<button
	{...props}
	use:melt={$item(props['value'])}
	class={cn(st(ui.root), ui.class)}
	id={props['value']}
	aria-label={props['value']}
>
	{#if $isChecked(props['value'])}
		<div class="bg-primary-500 h-3 w-3 rounded-full"></div>
	{/if}
	{@render props.children?.()}
</button>
