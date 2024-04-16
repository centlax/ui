<script lang="ts">
	import '$lib/assets/app.css';
	import { ULayout, UDash, UContainer, UHeader, UInput } from '$lib/index.js';
	const links = [
		{
			label: 'Docs',
			icon: 'i-heroicons-book-open',
			href: '/getting-started'
		},
		{
			label: 'Pro',
			icon: 'i-heroicons-square-3-stack-3d',
			href: '/pro',
			children: [
				{
					label: 'Pricing',
					href: '/pro/pricing',
					icon: 'i-heroicons-ticket',
					description: 'A simple pricing, for solo developers or teams.'
				},
				{
					label: 'Templates',
					href: '/pro/templates',
					icon: 'i-heroicons-computer-desktop',
					description: 'Get started with one of our official templates.'
				}
			]
		},
		{
			label: 'Releases',
			icon: 'i-heroicons-rocket-launch',
			href: '/releases'
		}
	];
</script>

<ULayout>
	<UHeader {links} />
	<slot />
</ULayout>
