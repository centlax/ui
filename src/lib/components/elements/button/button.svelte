<script lang="ts">
	/* imports ==== === === === === === */
	import type { ColorPallet, ColorShade, Size, XDir } from '$lib/types/index.js';
	import { colors } from '$lib/theme/colors.js';
	import { css, type BaseVariant } from './styles.js';
	import { twJoin, twMerge } from 'tailwind-merge';
	import { shareUI } from '$lib/theme/share.js';
	import Icon from '../icon/icon.svelte';
	import { ui } from '$lib/theme/ui.config.js';

	/* props ==== === === === === === */
	export let label: string = '';
	export let size: Size = ui.size;
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
	let _variant = css.variant[variant](color);
	let _color = _variant.color;

	/* styles ==== === === === === === */
	$: buttonClass = twMerge(
		css.base,
		_variant.base,
		shareUI.gap[size],
		shareUI.text[size],
		square ? shareUI.padding.square[size] : shareUI.padding.rectangle[size],
		shareUI.rounded[size],
		block ? css.block : css.inline
		/* if no default slot, also make it square */
	);
	$: iconClass = twJoin('');
</script>

<svelte:element
	this={as}
	{href}
	disabled={disabled || loading}
	style="
		--fore:{_color.fore.light}; 
		--back:{_color.back.light};
		--hover-fore:{_color.hover.fore.light}; 
		--hover-back:{_color.hover.back.light};
		<!-- !dark! -->
		--dark-fore:{_color.fore.dark}; 
		--dark-back:{_color.back.dark};
		--dark-hover-fore:{_color.hover.fore.dark}; 
		--dark-hover-back:{_color.hover.back.dark};
	"
	class:button
	class={buttonClass}
	{...$$restProps}
>
	<!--begin-->
	<slot name="east" {disabled} {loading}>
		<Icon name={icon || eastIcon} class='{iconClass} icon'/>
	</slot>
	<slot>
		<span class='{truncate ? css.truncate : ''} span'>
			{label}
		</span>
	</slot>
	<slot name="west" {disabled} {loading}>
		<Icon name={westIcon} class=' icon' />
	</slot>
	<!--end-->
</svelte:element>

<style lang="postcss">
	.button,
	.button:hover:disabled {
		color: var(--fore);
		background-color: var(--back);
	}
	.button:hover {
		color: var(--hover-fore);
		background-color: var(--hover-back);
	}
	.button:focus-visible {
		outline-color: var(--back);
	}

	@media (prefers-color-scheme: dark) {
		.button, 
		.button:hover:disabled {
			color: var(--dark-fore);
			background-color: var(--dark-back);
		}
		
		.button:hover {
			color: var(--hover-fore);
			background-color: var(--dark-hover-back);
		}
		.button:focus-visible {
			outline-color: var(--dark-back);
		}

	}
</style>
