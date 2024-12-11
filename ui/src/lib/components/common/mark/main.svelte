<script lang="ts">
	/** Imports */
	import { useUI } from '$lib/composables/ui.js';
	import { st, cn } from '$lib/utils/wind.js';
	import { markMain, type MarkMainProps } from './main.js';

	/** Props */
	let { ...props }: MarkMainProps = $props();

	/** Styles */
	const ui = useUI(markMain, props.class, props.override);
</script>

<main class={cn(st(ui.root), ui.class)}>
	<div class="lg:pl-[19.5rem]">
		<div class="mx-auto max-w-3xl pt-10 xl:ml-0 xl:mr-[15.5rem] xl:max-w-none xl:pr-16">
			{@render props.children?.()}
		</div>
	</div>
</main>
