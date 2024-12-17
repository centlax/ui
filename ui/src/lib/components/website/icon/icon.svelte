<script lang="ts">
	/** Imports */
	import { icon, type IconProps } from './icon.js';
	import { cn, st } from '$lib/utils/wind.js';
	import { useUI } from '$lib/composables/ui.js';

	/** Props */
	let { name, ...props }: IconProps = $props();

	/** Styles */
	const ui = useUI(icon, props.class, props.override);
</script>

<span data-ui="icon" {...props} class={cn(name, st(ui.root), ui.class)}></span>
