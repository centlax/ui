<script lang="ts">
	import { onMount } from 'svelte';
	import { ButtonCopy } from '$lib/components';
	let el: HTMLPreElement;
	export let language: string | undefined;
	$: onMount(() => {
		language = el.dataset.language || language;
	});
</script>

<div
	class="[&_code]:m-4 [&_code]:text-sm relative select-text overflow-x-hidden z-10 bg-gray-800 rounded-lg shadow-lg ring-1 ring-inset dark:ring-white/10"
>
	<div class="relative flex text-gray-400 text-sm leading-6">
		<div class="flex-auto flex pt-2 rounded-xl">
			<div
				class="flex justify-between items-center w-full px-3 bg-gray-700/50 border border-gray-500/30"
			>
				<span class="flex-none text-primary-300 h-8 flex items-center">
					{language || 'loading...'}
				</span>
				<ButtonCopy />
			</div>
		</div>
	</div>
	<slot />
</div>
