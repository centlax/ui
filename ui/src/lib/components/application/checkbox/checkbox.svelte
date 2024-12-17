<script lang="ts">
	/** Imports */
	import { useUI } from '$lib/composables/ui.js';
	import { cn, co, st } from '$lib/utils/wind.js';
	import { createSync, melt } from '@melt-ui/svelte';
	import { checkbox, type CheckboxProps } from './checkbox.js';
	import { createCheckbox } from './checkbox.svelte.js';
	import { UIcon } from '$lib/components/export.js';

	/** Props */
	let { checked = $bindable(), color = 'primary', ...props }: CheckboxProps = $props();
	const {
		elements: { root, input },
		states
	} = createCheckbox(props);

	const sync = createSync(states);
	$effect(() => {
		if (checked) sync.checked(checked, (c) => (checked = c));
	});

	const {} = states;
	/** Styles */
	const ui = useUI(checkbox, props.class, props.override);
</script>

<button {...props} use:melt={$root} style={co(color)} class={cn(st(ui.root), ui.class)}>
	<UIcon data-state={$root['data-state']} name={st(ui.icon)} />
	<input use:melt={$input} />
</button>
