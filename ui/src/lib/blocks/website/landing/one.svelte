<script lang="ts">
	import {
		UButton,
		UContainer,
		UIcon,
		UInput,
		UInputGroup,
		USheet,
		USiteAside,
		USiteFooter,
		USiteHeader,
		USiteLayout,
		USiteMain
	} from '$lib/index.js';
	import type { Snippet } from 'svelte';
	import Logo from '../../logo.svelte';
	import { data } from './one.js';
	import { useDark } from '$lib/composables/dark.js';

	let {
		children
	}: {
		children?: Snippet;
	} = $props();
	const { heads, foots } = data;
	const dark = useDark();
	//notice="Centlax &copy; 2024. All rights reserved."
</script>

{#snippet centlax()}
	<a href="/" class="-m-1.5 p-1.5">
		<span class="sr-only">Centlax</span>
		<Logo />
	</a>
{/snippet}

<USiteLayout>
	<UContainer>
		<USheet transition={{ duration: 300 }} class="w-full sm:max-w-sm">
			<!-- Header -->
			<USiteHeader logo={centlax} items={heads} />

			<!-- Aside -->
			{#snippet content()}
				<USiteAside logo={centlax} items={heads} />
			{/snippet}
		</USheet>

		<!-- Main  -->
		<USiteMain>
			<UButton onclick={dark.toggle}>dark</UButton>
			<UInputGroup>
				<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
					<UIcon class="size-5 text-gray-500" name="i-fluent-person-24-regular" />
				</div>
				<UInput />
			</UInputGroup>
			{@render children?.()}
		</USiteMain>

		<!-- Footer -->
		<USiteFooter items={foots} />
	</UContainer>
</USiteLayout>
