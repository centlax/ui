<script lang="ts">
	/** Imports */
	import { createAvatar, melt } from '@melt-ui/svelte';
	import { stringify, merge } from '$lib/utils/index.js';
	import { useProps } from '$lib/composables/use/props.js';
	import { useUI } from '$lib/composables/use/ui.js';
	import { avatar } from './avatar.config.js';

	/** Props */
	const props = useProps('Avatar');
	let _class = props.class;
	export { _class as class };
	export let override = props.override;
	export let src = props.src;
	export let alt = props.alt;
	export let text = props.name;
	export let size = props.size;

	/** UI */
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
	<img use:melt={$image} {alt} class={stringify(css.img)} />
	<span use:melt={$fallback} class={stringify(css.fallback)}>{text}</span>
	<slot />
</button>
