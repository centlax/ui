<script lang="ts">
	/** Imports */
	import { createTable } from '../table.svelte.js';
	import { type TableRootProps } from './root.js';

	/** Props */
	let { children, ...props }: TableRootProps = $props();
	const {
		elements: { root }
	} = createTable();
</script>

<table {...root(props)}>
	{@render children?.()}
</table>
