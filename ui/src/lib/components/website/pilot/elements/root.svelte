<script lang="ts">
	import type { ToKebab } from '$lib/types/utils.js';
	import { toCamel } from '$lib/utils/props.js';
	import { NavigationMenu as Primitive, type NavigationMenuRootProps } from 'bits-ui';
	let { value = $bindable(''), children, ...props }: ToKebab<NavigationMenuRootProps> = $props();
</script>

<Primitive.Root
	bind:value
	{...toCamel(props)}
	class="relative z-10 flex max-w-max flex-1 items-center justify-center"
>
	<Primitive.List class="group flex flex-1 list-none items-center justify-center space-x-1">
		{@render children?.()}
		<Primitive.Indicator />
	</Primitive.List>
	<div class="absolute left-0 top-full flex w-full justify-center">
		<Primitive.Viewport class="origin-top-center h-[var(--bits-navigation-menu-viewport-height)]" />
	</div>
</Primitive.Root>
