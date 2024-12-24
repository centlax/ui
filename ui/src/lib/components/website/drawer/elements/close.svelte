<script lang="ts">
	/** Imports */
	import { Drawer as Primitive } from 'vaul-svelte';
	import { createDrawer } from '../drawer.svelte.js';
	import type { DrawerCloseProps } from './close.js';

	/** Props */
	let { children, ...props }: DrawerCloseProps = $props();
	const {
		elements: { close }
	} = createDrawer();
</script>

<Primitive.Close {...close(props)}>
	{@render children?.()}
</Primitive.Close>
