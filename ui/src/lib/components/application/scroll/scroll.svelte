<script lang="ts">
	/** Imports */
	import { createScrollArea, melt } from '@melt-ui/svelte';
	import { scroll } from './scroll.config.js';
	import { useProps, useUI } from '$lib/import.js';
	import { merge, stringify } from '$lib/utils/helpers.js';

	/** Props */
	const props = useProps('Scroll');
	let _class = props.class;
	export { _class as class };
	export let override = props.override;
	export let type = props.type;
	export let delay = props.delay;

	/** Melt */
	const {
		elements: { root, content, viewport, corner, scrollbarY, thumbY, thumbX, scrollbarX }
	} = createScrollArea({
		type,
		hideDelay: delay
	});

	/** UI */
	const { css, classer } = useUI(scroll, _class, override);
</script>

<div use:melt={$root} class={merge(stringify(css.root), classer)}>
	<div use:melt={$viewport} class={stringify()}>
		<div use:melt={$content} class={stringify(css.viewport.content)}>
			<slot />
		</div>
	</div>
	<div use:melt={$scrollbarY} class={stringify(css.barY)}>
		<div use:melt={$thumbY} class={stringify(css.barY.thumb)} />
	</div>
	<div use:melt={$scrollbarX} class={stringify(css.barX)}>
		<div use:melt={$thumbX} class={stringify(css.barX.thumb)} />
	</div>
	<div use:melt={$corner} class={stringify(css.corner)} />
</div>
