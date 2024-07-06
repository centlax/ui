<script lang="ts">
	/** Imports */
	import { useProps, useUI, type DeepStyles } from '$lib/index.js';
	import { strify, twJoin, varify } from '$lib/utils/index.js';
	import { button } from './button.config.js';

	/** Props  */
	const props = useProps('Button');
	let _class = props.class;
	export { _class as class };
	export let icon = props.icon;
	export let override = props.override;
	export let href = props.href;
	export let loading = props.loading;
	export let disabled = props.disabled;
	export let label = props.label;
	export let color = props.color;
	export let variant = props.variant;
	export let size = props.size;
	export let circle = props.circle;
	export let square = props.square;

	/** Logic */
	$: is = {
		east: $$slots.east || loading,
		west: $$slots.west,
		default: $$slots.default || label,
		circle,
		square
	};

	/** UI */
	const { css, classer } = useUI(button, _class, override);
	$: ui = {
		root: twJoin(
			strify(css.root, css.opt.size[size], varify(css.opt.variant[variant], color)),
			classer
		),
		icon: {
			load: loading ? strify(css.attr.icon.load) : '',
			east: typeof icon === 'string' ? icon : icon.east,
			west: typeof icon === 'object' ? icon.west : ''
		}
	};
</script>

<svelte:element
	this={href ? 'a' : 'button'}
	role="button"
	tabindex={0}
	disabled={disabled || loading}
	{href}
	data-circle={String(is.circle)}
	data-square={String(is.square)}
	on:click
	on:change
	on:keydown
	on:keyup
	on:mouseenter
	on:mouseleave
	class={ui.root}
	{...$$restProps}
>
	{#if is.east}
		<slot name="east">
			<span data-slot="icon" class={ui.icon['load' || 'east']} />
		</slot>
	{/if}

	{#if is.default}
		<slot>{label}</slot>
	{/if}

	{#if is.west}
		<slot name="west">
			<span data-slot="icon" class={ui.icon.west} />
		</slot>
	{/if}
</svelte:element>
