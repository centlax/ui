<script lang="ts">
	/* imports ==== === === === === === */
	import type { HTMLInputAttributes } from 'svelte/elements';
	import type { ColorPallet, Size, XDir } from '$lib/types/index.js';
	import { twJoin, twMerge } from 'tailwind-merge';
	import { css } from './styles.js';
	import { UIcon } from '$lib/index.js';
	import { ui } from '$lib/ui.config.js';
	import { colors } from '$lib/theme/colors.js';
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
	export let outline: 'light' | 'dark' = 'light';
	export let color: keyof ColorPallet = fieldSet.color || 'primary';
	export let mask: boolean = false;

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
		css.variant.outline[outline],
		mask ? css.variant.quick.ma : css.variant.quick.ld,
		css.padding.base[size],
		($$slots.east || load) && css.padding.dir.east[size],
		$$slots.west && css.padding.dir.west[size],
		$$props.class
	);
	$: eastCSS = twJoin(css.icon.pointer, css.icon.east.wrapper, css.icon.east.padding[size]);
	$: westCSS = twJoin(css.icon.pointer, css.icon.west.wrapper, css.icon.west.padding[size]);
	$: loadCSS = twJoin(load && css.icon.load);
	$: iconCSS = twJoin(css.icon.base, css.icon.color[mask ? 'mask' : outline], css.icon.size[size]);
</script>

<div
	class:mask
	class={wrapperCSS}
	style="--fore:{colors[color][600]};--dark-fore:{colors[color][500]};"
>
	<input {...$$restProps} class:input-mask={mask} class={inputCSS} />
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

<style lang="postcss">
	.input-mask,
	input:focus {
		--tw-ring-color: var(--fore);
	}
	.mask {
		color: var(--fore);
	}
	@media (prefers-color-scheme: dark) {
		.input-mask,
		input:focus {
			--tw-ring-color: var(--dark-fore);
		}
		.mask {
			color: var(--dark-fore);
		}
	}
</style>
