<script lang="ts">
	/** Imports  */
	import { useUI } from '$lib/composables/ui.js';
	import { st, cn, cl } from '$lib/utils/wind.js';
	import { type ButtonProps, button } from './button.js';

	/** Props  */
	let { color = 'primary', ...props }: ButtonProps = $props();

	/** Styles  */
	const ui = useUI(button, props.class, props.override);
	let css = $state({
		button: st(ui.root)
	});
</script>

<svelte:element
	this={props.href ? 'a' : 'button'}
	{...props}
	class={cn(css.button, ui.class)}
	data-ui="button"
	style={cl(color)}
>
	{#if props.children}
		{@render props.children?.()}
	{:else}
		{props.about}
	{/if}
</svelte:element>
