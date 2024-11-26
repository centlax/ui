<script lang="ts">
	/** Imports */
	import { UIcon, UPopover, UToggle } from '$lib/index.js';
	import { createSelect, melt } from '@melt-ui/svelte';

	let open = $state(false);
	const options = {
		sweet: ['Caramel', 'Chocolate', 'Strawberry', 'Cookies & Cream'],
		savory: ['Basil', 'Bacon', 'Rosemary']
	};

	const {
		elements: { trigger: selectTrigger, menu, option, group, groupLabel, label },
		states: { selectedLabel },
		helpers: { isSelected }
	} = createSelect<string>({
		onSelectedChange: ({ curr, next }) => {
			open = !open;
			return next;
		}
	});
</script>

<div class="relative">
	<UPopover
		bind:value={open}
		float={{ placement: 'bottom', fitViewport: true, sameWidth: true }}
		transition={{ duration: 0, delay: 0 }}
		class="mt-2"
	>
		{#snippet trigger()}
			<button
				type="button"
				class="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none aria-expanded:ring-2 aria-expanded:ring-indigo-600 sm:text-sm/6"
				aria-haspopup="listbox"
				aria-expanded={open}
				use:melt={$selectTrigger}
				aria-labelledby="listbox-label"
			>
				<span class="flex items-center">
					<span aria-label="Online" class="inline-block size-2 shrink-0 rounded-full bg-green-400"
					></span>
					<span class="ml-3 block truncate">{$selectedLabel || 'Select a flavor'}</span>
				</span>
				<span class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
					<UIcon name="i-fluent-chevron-up-down-20-filled" class="size-5 text-gray-400" />
				</span>
			</button>
		{/snippet}

		{#snippet content()}
			<ul
				class="mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm"
				tabindex="-1"
				role="listbox"
				aria-labelledby="listbox-label"
				aria-activedescendant="listbox-option-3"
			>
				{#each Object.entries(options) as [key, arr]}
					{#each arr as item}
						<li
							class="relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 hover:bg-indigo-500 hover:text-white"
							id="listbox-option-0"
							aria-selected="false"
							role="option"
							use:melt={$option({ value: item, label: item })}
						>
							<div class="flex items-center">
								<span
									class="inline-block size-2 shrink-0 rounded-full bg-green-400"
									aria-hidden="true"
								></span>
								<span class="ml-3 block truncate font-normal">
									{item}
									<span class="sr-only"> is online</span>
								</span>
							</div>
							<span class="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600">
								<UIcon name="i-fluent-checkmark-20-filled" class="size-5 " />
							</span>
						</li>
					{/each}
				{/each}
			</ul>
		{/snippet}
	</UPopover>
</div>
