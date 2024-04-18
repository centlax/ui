<script lang="ts">
	import type { AccordionLink } from '$lib/types/link.js';

	// imports
	import { createAccordion, melt } from '@melt-ui/svelte';
	import { slide } from 'svelte/transition';
	import { twJoin } from 'tailwind-merge';
	// props
	export let items: AccordionLink[];

	// config
	const css = {
		wrapper: `mx-auto w-[18rem] max-w-full rounded-xl bg-white dark:bg-gray-900 shadow-lg sm:w-[25rem]`,
		container: 'overflow-hidden transition-colors first:rounded-t-xl last:rounded-b-xl',
		mark: 'border-t border-t-neutral-300',
		trigger: {
			base: 'flex flex-1 cursor-pointer items-center justify-between focus:!ring-0',
			text: 'px-5 py-5 text-base font-medium leading-none',
			color: `bg-white dark:bg-gray-900 focus-visible:text-primary-800 text-black transition-colors hover:bg-neutral-100 `
		},
		content: 'overflow-hidden bg-neutral-100 text-sm text-neutral-600'
	};

	const {
		elements: { content, item, trigger, root },
		helpers: { isSelected }
	} = createAccordion({
		defaultValue: 'item-1'
	});
	// reactive
	$: triggerCSS = twJoin(css.trigger.base, css.trigger.text, css.trigger.color);
</script>

<div class={css.wrapper} {...$root}>
	{#each items as { id, title, description }, i}
		<div use:melt={$item(id)} class={css.container}>
			<div use:melt={$trigger(id)} class="{triggerCSS} {i !== 0 && css.mark}">
				<slot name="title">{title}</slot>
			</div>
			{#if $isSelected(id)}
				<div class={css.content} use:melt={$content(id)} transition:slide>
					<slot name="description">
						<div class="px-5 py-4">{description}</div>
					</slot>
				</div>
			{/if}
		</div>
	{/each}
</div>
