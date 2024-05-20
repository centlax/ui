<script lang="ts">
	// Imports
	import { createAccordion, melt } from '@melt-ui/svelte';
	import { slide } from 'svelte/transition';
	import { twJoin } from 'tailwind-merge';
	import { styles } from './accordion.styles.js';
	import type { Accordion } from './accordion.js';
	import { useUI } from '$lib/composables/useUI.js';
	import { stringify } from '$lib/utils/index.js';

	// Props
	let _class: Accordion['class'] = '';
	export { _class as class };
	export let links: Accordion['links'] = [];
	export let multiple: Accordion['multiple'] = false;
	export let disabled: Accordion['disabled'] = false;
	export let visible: Accordion['visible'] = false;
	export let value: Accordion['value'] = findID(links?.length ? links[0].id : 'item-1', 0);

	// Config
	const {
		elements: { content, item, trigger, root },
		helpers: { isSelected },
		states: { value: _value }
	} = createAccordion({
		multiple,
		disabled,
		forceVisible: visible,
		onValueChange: ({ next }) => (value = next)
	});

	const { css, classer } = useUI(styles, _class);

	function findID(id: any, index: number): string {
		return id ? id : `item-${index + 1}`;
	}

	// Reactive
	$: $_value = value;
</script>

<div class={twJoin(stringify(css.root), classer)} {...$root}>
	{#each links as link, i}
		<div use:melt={$item(findID(link.id, i))} class={stringify(css.item)}>
			<button class={stringify(css.item.header)} use:melt={$trigger(findID(link.id, i))}>
				<slot {value} {link} name="header" {i}>
					{link.label}
				</slot>
			</button>
			{#if $isSelected(findID(link.id, i))}
				<div
					class={stringify(css.item.panel)}
					use:melt={$content(findID(link.id, i))}
					transition:slide
				>
					<slot {value} {link}>
						{link.description}
					</slot>
				</div>
			{/if}
		</div>
	{/each}
</div>
