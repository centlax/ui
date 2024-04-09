<script lang="ts">
	import type { XDir, YDir } from '$lib/types/index.js';
	import { createDialog, melt } from '@melt-ui/svelte';
	import { fade, fly } from 'svelte/transition';
	import { twJoin } from 'tailwind-merge';
	export let state: boolean = false;
	export let from: YDir | XDir = 'east';


	const {
		elements: { trigger, overlay, content, title, description, close, portalled },
		states: { open }
	} = createDialog({
		forceVisible: true
	});
	$: $open = state;

	const css = {
		overlay: 'fixed inset-0 z-50 bg-black/50',
		content: `fixed z-50 h-screen w-full  bg-white shadow-lg focus:outline-none`,
		dir: {
			north: { pos: 'left-0 top-0 max-h-[350px]', x: 0, y: "-100%" },
			south: { pos: 'left-0 bottom-0 max-h-[350px]', x: 0, y: "100%" },
			east: { pos: 'right-0 top-0 max-w-[350px]', x: "100%", y: 0 },
			west: { pos: 'left-0 top-0 max-w-[350px]', x: "-100%", y: 0 }
		}
	};

	$: contentCSS = twJoin(css.content, css.dir[from].pos);
</script>

<div class="" use:melt={$portalled}>
	{#if $open}
		<div use:melt={$overlay} class={css.overlay} transition:fade={{ duration: 150 }} />
		<div
			use:melt={$content}
			class={contentCSS}
			transition:fly={{ 
				x: css.dir[from].x, 
				y: css.dir[from].y, 
				duration: 300, 
				opacity: 1 ,
			}}
		>
			<slot />
		</div>
	{/if}
</div>
