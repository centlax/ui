<script lang="ts">
	/** Imports */
	import { avatarGroup, type XAvatarGroup } from './group.js';
	import { useUI } from '$lib/composables/ui.svelte.js';
	import { st, cn } from '$lib/utils/wind.js';
	import type { ToKebab } from '$lib/types/utils.js';

	/** Props */
	let { as = 'div', attrs, ...props }: ToKebab<XAvatarGroup> = $props();

	/** Styles */
	const ui = useUI(avatarGroup, props.class, props.override);
	let node = $state<HTMLElement>(null!);
	$effect(() => {
		if (node) {
			Array.from(node.children).forEach((child, index) => {
				(child as HTMLElement).style.zIndex = `-${index}`;
			});
		}
	});
</script>

<svelte:element
	this={as}
	bind:this={node}
	data-name="avatar-group"
	class={cn(st(ui.root), ui.class)}
	{...props}
	{...attrs}
>
	{@render props.children?.()}
</svelte:element>
