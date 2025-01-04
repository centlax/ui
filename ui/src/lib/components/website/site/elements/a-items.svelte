<script lang="ts">
	import { UAccordion, UIcon } from '$lib/components/export.js';
	import type { SiteAsideItemsProps } from './a-items.js';

	let { children, ...props }: SiteAsideItemsProps = $props();
</script>

{@render children?.()}

<div class="mt-6 flow-root">
	<div class="-my-6 divide-y divide-gray-500/10">
		<div class="space-y-2 py-6">
			<div class="-mx-3">
				<UAccordion type="single">
					<UAccordion.Item>
						<UAccordion.Trigger
							class="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold text-gray-900 hover:bg-gray-50"
						>
							Product
							<!-- Expand/collapse icon. Toggle "rotate-180" based on menu open state -->
							<UIcon
								class="flex-none group-data-[state=open]:rotate-180"
								name="i-fluent-chevron-down-20-filled"
							/>
						</UAccordion.Trigger>
						<UAccordion.Content>
							<!-- 'Product' sub-menu, show/hide based on menu state. -->
							<div class="mt-2 space-y-2" id="disclosure-1">
								<a
									href="/"
									class="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
									>Analytics</a
								>
								<a
									href="/"
									class="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
									>Engagement</a
								>
								<a
									href="/"
									class="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
									>Security</a
								>
								<a
									href="/"
									class="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
									>Integrations</a
								>
								<a
									href="/"
									class="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
									>Automations</a
								>
								<a
									href="/"
									class="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
									>Watch demo</a
								>
								<a
									href="/"
									class="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
									>Contact sales</a
								>
							</div>
						</UAccordion.Content>
					</UAccordion.Item>
				</UAccordion>
			</div>
			<a
				href="/"
				class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
				>Features</a
			>
			<a
				href="/"
				class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
				>Marketplace</a
			>
			<a
				href="/"
				class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
				>Company</a
			>
		</div>
	</div>
</div>
