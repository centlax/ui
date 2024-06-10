<script lang="ts">
	/** Imports */
	import { useUI, useProps } from '$lib/index.js';
	import { media } from './media.config.js';
	import { strify, twJoin } from '$lib/utils/index.js';

	/** Props */
	const props = useProps('Media');
	let _class = props.class;
	export { _class as class };
	export let override = props.override;

	/** UI */
	const { css, classer } = useUI(media, _class, override);
</script>

<div class={twJoin(strify(css.root), classer)}>
	<div class="mr-4 flex-shrink-0">
		<span class="i-fluent-dismiss-circle-20-regular" />
	</div>
	<div>
		<h4 class="text-lg font-bold">Lorem ipsum</h4>
		<p class="mt-1">
			Repudiandae sint consequuntur vel. Amet ut nobis explicabo numquam expedita quia omnis
			voluptatem. Minus quidem ipsam quia iusto.
		</p>
	</div>
</div>
