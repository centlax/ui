<script lang="ts">
	import '$lib/assets/app.css';
	import { UBody, UFooter, UHeader, ULayout } from '$lib/index.js';
	let height: string = '3.5rem';
	const links = [
		{
			label: 'Documentation',
			icon: 'i-heroicons-book-open-solid',
			to: '/getting-started',
			children: [
				{
					label: 'Pricing',
					to: '/pro/pricing',
					icon: 'i-heroicons-ticket',
					description: 'A simple pricing, for solo developers or teams.'
				},
				{
					label: 'Templates',
					to: '/pro/templates',
					icon: 'i-heroicons-computer-desktop',
					description: 'Get started with one of our official templates.'
				}
			]
		},
		{
			label: 'Playground',
			icon: 'i-simple-icons-stackblitz',
			to: '/playground'
		},
		{
			label: 'Roadmap',
			icon: 'i-heroicons-beaker',
			to: '/roadmap'
		},
		{
			label: 'Pro',
			icon: 'i-heroicons-square-3-stack-3d',
			to: '/pro'
		},
		{
			label: 'Releases',
			icon: 'i-heroicons-rocket-launch',
			to: 'https://github.com/nuxt/ui/releases',
			target: '_blank'
		}
	];
</script>

<ULayout>
	<UBody {height}>
		<UHeader bind:height {links} slot="header" />
		<slot />
		<UFooter slot="footer" />
	</UBody>
</ULayout>
