<script lang="ts">
	/** Imports */
	import { createAccordion, melt, createSync } from '@melt-ui/svelte';
	import { slide } from 'svelte/transition';
	import { twJoin } from 'tailwind-merge';
	import { useProps } from '$lib/composables/use/props.js';
	import { useUI } from '$lib/index.js';
	import { accordion } from './accordion.config.js';
	import { strify } from '$lib/utils/index.js';

	/** Props */
	const props = useProps('Accordion');
	let _class = props.class;
	export { _class as class };
	export let links = props.links;
	export let value = props.value;
	export let disabled = props.disabled;
	export let multiple = props.multiple;
	export let visible = props.visible;
	export let override = props.override;

	/** Config */
	const {
		elements: { content, item, trigger, root },
		helpers: { isSelected },
		states
	} = createAccordion({
		defaultValue: 'item-1',
		forceVisible: visible,
		multiple,
		disabled
	});
	const sync = createSync(states);

	/** React */
	$: sync.value(value, (v) => (value = v));

	/** UI */
	const { css, classer } = useUI(accordion, _class, override);
</script>

<div class={twJoin(strify(css.root), classer)} use:melt={$root}>
	{#each links as link, i}
		<div id={link.id} use:melt={$item(link.id)} class={strify(css.item)}>
			<button
				use:melt={$trigger(link.id)}
				class={twJoin(strify(css.item.trigger), i !== 0 && strify(css.item.trigger.first))}
			>
				<slot name="trigger" {link}>
					{link.label}
				</slot>
			</button>

			{#if $isSelected(link.id)}
				<div class={strify(css.item.content)} use:melt={$content(link.id)} transition:slide>
					<slot {link}>
						{link.description}
					</slot>
				</div>
			{/if}
		</div>
	{/each}
</div>
