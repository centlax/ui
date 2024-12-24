<script lang="ts">
	/** Imports */
	import { Pane as Primitive } from 'paneforge';
	import { createResize } from '../resize.svelte.js';
	import type { ResizePanelProps } from './panel.js';

	/** Props */
	let { children, ...props }: ResizePanelProps = $props();
	const {
		elements: { panel }
	} = createResize();
</script>

<Primitive {...panel(props)}>
	{@render children?.()}
</Primitive>
