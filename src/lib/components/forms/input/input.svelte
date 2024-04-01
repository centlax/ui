<script lang="ts">
	/* imports ==== === === === === === */
	import type { HTMLInputAttributes } from 'svelte/elements';
	import type { ColorPallet, Size, State, XDir } from '$lib/types/index.js';
	import { twJoin, twMerge } from 'tailwind-merge';
	import { css } from './styles.js';
	import { UIcon } from '$lib/index.js';
	import { ui } from '$lib/theme/ui.config.js';
	import { colors } from '$lib/theme/colors.js';

	/* props ==== === === === === === */
	export let size: Size = 'md';
	export let dir: XDir = 'east';
	export let load: boolean = false;
	export let icon: string = '';
	export let eastIcon: string = icon;
	export let westIcon = '';
	export let outline: 'white'|'gray'|'mask' = 'white';
	export let color: keyof ColorPallet = 'primary';

	/* config ==== === === === === === */
	let mask: boolean = outline === 'mask' ? true: false;
	$: _icon = (): string => {
		if (load) {
			icon = ui.icon?.load || eastIcon;
		}
		return icon || eastIcon;
	};

	$: inputCSS = twMerge(
		css.base,
		css.rounded,
		css.placeholder,
		css.text[size],
		css.placeholder,
		css.form,
		css.variant.outline[outline],
		css.padding.base[size],
		(dir === 'east' || $$slots.east) && css.padding.dir.east[size],
		(dir === 'west' || $$slots.west) && css.padding.dir.west[size],
		$$props.class
	);
	$: eastCSS = twJoin(css.icon.pointer, css.icon.east.wrapper, css.icon.east.padding[size]);
	$: westCSS = twJoin(css.icon.pointer, css.icon.west.wrapper, css.icon.west.padding[size]);
	$: loadCSS = twJoin(load && css.icon.load);
	$: iconCSS = twJoin(css.icon.base, css.icon.color[outline], css.icon.size[size]);
</script>

<div class:mask class="relative ring-red-600" style="--fore:{colors[color][600]};--dark-fore:{colors[color][500]};">
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

<style lang="postcss">

	input:focus{
		--tw-ring-color: var(--fore)
	}
	.mask {
		color: var(--fore);

	}
	@media (prefers-color-scheme: dark) {
		input:focus{
		--tw-ring-color: var(--dark-fore)
	}
		.mask {
			color: var(--dark-fore);
		}
	}
</style>
