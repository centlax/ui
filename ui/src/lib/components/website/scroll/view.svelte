<script lang="ts">
	/** Imports */
	import { melt } from '@melt-ui/svelte';
	import { createScrollView } from './scroll.svelte.js';
	import { scrollView, type ScrollViewProps } from './view.js';
	import { useUI } from '$lib/composables/ui.js';
	import { cn, st } from '$lib/internal/utils/wind.js';

	/** Props */
	let { ...props }: ScrollViewProps = $props();

	const {
		elements: { root, content, viewport, corner, scrollbarY, thumbY, thumbX, scrollbarX }
	} = createScrollView(props);

	/** Styles */
	const ui = useUI(scrollView, props.class, props.override);
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
