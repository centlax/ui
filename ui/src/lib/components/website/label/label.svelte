<script lang="ts">
	/** Imports */
	import { label, type LabelProps } from './label.js';
	import { useUI } from '$lib/composables/ui.js';
	import { st, cn } from '$lib/utils/wind.js';
	import { createLabel } from './label.svelte.js';
	import { melt } from '@melt-ui/svelte';

	/** Props */
	let { ...props }: LabelProps = $props();
	const {
		elements: { root }
	} = createLabel(props);

	/** Styles */
	const ui = useUI(label, props.class, props.override);
</script>

<label {...props} use:melt={$root} for={props.for} class={cn(st(ui.root), ui.class)}>
	{@render props.children?.()}
	{props.text}
</label>
