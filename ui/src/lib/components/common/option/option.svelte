<script lang="ts">
	/** Imports */
	import { useUI } from '$lib/composables/ui.js';
	import { cn, st } from '$lib/utils/wind.js';
	import { melt, type Select } from '@melt-ui/svelte';
	import { option as styles, type OptionProps } from './option.js';
	import { getContext } from 'svelte';
	import { createOption } from './option.svelte.js';

	/** Props */
	let { value, label, children, ...props }: OptionProps = $props();
	const {
		elements: { option }
	} = createOption();

	/** Styles */
	const ui = useUI(styles, props.class, props.override);
</script>

<div data-selected="false" use:melt={$option({ value, label })} class={cn(st(ui.root), ui.class)}>
	{@render children?.()}
</div>
