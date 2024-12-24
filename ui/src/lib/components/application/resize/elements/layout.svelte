<script lang="ts">
	/** Imports */
	import { PaneGroup as Primitive } from 'paneforge';
	import { createResize } from '../resize.svelte.js';
	import type { ResizeLayoutProps } from './layout.js';

	/** Props */
	let { children, ...props }: ResizeLayoutProps = $props();
	const {
		elements: { handle }
	} = createResize();
</script>

<Primitive {...handle(props)}>
	{@render children?.()}
</Primitive>
