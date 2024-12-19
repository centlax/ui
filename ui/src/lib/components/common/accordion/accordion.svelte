<script lang="ts" generics="Multiple extends boolean = false">
	/** Imports */
	import { createAccordion, createSync, melt } from '@melt-ui/svelte';
	import { slide } from 'svelte/transition';
	import { accordion, type AccordionProps, type MeltValue } from './accordion.js';
	import { useUI } from '$lib/composables/ui.js';
	import { st, cn } from '$lib/utils/wind.js';
	import { useTransition } from '$lib/composables/transition.js';

	/** Imports */
	let { value = $bindable(), items, ...props }: AccordionProps<Multiple> = $props();
	const {
		elements: { content, item, trigger, root, heading },
		helpers: { isSelected },
		states
	} = createAccordion({
		multiple: props['multiple'] ?? false,
		disabled: props['disabled'] ?? false,
		forceVisible: props['force-visible'] ?? false,
		defaultValue: props['default-value'],
		onValueChange: props['on-value-change']
	});

	const sync = createSync(states);
	$effect(() => {
		sync.value(value as MeltValue<Multiple>, (v) => ((value as MeltValue<Multiple>) = v));
	});
	/** Styles */
	const ui = useUI(accordion, props.class, props.override);
	const transition = useTransition();
	const txn = $state(
		transition.set(props.transition, {
			duration: 200
		})
	);
</script>

<div data-ui="accordion" use:melt={$root} class={st(ui.root)}>
	{@render props.children?.()}
	{#each items as data, index}
		<!-- Unique ID for each accordion item -->
		{@const id = (data.id as string) || `${index}`}
		<div use:melt={$item(id)} class={st(ui.item)}>
			<svelte:element
				this={props['trigger-as'] || 'span'}
				use:melt={$trigger(id)}
				class={st(ui.trigger)}
			>
				{@render props.trigger?.(data)}
			</svelte:element>

			{#if $isSelected(id)}
				<svelte:element
					this={props.as || 'div'}
					{...props}
					use:melt={$content(id)}
					in:slide={txn.in}
					out:slide={txn.out}
					class={cn(st(ui.content), ui.class)}
				>
					{@render props.content?.(data)}
				</svelte:element>
			{/if}
		</div>
	{/each}
</div>
