<script lang="ts">
	/** Imports */
	import { createTable } from '../table.svelte.js';
	import { type TableHeadProps } from './head.js';

	/** Props */
	let { children, ...props }: TableHeadProps = $props();
	const {
		elements: { head }
	} = createTable();
</script>

<thead {...head(props)}>
	{@render children?.()}
</thead>
