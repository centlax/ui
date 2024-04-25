<script lang="ts">
	import { UContainer, ULandBanner, UButton } from '$lib/index.js';
</script>

<svelte:head>
	<title>Investing - Centlax</title>
</svelte:head>

<UContainer class="bg-white dark:bg-gray-900">
	<div class="mx-auto max-w-3xl py-10 sm:py-20 lg:py-30">
		<div class="hidden sm:mb-8 sm:flex sm:justify-center">
			<ULandBanner message="Announcing our next round of funding." action="Read more" href="/" />
		</div>
		<div class="text-center space-y-10">
			<h1 class="text-4xl font-bold tracking-tight dark:text-white text-gray-900 sm:text-6xl">
				Invest in Centlax: Driving <span class="text-primary-500">Global Mobility</span> Excellence
			</h1>
			<p class="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
				Centlax is pioneering solutions that transform the way people, goods, and services move
				globally. Our cutting-edge platforms streamline supply chains, optimize logistics, and
				empower organizations to achieve unparalleled efficiency in mobility operations. By
				investing in Centlax, you contribute to redefining the future of seamless global mobility.
			</p>
			<div class="space-y-1">
				<h1 class="text-xl sm:text-2xl font-semibold dark:text-white text-gray-900">
					Unlock Boundless Potential
				</h1>
				<h1 class="text-xl sm:text-2xl font-semibold dark:text-white text-gray-900">
					Invest Today
				</h1>
			</div>

			<span class="i-fluent-arrow-download-24-filled size-10 text-primary-600 animate-bounce">
			</span>
		</div>
	</div>
</UContainer>
