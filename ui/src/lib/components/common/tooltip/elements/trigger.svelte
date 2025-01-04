<script lang="ts">
	/** Imports */
	import { Tooltip } from 'bits-ui';
	import type { XTooltipTrigger } from './trigger.js';
	import type { ToKebab } from '$lib/types/utils.js';
	import { toCamel } from '$lib/utils/props.js';

	/** Props */
	let { children, ...props }: ToKebab<XTooltipTrigger> = $props();
</script>

<Tooltip.Trigger {...toCamel(props)}>
	{@render children?.()}
</Tooltip.Trigger>
