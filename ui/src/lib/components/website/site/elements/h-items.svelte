<script lang="ts">
	import { UIcon, UTooltip } from '$lib/index.js';
	let open = $state(false);
</script>

<div class="hidden lg:flex lg:gap-x-12">
	<UTooltip bind:open delay-duration={0}>
		<UTooltip.Trigger class="group flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900">
			Product
			<UIcon
				data-open={open}
				class="flex-none text-gray-500 data-[open=true]:rotate-180"
				name="i-fluent-chevron-down-20-filled"
			/>
		</UTooltip.Trigger>
		<UTooltip.Content>
			<!--
            'Product' flyout menu, show/hide based on flyout menu state.
  
            Entering: "transition ease-out duration-200"
              From: "opacity-0 translate-y-1"
              To: "opacity-100 translate-y-0"
            Leaving: "transition ease-in duration-150"
              From: "opacity-100 translate-y-0"
              To: "opacity-0 translate-y-1"
          -->
			<div
				class=" mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5"
			>
				<div class="p-4">
					<div
						class="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50"
					>
						<div
							class="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white"
						>
							<svg
								class="size-6 text-gray-600 group-hover:text-indigo-600"
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
									d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z"
								/>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z"
								/>
							</svg>
						</div>
						<div class="flex-auto">
							<a href="/" class="block font-semibold text-gray-900">
								Analytics
								<span class="absolute inset-0"></span>
							</a>
							<p class="mt-1 text-gray-600">Get a better understanding of your traffic</p>
						</div>
					</div>
					<div
						class="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50"
					>
						<div
							class="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white"
						>
							<svg
								class="size-6 text-gray-600 group-hover:text-indigo-600"
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
									d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672ZM12 2.25V4.5m5.834.166-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243-1.59-1.59"
								/>
							</svg>
						</div>
						<div class="flex-auto">
							<a href="/" class="block font-semibold text-gray-900">
								Engagement
								<span class="absolute inset-0"></span>
							</a>
							<p class="mt-1 text-gray-600">Speak directly to your customers</p>
						</div>
					</div>
					<div
						class="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50"
					>
						<div
							class="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white"
						>
							<svg
								class="size-6 text-gray-600 group-hover:text-indigo-600"
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
									d="M7.864 4.243A7.5 7.5 0 0 1 19.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 0 0 4.5 10.5a7.464 7.464 0 0 1-1.15 3.993m1.989 3.559A11.209 11.209 0 0 0 8.25 10.5a3.75 3.75 0 1 1 7.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 0 1-3.6 9.75m6.633-4.596a18.666 18.666 0 0 1-2.485 5.33"
								/>
							</svg>
						</div>
						<div class="flex-auto">
							<a href="/" class="block font-semibold text-gray-900">
								Security
								<span class="absolute inset-0"></span>
							</a>
							<p class="mt-1 text-gray-600">Your customers’ data will be safe and secure</p>
						</div>
					</div>
					<div
						class="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50"
					>
						<div
							class="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white"
						>
							<svg
								class="size-6 text-gray-600 group-hover:text-indigo-600"
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
									d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 0 0 2.25-2.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v2.25A2.25 2.25 0 0 0 6 10.5Zm0 9.75h2.25A2.25 2.25 0 0 0 10.5 18v-2.25a2.25 2.25 0 0 0-2.25-2.25H6a2.25 2.25 0 0 0-2.25 2.25V18A2.25 2.25 0 0 0 6 20.25Zm9.75-9.75H18a2.25 2.25 0 0 0 2.25-2.25V6A2.25 2.25 0 0 0 18 3.75h-2.25A2.25 2.25 0 0 0 13.5 6v2.25a2.25 2.25 0 0 0 2.25 2.25Z"
								/>
							</svg>
						</div>
						<div class="flex-auto">
							<a href="/" class="block font-semibold text-gray-900">
								Integrations
								<span class="absolute inset-0"></span>
							</a>
							<p class="mt-1 text-gray-600">Connect with third-party tools</p>
						</div>
					</div>
					<div
						class="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50"
					>
						<div
							class="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white"
						>
							<svg
								class="size-6 text-gray-600 group-hover:text-indigo-600"
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
									d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
								/>
							</svg>
						</div>
						<div class="flex-auto">
							<a href="/" class="block font-semibold text-gray-900">
								Automations
								<span class="absolute inset-0"></span>
							</a>
							<p class="mt-1 text-gray-600">Build strategic funnels that will convert</p>
						</div>
					</div>
				</div>
			</div>
		</UTooltip.Content>
	</UTooltip>

	<a href="/" class="text-sm/6 font-semibold text-gray-900">Features</a>
	<a href="/" class="text-sm/6 font-semibold text-gray-900">Marketplace</a>
	<a href="/" class="text-sm/6 font-semibold text-gray-900">Company</a>
</div>
