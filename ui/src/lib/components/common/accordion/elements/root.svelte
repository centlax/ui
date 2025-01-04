<script lang="ts">
	import type { ToKebab } from '$lib/types/utils.js';
	import { toCamel } from '$lib/utils/props.js';
	import { Accordion as Primitive, type AccordionRootProps } from 'bits-ui';
	type Props = AccordionRootProps;
	let { children, ...props }: ToKebab<Props> = $props();
</script>

<Primitive.Root {...toCamel(props)}>
	{@render children?.()}
</Primitive.Root>
