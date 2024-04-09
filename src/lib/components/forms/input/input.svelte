<script lang="ts">
	/* imports ==== === === === === === */
	import type { ColorPallet, Size, XDir } from '$lib/types/index.js';
	import { twJoin, twMerge } from 'tailwind-merge';
	import './input.css';
	import { css, type InputColor, type InputVariant } from './input.js';
	import { UIcon } from '$lib/index.js';
	import { ui } from '$lib/ui.config.js';
	import { colors, type Colors } from '$lib/theme/colors.js';
	import { getContext } from 'svelte';
	import type { FieldSetContext } from '../field-set/index.js';
	const fieldSet: FieldSetContext = getContext('FieldSet');
	/* props ==== === === === === === */
	export let size: Size = fieldSet.size || ui.size;
	export let dir: XDir = 'east';
	export let load: boolean = false;
	export let icon: string = '';
	export let eastIcon: string = icon;
	export let westIcon = '';
	export let variant: InputVariant = 'outline';
	export let color: InputColor = fieldSet.color || 'white';

	/* config ==== === === === === === */
	$: _icon = (): string => {
		if (load) {
			icon = ui.icon?.load || eastIcon;
		}
		return icon || eastIcon;
	};
	$: wrapperCSS = twMerge(twJoin(css.wrapper));

	$: inputCSS = twMerge(
		css.base,
		css.ring,
		css.rounded,
		css.placeholder,
		css.text[size],
		css.placeholder,
		css.form,
		['white', 'gray'].includes(color)
			? css.variant[variant][color === 'white' ? 'white' : 'gray']
			: `${css.variant[variant].transparent} input`,
		css.padding.base[size],
		($$slots.east || load) && css.padding.dir.east[size],
		$$slots.west && css.padding.dir.west[size],
		$$props.class
	);
	$: eastCSS = twJoin(css.icon.pointer, css.icon.east.wrapper, css.icon.east.padding[size]);
	$: westCSS = twJoin(css.icon.pointer, css.icon.west.wrapper, css.icon.west.padding[size]);
	$: loadCSS = twJoin(load && css.icon.load);
	$: iconCSS = twJoin(css.icon.base, css.icon.size[size]);
</script>

<div
	class={wrapperCSS}
	style="
	--fore:{colors[color][600]};
	--dark-fore:{colors[color][500]};"
>
	<input {...$$restProps} class={inputCSS} />
	<slot />
	{#if (dir === 'east' && eastIcon) || $$slots.east || load}
		<span id="east" class={eastCSS}>
			<slot name="east">
				<UIcon name={_icon()} class="{iconCSS} {loadCSS}" />
			</slot>
		</span>
	{/if}
	{#if (dir === 'west' && westIcon) || $$slots.west}
		<span id="west" class={westCSS}>
			<slot name="west">
				<UIcon name={westIcon} class={iconCSS} />
			</slot>
		</span>
	{/if}
</div>
