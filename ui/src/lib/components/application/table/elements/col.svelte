<script lang="ts">
	/** Imports */
	import { createTable } from '../table.svelte.js';
	import { type TableColProps } from './col.js';

	/** Props */
	let { ...props }: TableColProps = $props();
	const {
		elements: { col }
	} = createTable();
</script>

<col {...col(props)} />
