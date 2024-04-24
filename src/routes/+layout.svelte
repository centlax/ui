<script lang="ts">
	import '$lib/assets/app.css';
	import { UBody, UFooter, UHeader, ULayout } from '$lib/index.js';
	let height: string = '5rem';
	const links = [
		{
			label: 'Depot',
			icon: 'i-heroicons-book-open-solid',
			href: '/depot',
			children: [
				{
					label: 'Demo',
					href: '/depot/pricing',
					icon: 'i-fluent-app-generic-24-regular',
					description: 'Explore our demo and pricing plans.'
				},
				{
					label: 'Documentation',
					href: 'https://docs.centlax.com/depot',
					icon: 'i-fluent-notebook-24-regular',
					description: 'Browse through our comprehensive documentation.'
				},
				{
					label: 'Community',
					href: '/about/support',
					icon: 'i-fluent-people-community-add-24-regular',
					description: 'Join our community and get support from us or fellow users.'
				}
			]
		},
		{
			label: 'AI+',
			icon: 'i-simple-icons-stackblitz',
			href: '/ai',
			children: [
				{
					label: 'AI and Machine Learning Solutions',
					to: '/ai/solutions',
					icon: 'i-fluent-bot-sparkle-24-regular',
					description: 'Explore our AI and machine learning solutions at Centlax.'
				},
				{
					label: 'AI in Supply Chain',
					href: '/ai/supply-chain',
					icon: 'i-fluent-glance-horizontal-sparkles-24-regular',
					description: 'Learn how AI is revolutionizing supply chain management.'
				}
			]
		},
		{
			label: 'Careers',
			icon: 'i-heroicons-beaker',
			href: '/about/careers'
		},
		{
			label: 'Invest',
			icon: 'i-heroicons-square-3-stack-3d',
			href: '/about/invest'
		},
		{
			label: 'Blog',
			icon: 'i-heroicons-square-3-stack-3d',
			href: '/news'
		},
		{
			label: 'Centlax',
			icon: 'i-heroicons-rocket-launch',
			href: '/about',
			children: [
				{
					label: 'Company History',
					href: '/about/history',
					icon: 'i-fluent-calendar-24-regular',
					description: 'Explore our journey and milestones.'
				},
				{
					label: 'Vision & Mission',
					href: '/about/vision-mission',
					icon: 'i-fluent-star-emphasis-24-regular',
					description: 'Discover our vision for the future and our mission.'
				},
				{
					label: 'Company Overview',
					href: '/about/overview',
					icon: 'i-fluent-layer-diagonal-sparkle-24-regular',
					description: 'Get an overview of our company and what we do.'
				}
			]
		}
	];
</script>

<ULayout>
	<UBody {height}>
		<UHeader border bind:height {links} slot="header" />
		<slot />
		<UFooter slot="footer" />
	</UBody>
</ULayout>
