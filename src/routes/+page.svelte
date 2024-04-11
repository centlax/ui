<script lang="ts">
	import {
		UButton,
		UCard,
		UContainer,
		UFooter,
		UHeader,
		UHeaderLinks,
		UIcon,
		UInput,
		ULink,
		ULogo,
		UModal,
		UPopper,
		USheet,
		UToggle,
		UTooltip,
		UTabs
	} from '$lib/index.js';
	import type { Link } from '$lib/types/link.d.js';
	import { last } from '@melt-ui/svelte/internal/helpers';
	import { Label } from 'bits-ui';
	const links: Link[] = [
		{ label: 'Product', href: '/' },
		{ label: 'Features', href: '/' },
		{ label: 'Marketplace', href: '/' },
		{
			label: 'Our Company',
			href: '/'
		}
	];
	$: isOpen = false;
	$: isModal = false;
	$: isSwitch = false;
</script>

<UContainer class="relative h-lvh py-5 bg-white dark:bg-gray-900">
	<UHeader title="Centlax">
		<span slot="title" class="font-semibold text-lg">UI</span>
		<UHeaderLinks {links} />
	</UHeader>

	<UButton on:click={() => (isOpen = true)} label="Open Sheet" />
	<UButton on:click={() => (isModal = true)} label="Open Modal" />

	<UPopper>
		<UButton label="Open Popper" />
		<UCard slot="popper" class="group w-56 h-full" northUI="py-1 flex justify-between">
			<svelte:fragment slot="north">
				<ULogo move />
			</svelte:fragment>
		</UCard>
	</UPopper>
	<USheet bind:state={isOpen} from="south">
		<UCard rounded={false} class="h-full group" northUI="py-1 flex justify-between">
			<svelte:fragment slot="north">
				<ULogo move />
				<UButton class="my-1" square variant="ghost" on:click={() => (isOpen = false)}>
					<UIcon name="i-fluent-dismiss-24-regular size-5" />
				</UButton>
			</svelte:fragment>
		</UCard>
	</USheet>

	<UModal bind:state={isModal}>
		<UCard class="group h-full" northUI="py-1 flex justify-between">
			<svelte:fragment slot="north">
				<ULogo move />
				<UButton class="my-1" square variant="ghost" on:click={() => (isModal = false)}>
					<UIcon name="i-fluent-dismiss-24-regular size-5" />
				</UButton>
			</svelte:fragment>
		</UCard>
	</UModal>
	<UInput />
	<UToggle
		thumbUI="text-red-600"
		icon={{ on: 'i-fluent-dismiss-circle-24-regular', off: 'i-fluent-checkmark-circle-24-regular' }}
		bind:state={isSwitch}
	/>
	<UTabs>
		<svelte:fragment slot="tab-1">
			<p class="mb-5 leading-normal text-neutral-900">
				Make changes to your account here. Click save when you're done.
			</p>
			<fieldset class="mb-4 flex w-full flex-col justify-start">
				<label class="mb-2.5 block text-sm leading-none text-neutral-900" for="name"> Name </label>
				<input id="name" value="Thomas G. Lopes" />
			</fieldset>

			<div class="mt-5 flex justify-end">
				<button class="save">Save changes</button>
			</div>
		</svelte:fragment>
		<svelte:fragment slot="tab-2">
			<p class="mb-5 leading-normal text-neutral-900">
				Make changes to your account here. Click save when you're done.
			</p>
			<fieldset class="mb-4 flex w-full flex-col justify-start">
				<label class="mb-2.5 block text-sm leading-none text-neutral-900" for="name"> Name </label>
				<input id="name" value="Thomas G. Lopes" />
			</fieldset>

			<div class="mt-5 flex justify-end">
				<button class="save">Save changes</button>
			</div>
		</svelte:fragment>
		<svelte:fragment slot="tab-3">
			<p class="mb-5 leading-normal text-neutral-900">
				Make changes to your account here. Click save when you're done.
			</p>
			<fieldset class="mb-4 flex w-full flex-col justify-start">
				<label class="mb-2.5 block text-sm leading-none text-neutral-900" for="name"> Name </label>
				<input id="name" value="Thomas G. Lopes" />
			</fieldset>

			<div class="mt-5 flex justify-end">
				<button class="save">Save changes</button>
			</div>
		</svelte:fragment>
	</UTabs>
</UContainer>
