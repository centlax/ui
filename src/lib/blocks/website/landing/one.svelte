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
				<USiteAside items={heads} />
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

			<div>
				<label for="price" class="block text-sm/6 font-medium text-gray-900">Price</label>
				<div class="relative mt-2 rounded-md shadow-sm">
					<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
						<UIcon class="size-5 text-gray-500" name="i-fluent-mail-24-filled" />
					</div>

					<input
						type="text"
						name="price"
						id="price"
						class="block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
						placeholder="0.00"
					/>
				</div>
			</div>
			<div>
				<label for="email" class="block text-sm/6 font-medium text-gray-900">Email</label>
				<div class="relative mt-2 rounded-md shadow-sm">
					<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
						<svg
							class="size-5 text-gray-400"
							viewBox="0 0 20 20"
							fill="currentColor"
							aria-hidden="true"
							data-slot="icon"
						>
							<path
								d="M3 4a2 2 0 0 0-2 2v1.161l8.441 4.221a1.25 1.25 0 0 0 1.118 0L19 7.162V6a2 2 0 0 0-2-2H3Z"
							/>
							<path
								d="m19 8.839-7.77 3.885a2.75 2.75 0 0 1-2.46 0L1 8.839V14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.839Z"
							/>
						</svg>
					</div>
					<input
						type="email"
						name="email"
						id="email"
						class="block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
						placeholder="you@example.com"
					/>
				</div>
			</div>

			{@render children?.()}
		</USiteMain>

		<!-- Footer -->
		<USiteFooter logo={centlax} notice="Centlax &copy; 2024. All rights reserved." items={foots} />
	</UContainer>
</USiteLayout>
