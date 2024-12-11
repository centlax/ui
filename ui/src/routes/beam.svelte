<script lang="ts">
	import { cn } from '$lib/utils/wind.js';

	export let className: string = '';
	export let size: number = 200;
	export let duration: number = 15000;
	export let anchor: number = 90;
	export let borderWidth: number = 1.5;
	export let colorFrom: string = '#ffaa40';
	export let colorTo: string = '#9c40ff';
	export let delay: number = 0;

	$: durationInSeconds = `${duration}s`;
	$: delayInSeconds = `${delay}s`;
</script>

<div
	class={cn(
		'border-beam',
		'pointer-events-none absolute inset-0 rounded-[inherit] [border:calc(var(--border-width)*1px)_solid_transparent]',
		'![mask-clip:padding-box,border-box] ![mask-composite:intersect] [mask:linear-gradient(transparent,transparent),linear-gradient(white,white)]',
		'animate-border-beam after:absolute after:aspect-square after:w-[calc(var(--size)*1px)] after:[animation-delay:var(--delay)] after:[background:linear-gradient(to_left,var(--color-from),var(--color-to),transparent)] after:[offset-anchor:calc(var(--anchor)*1%)_50%] after:[offset-path:rect(0_auto_auto_0_round_calc(var(--size)*1px))]',
		className,
		className
	)}
	style="
      --size: {size}px;
      --duration: {durationInSeconds};
      --anchor: {anchor};
      --border-width: {borderWidth};
      --color-from: {colorFrom};
      --color-to: {colorTo};
      --delay: {delayInSeconds};
    "
></div>

<style>
	.animate-border-beam::after {
		animation: border-beam-anim var(--duration) infinite linear;
	}

	@keyframes border-beam-anim {
		to {
			offset-distance: 100%;
		}
	}
</style>
