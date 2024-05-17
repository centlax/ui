<script lang="ts">
	// Imports
	import { type Button } from './button.js';
	import { styles } from './button.styles.js';
	import { stringfy, twJoin, colorize, masker } from '$lib/utils/index.js';
	import { useUI } from '$lib/composables/useUI.js';
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
	$: _icon = typeof icon === 'string' && icon;
	$: _leadingIcon = typeof icon === 'object' ? icon.leading : _icon;
	$: loadingIcon = (typeof icon === 'object' && icon.loading) || config.icon.loading;
	$: leadingIcon = loading ? `${loadingIcon} ${css.icon.loading}` : _leadingIcon;
	$: trailingIcon = typeof icon === 'object' && icon.trailing;

	$: iconUI = twJoin(css.icon.base, css.icon.size[size]);
	$: rootUI = twJoin(
		stringfy(css.root),
		stringfy(css.variant[variant][masker(css.variant.solid, color)]),
		css.gap[size],
		css.text[size],
		block ? css.block : css.inline,
		padded && css.padding[square ? 'square' : 'rectangle'][size],
		rounded ? css.rounded.full : css.rounded.md,
		classer
	);
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<svelte:element
	this={href ? 'a' : 'button'}
	style={colorize(color)}
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
	<slot name="leading">
		{#if $$slots.leading || leadingIcon}
			<span class={twJoin(iconUI, leadingIcon)} aria-hidden="true" />
		{/if}
	</slot>
	<slot>
		<span class={truncate ? css.truncate : ''}>{label}</span>
	</slot>
	<slot name="trailing">
		{#if $$slots.trailing || trailingIcon}
			<span class={twJoin(iconUI, trailingIcon)} aria-hidden="true" />
		{/if}
	</slot>
</svelte:element>
