<script lang="ts">
	/** Imports */
	import { useUI } from '$lib/composables/ui.svelte.js';
	import { cn, st } from '$lib/utils/wind.js';
	import { markAsideItem, type MarkAsideItemProps } from './a-items.js';

	/** Props */
	let { children, mode = 'pine', ...props }: MarkAsideItemProps = $props();

	/** Styles */
	const ui = useUI(markAsideItem, props.class, props.override);
</script>

{@render children?.()}
