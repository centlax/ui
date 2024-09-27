<script lang="ts">
	/** Imports */
	import { createAccordion, melt } from '@melt-ui/svelte';
	import { slide } from 'svelte/transition';
	import { type AccordionProps } from './accordion.js';
	import { useUI, stringify, merge } from '$lib/pkgs/utian/index.js';

	/** Props */
	let { children, disabled, visible, links, multiple, ...props }: AccordionProps = $props();

	/** Melt UI */
	const {
		elements: { content, item, trigger, root },
		helpers: { isSelected }
	} = createAccordion({
		defaultValue: 'item-1',
		multiple,
		disabled,
		forceVisible: visible
	});

	const { css, classer } = useUI(props.class, false);
</script>

{#if links}
	<div use:melt={$root} {...props} class={classer}>
		{#each links as link}
			<div use:melt={$item(link.id)} class={stringify(css.item)}>
				<button use:melt={$trigger(link.id)}>
					{link.label}
				</button>
				{#if $isSelected(link.id)}
					<div use:melt={$content(link.id)} transition:slide>
						{link.description}
					</div>
				{/if}
			</div>
		{/each}
	</div>
{/if}
