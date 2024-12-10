<script lang="ts">
	import {
		UButton,
		UCalendar,
		UIcon,
		USheet,
		USiteAside,
		USiteFooter,
		USiteHeader,
		USiteLayout,
		USiteMain,
		UToggle
	} from '$lib/index.js';
	import type { Snippet } from 'svelte';
	import Logo from '../../logo.svelte';
	import { data } from './one.js';
	import { useDark } from '$lib/composables/dark.js';
	import { writable } from 'svelte/store';
	import { CalendarDate, type DateValue } from '@internationalized/date';

	let {
		children
	}: {
		children?: Snippet;
	} = $props();
	const { heads, foots } = data;
	const dark = useDark();

	let value = $state({ start: new CalendarDate(2022, 2, 3), end: new CalendarDate(2022, 2, 20) });
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
		[{value.start}]
		<UCalendar range bind:value />
	</USiteMain>

	<!-- Footer -->
	<USiteFooter />
</USiteLayout>
