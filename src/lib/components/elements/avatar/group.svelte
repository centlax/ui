<script lang="ts">
	// Imports
	import { UAvatar, config } from '$lib/index.js';
	import type { Size } from '$lib/types/index.js';
	import type { ComponentProps } from 'svelte';
	import { twJoin } from 'tailwind-merge';

	// Props
	export let trailing: boolean = false;
	export let avatars: ComponentProps<UAvatar>[] = [];
	export let reverse: boolean = false;
	export let max: number = avatars.length;
	export let mult: boolean = false;
	export let size: Size = config.size;

	// Config
	reverse && avatars.reverse();
	const css = {
		wrapper: 'isolate flex -space-x-1.5',
		size: {
			xs: '-space-x-0.5',
			sm: '-space-x-1',
			md: '-space-x-1.5',
			lg: '-space-x-1.5',
			xl: '-space-x-1.5'
		},
		ring: '*:ring-2 *:ring-white *:dark:ring-gray-900',
		margin: '*:my-auto'
	};

	// Reactive
	$: wrapperCSS = twJoin(css.wrapper, css.ring, css.margin, css.size[size]);
	$: leftMax = max < avatars.length ? avatars.length - max : 0;
</script>

<div class={wrapperCSS}>
	{#each avatars as avatar, index}
		{#if index < max}
			<UAvatar
				{size}
				{...!mult ? { ...avatars[0], ...avatar } : avatar}
				index={!trailing ? avatars?.length - index : 0}
			/>
		{/if}
	{/each}
	{#if leftMax !== 0}
		<UAvatar {size} text={`+${leftMax}`} {...avatars[0]} />
	{/if}
</div>
