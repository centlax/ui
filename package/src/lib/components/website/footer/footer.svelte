<script lang="ts">
	/** Imports */
	import { UFooterLinks } from '$lib/index.js';

	/** Props */
	export let notice: string = '&copy; 2024 Centlax, Inc. All rights reserved.';
</script>

<footer class="bg-gray-900" aria-labelledby="footer-heading">
	<div class="mx-auto pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
		<div class="xl:grid xl:grid-cols-3 xl:gap-8">
			<slot />
			<UFooterLinks />
		</div>
		<slot name="south">
			<div class="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
				<p class="text-xs leading-5 text-gray-600 dark:text-gray-400">
					{@html notice}
				</p>
			</div>
		</slot>
	</div>
</footer>
