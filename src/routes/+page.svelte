<script lang="ts">
	import {
		UButton,
		UCard,
		UContainer,
		UFooter,
		UHeader,
		UHeaderLinks,
		UIcon,
		ULink,
		ULogo,
		UModal,
		USheet,
		UTooltip
	} from '$lib/index.js';
	import type { Link } from '$lib/types/link.d.js';
	import { last } from '@melt-ui/svelte/internal/helpers';
	import { Label } from 'bits-ui';
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
	$: isOpen = false;
</script>

<UContainer class="relative h-lvh py-5 bg-white dark:bg-gray-900">
	<UHeader title="Centlax">
		<UHeaderLinks {links} />
	</UHeader>
	<UButton on:click={() => (isOpen = true)} label="state: {isOpen}" />

	<USheet state={isOpen} from="north">
		<UCard rounded={false} class="h-full" northUI="py-1">
			<div slot="north" class="flex justify-between">
				<ULogo move />
				<UButton class="my-1" square variant="ghost" on:click={() => (isOpen = false)}>
					<UIcon name="i-fluent-dismiss-24-regular size-5" />
				</UButton>
			</div>
		</UCard>
	</USheet>
	<UFooter />
</UContainer>
