<script lang="ts">
	import { UContainer } from '$lib/index.js';
	const stats = [
		{ label: 'Founded', value: '2023' },
		{ label: 'Employees', value: '1+' },
		{ label: 'Countries', value: '2+' },
		{ label: 'Raised', value: '$500+' }
	];
</script>

<section class="bg-white dark:bg-gray-900">
	<UContainer class="py-16 sm:py-20 text-gray-900 dark:text-white">
		<p class="text-base font-semibold leading-7 text-primary-500">Centlax origin</p>
		<h1 class="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Get to know us better</h1>
		<div
			class="mt-10 grid grid-cols-1 gap-y-8 gap-x-20 text-base leading-7 text-gray-600 dark:text-gray-300 lg:max-w-none lg:grid-cols-2"
		>
			<div>
				<p>
					Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris
					semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus
					viverra tellus varius sit neque erat velit. Faucibus commodo massa rhoncus, volutpat.
					Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id.
				</p>
				<p class="mt-8">
					Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit
					molestie auctor fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius
					vulputate et ultrices hac adipiscing egestas.
				</p>
			</div>
			<div>
				<p>
					Erat pellentesque dictumst ligula porttitor risus eget et eget. Ultricies tellus felis id
					dignissim eget. Est augue maecenas risus nulla ultrices congue nunc tortor. Enim et
					nesciunt doloremque nesciunt voluptate.
				</p>
				<p class="mt-8">
					Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit
					molestie auctor fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius
					vulputate et ultrices hac adipiscing egestas. Iaculis convallis ac tempor et ut. Ac lorem
					vel integer orci.
				</p>
			</div>
		</div>
		<dl
			class="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 sm:mt-20 sm:grid-cols-2 sm:gap-y-16 lg:mt-28 lg:grid-cols-4"
		>
			{#each stats as stat}
				<div
					class="flex flex-col-reverse gap-y-3 border-l border-black/20 dark:border-white/20 pl-6"
				>
					<dt class="text-base leading-7 text-gray-600 dark:text-gray-300">{stat.label}</dt>
					<dd class="text-3xl font-semibold text-primary-500 tracking-tight">{stat.value}</dd>
				</div>
			{/each}
		</dl>
	</UContainer>
</section>
