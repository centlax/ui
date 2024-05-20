<script lang="ts">
	// Imports
	import { type Button } from './button.js';
	import { styles } from './button.styles.js';
	import { stringify, twJoin, colorize, iconify, variantify } from '$lib/utils/index.js';
	import { useUI } from './ui.js';
	import { config } from '$lib/ui.config.js';

	// Props
	let _class: Button['class'] = {};
	export { _class as class };
	export let href: Button['href'] = '';
	export let icon: Button['icon'] = {};
	export let label: Button['label'] = '';
	export let truncate: Button['truncate'] = false;
	export let square: Button['square'] = false;
	export let block: Button['block'] = false;
	export let size: Button['size'] = config.size;
	export let loading: Button['loading'] = false;
	export let padded: Button['padded'] = true;
	export let rounded: Button['rounded'] = false;
	export let variant: Button['variant'] = 'solid';
	export let color: Button['color'] = 'primary';
	export let action: Button['action'] = () => {};

	// Config
	const { css, classer } = useUI(styles, _class);

	// Reactive
	$: _icon = iconify(icon);
	$: loadingIcon = `${stringify(css.icon.is.loading)} ${_icon?.loading || config.icon.loading}`;
	$: leadingIcon = loading ? loadingIcon : _icon?.leading;
	$: trailingIcon = _icon?.trailing;

	$: iconUI = stringify(css.icon, css.icon.opt.size[size]);
	$: rootUI = twJoin(
		stringify(css.root),
		variantify(css.opt.variant[variant], color),
		stringify(block ? css.is.block : css.is.inline),
		stringify(css.opt.text[size], css.opt.gap[size]),
		rounded ? 'rounded-full' : stringify(css.is.rounded),
		padded && stringify(css.opt.padding[square ? 'square' : 'rectangle'][size]),
		classer
	);
</script>

<svelte:element
	this={href ? 'a' : 'button'}
	data-size={size}
	style={colorize(color)}
	role="button"
	tabindex={0}
	use:action
	{href}
	on:click
	on:change
	on:keydown
	on:keyup
	on:mouseenter
	on:mouseleave
	class={rootUI}
	{...$$restProps}
>
	{#if $$slots.leading || leadingIcon}
		<slot name="leading">
			<span data-size={size} class={twJoin(iconUI, leadingIcon)} aria-hidden="true" />
		</slot>
	{/if}
	{#if $$slots.default || label}
		<slot>
			<span data-size={size} class={stringify(truncate ? css.is.truncate : {})}>{label}</span>
		</slot>
	{/if}
	{#if $$slots.trailing || trailingIcon}
		<slot name="trailing">
			<span data-size={size} class={twJoin(iconUI, trailingIcon)} aria-hidden="true" />
		</slot>
	{/if}
</svelte:element>
