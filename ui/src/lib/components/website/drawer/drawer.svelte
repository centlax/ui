<script lang="ts">
	/** Imports */
	import { Drawer } from 'vaul-svelte';
	import { drawer, type DrawerProps } from './drawer.js';
	import { createDrawer } from './drawer.svelte.js';
	import { useUI } from '$lib/composables/ui.js';
	import { cn, st } from '$lib/internal/utils/wind.js';

	/** Props */
	let { from = 'south', ...props }: DrawerProps = $props();
	const {
		elements: { root, trigger, portal, overlay, handel, content }
	} = createDrawer(props);

	/** Styles */
	const ui = useUI(drawer, props.class, props.override);
	const css = $state({
		content: cn(st(ui.content, ui.content.opt.from[from]), ui.class)
	});
</script>

<Drawer.Root {...root}>
	<Drawer.Trigger {...trigger}>
		{@render props.trigger?.()}
	</Drawer.Trigger>

	<Drawer.Portal {...portal}>
		<Drawer.Overlay {...overlay} class={st(ui.overlay)} />
		<Drawer.Content {...content} class={css.content}>
			<div class={st(ui.handel)}></div>
			{@render props.content?.()}
		</Drawer.Content>
	</Drawer.Portal>
</Drawer.Root>
