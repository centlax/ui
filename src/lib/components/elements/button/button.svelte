<script lang="ts">
	/* imports ==== === === === === === */
	import type { ColorPallet, ColorShade, Size, XDir } from '$lib/types/index.js';
	import { colors } from '$lib/theme/colors.js';
	import { ui, type Variant } from './styles.js';
	import { twJoin, twMerge } from 'tailwind-merge';
	import { shareUI } from '$lib/theme/share.js';
	import { UIcon } from '$lib/index.js';

	/* props ==== === === === === === */
	export let label: string = '';
	export let size: Size = 'md';
	export let href: string = '';
	export let square: boolean = false;
	export let truncate: boolean = false;
	export let icon: string = '';
	export let eastIcon: string = '';
	export let westIcon: string = '';
	export let loading: boolean = false;
	export let disabled: boolean = false;
	//export let dir: XDir = 'east';
	export let block: boolean = false;
	export let color: keyof ColorPallet = 'amber';
	export let variant: 'solid' | 'ghost' | 'outline' | 'soft' = 'solid';

	/* config ==== === === === === === */
	let as: 'button' | 'a' = href ? 'a' : 'button';
	let button = true;
	//@ts-ignore
	let _variant: Variant = ui.variant[variant];

	/* styles ==== === === === === === */
	$: buttonUI = twMerge(
		ui.base,
		_variant.base,
		shareUI.gap[size],
		shareUI.text[size],
		square ? shareUI.padding.square[size] : shareUI.padding.rectangle[size],
		shareUI.rounded[size],
		block ? ui.block : ui.inline
		/* if no default slot, also make it square */
	);
	$: iconUI = twJoin('');
</script>

<svelte:element
	this={as}
	{href}
	disabled={disabled || loading}
	style="
		--light-color:{colors[color][_variant.light.initial]}; 
		--dark-color:{colors[color][_variant.dark.initial]};
		--hover-light-color:{colors[color][_variant.light.hover]}; 
		--hover-dark-color:{colors[color][_variant.dark.hover]};
	"
	class:button
	class={buttonUI}
	{...$$restProps}
>
	<!--begin-->
	<slot name="east" {disabled} {loading}>
		<UIcon name={icon || eastIcon} class={iconUI} aria-hidden="true" />
	</slot>
	<slot>
		<span class={truncate ? ui.truncate : ''}>
			{label}
		</span>
	</slot>
	<slot name="west" {disabled} {loading}>
		<UIcon name={westIcon} class={iconUI} aria-hidden="true" />
	</slot>
	<!--end-->
</svelte:element>

<style lang="postcss">
	@media (prefers-color-scheme: light) {
		.button,
		.button:hover:disabled {
			background-color: var(--light-color);
		}
		.button:hover {
			background-color: var(--hover-light-color);
		}
		.button:focus-visible {
			outline-color: var(--dark-color);
		}
	}

	@media (prefers-color-scheme: dark) {
		.button,
		.button:hover:disabled {
			background-color: var(--dark-color);
		}
		.button:hover {
			background-color: var(--hover-dark-color);
		}
		.button:focus-visible {
			outline-color: var(--dark-color);
		}
	}
</style>
