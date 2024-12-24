<script lang="ts">
	/** Imports */
	import { PaneGroup as Primitive } from 'paneforge';
	import type { ResizePanelGroupProps } from './p-group.js';
	import { createResize } from '../resize.svelte.js';

	/** Props */
	let { children, ...props }: ResizePanelGroupProps = $props();
	const {
		elements: { groupPanel }
	} = createResize();
</script>

<Primitive {...groupPanel(props)}>
	{@render children?.()}
</Primitive>
