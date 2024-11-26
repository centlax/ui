<script lang="ts">
	/** Imports */
	import { USheet } from '$lib/index.js';
	import { useUI } from '$lib/composables/ui.js';
	import { st, cn } from '$lib/utils/wind.js';
	import { dashLayout, type DashLayoutProps } from './layout.js';

	/** Props */
	let { ...props }: DashLayoutProps = $props();
	let open = $state(false);

	/** styles */
	const ui = useUI(dashLayout, props.class, props.override);
</script>

<div data-ui="layout" class={cn(st(ui.root), ui.class)}>
	<div class={st(ui.aside)}>
		{@render props.aside?.()}
		<USheet bind:value={open} from="west" transition={{ duration: 200 }} class={st(ui.aside.sheet)}>
			{#snippet content()}
				{@render props.aside?.()}
			{/snippet}
		</USheet>
	</div>

	<main class={st(ui.main)}>
		<div class={st(ui.header)}>
			<button
				onclick={() => (open = !open)}
				type="button"
				class="-m-2.5 p-2.5 text-neutral-700 lg:hidden"
			>
				<span class="sr-only">Open sidebar</span>
				<svg
					class="size-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					aria-hidden="true"
					data-slot="icon"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
					/>
				</svg>
			</button>
			<div class="flex-1 text-sm/6 font-semibold text-neutral-900">Dashboard</div>
			<a href="/">
				<span class="sr-only">Your profile</span>
				<img
					class="size-8 rounded-full bg-neutral-50"
					src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
					alt=""
				/>
			</a>
		</div>
		<div class="px-4 sm:px-6 lg:px-8">
			{@render props.children?.()}
		</div>
	</main>
</div>
