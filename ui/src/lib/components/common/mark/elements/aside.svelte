<script lang="ts">
	/** Imports */
	import { useUI } from '$lib/composables/ui.svelte.js';
	import { markAside, type MarkAsideProps } from './aside.js';

	/** Props */
	let { children, ...props }: MarkAsideProps = $props();

	/** Styles */
	const ui = useUI(markAside, props.class, props.override);
</script>

<aside
	class="fixed inset-0 left-[max(0px,calc(50%-45rem))] right-auto top-[3.8125rem] z-20 hidden w-[--ui-mark-aside-width] overflow-y-auto pb-10 pl-8 pr-6 lg:block"
>
	<nav id="nav" class="relative pb-20 lg:text-sm lg:leading-6">
		<ul>
			{@render children?.()}
		</ul>
	</nav>
</aside>

<style>
	:root {
		--ui-mark-aside-width: 20rem
	}
</style>
