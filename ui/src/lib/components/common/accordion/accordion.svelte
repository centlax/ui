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

	/** UI */
	const { css, classer } = useUI(accordion, _class, override);
</script>

<div use:melt={$root} class={merge(stringify(css.root), classer)}>
	{#each links as { id, title, links: _children, label, description }, i}
		<div use:melt={$item(id)}>
			<slot name="trigger" trigger={$trigger(id)} {title} {i}>
				<button use:melt={$trigger(id)}>
					<slot name="trigger-btn" />
					{title || label}
				</button>
			</slot>

			{#if $isSelected(id)}
				<slot name="content" links={_children} content={$content(id)} {description} {i}>
					<div use:melt={$content(id)} transition:slide>
						{description}
					</div>
				</slot>
			{/if}
		</div>
	{/each}
</div>
