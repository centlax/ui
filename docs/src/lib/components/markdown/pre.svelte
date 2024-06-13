<script lang="ts">
	import { twJoin } from 'tailwind-merge';
	let className: string | undefined | null = undefined;
	export { className as class };
</script>

<div
	class=" relative z-10 -ml-10 col-span-3 bg-gray-800 rounded-lg shadow-lg xl:ml-0 dark:shadow-none dark:ring-1 dark:ring-inset dark:ring-white/10"
>
	<div class="relative flex text-gray-400 text-sm leading-6">
		<div class="flex-auto flex pt-2 rounded-tr-xl overflow-hidden">
			<div
				class="flex justify-between items-center w-full px-3 bg-gray-700/50 border border-gray-500/30 rounded-tl"
			>
				<span class="flex-none text-primary-300 py-1 flex items-center"> Svelte </span>
				<button type="button" class="flex items-center">
					<span class="i-fluent-copy-select-20-regular" />
				</button>
			</div>
		</div>
	</div>
	<pre class={twJoin('mb-4 px-3 text-sm [&_span]:text-balance', className)} {...$$restProps}>
	<slot />
</pre>
</div>
