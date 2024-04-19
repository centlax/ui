<script lang="ts">
	// imports
	import type { Size } from '$lib/types/index.js';
	import { ui } from '$lib/ui.config.js';
	import { createAvatar, melt } from '@melt-ui/svelte';

	// props
	export let src: string = '';
	export let delay: number = 0;
	export let text: string = '';
	export let size: Size = ui.size;
	// props
	/*
        icon
        alt
        chipColor
        chipPosition
        chipText
        size
    
    */

	const {
		elements: { image: image, fallback: fallback }
	} = createAvatar({
		src: src,
		delayMs: delay
	});
</script>

<div {...$$restProps} class="avatar {size}">
	<img use:melt={$image} alt="Avatar" />
	<span use:melt={$fallback}>{text}</span>
</div>
