<script lang="ts">
	import { Select as Primitive } from 'bits-ui';
	import type { Snippet } from 'svelte';
	let {
		children,
		...props
	}: {
		children?: Snippet;
	} = $props();
</script>

<Primitive.Root type="multiple" {...props}>
	{@render children?.()}
</Primitive.Root>
