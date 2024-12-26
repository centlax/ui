<script lang="ts">
	import { melt } from '@melt-ui/svelte';
	import { fade } from 'svelte/transition';
	import { createTooltip, ctxTooltip } from '../tooltip.svelte.js';
	import type { TooltipRootProps } from './root.js';

	let { children, ...props }: TooltipRootProps = $props();

	const tooltip = createTooltip();
	const {
		elements: { trigger, content, arrow },
		states: { open }
	} = tooltip;
	const ctx = ctxTooltip();
	ctx.set(tooltip);
</script>

<button type="button" class="trigger" use:melt={$trigger} aria-label="Add"> + </button>
{@render children?.()}
