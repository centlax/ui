<script lang="ts">
	import { UIcon, USheet } from '$lib/components/export.js';
	let { children } = $props();
	// 	aside-sheet	class="h-full w-full sm:w-[--dash-width] lg:z-50 lg:flex lg:flex-col "
</script>

{#snippet aside()}
	<div
		class="flex h-full max-w-[20rem] grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6"
	>
		{@render children?.()}
	</div>
{/snippet}

{@render aside()}
<USheet>
	{@render aside()}
	<div
		class="absolute left-full top-0 flex h-full w-10 items-start justify-center bg-neutral-900/10 pt-5"
	>
		<button type="button" class="-m-2.5 p-2.5">
			<span class="sr-only">Close sidebar</span>
			<UIcon class="size-6 text-white" name="i-fluent-dismiss-24-regular" />
		</button>
	</div>
</USheet>
