<script lang="ts">
	/** Imports */
	import { useUI } from '$lib/composables/ui.js';
	import { chip, type ChipProps } from './chip.js';
	import { st, cn } from '$lib/utils/wind.js';

	/** Props */
	let { ...props }: ChipProps = $props();

	/** Styles */
	const ui = useUI(chip, props.class, props.override);
	let css = $state({
		chip: cn(
			st(
				ui.root,
				// @ts-ignore
				props.float && ui.opt.float[props.float]
			),
			ui.class
		)
	});
</script>

<span {...props} class={css.chip}>
	{@render props.children?.()}
</span>
