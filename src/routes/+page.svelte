<script lang="ts">
	import {
		UButton,
		UColorMode,
		UContainer,
		UPrice,
		UHead,
		UAvatarGroup,
		UAvatar
	} from '$lib/index.js';
</script>

<section class="bg-white w-full dark:bg-gray-900/50 h-full">
	<UContainer class="space-y-6 ">
		<UHead title="UI" buttons={[{ class: '', label: 'Sign in' }, { label: 'Sign up' }]} />

		<UAvatarGroup
			max={2}
			avatars={[
				{ src: 'https://avatars.githubusercontent.com/u/739984?v=4' },
				{ src: 'https://avatars.githubusercontent.com/u/739984?v=4' },
				{ src: 'https://avatars.githubusercontent.com/u/739984?v=4' },
				{ src: 'https://avatars.githubusercontent.com/u/739984?v=4' }
			]}
		/>
		<UAvatar src="https://avatars.githubusercontent.com/u/739984?v=4" alt="Avatar" />

		<div class="py-10">
			<UPrice
				switch={{
					options: ['Monthly', 'Annually', 'Daily']
				}}
				name="Depot Plans"
				custom
				title="Pricing plans for teams of all sizes"
				description="Distinctio et nulla eum soluta et neque labore quibusdam. Saepe et quasi iusto modi velit ut non voluptas in. Explicabo id ut laborum."
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
			>
				<svelte:fragment slot="south">
					<span>Need a custom plan?</span>
					<UButton color="white" label="Get in touch" />
				</svelte:fragment>
			</UPrice>
		</div>
	</UContainer>
</section>
