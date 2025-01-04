<script lang="ts">
	import { useUI } from '$lib/composables/ui.js';
	import type { ToKebab } from '$lib/types/utils.js';
	import { toCamel } from '$lib/utils/props.js';
	import { cn, st } from '$lib/utils/wind.js';
	import { Dialog as Primitive } from 'bits-ui';
	import { sheet$, type XSheetContentProps } from './content.js';
	let { children, from = 'east', ...props }: ToKebab<XSheetContentProps> = $props();

	/** Styles */
	const ui = useUI(sheet$, props.class, props.override);
	const css = $state({
		content: cn(st(ui.root, ui.root.opt.from[from]), ui.class)
	});
</script>

<Primitive.Portal>
	<Primitive.Overlay />
	<Primitive.Content {...toCamel(props)} class={css.content}>
		{@render children?.()}
	</Primitive.Content>
</Primitive.Portal>
