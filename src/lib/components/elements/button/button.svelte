<script lang="ts">
	// imports
	import type { HTMLAnchorAttributes, HTMLButtonAttributes } from 'svelte/elements';
	import type { ButtonProps } from './button.props.js';
	import { css } from './button.styles.js';
	import { UIcon } from '$lib/index.js';
	import { twJoin } from 'tailwind-merge';
	import { ui } from '$lib/ui.config.js';

	// types
	type $$Props = (HTMLAnchorAttributes & ButtonProps) | (HTMLButtonAttributes & ButtonProps);

	// props
	let classProp: string | undefined | null = '';
	export { classProp as class };
	export let href: ButtonProps['href'] = '';
	export let icon: ButtonProps['icon'] = '';
	export let label: ButtonProps['label'] = '';
	export let truncate: ButtonProps['truncate'] = false;
	export let square: ButtonProps['square'] = false;
	export let block: ButtonProps['block'] = false;
	export let size: ButtonProps['size'] = ui.size;
	export let loading: ButtonProps['loading'] = false;
	export let padded: ButtonProps['padded'] = true;
	export let leading: ButtonProps['leading'] = false;
	export let trailing: ButtonProps['trailing'] = false;
	export let rounded: ButtonProps['rounded'] = false;
	export let variant: ButtonProps['variant'] = 'solid';
	export let color: ButtonProps['color'] = 'primary';

	// reactive
	$: isLeading =
		(icon && leading) ||
		(icon && !trailing) ||
		(loading && !trailing) ||
		(typeof icon === 'object' && icon.leading);

	$: isTrailing =
		(icon && trailing) || (loading && trailing) || (typeof icon === 'object' && icon.trailing);

	$: isSquare = square || (!$$slots.default && !label);

	$: loadingIcon = typeof icon === 'object' && icon.loading ? icon.loading : ui.icon.loading;
	$: leadingIcon = loading ? loadingIcon : typeof icon === 'object' ? icon.leading : icon;
	$: trailingIcon =
		loading && !isLeading ? loadingIcon : typeof icon === 'object' ? icon.trailing : icon;

	// config
	let _variant: string =
		//@ts-ignore
		css.variant?.base[variant]?.[color] ||
		//@ts-ignore
		css.variant?.mask[variant].replaceAll('{color}', color);

	// reactive
	$: buttonCSS = twJoin(
		css.base,
		css.font,
		_variant,
		css.gap[size || 'sm'],
		css.text[size || 'sm'],
		block ? css.block : css.inline,
		padded && css.padding[isSquare ? 'square' : 'rectangle'][size || 'sm'],
		rounded ? 'rounded-full' : css.rounded,
		classProp
	);
	$: leadingIconCSS = twJoin(loading ? `${loadingIcon} animate-spin` : leadingIcon);
	$: trailingIconCSS = twJoin(loading ? `${loadingIcon} animate-spin` : trailingIcon);
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<svelte:element
	this={href ? 'a' : 'button'}
	on:click
	on:change
	on:keydown
	on:keyup
	on:mouseenter
	on:mouseleave
	class={buttonCSS}
	{...$$restProps}
>
	{#if $$slots.leading || leadingIcon}
		<slot name="leading">
			<UIcon name={leadingIconCSS} aria-hidden="true" />
		</slot>
	{/if}
	<slot>
		<span class={truncate ? css.truncate : ''}>
			{label}
		</span>
	</slot>
	{#if $$slots.trailing || trailingIcon}
		<slot name="trailing">
			{#if isTrailing}
			<UIcon name={trailingIconCSS} aria-hidden="true" />
			{/if}
		</slot>
	{/if}
</svelte:element>
