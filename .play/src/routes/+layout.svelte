<script lang="ts">
	import '../app.css';
	import { UBody, UFooter, UHeader, ULayout } from '@centlax/ui';
	let height: string = '3.5rem';
	const links = [
		{
			label: 'Depot',
			icon: 'i-heroicons-book-open-solid',
			href: '/depot'
		},
		{
			label: 'AI+',
			icon: 'i-simple-icons-stackblitz',
			href: '/ai'
		},
		{
			label: 'Careers',
			icon: 'i-heroicons-beaker',
			href: '/careers'
		},
		{
			label: 'Invest',
			icon: 'i-heroicons-square-3-stack-3d',
			href: '/about/invest'
		},
		{
			label: 'Centlax',
			icon: 'i-heroicons-rocket-launch',
			href: '/about'
		}
	];
</script>

<ULayout>
	<UBody {height}>
		<UHeader {height} {links} slot="header" />
		<slot />
		<UFooter slot="footer" />
	</UBody>
</ULayout>
