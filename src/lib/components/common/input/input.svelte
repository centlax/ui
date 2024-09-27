<script lang="ts">
	import { melt } from '@melt-ui/svelte';
	import type { Snippet } from 'svelte';
	import type { HTMLInputAttributes } from 'svelte/elements';

	type Props = HTMLInputAttributes & {
		children?: Snippet;
		melt?: any;
	};

	let { children, ...props }: Props = $props();
</script>

<input use:melt={props.melt} {...props} />
