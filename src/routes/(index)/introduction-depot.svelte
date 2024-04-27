<script lang="ts">
	import { ULandHero, UContainer, ULandBack, UImage } from '$lib/index.js';
</script>

<section class="relative isolate overflow-hidden bg-white dark:bg-gray-900">
	<ULandBack />
	<slot />
	<UContainer class="overflow-hidden">
		<ULandHero
			let:imgUI
			let:vertical
			title="Introducing our first platform, Depot"
			description="One of Centlax's mission is to streamline supply chain and logistics through innovative technology.
			Our flagship product, Depot, caters to organizations that lend or issue supplies 
			and equipment to their members. Designed for environments where people need specialized gear daily, 
			Depot optimizes equipment management, enabling efficient issuance, tracking,
			and maintenance of supplies and equipment, ultimately enhancing operational effectiveness."
			props={{
				buttons: [
					{ href: '/', label: 'Get started', size: 'lg', class: 'font-semibold' },
					{
						href: '/',
						label: 'Learn more',
						size: 'lg',
						color: 'gray',
						variant: 'ghost',
						trailing: true,
						icon: 'i-fluent-arrow-right-24-regular',
						class: 'font-semibold'
					}
				]
			}}
		>
			<svelte:fragment slot="title">
				Introducing our first platform, <span class="text-primary-500">Depot</span>
			</svelte:fragment>

			<UImage
				class="{imgUI} {!vertical && 'lg:min-w-[70rem] lg:-mt-20'}"
				src={{
					light: 'https://tailwindui.com/img/component-images/project-app-screenshot.png',
					dark: 'https://tailwindui.com/img/component-images/dark-project-app-screenshot.png'
				}}
			/>
		</ULandHero>
	</UContainer>
</section>
