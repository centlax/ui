<script lang="ts">
	/** Imports */
	import { createTable } from '../table.svelte.js';
	import { type TableFootProps } from './foot.js';

	/** Props */
	let { children, ...props }: TableFootProps = $props();
	const {
		elements: { foot }
	} = createTable();
</script>

<tfoot {...foot(props)}>
	{@render children?.()}
</tfoot>
