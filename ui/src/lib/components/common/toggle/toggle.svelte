<script lang="ts">
	/** Imports */
	import { melt } from '@melt-ui/svelte';
	import type { ToggleProps } from './toggle.js';
	import { useToggle } from '$lib/composables/toggle.js';

	/** Props */
	let { as = 'span', ...props }: ToggleProps = $props();

	const toggle = useToggle();
	const { value, on, off } = toggle.get();

	/** Determine the current state and action */
	const state: boolean = $value || props.state === 'on' ? true : false;
	const action: any = state ? off : on;
</script>

<svelte:element this={as} {...props} data-ui="toggle" use:melt={action}>
	{@render props.children()}
</svelte:element>
