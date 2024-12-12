<script lang="ts">
	import { UIcon } from '$lib/components/export.js';
	import { createSelect, melt } from '@melt-ui/svelte';
	import { fade } from 'svelte/transition';

	const options = {
		sweet: ['Caramel', 'Chocolate', 'Strawberry', 'Cookies & Cream'],
		savory: ['Basil', 'Bacon', 'Rosemary']
	};

	const {
		elements: { trigger, menu, option, group, groupLabel, label },
		states: { selectedLabel, open },
		helpers: { isSelected }
	} = createSelect<string>({
		forceVisible: true,
		positioning: {
			placement: 'bottom',
			fitViewport: true,
			sameWidth: true
		}
	});
</script>

<button
	class="focus:outline-primary-600 grid w-full cursor-default grid-cols-1 rounded-md bg-white py-1.5 pl-3 pr-2 text-left text-neutral-900 outline outline-1 -outline-offset-1 outline-neutral-300 focus:outline focus:outline-2 focus:-outline-offset-2 sm:text-sm/6"
	aria-haspopup="listbox"
	aria-expanded="true"
	aria-labelledby="listbox-label"
	use:melt={$trigger}
	aria-label="choose"
>
	<span class="col-start-1 row-start-1 truncate pr-6"> {$selectedLabel || 'Select a flavor'} </span>
	<UIcon
		class="col-start-1 row-start-1 size-5 self-center justify-self-end text-neutral-500 sm:size-4"
		name="i-fluent-chevron-up-down-16-filled"
	/>
</button>
{#if $open}
	<div
		class=" z-10 flex max-h-[300px] flex-col
      overflow-y-auto rounded-lg bg-white p-1
      shadow focus:!ring-0"
		use:melt={$menu}
		transition:fade={{ duration: 0 }}
	>
		{#each Object.entries(options) as [key, arr]}
			<div use:melt={$group(key)}>
				<div
					class="py-1 pl-4 pr-4 font-semibold capitalize text-neutral-800"
					use:melt={$groupLabel(key)}
				>
					{key}
				</div>
				{#each arr as item}
					<div
						class="hover:bg-primary-100 focus:text-primary-700 data-[highlighted]:bg-primary-200 data-[highlighted]:text-primary-900 relative cursor-pointer rounded-lg
                py-1 pl-8
                pr-4
                text-neutral-800 focus:z-10
                data-[disabled]:opacity-50"
						use:melt={$option({ value: item, label: item })}
					>
						<div class="check {$isSelected(item) ? 'block' : 'hidden'}">
							<UIcon class="size-4" name="i-fluent-checkmark-20-regular" />
						</div>

						{item}
					</div>
				{/each}
			</div>
		{/each}
	</div>
{/if}
