<script lang="ts">
	/** Imports */
	import type { Snippet } from 'svelte';

	/** Props */
	let { children }: { children: Snippet } = $props();
</script>

{@render children()}
