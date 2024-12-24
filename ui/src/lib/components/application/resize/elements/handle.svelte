<script lang="ts">
	/** Imports */
	import { PaneResizer as Primitive } from 'paneforge';
	import type { ResizeHandleProps } from './handle.js';
	import { createResize } from '../resize.svelte.js';

	/** Props */
	let { children, ...props }: ResizeHandleProps = $props();
	const {
		elements: { handle }
	} = createResize();
</script>

<Primitive {...handle(props)}>
	{@render children?.()}
</Primitive>
