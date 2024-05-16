<script lang="ts" context="module">
	// your script goes here
</script>

<script lang="ts">
	// Imports
	import { type ComponentProps } from 'svelte';
	import { UPriceCard, USwitch } from '$lib/index.js';

	// Props
	export let plans: ComponentProps<UPriceCard>[] = [];
</script>

<section class="space-y-16">
	<div>
		<div class="mx-auto max-w-4xl text-center">
			<h2 class="text-base font-semibold leading-7 text-primary-500">Pricing</h2>
			<p class="mt-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
				Pricing plans for teams of all sizes
			</p>
		</div>
		<p
			class="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600 dark:text-gray-400"
		>
			Distinctio et nulla eum soluta et neque labore quibusdam. Saepe et quasi iusto modi velit ut
			non voluptas in. Explicabo id ut laborum.
		</p>
		<div class="mt-10 flex justify-center">
			<USwitch options={['Monthly', 'Annually']} />
		</div>
	</div>

	{#if plans?.length}
		<div class=" flex gap-6 mx-auto max-w-9xl">
			{#each plans as plan}
				<UPriceCard {...plan} />
			{/each}
		</div>
	{/if}

	<div></div>
</section>
