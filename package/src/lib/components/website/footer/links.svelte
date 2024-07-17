<script lang="ts">
	/** Imports */
	import { useProps, useUI, type Link } from '$lib/index.js';
	import { merge, stringify } from '$lib/utils/helpers.js';
	import { footerLinks } from './links.config.js';

	/** Props */
	const props = useProps('FooterLinks');
	let _class = props.class;
	export { _class as class };
	export let override = props.override;
	export let links = props.links;

	/** UI */
	const { css, classer } = useUI(footerLinks, _class, override);
</script>

<div class={merge(stringify(css.root), classer)}>
	{#each links as link}
		<div class={stringify(css.column)}>
			<h3 class={stringify(css.column.title)}>{link.label}</h3>
			<ul role="list" class={stringify(css.column.ul)}>
				{#if link['links']}
					{#each link.links as { label, href }}
						<li class={stringify(css.column.ul.li)}>
							<a {href} class={stringify(css.column.ul.li.ancor)}>{label}</a>
						</li>
					{/each}
				{/if}
			</ul>
		</div>
	{/each}
</div>
