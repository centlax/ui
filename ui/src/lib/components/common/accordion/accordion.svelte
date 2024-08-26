<script lang="ts">
	/** Imports */
	import { createAccordion, melt } from '@melt-ui/svelte';
	import { slide } from 'svelte/transition';
	import { accordion } from './accordion.config.js';
	import type { AccordionLink } from '$lib/import.js';
	import { useProps, useUI } from '$lib/import.js';
	import { merge, stringify } from '$lib/utils/index.js';

	/** Props  */
	const props = useProps('Accordion');
	let _class = props.class;
	export { _class as class };
	export let override = props.override;
	export let links: AccordionLink[] = [];

	const {
		elements: { content, item, trigger, root },
		helpers: { isSelected }
	} = createAccordion({
		defaultValue: 'item-1'
	});

	/** Slot Props */
	let actions = {
		item: (id: string) => $item(id).action,
		trigger: (id: string) => $trigger(id).action,
		content: (id: string) => $content(id).action
	};
	let attrs = {
		item: (id: string) => $item(id),
		trigger: (id: string) => $trigger(id),
		content: (id: string) => $content(id)
	};

	/** UI */
	const { css, classer } = useUI(accordion, _class, override);
	$: ui = {
		root: merge(stringify(css.root), classer)
	};
	$: is = {
		selected: (id: string) => $isSelected(id)
	};
</script>

<div use:melt={$root} class={ui.root}>
	{#if $$slots.default}
		<slot {actions} {attrs} selected={is.selected} />
	{:else}
		{#each links as { id, title, description }, i}
			<div use:melt={$item(id)}>
				<slot name="trigger" trigger={$trigger(id)} {title} {i}>
					<button use:melt={$trigger(id)}>
						{title}
					</button>
				</slot>

				{#if $isSelected(id)}
					<slot name="content" content={$content(id)} {description} {i}>
						<div use:melt={$content(id)} transition:slide>
							{description}
						</div>
					</slot>
				{/if}
			</div>
		{/each}
	{/if}
</div>
