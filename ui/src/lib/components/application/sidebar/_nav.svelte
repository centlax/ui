<script lang="ts">
	import type { AccordionLink } from '$lib/import.js';
	// @ts-ignore
	export let link: AccordionLink = {};
	let dot: boolean = false;
	let badge: boolean = false;
	let dropdwon: boolean = false;
</script>

<svelte:element
	this={link.href ? 'a' : 'button'}
	class=" hover:bg-gray-50 hover:dark:bg-gray-950/50 py-2 px-3 w-[17.5rem] h-[2.5rem] flex justify-between items-center rounded-md gap-x-2"
>
	<div id="west" class="flex grow items-center gap-x-3">
		{#if dot}
			<span id="dot" class="size-2.5 rounded-full bg-green-500" />
		{/if}
		<span id="icon" class="{link.icon} bg-gray-800 dark:bg-gray-200 size-7" />
		<span class="text-sm font-semibold">
			{link.label}
		</span>
	</div>
	<div id="east" class="flex items-center gap-x-3">
		{#if badge}
			<span
				id="badge"
				class="font-medium text-sm rounded-full bg-gray-200 dark:bg-gray-800 py-0.5 px-2"
			>
				10
			</span>
		{/if}
		{#if dropdwon}
			<span id="chevron-down" class="i-fluent-chevron-down-16-regular size-5 bg-gray-500" />
		{/if}
	</div>
</svelte:element>
