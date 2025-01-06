<script lang="ts">
	/** Imports */
	import { useUI } from '$lib/composables/ui.svelte.js';
	import { createTable } from '../table.svelte.js';
	import { tableBody, type TableBodyProps } from './body.js';

	/** Props */
	let { ...props }: TableBodyProps = $props();
	const {
		elements: { body }
	} = createTable();
</script>

<tbody {...body(props)}>
	{@render props.children?.()}
</tbody>
