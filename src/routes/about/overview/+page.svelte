<script lang="ts">
	import { UContainer } from '$lib/index.js';
	const items = [
		{ title: 'Supply Chain & Logistics' },
		{ title: 'Artificial Intelligence' },
		{ title: 'Machine Learning' },
		{ title: 'Financial Services' },
		{ title: 'Commerce Solutions' },
		{ title: 'Health Services' },
		{ title: 'Travel & Transportation' },
		{ title: 'Communications' }
	];
</script>

<svelte:head>
	<title>Company Overview - Centlax</title>
</svelte:head>

<section class="bg-white dark:bg-gray-900">
	<UContainer class="px-4 mx-auto max-w-screen-xl sm:py-10 lg:px-6">
		<div class="bg-white dark:bg-gray-900 rounded-md">
			<div class="px-6 lg:px-8">
				<div class="mx-auto max-w-2xl text-center">
					<h2 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
						Boost your productivity.<br />Start using our app today.
					</h2>
					<p class="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600 dark:text-gray-300">
						Incididunt sint fugiat pariatur cupidatat consectetur sit cillum anim id veniam aliqua
						proident excepteur commodo do ea.
					</p>
				</div>
			</div>
		</div>
		<div class="space-y-8 mt-20 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
			{#each items as item}
				<div class="max-w-xs">
					<h3 class="mb-2 text-xl font-semibold dark:text-white">{item.title}</h3>
					<p class="text-gray-500 dark:text-gray-400">
						Plan it, create it, launch it. Collaborate seamlessly with all the organization and hit
						your marketing goals every month with our marketing plan.
					</p>
				</div>
			{/each}
		</div>
	</UContainer>
</section>
