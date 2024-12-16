<script lang="ts">
	/** Imports  */
	import { UIcon } from '$lib/components/export.js';
	import { useUI } from '$lib/composables/ui.js';
	import { st, cn, co } from '$lib/internal/utils/wind.js';
	import { type ButtonProps, button } from './button.js';

	/** Props  */
	let { loading = false, color = 'primary', ...props }: ButtonProps = $props();

	/** Styles  */
	const ui = useUI(button, props.class, props.override);
	let css = $state({
		button: cn(st(ui.root, ui.opt.size['md'], ui.opt.variant['solid']['color']), ui.class)
	});
</script>

<svelte:element
	this={props.href ? 'a' : 'button'}
	{...props}
	class={css.button}
	style={co(color)}
	disabled={props.disabled || loading}
>
	{@render props.children?.()}
	{props.text}

	{#if loading}
		<span class={st(ui.load)}>
			<UIcon name={st(ui.load.icon)} />
		</span>
	{/if}
</svelte:element>
