<script lang="ts">
	/** Imports */
	import { avatarGroup, type AvatarGroupProps } from './group.js';
	import { useUI } from '$lib/composables/ui.js';
	import { st, cn } from '$lib/utils/wind.js';

	/** Props */
	let { as = 'div', ...props }: AvatarGroupProps = $props();

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
>
	{@render props.children?.()}
</svelte:element>
