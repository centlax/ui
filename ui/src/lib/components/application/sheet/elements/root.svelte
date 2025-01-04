<script lang="ts">
	import type { ToKebab } from '$lib/types/utils.js';
	import { toCamel } from '$lib/utils/props.js';
	import { Dialog as Primitive, type DialogRootProps } from 'bits-ui';
	type Props = DialogRootProps;
	let { open = $bindable(false), children, ...props }: ToKebab<Props> = $props();
</script>

<Primitive.Root bind:open {...toCamel(props)}>
	{@render children?.()}
</Primitive.Root>
