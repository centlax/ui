<script lang="ts">
	/** Imports */
	import { createSelect, melt, createSync } from '@melt-ui/svelte';
	import { fade } from 'svelte/transition';
	import { useUI, useProps } from '$lib/index.js';
	import { selectMenu } from './menu.config.js';
	import { strify } from '$lib/utils/index.js';

	/** Props */
	const props = useProps('SelectMenu');
	let _class = props.class;
	export { _class as class };
	export let override = props.override;
	export let options = props.options;
	export let placeholder = props.placeholder;
	export let multiple = props.multiple;
	export let visible = props.visible;
	export let float = props.float;
	export let required = props.required;
	export let disabled = props.disabled;
	export let arrow = props.arrow;
	export let scroll = props.scroll;
	export let loop = props.loop;
	export let portal = props.portal;
	export let open = props.open;

	/** Config */
	const {
		elements: { trigger, menu, option, group, groupLabel, label },
		states: { selectedLabel, open: _open },
		helpers: { isSelected }
	} = createSelect({
		forceVisible: visible,
		multiple,
		required,
		disabled,
		loop,
		portal,
		arrowSize: arrow,
		positioning: float,
		preventScroll: scroll,
		onOpenChange: ({ next }) => {
			return (open = next);
		}
	});
	$: $_open = open;

	/** UI */
	const { css, classer } = useUI(selectMenu, _class, override);
</script>

<div class={strify(css.root)}>
	<button class={strify(css.trigger)} use:melt={$trigger} aria-label="Food">
		{$selectedLabel || placeholder}
		<span data-open={String(open)} class={strify(css.trigger.chevron)} />
	</button>

	{#if open}
		<div class={strify(css.menu)} use:melt={$menu} transition:fade={{ duration: 150 }}>
			{#each Object.entries(options) as [key, arr]}
				<div use:melt={$group(key)}>
					<div class={strify(css.menu.group)} use:melt={$groupLabel(key)}>
						{key}
					</div>
					{#each arr as item}
						<div class={strify(css.menu.option)} use:melt={$option({ value: item, label: item })}>
							<div
								data-selected={String($isSelected(item))}
								class={strify(css.menu.option.selected)}
							>
								<span class={strify(css.menu.option.selected.checkmark)} />
							</div>
							{item}
						</div>
					{/each}
				</div>
			{/each}
		</div>
	{/if}
</div>
