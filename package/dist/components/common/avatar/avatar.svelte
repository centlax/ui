<script>import { createAvatar, melt } from "@melt-ui/svelte";
import { stringify, merge } from "../../../utils/index.js";
import { useProps } from "../../../composables/use/props.js";
import { useUI } from "../../../composables/use/ui.js";
import { avatar } from "./avatar.config.js";
const props = useProps("Avatar");
let _class = props.class;
export { _class as class };
export let override = props.override;
export let src = props.src;
export let alt = props.alt;
export let text = props.name;
export let size = props.size;
const { css, classer } = useUI(avatar, _class, override);
$: ui = {
  root: merge(stringify(css.root, css.opt.size[size]), classer)
};
const {
  elements: { image, fallback }
} = createAvatar({
  src
});
</script>

<button class={ui.root}>
	<img {...$image} use:$image.action {alt} class={stringify(css.img)} />
	<span {...$fallback} use:$fallback.action class={stringify(css.fallback)}>{text}</span>
	<slot />
</button>
