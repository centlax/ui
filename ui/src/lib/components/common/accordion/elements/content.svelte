<script lang="ts">
	import type { ToKebab } from '$lib/types/utils.js';
	import { toCamel } from '$lib/utils/props.js';
	import { Accordion as Primitive, type AccordionContentProps } from 'bits-ui';
	type Props = AccordionContentProps;
	let { children, ...props }: ToKebab<Props> = $props();
</script>

<Primitive.Content {...toCamel(props)}>
	{@render children?.()}
</Primitive.Content>
