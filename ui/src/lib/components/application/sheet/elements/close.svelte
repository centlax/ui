<script lang="ts">
	import type { ToKebab } from '$lib/types/utils.js';
	import { toCamel } from '$lib/utils/props.js';
	import { Dialog as Primitive, type DialogCloseProps } from 'bits-ui';
	type Props = DialogCloseProps;
	let { children, ...props }: ToKebab<Props> = $props();
</script>

<Primitive.Close {...toCamel(props)}>
	{@render children?.()}
</Primitive.Close>
