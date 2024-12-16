<script lang="ts">
	/** Imports */
	import { useUI } from '$lib/composables/ui.js';
	import { cn, st } from '$lib/internal/utils/wind.js';
	import { melt } from '@melt-ui/svelte';
	import { optionGroup, type OptionGroupProps } from './group.js';
	import { createOption } from './option.svelte.js';

	/** Props */
	let { id, children, ...props }: OptionGroupProps = $props();
	const {
		elements: { group }
	} = createOption();

	/** Styles */
	const ui = useUI(optionGroup, props.class, props.override);
</script>

<div class={cn(st(ui.root), ui.class)} use:melt={$group(id)}>
	{@render children?.()}
</div>
