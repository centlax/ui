<script>import { useProps, useUI } from "../../../index.js";
import { strify, twJoin } from "../../../utils/index.js";
import { container } from "./container.config.js";
const props = useProps("Container");
let _class = props.class;
export { _class as class };
export let override = props.override;
export let as = props.as;
const { css, classer } = useUI(container, _class, override);
</script>

<svelte:element this={as} {...$$restProps} class={twJoin(strify(css.root), classer)}>
	<slot />
</svelte:element>
