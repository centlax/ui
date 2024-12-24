<script lang="ts">
	/** Imports */
	import { createTable } from '../table.svelte.js';
	import { type TableGColProps } from './c-group.js';

	/** Props */
	let { children, ...props }: TableGColProps = $props();
	const {
		elements: { gCol }
	} = createTable();
</script>

<colgroup {...gCol(props)}>
	{@render children?.()}
</colgroup>
