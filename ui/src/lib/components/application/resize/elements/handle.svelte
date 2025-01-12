<script lang="ts">
	/** Imports */
	import { PaneResizer as Primitive } from 'paneforge';
	import { resizeHandle$, type XResizeHandle } from './handle.js';
	import { toCamel } from '$lib/utils/props.js';
	import type { ToKebab } from '$lib/types/utils.js';
	import { useUI } from '$lib/composables/ui.svelte.js';
	import { cn, st } from '$lib/utils/wind.js';

	/** Props */
	let { children, ...props }: ToKebab<XResizeHandle> = $props();

	/** Styles  */
	const ui = useUI(resizeHandle$, props.class, props.override);
</script>

<Primitive {...toCamel(props)} class={cn(st(ui.root), ui.class)} />

<style>
	:root {
		--ui-resize-handle-size: 0.25rem;
	}
</style>
