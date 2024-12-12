<script lang="ts">
	/** Imports */
	import { melt } from '@melt-ui/svelte';
	import { createScroll } from './scroll.svelte.js';
	import { scroll, type ScrollProps } from './scroll.js';
	import { useUI } from '$lib/composables/ui.js';
	import { cn, st } from '$lib/utils/wind.js';

	/** Props */
	let { ...props }: ScrollProps = $props();

	const {
		elements: { root, content, viewport, corner, scrollbarY, thumbY, thumbX, scrollbarX }
	} = createScroll(props);

	/** Styles */
	const ui = useUI(scroll, props.class, props.override);
</script>

<div use:melt={$root} {...props} class={cn(st(ui.root), ui.class)}>
	<div use:melt={$viewport} class={st(ui.viewport)}>
		<div use:melt={$content} class={st(ui.content)}>
			{@render props.children()}
		</div>
	</div>
	<div use:melt={$scrollbarY} class={st(ui.y.bar)}>
		<div use:melt={$thumbY} class={st(ui.y.thumb)}></div>
	</div>
	<div use:melt={$scrollbarX} class={st(ui.x.bar)}>
		<div use:melt={$thumbX} class={st(ui.x.thumb)}></div>
	</div>
	<div use:melt={$corner} class={st(ui.corner)}></div>
</div>
