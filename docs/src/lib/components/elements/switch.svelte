<script lang="ts">
	import { crossfade } from 'svelte/transition';
	import { cubicInOut } from 'svelte/easing';
	type Item = {
		value: string;
		icon?: string;
	};

	export let value: string;

	export let items: Item[] = [];
	const [send, receive] = crossfade({
		duration: 250,
		easing: cubicInOut
	});
</script>

<div class="flex gap-x-1.5 rounded-lg bg-gray-100 dark:bg-gray-800 p-0.5">
	{#each items as item}
		<button
			on:click={() => (value = item.value)}
			class="relative px-2 z-10 flex gap-x-1 items-center rounded-md py-1 text-sm font-semibold"
		>
			{#if value === item.value}
				<span
					in:send={{ key: 'checked' }}
					out:receive={{ key: 'checked' }}
					class="absolute inset-0 -z-10 bg-white shadow dark:bg-gray-500/50 rounded-md"
				/>
			{/if}
			<span class={item.icon} />
			<span class="sr-only capitalize lg:not-sr-only text-gray-900 dark:text-white"
				>{item.value}</span
			>
		</button>
	{/each}
</div>
