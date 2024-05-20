<script lang="ts">
	import { UAccordion, UButton, UContainer } from '$lib/index.js';
</script>

<section class="bg-white w-full dark:bg-gray-900/50 h-full">
	<UContainer class="space-y-6 ">
		<UButton loading label="Submit" />
		<UAccordion
			links={[
				{
					label: 'Getting Started',
					icon: 'i-heroicons-information-circle',
					description:
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu. Proin eget egestas augue. Praesent ut sem nec arcu pellentesque aliquet. Duis dapibus diam vel metus tempus vulputate.'
				}
			]}
		/>
	</UContainer>
</section>
