<script lang="ts">
	// Imports
	import { twJoin } from 'tailwind-merge';
	import { UButton } from '$lib/index.js';
	import type { ComponentProps } from 'svelte';

	// Props
	export let title: string = '';
	export let description: string = '';
	export let vertical: boolean = false;
	let classProp: any = undefined;
	export { classProp as class };
	export let props: {
		buttons: ComponentProps<UButton>[];
	} = {
		buttons: []
	};

	// Config
	let imgUI = 'rounded-md  shadow-2xl ring-1 ring-black/5 dark:ring-white/10';
	const css = {
		wrapper: 'py-24 sm:py-32 md:py-40 relative',
		headline: 'mb-10',
		title: 'text-4xl sm:text-6xl font-bold tracking-tight text-gray-900 dark:text-white',
		description: 'mt-6 text-lg leading-8 tracking-tight text-gray-600 dark:text-gray-300'
	};

	$: isVertical = vertical || !$$slots.default;
	$: wrapperCSS = twJoin(
		'gap-16 sm:gap-y-24',
		isVertical && 'flex flex-col',
		!isVertical && 'grid lg:grid-cols-2'
	);

	$: baseCSS = twJoin(isVertical && 'text-center mx-auto max-w-4xl');
	$: buttonCSS = twJoin('mt-10 flex flex-wrap gap-x-6 gap-y-3', isVertical && 'justify-center');
</script>

<div class={twJoin(css.wrapper, classProp)}>
	<slot name="north" />

	<div class={wrapperCSS}>
		<div class={baseCSS}>
			{#if $$slots.headline}
				<div class={css.headline}>
					<slot name="headline" />
				</div>
			{/if}

			<h1 class={css.title}>
				<slot name="title">{title}</slot>
			</h1>

			{#if description || $$slots.description}
				<p class={css.description}>
					<slot name="description">{description}</slot>
				</p>
			{/if}

			{#if props['buttons']?.length || $$slots.buttons}
				<div class={buttonCSS}>
					<slot name="buttons">
						{#each props['buttons'] as button}
							<UButton {...button} />
						{/each}
					</slot>
				</div>
			{/if}
		</div>

		<slot {imgUI} {vertical} />
	</div>
	<slot name="south" />
</div>
