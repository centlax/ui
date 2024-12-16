<script lang="ts">
	/** Imports */
	import { melt } from '@melt-ui/svelte';
	import { avatar, type AvatarProps } from './avatar.js';
	import { useUI } from '$lib/composables/ui.js';
	import { st, cn } from '$lib/internal/utils/wind.js';
	import { createAvatar } from './avatar.svelte.js';

	/** Props */
	let { ...props }: AvatarProps = $props();

	const {
		elements: { image, fallback }
	} = createAvatar(props);

	/** Styles */
	const ui = useUI(avatar, props.class, props.override);
</script>

<span class={cn(st(ui.root), ui.class)}>
	<img use:melt={$image} alt={props.alt} class={st(ui.image)} />
	<span use:melt={$fallback} class={st(ui.fallback)}>
		{@render props.fallback?.()}
	</span>
</span>
