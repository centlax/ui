<script lang="ts">
	import { melt } from '@melt-ui/svelte';
	import { ctxTooltip } from '../tooltip.svelte.js';
	import type { TooltipTriggerProps } from './trigger.js';

	let { children, ...props }: TooltipTriggerProps = $props();

	const ctx = ctxTooltip();
	const {
		elements: { trigger }
	} = ctx.get();
</script>

<button type="button" {...props} use:melt={$trigger} aria-label="Add">
	{@render children?.()}
</button>
