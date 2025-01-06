<script lang="ts">
	/** Imports */
	import { Drawer as Primitive } from 'vaul-svelte';
	import { drawerContent, type DrawerContentProps } from './content.js';
	import { createDrawer } from '../drawer.svelte.js';
	import { useUI } from '$lib/composables/ui.js';
	import { cn, st } from '$lib/utils/wind.js';

	/** Props */
	let { children, ...props }: DrawerContentProps = $props();
	const {
		elements: { content, overlay }
	} = createDrawer();

	/** Styles */
	const ui = useUI(drawerContent, props.class, props.override);
</script>

<Primitive.Portal>
	<Primitive.Overlay {...overlay} class={st(ui.overay)} />
	<Primitive.Content {...content(props)} class={cn(st(ui.root), ui.class)}>
		{@render children?.()}
	</Primitive.Content>
</Primitive.Portal>
