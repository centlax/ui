<script lang="ts">
	import {
		UButton,
		UContainer,
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
	import Logo from '../logo.svelte';
	import { data } from './one.js';
	import { useDark } from '$lib/composables/dark.js';

	let {
		children
	}: {
		children?: Snippet;
	} = $props();
	const { heads, foots } = data;
	const dark = useDark();
</script>

{#snippet centlax()}
	<a href="/" class="-m-1.5 p-1.5">
		<span class="sr-only">Centlax</span>
		<Logo />
	</a>
{/snippet}

<USiteLayout>
	<UContainer>
		<USheet class="w-full  sm:max-w-sm">
		<!-- Header -->
		<USiteHeader logo={centlax} items={heads} />

		<!-- Aside -->
		{#snippet content()}
			<USiteAside />
		{/snippet}
	</USheet>

	<!-- Main  -->
	<USiteMain>
		<UButton onclick={dark.toggle}>dark</UButton>

		{@render children?.()}
	</USiteMain>

	<!-- Footer -->
	<USiteFooter logo={centlax} notice="Centlax &copy; 2024. All rights reserved." items={foots} />
	</UContainer>
	
</USiteLayout>
