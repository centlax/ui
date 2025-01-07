<script lang="ts">
	/** Imports */
	import { useUI } from '$lib/composables/ui.svelte.js';
	import { UIcon } from '$lib/index.js';
	import { cn, st } from '$lib/utils/wind.js';
	import { dashANorth$, type XDashANorth } from './a-north.js';

	/** Props */
	let { emblem, attrs, ...props }: XDashANorth = $props();

	/** Styles */
	const ui = useUI(dashANorth$, props.class, props.override);
</script>

<div class="flex h-[--ui-dash-header-height] shrink-0 items-center bg-inherit">
	{@render emblem?.()}
</div>
