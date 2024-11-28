<script lang="ts" generics="T extends Item<T>">
	/** Imports */
	import type { Item } from '$lib/types/item.js';
	import { useUI } from '$lib/composables/ui.js';
	import { st, cn } from '$lib/utils/wind.js';
	import { siteAside, type SiteAsideProps } from './aside.js';
	import { UContainer, UIcon, UToggle } from '$lib/index.js';

	/** Props */
	let { items, ...props }: SiteAsideProps<T> = $props();

	/** Styles */
	const ui = useUI(siteAside, props.class, props.override);
</script>

<aside role="dialog" aria-modal="true" class={cn(st(ui.root), ui.class)}>
	<div class="flex items-center justify-between">
		{@render props.logo?.()}
		<UToggle as="button" class="">
			<span class="sr-only">Close menu</span>
			<UIcon name="i-fluent-dismiss-24-regular" />
		</UToggle>
	</div>
	<div class="mt-6 flow-root">
		<div class="-my-6 divide-y divide-gray-500/10">
			<div class="space-y-2 py-6">
				<div class="">
					<button
						type="button"
						class="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base/7 font-semibold hover:bg-gray-50"
						aria-controls="disclosure-1"
						aria-expanded="false"
					>
						Product
						<!--
					  Expand/collapse icon, toggle classes based on menu open state.
	
					  Open: "rotate-180", Closed: ""
					-->
						<svg
							class="size-5 flex-none"
							viewBox="0 0 20 20"
							fill="currentColor"
							aria-hidden="true"
							data-slot="icon"
						>
							<path
								fill-rule="evenodd"
								d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
								clip-rule="evenodd"
							/>
						</svg>
					</button>
					<!-- 'Product' sub-menu, show/hide based on menu state. -->
					<div class="mt-2 space-y-2" id="disclosure-1">
						<a
							href="/"
							class="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold hover:bg-gray-50"
							>Analytics</a
						>
						<a
							href="/"
							class="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold hover:bg-gray-50"
							>Engagement</a
						>
						<a
							href="/"
							class="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold hover:bg-gray-50"
							>Security</a
						>
						<a
							href="/"
							class="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold hover:bg-gray-50"
							>Integrations</a
						>
						<a
							href="/"
							class="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold hover:bg-gray-50"
							>Automations</a
						>
						<a
							href="/"
							class="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold hover:bg-gray-50"
							>Watch demo</a
						>
						<a
							href="/"
							class="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold hover:bg-gray-50"
							>Contact sales</a
						>
					</div>
				</div>
				<a
					href="/"
					class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold hover:bg-gray-50"
					>Features</a
				>
				<a
					href="/"
					class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold hover:bg-gray-50"
					>Marketplace</a
				>
				<a
					href="/"
					class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold hover:bg-gray-50"
					>Company</a
				>
			</div>
			<div class="py-6">
				<a
					href="/"
					class="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold hover:bg-gray-50"
					>Log in</a
				>
			</div>
		</div>
	</div>
</aside>
