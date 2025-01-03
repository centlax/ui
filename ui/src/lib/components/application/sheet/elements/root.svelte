<script lang="ts">
	import { createSync } from '@melt-ui/svelte';
	import { useSheet } from '../sheet.svelte.js';
	/** Imports */
	import { type SheetRootProps } from './root.js';

	/** Props */
	let { open = $bindable(false), children }: SheetRootProps = $props();
	const { states } = useSheet(true);

	const sync = createSync(states);
	$effect(() => {
		sync.open(open, (v) => (open = v));
	});
</script>

{@render children?.()}
