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
	} from '@centlax/ui';
	import { last } from '@melt-ui/svelte/internal/helpers';
	import { Label } from 'bits-ui';
	const links = [
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
	$: isModal = false;
</script>

<UContainer class="relative h-lvh py-5 bg-white dark:bg-gray-900">
	<UHeader title="Centlax">
		<span slot="title" class="font-semibold text-lg">UI</span>
		<UHeaderLinks {links} />
	</UHeader>

	<UButton on:click={() => (isOpen = true)} label="Open Sheet" />
	<UButton on:click={() => (isModal = true)} label="Open Modal" />

	<USheet bind:state={isOpen} from="south">
		<UCard rounded={false} class="h-full" northUI="py-1 flex justify-between">
			<svelte:fragment slot="north">
				<ULogo move />
				<UButton class="my-1" square variant="ghost" on:click={() => (isOpen = false)}>
					<UIcon name="i-fluent-dismiss-24-regular size-5" />
				</UButton>
			</svelte:fragment>
		</UCard>
	</USheet>

	<UModal bind:state={isModal}>
		<UCard class="h-full" northUI="py-1 flex justify-between">
			<svelte:fragment slot="north">
				<ULogo move />
				<UButton class="my-1" square variant="ghost" on:click={() => (isModal = false)}>
					<UIcon name="i-fluent-dismiss-24-regular size-5" />
				</UButton>
			</svelte:fragment>
		</UCard>
	</UModal>
</UContainer>
