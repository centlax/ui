<script lang="ts">
	import {
		UButton,
		UCheckbox,
		UDrawer,
		UIcon,
		UInputDate,
		UPagination,
		UPanel,
		USheet,
		USiteAside,
		USiteFooter,
		USiteHeader,
		USiteLayout,
		USiteMain,
		USwitch,
		UToggle
	} from '$lib/index.js';
	import type { Snippet } from 'svelte';
	import Logo from '../../logo.svelte';
	import { data } from './one.js';
	import { useDark } from '$lib/composables/dark.js';
	import { today, type DateValue } from '@internationalized/date';
	import Placeholder from '$lib/blocks/placeholder.svelte';

	let {
		children
	}: {
		children?: Snippet;
	} = $props();
	const { heads, foots } = data;
	const dark = useDark();

	let value = $state<DateValue>(today('UTC'));
	const options = {
		sweet: ['Caramel', 'Chocolate', 'Strawberry', 'Cookies & Cream'],
		savory: ['Basil', 'Bacon', 'Rosemary']
	};
</script>

{#snippet centlax()}
	<a href="/" class="-m-1.5 p-1.5">
		<span class="sr-only">Centlax</span>
		<Logo />
	</a>
{/snippet}
{#snippet site(mode: 'header' | 'aside')}
	{@render centlax()}
	<UToggle as="button" class={mode === 'header' ? 'flex lg:hidden' : ''}>
		<span class="sr-only">Open/Close main menu</span>
		<UIcon
			class="size-6"
			name={mode === 'header'
				? 'i-fluent-text-align-justify-24-regular'
				: 'i-fluent-dismiss-24-regular'}
		/>
	</UToggle>
{/snippet}

<USiteLayout class="container">
	<USheet transition={{ duration: 300 }} class="w-full sm:max-w-[--site-width]">
		<!-- Header -->
		<USiteHeader items={heads}>
			{#snippet west()}
				{@render site('header')}
			{/snippet}
			{#snippet east()}
				<a href="/" class="0 text-sm/6 font-semibold"
					>Log in <span aria-hidden="true">&rarr;</span></a
				>
			{/snippet}
		</USiteHeader>

		<!-- Aside -->
		{#snippet content()}
			<USiteAside items={heads}>
				{#snippet north()}
					{@render site('aside')}
				{/snippet}
			</USiteAside>
		{/snippet}
	</USheet>

	<!-- Main  -->
	<USiteMain>
		<UButton text="dark" onclick={dark.toggle} />
		{@render children?.()}

		<USwitch class="mt-2" />
		<UCheckbox default-checked="indeterminate" />
		<div class="flex w-full justify-center">
			<UPagination page={1} count={99} />
		</div>
		<UDrawer class="h-[20rem]">
			{#snippet trigger()}
				open
			{/snippet}
			{#snippet content()}
				klsdjf
			{/snippet}
		</UDrawer>
	</USiteMain>

	<!-- Footer -->
	<USiteFooter />
</USiteLayout>
