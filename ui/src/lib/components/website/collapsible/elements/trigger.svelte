<script lang="ts">
	import { Collapsible as Primitive } from 'bits-ui';
	import type { CollapsibleTriggerProps } from './trigger.js';
	let { children, ...props }: CollapsibleTriggerProps = $props();
</script>

<Primitive.Trigger>
	{@render children?.()}
</Primitive.Trigger>
