<script lang="ts">
	/** Imports */
	import { label, type LabelProps } from './label.js';
	import { useUI } from '$lib/composables/ui.js';
	import { st, cn } from '$lib/utils/wind.js';

	/** Props */
	let { ...props }: LabelProps = $props();

	/** Styles */
	const ui = useUI(label, props.class, props.override);
</script>

<label {...props} for={props.for} class={cn(st(ui.root), ui.class)}>
	{@render props.children?.()}
	{props.text}
</label>
