<script lang="ts">
	/** Imports  */
	import { UIcon } from '$lib/components/export.js';
	import { useUI } from '$lib/composables/ui.svelte.js';
	import { st, cn, co } from '$lib/utils/wind.js';
	import { type XButton, button } from './button.js';

	/** Props  */
	let { loading = false, color = 'primary', attrs, ...props }: XButton = $props();

	/** Styles  */
	const ui = useUI(button, props.class, props.override);
	let css = $state({
		button: cn(st(ui.root, ui.opt.size['md'], ui.opt.variant['solid']), ui.class)
	});
</script>

<svelte:element
	this={props.href ? 'a' : 'button'}
	data-name="button"
	{...props}
	{...attrs}
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
