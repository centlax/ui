<script lang="ts">
	/** Imports */
	import { createAvatar, melt } from '@melt-ui/svelte';
	import { avatar, type AvatarProps } from './avatar.js';
	import { useUI } from '$lib/composables/ui.js';
	import { st, cn } from '$lib/utils/wind.js';

	/** Props */
	let { ...props }: AvatarProps = $props();

	const {
		elements: { image, fallback }
	} = createAvatar({
		src: props['src'] ?? '',
		delayMs: props['delay-ms'],
		loadingStatus: props['loading-status']
	});

	/** Styles */
	const ui = useUI(avatar, props.class, props.override);
</script>

<span data-ui="avatar" class={cn(st(ui.root), ui.class)}>
	{@render props.children?.()}
	<img use:melt={$image} alt={props.alt} class={st(ui.image)} />
	<span use:melt={$fallback} class={st(ui.fallback)}>
		{@render props.fallback?.()}
	</span>
</span>
