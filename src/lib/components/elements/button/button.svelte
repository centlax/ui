<script lang="ts">
	// Imports
	import type { HTMLAnchorAttributes, HTMLButtonAttributes } from 'svelte/elements';
	import type { ButtonProps } from './button.props.js';
	import { css } from './button.styles.js';
	import { UIcon } from '$lib/index.js';
	import { twJoin } from 'tailwind-merge';
	import { ui } from '$lib/ui.config.js';

	// Types
	type $$Props = (HTMLAnchorAttributes | HTMLButtonAttributes) & ButtonProps;

	// Props
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

	// Config
	let configVariant: string =
		// @ts-ignore
		css.variant?.base[variant]?.[color] || css.variant?.mask[variant].replaceAll('{color}', color);

	// Reactive
	$: mainIcon = typeof icon === 'string' ? icon : '';
	$: loadingIcon = typeof icon === 'object' && icon.loading ? icon.loading : ui.icon.loading;
	$: leadingIcon = typeof icon === 'object' ? icon.leading : '';
	$: trailingIcon = typeof icon === 'object' ? icon.trailing : '';
	$: isLeading =
		(mainIcon && leading) || (mainIcon && !trailing) || (loading && !trailing) || leadingIcon;
	$: isTrailing = (mainIcon && trailing) || (loading && trailing) || trailingIcon;
	$: isSquare = square || (!$$slots.default && !label && isLeading !== isTrailing);
	$: buttonCSS = twJoin(
		css.base,
		css.font,
		configVariant,
		!isSquare && css.gap[size || ui.size],
		css.text[size || ui.size],
		block ? css.block : css.inline,
		padded && css.padding[isSquare ? 'square' : 'rectangle'][size || 'sm'],
		rounded ? 'rounded-full' : css.rounded,
		classProp
	);

	$: leadingIconName = loading ? loadingIcon : leadingIcon || mainIcon;
	$: trailingIconName = loading && !isLeading ? loadingIcon : trailingIcon || mainIcon;

	$: iconCSS = twJoin(css.icon.base, css.icon.size[size || ui.size]);
	$: leadingIconCSS = twJoin(iconCSS, loading && css.icon.loading);
	$: trailingIconCSS = twJoin(iconCSS, loading && !isLeading && css.icon.loading);
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<svelte:element
	this={href ? 'a' : 'button'}
	{href}
	on:click
	on:change
	on:keydown
	on:keyup
	on:mouseenter
	on:mouseleave
	class={buttonCSS}
	{...$$restProps}
>
	<slot name="leading">
		{#if isLeading || leadingIcon}
			<UIcon name={leadingIconName} class={leadingIconCSS} aria-hidden="true" />
		{/if}
	</slot>
	<slot>
		<span class={truncate ? css.truncate : ''}>
			{label}
		</span>
	</slot>
	<slot name="trailing">
		{#if isTrailing || trailingIcon}
			<UIcon name={trailingIconName} class={trailingIconCSS} aria-hidden="true" />
		{/if}
	</slot>
</svelte:element>
