<script lang="ts">
	import {
		UButton,
		UIcon,
		USheet,
		USiteAside,
		USiteFooter,
		USiteHeader,
		USiteLayout,
		USiteMain,
		USlider,
		UToggle
	} from '$lib/index.js';
	import type { Snippet } from 'svelte';
	import Logo from '../../logo.svelte';
	import { data } from './one.js';
	import { useDark } from '$lib/composables/dark.js';
	import { writable } from 'svelte/store';

	let {
		children
	}: {
		children?: Snippet;
	} = $props();
	const { heads, foots } = data;
	const dark = useDark();
	//notice="Centlax &copy; 2024. All rights reserved."
	let value1 = writable([30, 40, 50, 60, 70]);
	let value2 = writable([30, 40, 50, 60, 70]);
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

		<div class="flex flex-col gap-4 text-center">
			<code>autoSort: false; value: [{$value1}]</code>
			<USlider value={value1} auto-sort={false} />
		</div>
		<div class="flex flex-col gap-4 text-center">
			<code>autoSort: true; value: [{$value2}]</code>
			<USlider value={value2} />
		</div>
	</USiteMain>

	<!-- Footer -->
	<USiteFooter />
</USiteLayout>
