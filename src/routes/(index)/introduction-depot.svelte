<script lang="ts">
	import { ULandHero, UContainer, ULandBack, UImage } from '$lib/index.js';
	import img from '$lib/assets/image.png';
</script>

<section class="relative -mt-10 isolate overflow-hidden bg-white dark:bg-gray-900">
	<ULandBack />
	<slot />
	<UContainer class="overflow-hidden">
		<ULandHero
			let:imgUI
			let:vertical
			title="Introducing our first platform, Depot"
			description="One of Centlax's mission is to streamline supply chain and logistics through innovative technology.
			Our flagship product, Depot, caters to organizations that lend or issue supplies 
			and equipment to their members. Designed for environments where people need specialized gear daily, 
			Depot optimizes equipment management, enabling efficient issuance, tracking,
			and maintenance of supplies and equipment, ultimately enhancing operational effectiveness."
			props={{
				buttons: [
					{ href: '/', color: 'green', label: 'Get started', size: 'lg', class: 'font-semibold' },
					{
						href: '/',
						label: 'Learn more',
						size: 'lg',
						color: 'gray',
						variant: 'ghost',
						trailing: true,
						icon: 'i-fluent-arrow-right-24-regular',
						class: 'font-semibold'
					}
				]
			}}
		>
			<div class="mb-4" slot="north">
				<div
					class="ring-2 ring-inset p-[0.25px] rounded-full w-fit ring-green-400 flex items-center"
				>
					<span class="text-green-400 size-8 i-fluent-home-garage-20-filled" />
				</div>
				<div class="mt-10 sm:mt-20 lg:mt-8">
					<a href="/" class="inline-flex space-x-6">
						<span
							class="rounded-full bg-green-500/10 px-3 py-1 text-sm font-semibold leading-6 text-green-500 ring-1 ring-inset ring-green-500/20"
							>What's new</span
						>
						<span
							class="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-gray-600 dark:text-gray-300"
						>
							<span>Play with demo</span>
							<svg
								class="h-5 w-5 text-gray-500"
								viewBox="0 0 20 20"
								fill="currentColor"
								aria-hidden="true"
							>
								<path
									fill-rule="evenodd"
									d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
									clip-rule="evenodd"
								/>
							</svg>
						</span>
					</a>
				</div>
			</div>
			<svelte:fragment slot="title">
				Introducing our first platform, <span class="text-green-500">Depot</span>
			</svelte:fragment>

			<UImage
				class="{imgUI} {!vertical && 'lg:min-w-[70rem] lg:-mt-20'}"
				src={{
					light: img,
					dark: img
				}}
			/>
		</ULandHero>
	</UContainer>
</section>
