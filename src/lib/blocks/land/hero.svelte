<script lang="ts">
	// imports
	import type { ComponentProps } from 'svelte';
	import { UButton, UColorImage, ULandBanner } from '$lib/index.js';
	import { twJoin } from 'tailwind-merge';
	// props
	export let orientation: 'vertical' | 'horizontal' = 'vertical';
	export let title: string = '';
	export let description: string = '';
	export let banner: ComponentProps<ULandBanner> = {};
	// config
	const css = {
		wrapper: 'relative isolate',
		title: 'text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl',
		description: 'mt-6  text-lg leading-8 text-gray-600 dark:text-gray-300',
		actions: 'mt-10 flex gap-x-6',
		first: 'max-w-2xl',
		second: 'max-w-2xl -mr-[5rem] -mt-[5rem]'
	};
	// reactive
	$: wrapperCSS = twJoin(
		css.wrapper,
		orientation === 'vertical' && '',
		orientation === 'horizontal' && 'flex gap-[5%]'
	);
	$: actionsCSS = twJoin(
		css.actions,
		orientation === 'vertical' ? 'items-center justify-center' : 'items-center'
	);
	$: fisrtCSS = twJoin(orientation === 'vertical' ? 'text-center' : 'text-left max-w-1xl');
</script>

<div class={wrapperCSS}>
	<div class={css.first}>
		<div class="hidden sm:mb-8 sm:flex {orientation === 'vertical' && 'sm:justify-center'}">
			<ULandBanner {...banner} />
		</div>
		<div class={fisrtCSS}>
			<slot name="title">
				<h1 class={css.title}>{title}</h1>
			</slot>

			<slot name="description">
				<p class={css.description}>{description}</p>
			</slot>

			<div class={actionsCSS}>
				<slot name="actions">
					<UButton label="Get started" />
					<UButton variant="soft" color="gray" label="Learn more" />
				</slot>
			</div>
		</div>
	</div>
	<div class={css.second}>
		<slot />
	</div>
</div>
