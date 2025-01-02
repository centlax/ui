<script lang="ts">
	import { createSelect, melt } from '@melt-ui/svelte';
	import { fade } from 'svelte/transition';
	import type { ChooseRootProps } from './root.js';

	let { children, ...props }: ChooseRootProps = $props();

	const options = {
		sweet: ['Caramel', 'Chocolate', 'Strawberry', 'Cookies & Cream'],
		savory: ['Basil', 'Bacon', 'Rosemary']
	};

	const {
		elements: { trigger, menu, option, group, groupLabel, label },
		states: { selectedLabel, open },
		helpers: { isSelected }
	} = createSelect<string>({
		forceVisible: true,
		positioning: {
			placement: 'bottom',
			fitViewport: true,
			sameWidth: true
		}
	});
</script>

<button use:melt={$trigger} aria-label="Food">
	{$selectedLabel || 'select a flavor'}
</button>

{#if $open}
	<div use:melt={$menu} transition:fade={{ duration: 150 }}>
		{@render children?.()}
	</div>
{/if}
