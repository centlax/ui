<script lang="ts">
	/* imports ==== === === === === === */
	import type { Size, XDir } from '$lib/types/index.js';
	import { css, handeMask, type ButtonColor, type ButtonVariant } from './styles.js';
	import { twJoin, twMerge } from 'tailwind-merge';
	import { shareUI } from '$lib/theme/share.js';
	import Icon from '../-more/icon.svelte';
	import { ui } from '$lib/ui.config.js';

	/* types ==== === === === === === */
	type Variant = 'solid' | 'ghost' | 'outline' | 'soft';
	/* props ==== === === === === === */
	export let label: string = '';
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

	/* config ==== === === === === === */
	$: mask = handeMask(variant, color);
	let isBase = ['white', 'black', 'gray'].includes(color) && ['solid', 'ghost'].includes(variant);
	//@ts-ignore
	$: base = variant === 'solid' ? css.variant.base.solid[color] : css.variant.base.ghost[color];
	/* styles ==== === === === === === */
	$: buttonCSS = twMerge(
		twJoin(
			css.base,
			isBase ? base : `${css.variant.mask[variant]} mask`,
			shareUI.text[size],
			shareUI.padding[square ? 'square' : 'rectangle'][size],
			css.rounded,
			shareUI.gap[size],
			block ? css.block : css.inline
		),
		$$props.class
	);
	$: iconCSS = twJoin('');
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<svelte:element
	this={href ? 'a' : 'button'}
	{href}
	disabled={disabled || loading}
	class={buttonCSS}
	on:click
	on:change
	on:keydown
	on:keyup
	on:mouseenter
	on:mouseleave
	{...$$restProps}
	style="
		--fore:{mask.fore.light}; --back:{mask.back.light};
		--hover-fore:{mask.hover.fore.light}; --hover-back:{mask.hover.back.light};
		--dark-fore:{mask.fore.dark}; --dark-back:{mask.back.dark};
		--dark-hover-fore:{mask.hover.fore.dark}; --dark-hover-back:{mask.hover.back.dark};
	"
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
</svelte:element>

<style lang="postcss">
	.mask {
		--color: var(--fore);
		--bg-color: var(--back);
		--hover-color: var(--hover-fore);
		--hover-bg-color: var(--hover-back);
	}
	:global(.dark) .mask {
		--color: var(--dark-fore);
		--bg-color: var(--dark-back);
		--hover-color: var(--dark-hover-fore);
		--hover-bg-color: var(--dark-hover-back);
	}

	.mask,
	.mask:disabled:hover {
		color: var(--color);
		background-color: var(--bg-color);
	}
	.mask:hover {
		color: var(--hover-color);
		background-color: var(--hover-bg-color);
	}
	.mask:focus-visible {
		outline-color: var(--bg-color);
	}
</style>
