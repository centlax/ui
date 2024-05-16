<script lang="ts">
	import { UColorMode, UContainer, UPrice } from '$lib/index.js';
	import { useToast } from '$lib/composables/useToast.js';
	import { generator } from '$lib/utils/safer.js';
	const toast = useToast();

	const links = [
		{
			title: 'Getting Started',
			children: [
				{ title: 'Introduction' },
				{ title: 'Installation' },
				{ title: 'Theming' },
				{ title: 'Shortcuts' }
			]
		}
	];
</script>

<UColorMode />
<UContainer class="space-y-6 h-svh">
	<UPrice
		plans={[
			{
				name: 'Free',
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
				price: 0,
				features: {
					items: [
						'Curabitur faucibus',
						'massa ut pretium maximus',
						'Sed posuere nisi',
						'Pellentesque eu nibh et neque',
						'Suspendisse a leo',
						'Praesent quis venenatis ipsum',
						'Duis non diam vel tortor'
					]
				}
			},
			{
				name: 'Prime',
				popular: true,
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
				price: 0,
				features: {
					items: [
						'Curabitur faucibus',
						'massa ut pretium maximus',
						'Sed posuere nisi',
						'Pellentesque eu nibh et neque',
						'Suspendisse a leo',
						'Praesent quis venenatis ipsum',
						'Duis non diam vel tortor'
					]
				}
			},
			{
				name: 'Utra',
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
				price: 0,
				features: {
					items: [
						'Curabitur faucibus',
						'massa ut pretium maximus',
						'Sed posuere nisi',
						'Pellentesque eu nibh et neque',
						'Suspendisse a leo',
						'Praesent quis venenatis ipsum',
						'Duis non diam vel tortor'
					]
				}
			}
		]}
	/>
</UContainer>
