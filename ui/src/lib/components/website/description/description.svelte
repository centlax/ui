<script lang="ts">
	import { useUI } from '$lib/composables/ui.js';
	import { cn, st } from '$lib/utils/wind.js';
	import { description, type DescriptionProps } from './description.js';

	/** Imports */

	/** Props */
	let { children, ...props }: DescriptionProps = $props();

	/** Styles */
	const ui = useUI(description, props.class, props.override);
</script>

<p {...props} class={cn(st(ui.root), ui.class)}>{@render children?.()}</p>
