<script lang="ts">
	import { Collapsible as Primitive } from 'bits-ui';
	import type { CollapsibleContentProps } from './content.js';
	let { children, ...props }: CollapsibleContentProps = $props();
</script>

<Primitive.Content>
	{@render children?.()}
</Primitive.Content>
