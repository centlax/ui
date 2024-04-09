<script lang="ts">
	import { UButton, UContainer, UHeader, UHeaderLinks, ULink, UTooltip } from '$lib/index.js';
	import type { Link } from '$lib/types/link.d.js';
	const links: Link[] = [
		{ label: 'Product', href: '/' },
		{ label: 'Features', href: '/' },
		{ label: 'Marketplace', href: '/' },
		{
			label: 'About us',
			href: '/',
			children: [
				{ label: 'Product', href: '/' },
				{ label: 'Features', href: '/' },
				{ label: 'Marketplace', href: '/' }
			]
		}
	];
</script>

<UContainer class="relative h-lvh py-5 bg-white dark:bg-gray-900">
	<UHeader title="Centlax">
		<UHeaderLinks {links} />
	</UHeader>
	<ULink />


</UContainer>


