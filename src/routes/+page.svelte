<script lang="ts">
	import { UContainer, ULandHero, UIcon, UColorImage } from '$lib/index.js';
</script>

<section class="bg-white dark:bg-gray-900">
	<UContainer>
		<ULandHero
			orientation="horizontal"
			banner={{
				message: 'Announcing Depot, our first plaftorm.',
				action: 'Read more',
				href: '/depot'
			}}
			title="Optimize Your Resource Management with Depot"
			description="Depot empowers your organization to effortlessly issue, 
			monitor, and maintain essential supplies and equipment. 
			Discover the transformative impact as Depot enhances your operational efficiency, 
			guaranteeing a streamlined and optimized workflow for your business."
		>
			<UColorImage
				class="size-full rounded-md ring-1"
				light_class="shadow-2xl ring-gray-900/10"
				dark_class="bg-white/5 shadow-2xl ring-white/10"
				src={{
					light: 'https://tailwindui.com/img/component-images/project-app-screenshot.png',
					dark: 'https://tailwindui.com/img/component-images/dark-project-app-screenshot.png'
				}}
			/>
		</ULandHero>
	</UContainer>
</section>
