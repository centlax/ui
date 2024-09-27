<script lang="ts">
	/** Imports */
	import { createAvatar, melt } from '@melt-ui/svelte';
	import { type AvatarProps } from './avatar.js';

	/** Props */
	let { ...props }: AvatarProps = $props();

	/** Melt UI */
	const {
		elements: { image, fallback }
	} = createAvatar({
		src: props.src || '',
		delayMs: 0
	});
</script>

<div {...props}>
	<img use:melt={$image} alt={props.alt} />
	<span use:melt={$fallback}>{props.text}</span>

	{#if props.children}
		{@render props.children()}
	{/if}
</div>
