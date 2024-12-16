<script lang="ts">
	/** Imports */
	import { useUI } from '$lib/composables/ui.js';
	import { st, cn } from '$lib/internal/utils/wind.js';
	import { markTable, type MarkTableProps } from './table.js';

	/** Props */
	let { ...props }: MarkTableProps = $props();

	/** Styles */
	const ui = useUI(markTable, props.class, props.override);
</script>

<div class={cn(st(ui.root), ui.class)}>
	{@render props.children?.()}
</div>
