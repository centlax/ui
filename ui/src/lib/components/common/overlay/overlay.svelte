<script lang="ts">
	import { fade } from 'svelte/transition';
	import type { OverlayProps } from './overlay.js';
	import { useOverlay } from './overlay.svelte.js';
	import { melt } from '@melt-ui/svelte';

	let { ...props }: OverlayProps = $props();
	const {
		elements: { root }
	} = useOverlay(props);
</script>

<div {...root} use:melt={root.melt} transition:fade={{ duration: 150 }}></div>
