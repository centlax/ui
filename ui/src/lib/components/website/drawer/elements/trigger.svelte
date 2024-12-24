<script lang="ts">
	/** Imports */
	import { Drawer as Primitive } from 'vaul-svelte';
	import { createDrawer } from '../drawer.svelte.js';
	import type { DrawerTriggerProps } from './trigger.js';

	/** Props */
	let { children, ...props }: DrawerTriggerProps = $props();
	const {
		elements: { trigger }
	} = createDrawer();
</script>

<Primitive.Trigger {...trigger(props)}>
	{@render children?.()}
</Primitive.Trigger>
