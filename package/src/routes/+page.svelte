<script lang="ts">
	import { UBody, UHeader, UInputPin, UFooter, UCheckbox, useDark, UAlert } from '$lib/index.js';
	const dark = useDark();
	const links = [
		{
			label: 'Solutions',
			links: [
				{ label: 'Marketing', href: '/' },
				{ label: 'Analytics', href: '/' },
				{ label: 'Commerce', href: '/' },
				{ label: 'Insights', href: '/' }
			]
		},
		{
			label: 'Support',
			links: [
				{ label: 'Pricing', href: '/' },
				{ label: 'Documentation', href: '/' },
				{ label: 'Guides', href: '/' },
				{ label: 'API Status', href: '/' }
			]
		},
		{
			label: 'Company',
			links: [
				{ label: 'About', href: '/' },
				{ label: 'Blog', href: '/' },
				{ label: 'Jobs', href: '/' },
				{ label: 'Press', href: '/' },
				{ label: 'Partners', href: '/' }
			]
		},

		{
			label: 'Legal',
			links: [
				{ label: 'Claim', href: '/' },
				{ label: 'Privacy', href: '/' },
				{ label: 'Terms', href: '/' }
			]
		}
	];
</script>

<UBody>
	<UHeader />
	<button on:click={dark.toggle}>mode</button>
	<main class="p-10">
		<UAlert
			title="Lorem ipsum"
			description="Repudiandae sint consequuntur vel. Amet ut nobis explicabo numquam expedita quia omnis voluptatem. Minus quidem ipsam quia iusto."
		/>
	</main>
	<UFooter {links}>
		<div class="space-y-8">
			<img
				class="h-7"
				src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
				alt="Company name"
			/>
			<p class="text-sm leading-6 text-gray-600 dark:text-gray-400">
				Making the world a better place through constructing elegant hierarchies.
			</p>
		</div>
	</UFooter>
</UBody>
