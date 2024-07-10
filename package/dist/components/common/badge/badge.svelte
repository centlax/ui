<script>import { useProps, useUI } from "../../../index.js";
import { colorize, merge, stringify } from "../../../utils/index.js";
import { badge } from "./badge.config.js";
const props = useProps("Badge");
let _class = props.class;
export { _class as class };
export let override = props.override;
export let color = props.color;
export let dot = props.dot;
const { css, classer } = useUI(badge, _class, override);
$: ui = {
  root: merge(stringify(css.root), classer)
};
</script>

<span style={colorize(color)} class={ui.root}>
	{#if dot}
		<i class={stringify(css.dot)} />
	{/if}
	<slot />
</span>
