<script lang="ts">
	import { ButtonCopy } from '$lib/components';
	export let language: string | undefined = '';
</script>

<div
	class="[&_code]:bg-transparent my-4 [&_code]:text-sm relative bg-gray-800 rounded-lg shadow-lg ring-1 ring-inset dark:ring-white/10"
>
	<div class="relative flex text-gray-400 text-sm">
		<div class="flex-auto flex pt-2 rounded-xl">
			<div
				class="flex px-4 justify-between items-center w-full bg-gray-700/50 border border-gray-500/30"
			>
				<span class="flex-none text-primary-300 h-8 flex items-center">
					{language || 'loading...'}
				</span>
				<ButtonCopy />
			</div>
		</div>
	</div>
	{#if language === 'svelte'}
		<slot />
	{:else}
		<pre class="flex [&_code]:w-full" {...$$restProps}>
		<slot />
	</pre>
	{/if}
</div>
