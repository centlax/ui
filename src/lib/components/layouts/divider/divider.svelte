<script lang="ts">
	import { twMerge, twJoin } from 'tailwind-merge';
	import { UIcon, UAvatar, config } from '$lib/index.js';
	import { css } from './divider.js';
	import type { Size } from '$lib/types/index.js';

	export let label: string = '';
	export let icon: string = '';
	export let avatar: string = '';
	export let size: Size = config.size as Size;
	export let orientation: 'horizontal' | 'vertical' = 'horizontal';
	export let variant: 'solid' | 'dotted' | 'dashed' = 'solid';
	let classProp: string | string[] = '';
	export { classProp as class };

	$: wrapperCSS = twMerge(twJoin(css.wrapper.base, css.wrapper[orientation]), classProp);
	$: containerCSS = twJoin(css.container.base, css.container[orientation]);

	$: borderCSS = twJoin(
		css.border.base,
		css.border[orientation],
		css.border.size[orientation][size],
		css.border.type[variant]
	);
</script>

<div class={wrapperCSS}>
	<div class={borderCSS} />

	{#if label || icon || avatar || $$slots.default}
		<div class={containerCSS}>
			<slot>
				{#if label}
					<span class={css.label}>
						{label}
					</span>
				{:else if icon}
					<UIcon name="icon" class={css.icon.base} />
				{:else if avatar}
					<UAvatar class={css.avatar} />
				{/if}
			</slot>
		</div>
		<div class={borderCSS} />
	{/if}
</div>
