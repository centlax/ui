<script lang="ts">
	import { melt } from '@melt-ui/svelte';
	import { createRadioGroup, ctxRadioGroup } from './group.svelte.js';
	import { radioGroup, type RadioGroupProps } from './group.js';
	import { cn, st } from '$lib/utils/wind.js';
	import { useUI } from '$lib/composables/ui.js';

	let { ...props }: RadioGroupProps = $props();

	const _radioGroup = createRadioGroup(props);
	const ctx = ctxRadioGroup();
	ctx.set(_radioGroup);

	const {
		elements: { root, hiddenInput }
	} = _radioGroup;

	const ui = useUI(radioGroup, props.class, props.override);
</script>

<div {...props} use:melt={$root} class={cn(st(ui.root), ui.class)} aria-label="View density">
	{@render props.children?.()}
	<input use:melt={$hiddenInput} />
</div>
