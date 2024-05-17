<script lang="ts">
	// Imports
	import type { Input } from './input.js';
	import { colorize, stringfy, twJoin } from '$lib/utils/index.js';
	import { css } from './input.styles.js';
	import { config } from '$lib/ui.config.js';
	import { UIcon } from '$lib/index.js';

	// Props
	let classProp: string | undefined | null = '';
	export { classProp as class };
	export let icon: Input['icon'] = '';
	export let loading: Input['loading'] = false;
	export let leading: Input['leading'] = false;
	export let trailing: Input['trailing'] = false;
	export let size: Input['size'] = config.size;
	export let padded: Input['padded'] = true;
	//export let variant: Input['variant'] = 'outline';
	//export let color: Input['color'] = context?.color || 'white';
	//export let mask: Input['mask'] = false;
	export let value: Input['value'] = '';
	export let rounded: Input['rounded'] = false;
	export let el: Input['el'] = null;

	// Reactive
	$: mainIcon = typeof icon === 'string' ? icon : '';
	$: loadingIcon = typeof icon === 'object' && icon.loading ? icon.loading : config.icon.loading;
	$: leadingIcon = typeof icon === 'object' ? icon.leading : '';
	$: trailingIcon = typeof icon === 'object' ? icon.trailing : '';

	$: isLeading =
		(mainIcon && leading) || (mainIcon && !trailing) || (loading && !trailing) || leadingIcon;
	$: isTrailing = (mainIcon && trailing) || (loading && trailing) || trailingIcon;

	$: leadingIconName = loading ? loadingIcon : leadingIcon || mainIcon;
	$: trailingIconName = loading && !isLeading ? loadingIcon : trailingIcon || mainIcon;

	$: leadingCSS = twJoin(stringfy(css.icon.leading), css.icon.leading.padding[size]);

	$: leadingIconCSS = twJoin(
		css.icon.base,
		css.icon.size[size || 'sm'],
		loading && css.icon.loading
	);

	$: trailingCSS = twJoin(stringfy(css.icon.trailing), css.icon.trailing.padding[size]);

	$: trailingIconCSS = twJoin(
		css.icon.base,
		css.icon.size[size],
		loading && !isLeading && css.icon.loading
	);

	// reactive
	$: inputUI = twJoin(
		stringfy(css.input),
		rounded ? css.input.rounded.full : css.input.rounded.md,
		$$props.type === 'file' && [css.file.base, css.file.padding[size || 'sm']],
		css.input.text[size],
		padded ? css.input.padding.auto[size] : css.input.padding.none,
		(isLeading || $$slots.leading) && css.leading[size],
		(isTrailing || $$slots.trailing) && css.trailing[size],
		classProp
	);
</script>

<div style={colorize()}>
	<slot />
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

	{#if $$slots.leading}
		<span class={leadingCSS}>
			<slot name="leading">
				<UIcon name={leadingIconName} class={leadingIconCSS} />
			</slot>
		</span>
	{/if}
	{#if $$slots.trailing}
		<span class={trailingCSS}>
			<slot name="trailing">
				<UIcon name={trailingIconName} class={trailingIconCSS} />
			</slot>
		</span>
	{/if}
</div>
