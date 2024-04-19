<script lang="ts">
	import type { XDir } from '$lib/types/index.js';

	// imports
	import { createScrollArea, melt, type CreateScrollAreaProps as FlowType } from '@melt-ui/svelte';
	import { twJoin } from 'tailwind-merge';
	// exports
	export let type: FlowType['type'] = 'hover';
	export let delay: FlowType['hideDelay'] = 400;
	export let dir: XDir = 'east';
	let classProp: string = '';
	export { classProp as class };
	export let ui: {
		root?: string;
		viewport?: string;
		scrollbarY?: string;
		scrollbarX?: string;
		thumbY?: string;
		thumbX?: string;
	} = {
		root: '',
		viewport: '',
		scrollbarY: '',
		scrollbarX: '',
		thumbY: '',
		thumbX: ''
	};
	// config
	const {
		elements: { root, content, viewport, corner, scrollbarY, thumbY, thumbX, scrollbarX }
	} = createScrollArea({
		type: type,
		hideDelay: delay,
		dir: dir === 'east' ? 'ltr' : 'rtl'
	});
	const css = {
		scroll: {
			base: 'flex touch-none select-none',
			x: 'h-2.5 w-full border-t border-t-transparent bg-magnum-800/10 p-px',
			y: 'h-full w-2.5 dark:bg-black/10 border-l border-l-transparent bg-transparent p-px transition-colors'
		},
		thumb: {
			base: 'relative rounded-full bg-black/20 dark:bg-white/20',
			x: 'relative',
			y: 'relative w-[1px] flex-1'
		}
	};
</script>

<div use:melt={$root} class={twJoin('relative overflow-hidden ', ui.root)}>
	<div use:melt={$viewport} class={twJoin('h-full w-full', ui.viewport)}>
		<div use:melt={$content} class={classProp}><slot /></div>
	</div>
	<div use:melt={$scrollbarY} class={twJoin(css.scroll.base, css.scroll.y, ui.scrollbarY)}>
		<div use:melt={$thumbY} class={twJoin(css.thumb.base, css.thumb.y, ui.thumbY)} />
	</div>
	<div use:melt={$scrollbarX} class={twJoin(css.scroll.base, css.scroll.x, ui.scrollbarX)}>
		<div use:melt={$thumbX} class={twJoin(css.thumb.base, css.thumb.x, ui.thumbX)} />
	</div>
	<div use:melt={$corner} />
</div>
