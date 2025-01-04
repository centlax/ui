<script lang="ts">
	import type { ToKebab } from '$lib/types/utils.js';
	import { toCamel } from '$lib/utils/props.js';
	import { Accordion as Primitive, type AccordionTriggerProps } from 'bits-ui';
	type Props = AccordionTriggerProps;
	let { children, ...props }: ToKebab<Props> = $props();
</script>

<Primitive.Trigger {...toCamel(props)}>
	{@render children?.()}
</Primitive.Trigger>
