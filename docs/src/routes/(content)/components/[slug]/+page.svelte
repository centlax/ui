<script lang="ts">
	import type { PageData } from './$types';
	import { page } from '$app/stores';
	import { components } from '$lib/config/imports/components';

	export let data: PageData;
	$: markdown = data.component;
	$: doc = data.metadata;

	const slug = $page.params['slug'] as keyof typeof components;
	$: group = components[slug].group;
</script>

<svelte:head>
	<title>{doc.title} - Centlax UI</title>
</svelte:head>

<div class="max-w-3xl mx-auto pt-10 xl:max-w-none xl:ml-0 xl:mr-[15.5rem] xl:pr-16">
	<header id="header" class="relative z-20">
		<div>
			<p class="mb-2 capitalize text-sm leading-6 font-semibold text-primary-500">
				{group}
			</p>
			<div class="flex items-center">
				<h1
					class="inline-block text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight dark:text-gray-200"
				>
					{doc.title}
				</h1>
			</div>
		</div>
		<p class="mt-2 text-lg text-gray-600 dark:text-gray-400">
			{doc.description}
		</p>
	</header>
	<div id="markdown" class="markdown relative z-20 prose prose-gray mt-8 dark:prose-dark">
		<hr />

		<svelte:component this={markdown} />
	</div>
	<div
		class="fixed z-20 top-[3.8125rem] bottom-0 right-[max(0px,calc(50%-45rem))] w-[19.5rem] py-10 overflow-y-auto hidden xl:block"
	>
		<div class="px-8">
			<h5 class="text-gray-900 font-semibold mb-4 text-sm leading-6 dark:text-gray-100">
				On this page
			</h5>
			<ul class="text-gray-700 text-sm leading-6">
				<li>
					<a
						href="#overview"
						class="block py-1 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300"
						>Overview</a
					>
				</li>
				<li>
					<a
						href="#why-not-just-use-inline-styles"
						class="block py-1 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300"
						>Why not just use inline styles?</a
					>
				</li>
				<li>
					<a
						href="#maintainability-concerns"
						class="block py-1 font-medium text-primary-500 dark:text-primary-400"
						>Maintainability concerns</a
					>
				</li>
			</ul>
		</div>
	</div>
</div>
