<script lang="ts" generics="T extends Item<T>">
	/** Imports */
	import type { Item } from '$lib/types/item.js';
	import { useUI } from '$lib/composables/ui.js';
	import { st, cn } from '$lib/utils/wind.js';
	import { siteHead, type SiteHeadProps } from './header.js';
	import { UIcon, UTooltip } from '$lib/index.js';

	/** Props */
	let { items, ...props }: SiteHeadProps<T> = $props();

	/** Styles */
	const ui = useUI(siteHead, props.class, props.override);
</script>

{#snippet item(it: T)}
	{#if it.items && it.items.length > 0}
		<div class="relative">
			<UTooltip
				class="max-w-[25rem] rounded-lg bg-white ring-1 ring-neutral-200 backdrop-blur-xl dark:bg-neutral-900/90 dark:ring-neutral-800"
			>
				{#snippet trigger()}
					<button
						type="button"
						class="flex items-center gap-x-1 text-sm/6 font-semibold text-neutral-900 dark:text-white"
						aria-expanded="false"
					>
						{it.title}
						<UIcon
							name="i-fluent-chevron-down-20-filled"
							class="size-5 flex-none text-neutral-500"
						/>
					</button>
				{/snippet}
				{#snippet content()}
					<div class="space-y-1 py-1 md:px-1">
						{#if it.items}
							{#each it.items as { label, icon, description }}
								<!-- Link -->
								<a
									class="group flex gap-x-4 rounded-lg px-2 py-1.5 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none dark:text-neutral-200 dark:hover:bg-neutral-800 dark:focus:bg-neutral-700"
									href="/"
								>
									<span
										class="flex size-10 items-center justify-center rounded-lg bg-neutral-400/10"
									>
										<UIcon
											name={icon as string}
											class="size-6 shrink-0 text-gray-800 group-hover:text-primary-500 dark:text-neutral-200"
										/>
									</span>

									<div class="grow">
										<span class="block text-sm font-medium text-gray-800 dark:text-neutral-200"
											>{label}</span
										>
										<p class="text-sm text-gray-500 dark:text-neutral-500">
											{description}
										</p>
									</div>
								</a>
								<!-- End Link -->
								<div class="my-2 border-t border-neutral-200 dark:border-neutral-800"></div>
							{/each}
						{/if}
					</div>
				{/snippet}
			</UTooltip>
		</div>
	{:else}
		<a href="/" class="text-sm/6 font-semibold text-neutral-900 dark:text-white">Features</a>
	{/if}
{/snippet}

<div
	class="flex items-center justify-between bg-transparent py-6"
	aria-label="Global"
>
	<div class="flex lg:flex-1">
		{@render props.logo?.()}
	</div>
	<div class="flex lg:hidden">
		<button
			type="button"
			class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-neutral-700"
		>
			<span class="sr-only">Open main menu</span>
			<svg
				class="size-6"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				aria-hidden="true"
				data-slot="icon"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
				/>
			</svg>
		</button>
	</div>
	<nav class="hidden lg:flex lg:gap-x-12">
		{#each items as it}
			{@render item(it)}
		{/each}
	</nav>
	<div class="hidden lg:flex lg:flex-1 lg:justify-end">
		<a href="/" class="text-sm/6 font-semibold">Log in <span aria-hidden="true">&rarr;</span></a>
	</div>
</div>
