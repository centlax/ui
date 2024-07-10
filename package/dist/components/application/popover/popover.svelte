<script>import { useProps, useUI } from "../../../index.js";
import { strify, twJoin } from "../../../utils/index.js";
import { createPopover, createSync, melt } from "@melt-ui/svelte";
import { fade } from "svelte/transition";
import { popover } from "./popover.config.js";
const props = useProps("Popover");
let _class = props.class;
export { _class as class };
export let open = props.open;
export let override = props.override;
export let float = props.float;
export let scroll = props.scroll;
export let overlay = props.overlay;
export let visible = props.visible;
export let trap = props.trap;
export let arrow = props.arrow;
export let pointer = props.pointer;
export let portal = props.portal;
export let transition = props.transition;
export function toggle() {
  open = !open;
}
const { css, classer } = useUI(popover, _class, override);
const {
  elements: { trigger, content, overlay: _overlay, arrow: _arrow },
  states
} = createPopover({
  forceVisible: visible,
  preventScroll: scroll,
  arrowSize: arrow,
  disableFocusTrap: trap,
  closeOnOutsideClick: pointer,
  positioning: float,
  portal
});
const sync = createSync(states);
$: sync.open(open, (v) => open = v);
</script>

{#if $$slots.trigger}
	<div {...$trigger} use:$trigger.action class={strify(css.trigger)}>
		<slot name="trigger" />
	</div>
{/if}

<slot name="open" />

{#if open}
	{#if overlay}
		<div {...$_overlay} use:$_overlay.action class={strify(css.overlay)} />
	{/if}
	<div
		{...$content} use:$content.action
		transition:fade={transition}
		class={twJoin(strify(css.content), classer)}
	>
		{#if arrow > 0}
			<span class={strify(css.arrow)} {...$_arrow} use:$_arrow.action />
		{/if}
		<slot />
	</div>
{/if}
