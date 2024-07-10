<script>import { createSelect, melt, createSync } from "@melt-ui/svelte";
import { fade } from "svelte/transition";
import { useUI, useProps } from "../../../index.js";
import { selectMenu } from "./menu.config.js";
import { strify } from "../../../utils/index.js";
const props = useProps("SelectMenu");
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
    return open = next;
  }
});
$: $_open = open;
const { css, classer } = useUI(selectMenu, _class, override);
</script>

<div class={strify(css.root)}>
	<button class={strify(css.trigger)} {...$trigger} use:$trigger.action aria-label="Food">
		{$selectedLabel || placeholder}
		<span data-open={String(open)} class={strify(css.trigger.chevron)} />
	</button>

	{#if open}
		<div class={strify(css.menu)} {...$menu} use:$menu.action transition:fade={{ duration: 150 }}>
			{#each Object.entries(options) as [key, arr]}
				{@const __MELTUI_BUILDER_2__ = $groupLabel(key)}
				{@const __MELTUI_BUILDER_1__ = $group(key)}
				<div {...__MELTUI_BUILDER_1__} use:__MELTUI_BUILDER_1__.action>
					<div class={strify(css.menu.group)} {...__MELTUI_BUILDER_2__} use:__MELTUI_BUILDER_2__.action>
						{key}
					</div>
					{#each arr as item}
						{@const __MELTUI_BUILDER_0__ = $option({ value: item, label: item })}
						<div class={strify(css.menu.option)} {...__MELTUI_BUILDER_0__} use:__MELTUI_BUILDER_0__.action>
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
