<script lang="ts">
	// Imports
	import type { HTMLAnchorAttributes, HTMLButtonAttributes } from 'svelte/elements';
	import type { Button } from './button.js';
	import { css } from './button.styles.js';
	import { UIcon } from '$lib/index.js';
	import { twJoin } from 'tailwind-merge';
	import { config } from '$lib/ui.config.js';

	// Types
	type $$Props = (HTMLAnchorAttributes | HTMLButtonAttributes) & Button;

	// Props
	let classProp: string | undefined | null = '';
	export { classProp as class };
	export let href: Button['href'] = '';
	export let icon: Button['icon'] = '';
	export let label: Button['label'] = '';
	export let truncate: Button['truncate'] = false;
	export let square: Button['square'] = false;
	export let block: Button['block'] = false;
	export let size: Button['size'] = config.size;
	export let loading: Button['loading'] = false;
	export let padded: Button['padded'] = true;
	export let leading: Button['leading'] = false;
	export let trailing: Button['trailing'] = false;
	export let rounded: Button['rounded'] = false;
	export let variant: Button['variant'] = 'solid';
	export let color: Button['color'] = 'primary';
	export let action: Function = () => {};

	// Config
	let configVariant: string =
		// @ts-ignore
		css.variant?.base[variant]?.[color] || css.variant?.mask[variant].replaceAll('{color}', color);

	// Reactive
	$: mainIcon = typeof icon === 'string' ? icon : '';
	$: loadingIcon = typeof icon === 'object' && icon.loading ? icon.loading : config.icon.loading;
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
		!isSquare && css.gap[size || config.size],
		css.text[size || config.size],
		block ? css.block : css.inline,
		padded && css.padding[isSquare ? 'square' : 'rectangle'][size || 'sm'],
		rounded ? 'rounded-full' : css.rounded,
		classProp
	);

	$: leadingIconName = loading ? loadingIcon : leadingIcon || mainIcon;
	$: trailingIconName = loading && !isLeading ? loadingIcon : trailingIcon || mainIcon;

	$: iconCSS = twJoin(css.icon.base, css.icon.size[size || config.size]);
	$: leadingIconCSS = twJoin(iconCSS, loading && css.icon.loading);
	$: trailingIconCSS = twJoin(iconCSS, loading && !isLeading && css.icon.loading);
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<svelte:element
	this={href ? 'a' : 'button'}
	use:action
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
