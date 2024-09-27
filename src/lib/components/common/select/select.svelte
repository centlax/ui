<script lang="ts">
	import type { Snippet } from 'svelte';

	/** Imports */
	/** Props */
	let { children }: { children: Snippet } = $props();
</script>

{@render children()}
