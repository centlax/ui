<script lang="ts">
	import { UContainer, ULandHero } from '@centlax/ui';
</script>

<svelte:head>
	<title>UI - Centlax</title>
</svelte:head>

<section class="bg-white dark:bg-gray-900 flex-grow">
	<UContainer>
		<ULandHero
			props={{
				// bg-primary-500
				buttons: [
					{
						label: 'Get Started',
						icon: 'i-fluent-arrow-right-20-regular',
						trailing: true,
						size: 'lg',
						href: '/getting-started/installation'
					},
					{
						label: 'pnpm add @centlax/ui',
						icon: {
							leading: 'i-fluent-code-24-regular',
							trailing: 'i-fluent-copy-add-20-regular'
						},
						trailing: true,
						size: 'lg',
						color: 'gray'
					}
				]
			}}
			description="Centlax UI simplifies the creation of stunning and responsive web applications with its
            comprehensive collection of fully styled and opinionated UI components designed for SvelteKit."
			class="max-w-2xl mx-auto"
		>
			<h1 slot="title">
				A <span class="text-primary-500"> Svelte UI </span> Library for efficient, clean Web Apps
			</h1>
		</ULandHero>
	</UContainer>
</section>
