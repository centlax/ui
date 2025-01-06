<script lang="ts">
	import type { ToKebab } from '$lib/types/utils.js';
	import { toCamel } from '$lib/utils/props.js';
	import { NavigationMenu as Primitive, type NavigationMenuItemProps } from 'bits-ui';
	let { children, ...props }: ToKebab<NavigationMenuItemProps> = $props();
</script>

<Primitive.Item {...toCamel(props)}>
	{@render children?.()}
</Primitive.Item>
