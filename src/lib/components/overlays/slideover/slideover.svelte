<script lang="ts">
	import type { XDir, YDir } from '$lib/types/index.js';
	import { createDialog, melt } from '@melt-ui/svelte';
	import { quintOut } from 'svelte/easing';
	import { fade, fly, slide } from 'svelte/transition';
	import { twJoin } from 'tailwind-merge';
	export let state: boolean = false;
	export let from: YDir | XDir = 'east';
	export let preventScroll: boolean = true;
	export let duration: number = 200;
	export let delay: number = 50;
	export let as: string = 'button';

	export let outsideClose: boolean = true;

	const {
		elements: { overlay, content, trigger, portalled },
		states: { open }
	} = createDialog({
		forceVisible: true,
		preventScroll: preventScroll,
		closeOnOutsideClick: outsideClose,
		onOpenChange: ({ next }) => {
			return (state = next);
		}
	});
	$: $open = state;
	const css = {
		overlay: 'fixed inset-0 z-50 bg-black/50 ',
		content: `fixed z-50 h-screen w-full  bg-transparent shadow-lg focus:outline-none`,
		dir: {
			north: { pos: 'left-0 top-0 max-h-[350px]', axis: 'y' as 'y' },
			south: { pos: 'left-0 bottom-0 max-h-[350px]', axis: 'y' as 'y' },
			east: { pos: 'right-0 top-0 max-w-[350px]', axis: 'x' as 'x' },
			west: { pos: 'left-0 top-0 max-w-[350px]', axis: 'x' as 'x' }
		}
	};

	$: contentCSS = twJoin(css.content, css.dir[from].pos);
</script>

<svelte:element this={as} use:melt={$trigger}>
	<slot name="open" />
</svelte:element>
<slot {state} name="panel" />
<div use:melt={$portalled}>
	{#if $open}
		<div use:melt={$overlay} class={css.overlay} transition:fade={{ duration: 200 }} />
		<div
			use:melt={$content}
			class={contentCSS}
			transition:slide={{
				delay: delay,
				duration: duration,
				easing: quintOut,
				axis: css.dir[from].axis
			}}
		>
			<slot {state} />
		</div>
	{/if}
</div>
