<script lang="ts">
	/** Imports */
	import { createTable } from '../table.svelte.js';
	import { type TableCaptionProps } from './caption.js';

	/** Props */
	let { children, ...props }: TableCaptionProps = $props();
	const {
		elements: { caption }
	} = createTable();
</script>

<caption {...caption(props)}>
	{@render children?.()}
	{props.text}
</caption>
