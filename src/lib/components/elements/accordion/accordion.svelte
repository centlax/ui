<script lang="ts">
	// Imports
	import { createAccordion, melt } from '@melt-ui/svelte';
	import { slide } from 'svelte/transition';
	import { twJoin } from 'tailwind-merge';
	import { styles } from './accordion.styles.js';
	import type { Accordion } from './accordion.js';
	import { useUI } from '$lib/composables/useUI.js';
	import { stringfy } from '$lib/utils/index.js';
	import { next } from '@melt-ui/svelte/internal/helpers';

	// Props
	export let links: Accordion['links'] = [];
	export let multiple: Accordion['multiple'] = false;
	export let disabled: Accordion['disabled'] = false;
	export let visible: Accordion['visible'] = false;
	export let value: Accordion['value'] = links[0].id || 'item-1';
	let _class: Accordion['class'] = '' as string;
	export { _class as class };

	// Config
	const {
		elements: { content, item, trigger, root },
		helpers: { isSelected },
		states: { value: _value }
	} = createAccordion({
		multiple: multiple,
		disabled: disabled,
		forceVisible: visible,
		onValueChange: ({ next }) => {
			return (value = next);
		}
	});
	const { css, classer } = useUI(styles, _class);

	// Reactive
	$: $_value = value;
</script>

<div class={twJoin(css.root, classer)} {...$root}>
	{#each links as link, i}
		{@const id = link.id ? link.id : `item-${i + 1}`}
		{@const props = { id, value: id, disabled: link.disabled }}
		<div use:melt={$item(props)} class={css.item.base}>
			<button class={stringfy(css.item.header)} use:melt={$trigger(props)}>
				<slot {value} {link} name="header" {i}>
					{link.title}
				</slot>
			</button>
			{#if $isSelected(id)}
				<div class={stringfy(css.item.panel)} use:melt={$content(props)} transition:slide>
					<slot {value} {link}>
						{link.description}
					</slot>
				</div>
			{/if}
		</div>
	{/each}
</div>
