<script lang="ts">
	/** Imports */
	import { strify, twJoin } from '$lib/utils/index.js';
	import { headerLinks, props } from './links.js';
	import { useUI } from '$lib/index.js';

	/** Props */
	let _class = props.class;
	export let override = props.override;
	export let links = props.links;
	export let vertical = props.vertical;

	/** Logic */
	$: is = {
		vertical: vertical
	};

	/** UI */
	const { css, classer } = useUI(headerLinks, _class, override);
	$: ui = {
		root: twJoin(strify(css.root, css.opt.mode[is.vertical ? 'vertical' : 'horizontal']), classer)
	};
</script>

<ul class={ui.root}>
	{#each links as link}
		<li class={strify(css.list)}>
			<a href="/" class={strify(css.list.ancor)}>{link?.label}</a>
		</li>
	{/each}
</ul>
