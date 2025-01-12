<script lang="ts">
	/** Imports */
	import * as Primitive from 'paneforge';
	import type { XResizePGroup } from './p-group.js';
	import type { ToKebab } from '$lib/types/utils.js';
	import { toCamel } from '$lib/utils/props.js';

	/** Props */
	let { children, ...props }: ToKebab<XResizePGroup> = $props();
</script>

<Primitive.Pane class="w-full">
	<Primitive.PaneGroup class="min-h-[20rem]" {...toCamel(props)}>
		{@render children?.()}
	</Primitive.PaneGroup>
</Primitive.Pane>
