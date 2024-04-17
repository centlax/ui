<script lang="ts">
	import '$lib/assets/app.css';
	import {
		ULayout,
		UDash,
		UContainer,
		UHeader,
		UInput,
		UPopper,
		UButton,
		UCard,
		UFooter,
		UBody
	} from '$lib/index.js';
	const links = [
		{
			label: 'Depot',
			icon: 'i-heroicons-book-open',
			href: '/depot'
		},

		{
			label: 'AI +',
			icon: 'i-heroicons-rocket-launch',
			href: '/ai'
		},
		{
			label: 'Careers',
			icon: 'i-heroicons-square-3-stack-3d',
			href: '/work/careers',
			children: [
				{
					label: 'Pricing',
					href: '/',
					icon: 'i-heroicons-ticket',
					description: 'A simple pricing, for solo developers or teams.'
				},
				{
					label: 'Templates',
					href: '/',
					icon: 'i-heroicons-computer-desktop',
					description: 'Get started with one of our official templates.'
				}
			]
		},
		{
			label: 'News',
			icon: 'i-heroicons-rocket-launch',
			href: '/news'
		},
		{
			label: 'Invest',
			icon: 'i-heroicons-rocket-launch',
			href: '/about/invest'
		},
		{
			label: 'Centlax',
			icon: 'i-heroicons-rocket-launch',
			href: '/about',
			children: [
				{
					label: 'History',
					href: '/',
					icon: 'i-heroicons-ticket',
					description: 'A simple pricing, for solo developers or teams.'
				},
				{
					label: 'Mission & vission',
					href: '/',
					icon: 'i-heroicons-computer-desktop',
					description: 'Get started with one of our official templates.'
				},
				{
					label: 'Our Team',
					href: '/',
					icon: 'i-heroicons-computer-desktop',
					description: 'Get started with one of our official templates.'
				}
			]
		}
	];
</script>

<ULayout>
	<UBody>
		<UHeader {links} slot="header" />
		<slot />
		<UFooter slot="footer" />
	</UBody>
</ULayout>
