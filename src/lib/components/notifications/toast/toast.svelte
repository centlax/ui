<script lang="ts">
	// Imports
	import { createProgress, melt, type Toast, type ToastsElements } from '@melt-ui/svelte';
	import { fly } from 'svelte/transition';
	import { writable } from 'svelte/store';
	import { onMount } from 'svelte';
	import { twJoin, twMerge } from 'tailwind-merge';
	import { css } from './toast.styles.js';
	import type { ToastTypes } from './toast.js';

	// Props
	export let elements: ToastsElements;
	export let toast: ToastTypes;

	// Config
	const percentage = writable(0);
	const {
		elements: { root: progress },
		options: { max }
	} = createProgress({
		max: 100,
		value: percentage
	});

	onMount(() => {
		let frame: number;
		const updatePercentage = () => {
			percentage.set(getPercentage());
			frame = requestAnimationFrame(updatePercentage);
		};
		frame = requestAnimationFrame(updatePercentage);
		return () => cancelAnimationFrame(frame);
	});

	// Reactive
	$: ({ content, title, description, close } = elements);
	$: ({ data, id, getPercentage } = toast);
	$: wrapperCSS = twJoin(
		css.wrapper,
		css.background?.replaceAll('{color}', data?.color || 'primary'),
		css.rounded,
		css.shadow
	);

	$: progressCSS = twJoin(
		css.progress.base,
		css.progress.background?.replaceAll('{color}', 'primary')
	);
</script>

<div
	use:melt={$content(id)}
	in:fly={{ duration: 150, x: '100%' }}
	out:fly={{ duration: 150, x: '100%' }}
	class={css.content}
>
	<div
		use:melt={$progress}
		class={progressCSS}
		style={`transform: translateX(-${100 - (100 * ($percentage ?? 0)) / ($max ?? 1)}%)`}
	/>

	<div class={css.container}>
		
			{#if data.title}
				<h3 use:melt={$title(id)} class="flex items-center gap-2 font-semibold">
					{data.title}
					<span class="size-1.5 rounded-full {data.color}" />
				</h3>
			{/if}
			{#if data.description}
				<div use:melt={$description(id)}>
					{data.description}
				</div>
			{/if}
		<button use:melt={$close(id)} class={css.button}>
			<span class="i-fluent-dismiss-circle-20-regular" />
		</button>
	</div>
</div>
