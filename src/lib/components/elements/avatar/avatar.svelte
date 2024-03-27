<script lang="ts">
	import { createAvatar, melt } from '@melt-ui/svelte';

	// props
	export let src: string = '';
	export let delay: number = 0;
	export let text: string = '';
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

<div class="avatar">
	<img use:melt={$image} alt="Avatar" />
	<span use:melt={$fallback}>{text}</span>
</div>
