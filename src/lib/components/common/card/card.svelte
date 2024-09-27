<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	interface Props extends HTMLAttributes<HTMLDivElement> {
		children: Snippet;
	}

	let { children, ...props }: Props = $props();
</script>

{#snippet north()}
	<div class="px-4 py-5 sm:px-6">
		{@render north()}
	</div>
{/snippet}
{#snippet south()}
	<div class="px-4 py-5 sm:px-6">
		{@render north()}
	</div>
{/snippet}

<div {...props} class="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow">
	{@render north()}
	<div class="px-4 py-5 sm:p-6">
		{@render children()}
	</div>
	{@render south()}
</div>
