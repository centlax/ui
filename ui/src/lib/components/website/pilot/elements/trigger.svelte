<script lang="ts">
	import type { ToKebab } from '$lib/types/utils.js';
	import { toCamel } from '$lib/utils/props.js';
	import { NavigationMenu as Primitive, type NavigationMenuTriggerProps } from 'bits-ui';
	let { value = $bindable(), children, ...props }: ToKebab<NavigationMenuTriggerProps> = $props();
</script>

<Primitive.Trigger {...toCamel(props)}>
	{@render children?.()}
</Primitive.Trigger>
