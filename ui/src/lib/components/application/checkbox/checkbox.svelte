<script lang="ts">
	/** Imports */
	import { useUI } from '$lib/composables/ui.js';
	import { cn, co, st } from '$lib/utils/wind.js';
	import { checkbox, type CheckboxProps } from './checkbox.js';

	/** Props */
	let { color = 'primary', ...props }: CheckboxProps = $props();

	/** Styles */
	const ui = useUI(checkbox, props.class, props.override);
</script>

<input {...props} style={co(color)} type="checkbox" class={cn(st(ui.root), ui.class)} />
