<script lang="ts">
	import { UContainer, ULandBack } from '$lib/index.js';
</script>

<section class="isolate bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
	<!-- Hero section -->
	<div class="relative isolate -z-10">
		<ULandBack />
		<div class="overflow-hidden">
			<UContainer
				class="mx-auto  gap-x-14 lg:flex lg:justify-between  lg:items-center pb-32 pt-36 sm:pt-60  lg:pt-32"
			>
				<div class="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
					<h1 class="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
						We’re changing the way people connect.
					</h1>
					<p class="relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
						Cupidatat sint dolor qui. Sunt sit in quis cupidatat mollit aute velit. Et labore
						commodo nulla aliqua proident mollit ullamco exercitation tempor. Sint aliqua anim nulla
						sunt mollit id pariatur in voluptate cillum. Eu voluptate tempor esse minim amet fugiat
						veniam occaecat aliqua. Lean more about our <a
							class="text-primary-500 cursor-pointer underline-offset-4 hover:underline hover:decoration-dashed"
							href="/about/vision-mission"
						>
							vision and mission</a
						>
					</p>
				</div>
				<div class="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start lg:mt-0">
					<div
						class="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80"
					>
						<div class="relative">
							<img
								src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
								alt=""
								class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
							/>
							<div
								class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"
							></div>
						</div>
					</div>
					<div class="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
						<div class="relative">
							<img
								src="https://images.unsplash.com/photo-1485217988980-11786ced9454?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
								alt=""
								class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
							/>
							<div
								class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"
							></div>
						</div>
						<div class="relative">
							<img
								src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=396&h=528&q=80"
								alt=""
								class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
							/>
							<div
								class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"
							></div>
						</div>
					</div>
					<div class="w-44 flex-none space-y-8 pt-32 sm:pt-0">
						<div class="relative">
							<img
								src="https://images.unsplash.com/photo-1670272504528-790c24957dda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=left&w=400&h=528&q=80"
								alt=""
								class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
							/>
							<div
								class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"
							></div>
						</div>
						<div class="relative">
							<img
								src="https://images.unsplash.com/photo-1670272505284-8faba1c31f7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
								alt=""
								class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
							/>
							<div
								class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"
							></div>
						</div>
					</div>
				</div>
			</UContainer>
		</div>
	</div>

	<!-- Image section -->
	<UContainer class="!px-0">
		<img
			src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
			alt=""
			class="aspect-[5/2] w-full object-cover"
		/>
	</UContainer>

	<!-- Values section -->
	<UContainer class="mt-32 sm:mt-40">
		<div class="mx-auto max-w-2xl lg:mx-0">
			<h2 class="text-3xl font-bold tracking-tight sm:text-4xl">Our values</h2>
			<p class="mt-6 text-lg leading-8 text-gray-600">
				Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate
				veritatis in accusamus quisquam.
			</p>
		</div>
		<dl
			class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
		>
			<div>
				<dt class="font-semibold text-gray-900">Be world-class</dt>
				<dd class="mt-1 text-gray-600">
					Aut illo quae. Ut et harum ea animi natus. Culpa maiores et sed sint et magnam
					exercitationem quia. Ullam voluptas nihil vitae dicta molestiae et. Aliquid velit porro
					vero.
				</dd>
			</div>
			<div>
				<dt class="font-semibold text-gray-900">Share everything you know</dt>
				<dd class="mt-1 text-gray-600">
					Mollitia delectus a omnis. Quae velit aliquid. Qui nulla maxime adipisci illo id
					molestiae. Cumque cum ut minus rerum architecto magnam consequatur. Quia quaerat minima.
				</dd>
			</div>
			<div>
				<dt class="font-semibold text-gray-900">Always learning</dt>
				<dd class="mt-1 text-gray-600">
					Aut repellendus et officiis dolor possimus. Deserunt velit quasi sunt fuga error labore
					quia ipsum. Commodi autem voluptatem nam. Quos voluptatem totam.
				</dd>
			</div>
			<div>
				<dt class="font-semibold text-gray-900">Be supportive</dt>
				<dd class="mt-1 text-gray-600">
					Magnam provident veritatis odit. Vitae eligendi repellat non. Eum fugit impedit veritatis
					ducimus. Non qui aspernatur laudantium modi. Praesentium rerum error deserunt harum.
				</dd>
			</div>
			<div>
				<dt class="font-semibold text-gray-900">Take responsibility</dt>
				<dd class="mt-1 text-gray-600">
					Sit minus expedita quam in ullam molestiae dignissimos in harum. Tenetur dolorem iure. Non
					nesciunt dolorem veniam necessitatibus laboriosam voluptas perspiciatis error.
				</dd>
			</div>
			<div>
				<dt class="font-semibold text-gray-900">Enjoy downtime</dt>
				<dd class="mt-1 text-gray-600">
					Ipsa in earum deserunt aut. Quos minus aut animi et soluta. Ipsum dicta ut quia eius.
					Possimus reprehenderit iste aspernatur ut est velit consequatur distinctio.
				</dd>
			</div>
		</dl>
	</UContainer>

	<!-- Content section -->
	<UContainer class="mt-32 overflow-hidden sm:mt-40">
		<div class="lg:flex">
			<div
				class="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8"
			>
				<div class="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
					<h2 class="text-3xl font-bold tracking-tight sm:text-4xl">Our people</h2>
					<p class="mt-6 text-xl leading-8 text-gray-600">
						Quasi est quaerat. Sit molestiae et. Provident ad dolorem occaecati eos iste. Soluta
						rerum quidem minus ut molestiae velit error quod. Excepturi quidem expedita molestias
						quas. <a
							class="text-primary-600 cursor-pointer underline-offset-4 hover:underline hover:decoration-dashed"
							href="/about/team">our team</a
						>
					</p>
					<p class="mt-6 text-base leading-7 text-gray-600">
						Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat
						commodo. Elit sunt amet fugiat veniam occaecat fugiat. Quasi aperiam sit non sit neque
						reprehenderit.
					</p>
				</div>
				<div class="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
					<div class="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
						<img
							src="https://images.unsplash.com/photo-1670272502246-768d249768ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1152&q=80"
							alt=""
							class="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover"
						/>
					</div>
					<div
						class="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8"
					>
						<div class="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
							<img
								src="https://images.unsplash.com/photo-1605656816944-971cd5c1407f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=768&h=604&q=80"
								alt=""
								class="aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
							/>
						</div>
						<div class="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
							<img
								src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1152&h=842&q=80"
								alt=""
								class="aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
							/>
						</div>
						<div class="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
							<img
								src="https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=768&h=604&q=80"
								alt=""
								class="aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	</UContainer>

	<!-- Stats -->
	<UContainer class="py-10 sm-my-20">
		<div class="mx-auto max-w-2xl lg:mx-0">
			<h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
				We approach the workplace as something that adds to our lives and adds value to world.
			</h2>
			<p class="mt-6 text-base leading-7 text-gray-600">
				Diam nunc lacus lacus aliquam turpis enim. Eget hac velit est euismod lacus. Est non
				placerat nam arcu. Cras purus nibh cursus sit eu in id. Integer vel nibh.
			</p>
		</div>
	</UContainer>
</section>

<style lang="postcss">
	dt,
	h2 {
		@apply text-gray-900 dark:text-white;
	}
	p,
	dd {
		@apply text-gray-600 dark:text-gray-300;
	}
</style>
