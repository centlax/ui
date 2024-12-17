<script lang="ts">
	/** Imports */
	import { quick, type QuickProps } from './quick.js';
	import { cn, st } from '$lib/utils/wind.js';
	import { useUI } from '$lib/composables/ui.js';

	/** Props */
	let { name, ...props }: QuickProps = $props();

	/** Styles */
	const ui = useUI(quick, props.class, props.override);
</script>

<button {...props} class={cn(name, st(ui.root), ui.class)}>
	{@render props.children?.()}
</button>
