<script setup lang="ts">
	import { twJoin } from 'tailwind-merge';
	let _class: string = '';
	export { _class as class };

	const css = {
		wrapper: 'flex flex-col lg:grid lg:grid-cols-10 lg:gap-8',
		west: 'lg:col-span-2',
		center: {
			narrow: 'lg:col-span-6',
			base: 'lg:col-span-8',
			full: 'lg:col-span-10'
		},
		east: 'lg:col-span-2 order-first lg:order-last'
	};

	$: centerCSS = (): string => {
		if ($$slots.west && $$slots.east) {
			return css.center.narrow;
		} else if ($$slots.west || $$slots.east) {
			return css.center.base;
		}
		return css.center.full;
	};
</script>

<div class={twJoin(css.wrapper, _class)}>
	{#if $$slots.west}
		<div class={css.west}>
			<slot name="west" />
		</div>
	{/if}

	<div class={centerCSS()}>
		<slot />
	</div>

	{#if $$slots.east}
		<div class={css.east}>
			<slot name="east" />
		</div>
	{/if}
</div>
