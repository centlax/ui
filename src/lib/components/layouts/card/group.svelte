<script lang="ts">
	import { twJoin, twMerge } from 'tailwind-merge';

	let className: string | string[] = '';
	export { className as class };
	export let dirUI: string | string[] = '';
	export let align: 'top' | 'mid' | 'low' = 'top';
	const css = {
		base: 'flex p-2 gap-2',
		align: {
			top: 'flex-shrink-0 self-start',
			mid: 'flex-shrink-0 self-center',
			low: 'flex-shrink-0 self-end'
		}
	};
	$: baseCSS = twMerge(twJoin(css.base), className);
	$: dirCSS = twMerge(twJoin(css.align[align]), dirUI);
</script>

<div class={baseCSS}>
	{#if $$slots.east}
		<div class={dirCSS}>
			<slot name="east" />
		</div>
	{/if}
	<div>
		<slot />
	</div>
	{#if $$slots.west}
		<div class={dirCSS}>
			<slot name="west" />
		</div>
	{/if}
</div>
