<script lang="ts">
	import { ULogo, UButton, UInput, UContainer } from '$lib/index.js';
	import type { FooterLink } from '$lib/types/link.js';
	let classProp: string | string[] = '';
	export { classProp as class };
	let year = new Date().getFullYear();
</script>

<UContainer
	as="footer"
	class="bg-white/50 dark:bg-gray-900/50 {classProp}"
	aria-labelledby="footer-heading"
>
	<h2 id="footer-heading" class="sr-only">Footer</h2>
	<div class="mx-auto py-2 sm:py-4 lg:py-6">
		<div class="xl:grid xl:grid-cols-3 xl:gap-8">
			{#if $$slots.east}
				<div class="space-y-8 text-gray-600 dark:text-gray-300 lg:mr-10">
					<slot name="east" />
				</div>
			{/if}
			<slot />
			{#if $$slots.west}
				<div class="space-y-8 text-gray-600 dark:text-gray-300 lg:ml-10">
					<slot name="west" />
				</div>
			{/if}
		</div>
		<div class="mt-16 border-t border-gray-900/10 dark:border-white/10 pt-8 sm:mt-20 lg:mt-24">
			<p class="text-sm leading-5 text-gray-600/80 dark:text-gray-300/80">
				Centlax &copy; {year}
			</p>
		</div>
	</div>
</UContainer>
