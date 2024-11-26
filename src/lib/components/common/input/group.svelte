<script lang="ts">
	/** Imports */
	import type { InputGroupProps } from './group.js';

	/** Props */
	let { ...props }: InputGroupProps = $props();

	/** Styles */
</script>

<div {...props}>
	{#if props.children}
		{@render props.children()}
	{/if}
</div>
