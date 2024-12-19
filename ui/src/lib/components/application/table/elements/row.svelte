<script lang="ts">
	/** Imports */
	import { createTable } from '../table.svelte.js';
	import { type TableRowProps } from './row.js';

	/** Props */
	let { children, ...props }: TableRowProps = $props();
	const {
		elements: { row }
	} = createTable();
</script>

<tr {...row(props)}>
	{@render children?.()}
</tr>
