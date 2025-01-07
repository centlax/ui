<script lang="ts">
	/** Imports */
	import { useUI } from '$lib/composables/ui.svelte.js';
	import { cn, st } from '$lib/utils/wind.js';
	import { tableBody$, type XTableBody } from './body.js';

	/** Props */
	let { children, attrs, ...props }: XTableBody = $props();

	/** Styles  */
	const ui = useUI(tableBody$, props.class, props.override);
</script>

<tbody {...props} {...attrs} class={cn(st(ui.root), ui.class)}>
	{@render children?.()}
</tbody>
