<script lang="ts">
	/** Imports */
	import { createTable } from '../table.svelte.js';
	import { type TableHCellProps } from './h-cell.js';

	/** Props */
	let { children, ...props }: TableHCellProps = $props();
	const {
		elements: { hCell }
	} = createTable();
</script>

<th {...hCell(props)}>
	{props?.text}
	{@render children?.()}
</th>
