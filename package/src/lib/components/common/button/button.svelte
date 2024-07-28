<script lang="ts">
	/** Imports */
	import { button } from './button.config.js';
	import { useProps, useUI } from '$lib/import.js';
	import { merge, stringify, varify } from '$lib/utils/index.js';

	/** Props  */
	const props = useProps('Button');
	let _class = props.class;
	export { _class as class };
	export let override = props.override;
	export let href = props.href;
	export let loading = props.loading;
	export let disabled = props.disabled;
	export let label = props.label;
	export let color = props.color;
	export let variant = props.variant;
	export let size = props.size;

	/** UI */
	const { css, classer } = useUI(button, _class, override);
	$: ui = {
		root: merge(
			stringify(css.root, css.opt.size[size], varify(css.opt.variant[variant], color)),
			classer
		)
	};
</script>

<svelte:element
	this={href ? 'a' : 'button'}
	role="button"
	tabindex={0}
	disabled={disabled || loading}
	{href}
	on:click
	on:dblclick
	on:mouseenter
	on:mouseleave
	class={ui.root}
	{...$$restProps}
>
	<slot>{label}</slot>
</svelte:element>
