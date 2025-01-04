<script lang="ts">
	/** Imports */
	import { UIcon, USheet } from '$lib/index.js';
	import { useDash } from '../dash.svelte.js';
	import type { DashAsideProps } from './aside.js';

	/** Props */
	let { children, open = $bindable(false), ...props }: DashAsideProps = $props();
	const {
		elements: { aside }
	} = useDash();
	const {
		core,
		fixed,
		sheet: {
			close: { overlay, button, icon },
			content
		}
	} = aside(props);
</script>

{#snippet coreAside()}
	<aside
		{...core}
		class="flex h-full max-w-[--ui-dash-aside-width] grow flex-col gap-y-5 overflow-y-auto border-r border-[--ui-border] bg-[--ui-bg] px-[--ui-dash-space] pb-[--ui-dash-space]"
	>
		{@render children?.()}
	</aside>
{/snippet}

<div
	{...fixed}
	class="hidden xl:fixed xl:inset-y-0 xl:z-50 xl:flex xl:w-[--ui-dash-aside-width] xl:flex-col"
>
	{@render coreAside()}
</div>

<USheet bind:open>
	<USheet.Content {...content}>
		{@render coreAside()}
		<div {...overlay}>
			<USheet.Close {...button}>
				<UIcon {...icon} />
			</USheet.Close>
		</div>
	</USheet.Content>
</USheet>

<style>
	:root {
		--ui-dash-aside-width: 20rem;
	}
</style>
