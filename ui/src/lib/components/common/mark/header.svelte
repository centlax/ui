<script lang="ts">
	/** Imports */

	import Logo from '$lib/blocks/logo.svelte';
	import { UIcon, USwitch } from '$lib/components/export.js';
	import { useDark } from '$lib/composables/dark.js';
	import { useUI } from '$lib/composables/ui.js';
	import { st, cn } from '$lib/utils/wind.js';
	import { markHeader, type MarkHeaderProps } from './header.js';

	/** Props */
	let { items, ...props }: MarkHeaderProps = $props();
	const dark = useDark();

	/** Styles */
	const ui = useUI(markHeader, props.class, props.override);
</script>

<header class={cn(st(ui.root), ui.class)}>
	{@render props.children?.()}
</header>
