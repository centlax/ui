<script lang="ts">
	/** Imports */
	import { UIcon } from '$lib/components/export.js';
	import { createSync, melt } from '@melt-ui/svelte';
	import { createChoose } from './choose.svelte.js';
	import { choose, type ChooseProps } from './choose.js';
	import { useUI } from '$lib/composables/ui.js';
	import { st } from '$lib/internal/utils/wind.js';
	import { ctxOption } from '$lib/composables/option.js';

	/** Props */
	let {
		children,
		open = $bindable(false),
		selected = $bindable(),
		...props
	}: ChooseProps = $props();

	const {
		elements: { trigger, menu, option, group, groupLabel },
		states,
		helpers: { isSelected }
	} = createChoose<string>(props);
	const { selectedLabel } = states;

	const ctx = ctxOption();
	ctx.group.set(group);
	ctx.title.set(groupLabel);
	ctx.option.set(option);

	const sync = createSync({ open: states['open'] });
	$effect(() => {
		sync.open(open, (o) => (open = o));
	});

	/** Styles */
	const ui = useUI(choose, props.class, props.override);
</script>

<button
	class="focus:outline-primary-600 grid w-full cursor-default grid-cols-1 rounded-md bg-white py-1.5 pl-3 pr-2 text-left text-neutral-900 outline outline-1 -outline-offset-1 outline-neutral-300 focus:outline focus:outline-2 focus:-outline-offset-2 sm:text-sm/6"
	aria-haspopup="listbox"
	aria-expanded={open}
	use:melt={$trigger}
>
	<span class="col-start-1 row-start-1 truncate pr-6"> {$selectedLabel || 'Select a flavor'} </span>
	<UIcon
		class="col-start-1 row-start-1 size-5 self-center justify-self-end text-neutral-500 sm:size-4"
		name="i-fluent-chevron-up-down-16-filled"
	/>
</button>
{#if open}
	<div class={st(ui.card)} use:melt={$menu}>
		{@render children?.()}
	</div>
{/if}
