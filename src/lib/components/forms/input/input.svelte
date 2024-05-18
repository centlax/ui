<script lang="ts">
	// Imports
	import type { Input } from './input.js';
	import { colorize, stringfy, twJoin, masker } from '$lib/utils/index.js';
	import { styles } from './input.styles.js';
	import { config } from '$lib/ui.config.js';
	import { useUI } from '$lib/composables/useUI.js';

	// Props
	let _class: Input['class'] = '';
	export { _class as class };
	export let icon: Input['icon'] = '';
	export let loading: Input['loading'] = false;
	export let size: Input['size'] = config.size;
	export let padded: Input['padded'] = true;
	export let variant: Input['variant'] = 'solid';
	export let color: Input['color'] = 'white';
	export let value: Input['value'] = '';
	export let rounded: Input['rounded'] = false;
	export let el: Input['el'] = null;

	// Config
	const { css, classer } = useUI(styles, _class);

	// Reactive
	$: _icon = typeof icon === 'string' && icon;
	$: _leadingIcon = typeof icon === 'object' ? icon.leading : _icon;
	$: loadingIcon = (typeof icon === 'object' && icon.loading) || config.icon.loading;
	$: leadingIcon = loading ? `${loadingIcon} ${css.icon.loading}` : _leadingIcon;
	$: trailingIcon = typeof icon === 'object' && icon.trailing;

	$: leading = $$slots.leading || leadingIcon;
	$: trailing = $$slots.trailing || trailingIcon;
	$: leadingUI = twJoin(stringfy(css.icon.leading), css.icon.leading.padding[size]);
	$: trailingUI = twJoin(stringfy(css.icon.trailing), css.icon.trailing.padding[size]);

	$: iconUI = twJoin(css.icon.base, css.icon.size[size]);

	// Reactive
	$: inputUI = twJoin(
		stringfy(css.input),
		stringfy(css.variant[variant][masker(css.variant.solid, color)]),
		rounded ? css.input.rounded.full : css.input.rounded.md,
		$$props.type === 'file' && [css.file.base, css.file.padding[size || 'sm']],
		css.input.text[size],
		padded ? css.input.padding.auto[size] : css.input.padding.none,
		leading && css.leading[size],
		trailing && css.trailing[size],
		classer
	);
</script>

<div class={css.root} style={colorize(color)}>
	<slot name="north" />
	<input
		bind:this={el}
		bind:value
		on:abort
		on:blur
		on:change
		on:click
		on:toggle
		{...$$restProps}
		class={inputUI}
	/>
	<slot />
	<slot name="south" />
	{#if leading}
		<span class={leadingUI}>
			<slot name="leading">
				<span class={twJoin(iconUI, leadingIcon)} aria-hidden="true" />
			</slot>
		</span>
	{/if}

	{#if trailing}
		<span class={trailingUI}>
			<slot name="trailing">
				<span class={twJoin(iconUI, trailingIcon)} aria-hidden="true" />
			</slot>
		</span>
	{/if}
</div>
