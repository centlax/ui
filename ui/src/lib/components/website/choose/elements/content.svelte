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

<Primitive.Portal>
	<Primitive.Content {...props}>
		<Primitive.ScrollUpButton />
		<Primitive.Viewport>
			{@render children?.()}
		</Primitive.Viewport>
		<Primitive.ScrollDownButton />
	</Primitive.Content>
</Primitive.Portal>
