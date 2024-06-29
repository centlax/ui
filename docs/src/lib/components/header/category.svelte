<script lang="ts">
	import { config } from '$lib/config/stores/index';
	import { isCategory, type Category } from '$lib/config/stores/category';
	import { page } from '$app/stores';
	import { components } from '$lib/config/imports/components';
	import { Switch } from '..';

	const items = [
		{ value: 'common', icon: 'i-fluent-bowl-salad-20-filled' },
		{ value: 'website', icon: 'i-fluent-globe-surface-20-filled' },
		{ value: 'application', icon: 'i-fluent-apps-20-filled' }
	];

	const slug = $page.params['slug'] as keyof typeof components;
	const c = components[slug]?.category as Category['name'];
	let cate: Category['name'] = c;

	$: config.update((prev) => {
		if (isCategory(cate)) {
			return { ...prev, category: cate };
		} else {
			return prev;
		}
	});
</script>

<Switch {items} bind:value={cate} />
