<script lang="ts">
	import { Collapsible as Primitive } from 'bits-ui';
	import type { CollapsibleRootProps } from './root.js';
	let { children, ...props }: CollapsibleRootProps = $props();
</script>

<Primitive.Root>
	{@render children?.()}
</Primitive.Root>
