<script lang="ts">
	import type { ToKebab } from '$lib/types/utils.js';
	import { toCamel } from '$lib/utils/props.js';
	import { NavigationMenu as Primitive, type NavigationMenuContentProps } from 'bits-ui';
	let { children, ...props }: ToKebab<NavigationMenuContentProps> = $props();
</script>

<Primitive.Content {...toCamel(props)}>
	{@render children?.()}
	<Primitive.Link />
</Primitive.Content>
