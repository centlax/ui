<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	interface containerProps extends HTMLAttributes<HTMLDivElement> {
		children: Snippet;
	}
	let { children, ...props }: containerProps = $props();
</script>

<div {...props} class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
	{@render children()}
</div>
