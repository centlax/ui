<script lang="ts">
	/** Imports */
	import { melt } from '@melt-ui/svelte';
	import { avatar, type AvatarProps } from './root.js';
	import { useUI } from '$lib/composables/ui.js';
	import { st, cn } from '$lib/utils/wind.js';
	import { useAvatar } from '../avatar.svelte.js';
	import { fade } from 'svelte/transition';

	/** Props */
	let { as = 'span', attrs, children, ...props }: AvatarProps = $props();

	const {
		elements: { image, fallback },
		states: { loadingStatus }
	} = useAvatar(props);

	/** Styles */
	const ui = useUI(avatar, props.class, props.override);
</script>

<svelte:element this={as} data-name="avatar" class={cn(st(ui.root), ui.class)} {...attrs}>
	{#if $loadingStatus === 'loaded'}
		<img transition:fade use:melt={$image} alt={props.alt} class={st(ui.image)} />
	{/if}
	<span use:melt={$fallback} class={st(ui.fallback)}>
		{@render children?.()}
	</span>
</svelte:element>
