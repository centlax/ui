<script lang="ts">
	import { useUI } from '$lib/composables/ui.js';
	/** Imports */
	import { UChip, UIcon, UPopover } from '$lib/index.js';
	import { cn, st } from '$lib/utils/wind.js';
	import { createSelect, melt } from '@melt-ui/svelte';
	import { selectMenu, type SelectMenuProps } from './menu.js';

	let { ...props }: SelectMenuProps = $props();

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

	const ui = useUI(selectMenu, props.class, props.override);
</script>

<UPopover
	bind:value={open}
	float={{ placement: 'bottom', fitViewport: true, sameWidth: true }}
	transition={{ duration: 0, delay: 0 }}
	as="ul"
	class={cn(st(ui.root), ui.class)}
	tabindex={-1}
	role="listbox"
	aria-labelledby="listbox-label"
	aria-activedescendant="listbox-option-3"
>
	{#snippet trigger()}
		<button
			type="button"
			class={st(ui.trigger)}
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
		{#each Object.entries(options) as [key, arr]}
			{#each arr as item}
				<li
					class={st(ui.option)}
					id="listbox-option-0"
					aria-selected="false"
					role="option"
					use:melt={$option({ value: item, label: item })}
				>
					<div class="flex items-center">
						
						<UChip color="green" class="size-2" aria-hidden="true" />
						<span class="ml-3 block truncate font-normal">
							{item}
							<span class="sr-only"> is online</span>
						</span>
					</div>
					<span class="text-primary-600 absolute inset-y-0 right-0 flex items-center pr-4">
						<UIcon name="i-fluent-checkmark-20-filled" class="size-5" />
					</span>
				</li>
			{/each}
		{/each}
	{/snippet}
</UPopover>
