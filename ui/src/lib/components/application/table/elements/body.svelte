<script lang="ts">
	/** Imports */
	import { useUI } from '$lib/composables/ui.js';
	import { cn, st } from '$lib/utils/wind.js';
	import { createTable } from '../table.svelte.js';
	import { tableBody, type TableBodyProps } from './body.js';

	/** Props */
	let { ...props }: TableBodyProps = $props();
	const {
		elements: { body }
	} = createTable();

	/** Styles */
	const ui = useUI(tableBody, props.class, props.override);
</script>

<tbody {...body(props)} class={cn(st(ui.root), ui.class)}>
	{@render props.children?.()}
</tbody>
