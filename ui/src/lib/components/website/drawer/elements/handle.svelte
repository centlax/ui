<script lang="ts">
	/** Imports */
	import { Drawer as Primitive } from 'vaul-svelte';
	import { createDrawer } from '../drawer.svelte.js';
	import type { DrawerHandleProps } from './handle.js';

	/** Props */
	let { children, ...props }: DrawerHandleProps = $props();
	const {
		elements: { handle }
	} = createDrawer();
</script>

<Primitive.Handle {...handle(props)}>
	{@render children?.()}
</Primitive.Handle>
