<script lang="ts">
	/** Imports */
	import { PaneGroup as Primitive } from 'paneforge';
	import type { XResizeLayout } from './layout.js';
	import type { ToKebab } from '$lib/types/utils.js';
	import { toCamel } from '$lib/utils/props.js';

	/** Props */
	let { children, direction = 'horizontal', ...props }: ToKebab<XResizeLayout> = $props();
</script>

<Primitive {...toCamel(props)} {direction}>
	{@render children?.()}
</Primitive>
