<script lang="ts">
	import { twMerge, twJoin } from 'tailwind-merge';
	import { UIcon } from '$lib/index.js';
	import { UAvatar } from '$lib/index.js';
	import { css } from './styles.js';
	import type { Size } from '$lib/types/index.js';
	import { ui } from '$lib/ui.config.js';

	export let label: string | null = null;
	export let icon: string | null = null;
	export let avatar: string | null = null;
	export let size: Size = ui.size;
	export let orientation: 'horizontal' | 'vertical' = 'horizontal';
	export let type: 'solid' | 'dotted' | 'dashed' = 'solid';
	export let classProp: any = '';

	$: wrapperClass = twMerge(twJoin(css.wrapper.base, css.wrapper[orientation]), classProp);

	$: containerClass = twJoin(css.container.base, css.container[orientation]);

	$: borderClass = twJoin(
		css.border.base,
		css.border[orientation],
		css.border.size[orientation][size],
		css.border.type[type]
	);
</script>

<div class={wrapperClass} {...$$restProps}>
	<div class={borderClass} />
	{#if label || icon || avatar}
		<div class={containerClass}>
			{#if label}
				<span class={css.label}>
					{label}
				</span>
			{:else if icon}
				<UIcon name={icon} class={css.icon.base} />
			{:else if avatar}
				<UAvatar class={css.avatar} />
			{/if}
		</div>
	{/if}
	<div class={borderClass} />
</div>
