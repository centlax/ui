<script lang="ts">
	import { melt } from '@melt-ui/svelte';
	import type { ChooseOGroupProps } from './o-group.js';
	import { useChoose } from '../choose.svelte.js';

	let { children, name = 'name', ...props }: ChooseOGroupProps = $props();
	const {
		elements: { group, groupLabel }
	} = useChoose<string>();
</script>

<div use:melt={$group(name)}>
	<h3 use:melt={$groupLabel(name)}>{name}</h3>
	{@render children?.()}
</div>
