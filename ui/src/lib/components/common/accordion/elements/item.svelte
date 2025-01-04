<script lang="ts">
	import type { ToKebab } from '$lib/types/utils.js';
	import { toCamel } from '$lib/utils/props.js';
	import { Accordion as Primitive, type AccordionItemProps } from 'bits-ui';
	type Props = AccordionItemProps;
	let { children, ...props }: ToKebab<Props> = $props();
</script>

<Primitive.Item {...toCamel(props)}>
	{@render children?.()}
</Primitive.Item>
