<script lang="ts">
	/* imports */
	import './button.css';
	import type { Size, XDir } from '$lib/types/index.js';
	import { css, handleMask, type ButtonColor, type ButtonVariant } from './button.js';
	import { twJoin, twMerge } from 'tailwind-merge';
	import { shareUI } from '$lib/theme/share.js';
	import Icon from '../-more/icon.svelte';
	import { ui } from '$lib/ui.config.js';
	import { Button, type ButtonProps } from 'bits-ui';
	import type { HTMLButtonAttributes } from 'svelte/elements';

	/* props */
	type $$restProps = ButtonProps;
	export let label: string = '';
	let classProp = '';
	export { classProp as class };
	export let size: Size = ui.size;
	export let href: string = '';
	export let square: boolean = false;
	export let truncate: boolean = false;
	export let dir: XDir = 'east';
	export let icon: string = '';
	export let eastIcon: string = dir === 'east' ? icon : '';
	export let westIcon: string = dir === 'west' ? icon : '';
	export let loading: boolean = false;
	export let disabled: boolean = false;
	export let block: boolean = false;
	export let color: ButtonColor = 'primary';
	export let variant: ButtonVariant = 'solid';

	/* config */
	$: mask = handleMask(variant, color);
	let isBase = ['white', 'black', 'gray'].includes(color) && ['solid', 'ghost'].includes(variant);
	// @ts-ignore bc type mistmatch, but will only run if isBase is true, which insures right index at runtime
	$: base = variant === 'solid' ? css.variant.base.solid[color] : css.variant.base.ghost[color];

	/* styles */
	$: buttonCSS = twMerge(
		twJoin(
			css.base,
			isBase
				? base
				: `${css.variant.mask[variant]} button` /** button implemeted inside styles.css */,
			shareUI.text[size],
			shareUI.padding[square ? 'square' : 'rectangle'][size],
			css.rounded,
			shareUI.gap[size],
			block ? css.block : css.inline
		),
		classProp
	);
	$: iconCSS = twJoin('');
</script>

<Button.Root
	{href}
	class={buttonCSS}
	on:click
	on:change
	on:keydown
	on:keyup
	on:mouseenter
	on:mouseleave
	{...$$restProps}
	style="
	--fore:{mask.fore.light}; 
	--back:{mask.back.light}; 
	--hover-fore:{mask.hover.fore.light}; 
	--hover-back:{mask.hover.back.light}; 
	--dark-fore:{mask.fore.dark}; 
	--dark-back:{mask.back.dark}; 
	--dark-hover-fore:{mask.hover.fore.dark}; 
	--dark-hover-back:{mask.hover.back.dark};"
>
	<!--begin-->
	{#if $$slots.east || eastIcon}
		<slot name="east" {disabled} {loading}>
			<Icon name={eastIcon} class={iconCSS} />
		</slot>
	{/if}
	<slot>
		<span class={truncate ? css.truncate : undefined}>
			{label}
		</span>
	</slot>
	{#if $$slots.west || westIcon}
		<slot name="west" {disabled} {loading}>
			<Icon name={westIcon} class={iconCSS} />
		</slot>
	{/if}
	<!--end-->
</Button.Root>
