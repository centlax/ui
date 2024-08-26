<script lang="ts">
	/** Imports */
	import { footer } from './footer.config.js';
	import { UFooterLinks, useProps, useUI } from '$lib/import.js';
	import { merge, stringify } from '$lib/utils/helpers.js';

	/** Props */
	const props = useProps('Footer');
	let _class = props.class;
	export { _class as class };
	export let override = props.override;
	export let links = props.links;
	export let notice = props.notice;

	/** UI */
	const { css, classer } = useUI(footer, _class, override);
</script>

<footer class={merge(stringify(css.root), classer)} aria-labelledby="footer-heading">
	<div class={stringify(css.north)}>
		<slot />
		<UFooterLinks {links} />
	</div>
	<div class={stringify(css.south)}>
		<p class={stringify(css.south.notice)}>
			<!-- eslint-disable-next-line svelte/no-at-html-tags -->
			{@html notice}
		</p>
	</div>
</footer>
