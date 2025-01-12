<script lang="ts">
	/** Imports */
	import { UIcon, USheet } from '$lib/index.js';
	import { fade } from 'svelte/transition';
	import { useDash } from '../dash.svelte.js';
	import type { DashAsideProps } from './aside.js';

	/** Props */
	let { children, open = $bindable(false), ...props }: DashAsideProps = $props();
</script>

{#snippet coreAside()}
	<aside
		class="flex h-full max-w-full grow flex-col gap-y-5 overflow-y-auto border-r border-[--ui-border] bg-[--ui-bg] px-[--ui-dash-space] pb-[--ui-dash-space]"
	>
		{@render children?.()}
	</aside>
{/snippet}

<div class="hidden xl:fixed xl:inset-y-0 xl:z-50 xl:flex xl:w-[--ui-dash-aside-width] xl:flex-col">
	{@render coreAside()}
</div>

<USheet bind:open>
	<USheet.Content side="left" class="w-[--ui-dash-aside-width]">
		{@render coreAside()}

		<div class="absolute left-full top-0 flex h-full w-10 justify-center bg-black/50">
			<USheet.Close class="h-[--ui-dash-header-height]">
				<UIcon class="size-6 text-white" name="i-fluent-dismiss-24-regular" />
			</USheet.Close>
		</div>
	</USheet.Content>
</USheet>

<style>
	:root {
		--ui-dash-aside-width: 20rem;
	}
</style>
