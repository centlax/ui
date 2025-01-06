<script lang="ts">
	/** Imports */
	import { Drawer as Primitive } from 'vaul-svelte';
	import type { DrawerHandleProps } from './handle.js';

	/** Props */
	let { children, ...props }: DrawerHandleProps = $props();

</script>

<Primitive.Handle>
	{@render children?.()}
</Primitive.Handle>
