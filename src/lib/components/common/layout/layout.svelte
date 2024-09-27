<script lang="ts">
	/** Imports */
	import { ModeWatcher } from 'mode-watcher';
	import type { Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();
</script>

<ModeWatcher />
{@render children()}
