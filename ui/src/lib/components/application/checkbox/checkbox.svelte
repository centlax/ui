<script lang="ts">
	/** Imports */
	import { useUI } from '$lib/composables/ui.js';
	import { cn, co, st } from '$lib/utils/wind.js';
	import { UIcon } from '$lib/components/export.js';
	import { Checkbox as Primitive, Label, type CheckboxRootProps } from 'bits-ui';

	/** Props */
	let { checked = $bindable(), color = 'primary', ...props }: CheckboxRootProps = $props();

	/** Styles */
	//const ui = useUI(checkbox, props.class, props.override);
	//class={cn(st(ui.root), ui.class)}
	// <UIcon data-state={$root['data-state']} name={st(ui.icon)} />
</script>

<Primitive.Root {...props} style={co(color)}></Primitive.Root>
