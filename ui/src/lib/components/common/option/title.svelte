<script lang="ts">
	/** Imports */
	import { useUI } from '$lib/composables/ui.js';
	import { cn, st } from '$lib/utils/wind.js';
	import { melt } from '@melt-ui/svelte';
	import { optionTitle, type OptionTitleProps } from './title.js';
	import { createOption } from './option.svelte.js';

	/** Props */
	let { id, text, children, ...props }: OptionTitleProps = $props();
	const {
		elements: { title }
	} = createOption();

	/** Styles */
	const ui = useUI(optionTitle, props.class, props.override);
</script>

<h3 class={cn(st(ui.root), ui.class)} use:melt={$title(id || 'random')}>
	{@render children?.()}
	{text}
</h3>
