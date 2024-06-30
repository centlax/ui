<script lang="ts">
	import { config } from '$lib/config/stores/index';
	import { isCategory, type Category } from '$lib/config/stores/category';
	import { page } from '$app/stores';
	import { components } from '$lib/config/imports/components';
	import { Switch } from '..';
	import { fade } from 'svelte/transition';

	const items = [
		{ value: 'common', icon: 'i-fluent-bowl-salad-20-filled' },
		{ value: 'website', icon: 'i-fluent-globe-surface-20-filled' },
		{ value: 'application', icon: 'i-fluent-apps-20-filled' }
	];

	const slugs: string[] = $page.params.slug.split('/');
	const component = slugs[1] as keyof typeof components;
	let category: Category['name'] = components[component]?.category as Category['name'];
	$: config.update((prev) => {
		if (isCategory(category)) {
			return { ...prev, category: category };
		} else {
			return prev;
		}
	});
</script>

<div transition:fade={{ duration: 200 }}>
	<Switch {items} bind:value={category} />
</div>
