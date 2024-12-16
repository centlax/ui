<script lang="ts">
	/** Imports */
	import { useUI } from '$lib/composables/ui.js';
	import { st, cn } from '$lib/internal/utils/wind.js';
	import { inputGroup, type InputGroupProps } from './group.js';

	/** Props */
	let { ...props }: InputGroupProps = $props();

	/** Styles */
	const ui = useUI(inputGroup, props.class, props.override);

	/** Melt Context */
</script>

<div {...props} class={cn(st(ui.root), ui.class)}>
	{@render props.children?.()}
</div>
