<script lang="ts">
	/** Imports */
	import { Pane as Primitive } from 'paneforge';
	import type { XResizePanel } from './panel.js';
	import type { ToKebab } from '$lib/types/utils.js';
	import { toCamel } from '$lib/utils/props.js';

	/** Props */
	let { children, ...props }: ToKebab<XResizePanel> = $props();
</script>

<Primitive {...toCamel(props)}>
	{@render children?.()}
</Primitive>
