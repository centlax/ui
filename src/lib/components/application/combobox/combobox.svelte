<script lang="ts" generics="T extends Item<T>">
	import { UIcon } from '$lib/index.js';
	import { createCombobox, melt, type ComboboxOptionProps } from '@melt-ui/svelte';
	import { fly } from 'svelte/transition';
	import type { ComboboxProps } from './combobox.js';
	import type { Item } from '$lib/types/item.js';

	let { mangas, ...props }: ComboboxProps<T> = $props();

	const toOption = (manga: T): ComboboxOptionProps<T> => ({
		value: manga,
		label: manga.title as string,
		disabled: manga.disabled as boolean
	});

	const {
		elements: { menu, input, option, label },
		states: { open, inputValue, touchedInput, selected },
		helpers: { isSelected }
	} = createCombobox<T>({
		forceVisible: true
	});

	$effect(() => {
		if (!$open) {
			$inputValue = $selected?.label ?? '';
		}
	});
	let filteredMangas: T[] = $state([]);

	$effect(() => {
		filteredMangas = $touchedInput
			? mangas.filter(({ title, author }) => {
					const normalizedInput = $inputValue.toLowerCase();
					return (
						// @ts-ignore
						title.toLowerCase().includes(normalizedInput) ||
						// @ts-ignore

						author.toLowerCase().includes(normalizedInput)
					);
				})
			: mangas;
	});
</script>

<div class="relative mt-2">
	<input
		use:melt={$input}
		id="combobox"
		type="text"
		class="w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-12 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
		role="combobox"
		aria-controls="options"
		aria-expanded={$open}
	/>
	<button
		aria-label="input"
		type="button"
		onclick={() => ($open = !$open)}
		class="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none"
	>
		<UIcon name="i-fluent-chevron-up-down-20-filled" class="size-5 text-gray-400" />
	</button>
</div>
{#if $open}
	<ul
		use:melt={$menu}
		transition:fly={{ duration: 150, y: -5 }}
		class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm"
		id="options"
		role="listbox"
	>
		<!--
      Combobox option, manage highlight styles based on mouseenter/mouseleave and keyboard navigation.

      Active: "text-white bg-indigo-600 outline-none", Not Active: "text-gray-900"
    -->
		{#each filteredMangas as manga, index (index)}
			<li
				use:melt={$option(toOption(manga))}
				aria-selected="false"
				class="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 hover:bg-indigo-600 hover:text-white"
				id="option-0"
				role="option"
				tabindex="-1"
			>
				<div class="flex items-center">
					<!-- Online: "bg-green-400", Not Online: "bg-gray-200" -->
					<span class="inline-block size-2 shrink-0 rounded-full bg-green-400" aria-hidden="true"
					></span>
					<!-- Selected: "font-semibold" -->
					<span class="ml-3 flex truncate">
						<span class="truncate">{manga.title}</span>
						<span class="ml-2 truncate text-gray-500 group-hover:text-neutral-50"
							>@{manga.author}</span
						>
						<span class="sr-only"> is online</span>
					</span>
				</div>

				<!--
            Checkmark, only display for selected option.
            Active: "text-white", Not Active: "text-indigo-600"
          -->{#if $isSelected(manga)}
					<span class="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600">
						<svg
							class="size-5"
							viewBox="0 0 20 20"
							fill="currentColor"
							aria-hidden="true"
							data-slot="icon"
						>
							<path
								fill-rule="evenodd"
								d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
								clip-rule="evenodd"
							/>
						</svg>
					</span>
				{/if}
			</li>
		{:else}
			<li class="relative cursor-pointer rounded-md py-1 pl-8 pr-4">No results found</li>
		{/each}

		<!-- More items... -->
	</ul>
{/if}
