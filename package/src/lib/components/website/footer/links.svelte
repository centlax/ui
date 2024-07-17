<script lang="ts">
	/** Imports */
	import { type Link } from '$lib/index.js';

	/** Props */
	export let links: Link[] = [
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

<div class="mt-16 xl:mt-0 grid grid-cols-4 gap-8 xl:col-span-2">
	{#each links as link}
		<div>
			<h3 class="text-sm font-semibold leading-6 text-white">{link.label}</h3>
			<ul role="list" class="mt-6 space-y-4">
				{#if link['links']}
					{#each link.links as { label }}
						<li>
							<a href="/" class="text-sm leading-6 text-gray-300 hover:text-white">{label}</a>
						</li>
					{/each}
				{/if}
			</ul>
		</div>
	{/each}
</div>
