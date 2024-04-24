<script lang="ts">
	// Imports
	import type { ImageProps } from './image.props.js';

	// Types
	type $$Props = ImageProps;

	// Props
	export let src: ImageProps['src'] = undefined;
	export let alt: ImageProps['alt'] = undefined;
	let classProp: ImageProps['class'] = undefined;
	export { classProp as class };
</script>

{#if typeof src === 'object'}
	<img src={src.light} class="dark:hidden {classProp}" {alt} {...$$restProps} />
	<img src={src.dark} class="hidden dark:block {classProp}" {alt} {...$$restProps} />
{:else}
	<img {src} class={classProp} {alt} {...$$restProps} />
{/if}
