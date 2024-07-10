<script>import { useProps, useUI } from "../../../index.js";
import { strify, twJoin } from "../../../utils/index.js";
import { createDialog, createSync, melt } from "@melt-ui/svelte";
import { fade, fly } from "svelte/transition";
import { drawer } from "./drawer.config.js";
const props = useProps("Drawer");
let _class = props.class;
export { _class as class };
export let open = props.open;
export let override = props.override;
export let role = props.role;
export let scroll = props.scroll;
export let outside = props.outside;
export let portal = props.portal;
export let visible = props.visible;
export let transition = props.transition;
export function toggle() {
  open = !open;
}
const {
  elements: { overlay, content, portalled, trigger },
  states
} = createDialog({
  closeOnOutsideClick: outside,
  forceVisible: visible,
  preventScroll: scroll,
  portal,
  role
});
const sync = createSync(states);
const { css, classer } = useUI(drawer, _class, override);
$: sync.open(open, (v) => open = v);
</script>

{#if $$slots.trigger}
	<div {...$trigger} use:$trigger.action class={strify(css.trigger)}>
		<slot name="trigger" />
	</div>
{/if}

<slot name="open" />
{#if open}
	<div {...$portalled} use:$portalled.action class={strify(css.root)}>
		<div {...$overlay} use:$overlay.action class={strify(css.overlay)} transition:fade={transition.overlay} />
		<div
			{...$content} use:$content.action
			class={twJoin(strify(css.content), classer)}
			transition:fly={transition.content}
			{...$$restProps}
		>
			<slot />
		</div>
	</div>
{/if}
