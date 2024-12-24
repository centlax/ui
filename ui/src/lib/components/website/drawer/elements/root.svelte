<script lang="ts">
	/** Imports */
	import { Drawer as Primitive } from 'vaul-svelte';
	import { createDrawer } from '../drawer.svelte.js';
	import type { DrawerRootProps } from './root.js';

	/** Props */
	let { children, ...props }: DrawerRootProps = $props();
	const {
		elements: { root }
	} = createDrawer();
</script>

<Primitive.Root {...root(props)}>
	{@render children?.()}
</Primitive.Root>
