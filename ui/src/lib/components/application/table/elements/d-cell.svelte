<script lang="ts">
	/** Imports */
	import { createTable } from '../table.svelte.js';
	import { type TableDCellProps } from './d-cell.js';

	/** Props */
	let { children, ...props }: TableDCellProps = $props();
	const {
		elements: { dCell }
	} = createTable();
</script>

<td {...dCell(props)}>
	{@render children?.()}
	{props?.text}
</td>
