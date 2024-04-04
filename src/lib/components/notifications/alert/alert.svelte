<script lang="ts">
	import { UCardGroup, UIcon } from '$lib/index.js';
	import { twJoin, twMerge } from 'tailwind-merge';
	import { css } from './styles.js';
	export let title: string = '';
	export let align: 'top' | 'mid' | 'low' = 'top';
	export let variant: 'solid' | 'outline' | 'soft' | 'subtle' = 'solid';
	export let color: 'white' | 'primary' | 'success' | 'danger' = 'white';
	export let description: string = '';
	let className = '';
	export { className as class };

	$: isWhite = color === 'white' && variant === 'solid' ? true : false;
	$: alertCSS = twMerge(
		twJoin(
			css.base,
			css.rounded,
			css.shadow,
			css.padding,
			isWhite ? css.variant.base.solid : `${css.variant.mask[variant]} ${css.mask[variant][color]}`
		),
		className
	);
</script>

<UCardGroup dirUI="cursor-pointer" class={alertCSS} {align}>
	<svelte:fragment slot="east">
		<UIcon name="i-fluent-info-24-regular" />
	</svelte:fragment>
	<svelte:fragment>
		<h1 class={css.title}>
			{title}
		</h1>
		<p class="{css.description} {title ? 'mt-1' : ''}">
			{description}
		</p>
	</svelte:fragment>
	<svelte:fragment slot="west"></svelte:fragment>
</UCardGroup>
