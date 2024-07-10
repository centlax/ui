<script>import { useProps, useUI } from "../../../index.js";
import { flyAndScale } from "../../../theme/motion/fly-scale.js";
import { strify, twJoin } from "../../../utils/index.js";
import { createDialog, createSync, melt } from "@melt-ui/svelte";
import { fade } from "svelte/transition";
import { modal } from "./modal.config.js";
const props = useProps("Modal");
let _class = props.class;
export { _class as class };
export let override = props.override;
export let open = props.open;
export let role = props.role;
export let scroll = props.scroll;
export let close = props.close;
export let portal = props.portal;
export let visible = props.visible;
export let motion = props.motion;
export function toggle() {
  open = !open;
}
const { css, classer } = useUI(modal, _class, override);
const {
  elements: { portalled, overlay, content, trigger },
  states
} = createDialog({
  closeOnOutsideClick: typeof close === "object" ? close.outsie : true,
  preventScroll: scroll,
  forceVisible: visible,
  portal,
  role
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
	<div {...$portalled} use:$portalled.action class={strify(css.root)}>
		<div {...$overlay} use:$overlay.action class={strify(css.overlay)} transition:fade={{ duration: 150 }} />
		<div
			{...$content} use:$content.action
			class={twJoin(strify(css.content), classer)}
			transition:flyAndScale={motion}
		>
			<slot />
		</div>
	</div>
{/if}
