<script lang="ts">
	import { createSelect, melt } from '@melt-ui/svelte';
	import type { ChooseOptionProps } from './option.js';

	let { children, value, ...props }: ChooseOptionProps = $props();

	const {
		elements: { option }
	} = createSelect<string>();
</script>

<div use:melt={$option({ value, label: value })} {...props}>
	{@render children?.()}
</div>
