<script lang="ts">
	/** Imports */
	import { sidebar } from './sidebar.config.js';
	import { useProps, useUI } from '$lib/import.js';
	import { merge, stringify } from '$lib/utils/helpers.js';

	/** Props */
	const props = useProps('Sidebar');
	let _class = props.class;
	export { _class as class };
	export let override = props.override;

	let _mode: 'pine' | 'dual' | 'slim' = 'pine';

	/** UI */
	const { css, classer } = useUI(sidebar, _class, override);
</script>

<section class={merge(stringify(css.root), classer)}>
	<div class={stringify(css.north)}>
		<div class={stringify(css.north.header)}>
			<slot name="header" />
		</div>
		<slot name="search" />
		<slot name="north-nav" />
	</div>
	<div id="south" class={stringify(css.south)}>
		<slot name="south-nav" />
		<slot name="feature" />
		<slot name="account" />
	</div>
</section>
