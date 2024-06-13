<script lang="ts">
	import { config } from '$lib/config/stores/index';
	import { categories, isCategory, type Category } from '$lib/config/stores/category';
	import { onMount } from 'svelte';
	import { cubicInOut } from 'svelte/easing';
	import { crossfade } from 'svelte/transition';
	import { page } from '$app/stores';
	import { components } from '$lib/config/imports/components';
	$: ready = false;

	const slug = $page.params['slug'] as keyof typeof components;
	const c = (components[slug]?.category as Category['name']) || $config.category;
	let cate: Category['name'] = c;
	$: config.update((prev) => {
		if (isCategory(cate)) {
			return { ...prev, category: cate };
		} else {
			return prev;
		}
	});
	const [send, receive] = crossfade({
		duration: 250,
		easing: cubicInOut
	});
	// Initialize cate with the current category value from the store
	onMount(() => {
		ready = true;
	});
</script>

{#if ready}
	<ul class="flex items-center space-x-2 bg-primary-500/20 p-1 rounded-full">
		{#each categories as category}
			<button class="relative z-10 px-2 py-0.5" on:click={() => (cate = category['name'])}>
				<span>{category.label}</span>
				{#if category['name'] === cate}
					<span
						in:send={{ key: 'checked' }}
						out:receive={{ key: 'checked' }}
						class="absolute inset-0 flex justify-center items-center text-white bg-primary-500 rounded-full"
					>
						{category.label}
					</span>
				{/if}
			</button>
		{/each}
	</ul>
{/if}
