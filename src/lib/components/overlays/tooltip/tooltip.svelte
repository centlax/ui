<script lang="ts">
	import { Tooltip, type TooltipProps, type TooltipContentProps } from 'bits-ui';
	type $$Props = TooltipContentProps;
</script>

<Tooltip.Root openDelay={0}>
	<Tooltip.Trigger>
		<slot name="trigger" />
	</Tooltip.Trigger>
	<Tooltip.Content {...$$restProps} transitionConfig={{ y: 8, duration: 150 }} sideOffset={8}>
		<slot />
		<Tooltip.Arrow />
	</Tooltip.Content>
</Tooltip.Root>
