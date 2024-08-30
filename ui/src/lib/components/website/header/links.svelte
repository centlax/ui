<script lang="ts">
	/** Imports */
	import { headerLinks, props } from './links.js';
	import { stringify, twJoin } from '$lib/utils/index.js';
	import { useUI } from '$lib/import.js';

	/** Props */
	let _class = props.class;
	export let override = props.override;
	export let links = props.links;
	export let vertical = props.vertical;

	/** Logic */
	$: is = {
		vertical
	};

	/** UI */
	const { css, classer } = useUI(headerLinks, _class, override);
	$: ui = {
		root: twJoin(
			stringify(css.root, css.opt.mode[is.vertical ? 'vertical' : 'horizontal']),
			classer
		)
	};
</script>

<ul class={ui.root}>
	{#each links as link}
		<li class={stringify(css.list)}>
			<a href="/" class={stringify(css.list.ancor)}>{link?.label}</a>
		</li>
	{/each}
</ul>
