<div class="bg-white">
	<!-- Header -->
	<header class="absolute inset-x-0 top-0 z-50">
		<nav class="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
			<div class="flex lg:flex-1">
				<a href="/" class="-m-1.5 p-1.5">
					<span class="sr-only">Your Company</span>
					<img
						class="h-8 w-auto"
						src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
						alt=""
					/>
				</a>
			</div>
			<div class="flex lg:hidden">
				<button
					type="button"
					class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
				>
					<span class="sr-only">Open main menu</span>
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
			</div>
			<div class="hidden lg:flex lg:gap-x-12">
				<a href="/" class="text-sm/6 font-semibold text-gray-900">Product</a>
				<a href="/" class="text-sm/6 font-semibold text-gray-900">Features</a>
				<a href="/" class="text-sm/6 font-semibold text-gray-900">Marketplace</a>
				<a href="/" class="text-sm/6 font-semibold text-gray-900">Company</a>
			</div>
			<div class="hidden lg:flex lg:flex-1 lg:justify-end">
				<a href="/" class="text-sm/6 font-semibold text-gray-900"
					>Log in <span aria-hidden="true">&rarr;</span></a
				>
			</div>
		</nav>
		<!-- Mobile menu, show/hide based on menu open state. -->
		<div class="lg:hidden" role="dialog" aria-modal="true">
			<!-- Background backdrop, show/hide based on slide-over state. -->
			<div class="fixed inset-0 z-50"></div>
			<div
				class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
			>
				<div class="flex items-center justify-between">
					<a href="/" class="-m-1.5 p-1.5">
						<span class="sr-only">Your Company</span>
						<img
							class="h-8 w-auto"
							src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
							alt=""
						/>
					</a>
					<button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700">
						<span class="sr-only">Close menu</span>
						<svg
							class="size-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							aria-hidden="true"
							data-slot="icon"
						>
							<path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
						</svg>
					</button>
				</div>
				<div class="mt-6 flow-root">
					<div class="-my-6 divide-y divide-gray-500/10">
						<div class="space-y-2 py-6">
							<a
								href="/"
								class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
								>Product</a
							>
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
						<div class="py-6">
							<a
								href="/"
								class="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
								>Log in</a
							>
						</div>
					</div>
				</div>
			</div>
		</div>
	</header>

	<main class="isolate">
		<!-- Hero section -->
		<div class="relative pt-14">
			<div
				class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
				aria-hidden="true"
			>
				<div
					class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
					style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
				></div>
			</div>
			<div class="py-24 sm:py-32 lg:pb-40">
				<div class="mx-auto max-w-7xl px-6 lg:px-8">
					<div class="mx-auto max-w-2xl text-center">
						<h1
							class="text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl"
						>
							Deploy to the cloud with confidence
						</h1>
						<p class="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
							Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat
							commodo. Elit sunt amet fugiat veniam occaecat.
						</p>
						<div class="mt-10 flex items-center justify-center gap-x-6">
							<a
								href="/"
								class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
								>Get started</a
							>
							<a href="/" class="text-sm/6 font-semibold text-gray-900"
								>Learn more <span aria-hidden="true">→</span></a
							>
						</div>
					</div>
					<div class="mt-16 flow-root sm:mt-24">
						<div
							class="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4"
						>
							<img
								src="https://tailwindui.com/plus/img/component-images/project-app-screenshot.png"
								alt="App screenshot"
								width="2432"
								height="1442"
								class="rounded-md shadow-2xl ring-1 ring-gray-900/10"
							/>
						</div>
					</div>
				</div>
			</div>
			<div
				class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
				aria-hidden="true"
			>
				<div
					class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
					style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
				></div>
			</div>
		</div>

		<!-- Feature section -->
		<div class="mx-auto mt-32 max-w-7xl px-6 sm:mt-56 lg:px-8">
			<div class="mx-auto max-w-2xl lg:text-center">
				<h2 class="text-base/7 font-semibold text-indigo-600">Deploy faster</h2>
				<p
					class="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance"
				>
					Everything you need to deploy your app
				</p>
				<p class="mt-6 text-pretty text-lg/8 text-gray-600">
					Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas
					a elementum pulvinar et feugiat blandit at. In mi viverra elit nunc.
				</p>
			</div>
			<div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
				<dl
					class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16"
				>
					<div class="relative pl-16">
						<dt class="text-base/7 font-semibold text-gray-900">
							<div
								class="absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg bg-indigo-600"
							>
								<svg
									class="size-6 text-white"
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
										d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z"
									/>
								</svg>
							</div>
							Push to deploy
						</dt>
						<dd class="mt-2 text-base/7 text-gray-600">
							Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio
							urna massa nunc massa.
						</dd>
					</div>
					<div class="relative pl-16">
						<dt class="text-base/7 font-semibold text-gray-900">
							<div
								class="absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg bg-indigo-600"
							>
								<svg
									class="size-6 text-white"
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
										d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
									/>
								</svg>
							</div>
							SSL certificates
						</dt>
						<dd class="mt-2 text-base/7 text-gray-600">
							Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales
							gravida quam turpis enim lacus amet.
						</dd>
					</div>
					<div class="relative pl-16">
						<dt class="text-base/7 font-semibold text-gray-900">
							<div
								class="absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg bg-indigo-600"
							>
								<svg
									class="size-6 text-white"
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
							Simple queues
						</dt>
						<dd class="mt-2 text-base/7 text-gray-600">
							Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor
							congue commodo diam neque.
						</dd>
					</div>
					<div class="relative pl-16">
						<dt class="text-base/7 font-semibold text-gray-900">
							<div
								class="absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg bg-indigo-600"
							>
								<svg
									class="size-6 text-white"
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
							Advanced security
						</dt>
						<dd class="mt-2 text-base/7 text-gray-600">
							Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id
							hac maecenas ac donec pharetra eget.
						</dd>
					</div>
				</dl>
			</div>
		</div>
	</main>

	<!-- Footer -->
	<footer class="relative mx-auto mt-32 max-w-7xl px-6 lg:px-8">
		<div class="border-t border-gray-900/10 py-16 sm:py-24 lg:py-32">
			<div class="xl:grid xl:grid-cols-3 xl:gap-8">
				<img
					class="h-9"
					src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
					alt="Company name"
				/>
				<div class="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
					<div class="md:grid md:grid-cols-2 md:gap-8">
						<div>
							<h3 class="text-sm/6 font-semibold text-gray-900">Solutions</h3>
							<ul role="list" class="mt-6 space-y-4">
								<li>
									<a href="/" class="text-sm/6 text-gray-600 hover:text-gray-900">Hosting</a>
								</li>
								<li>
									<a href="/" class="text-sm/6 text-gray-600 hover:text-gray-900">Data services</a>
								</li>
								<li>
									<a href="/" class="text-sm/6 text-gray-600 hover:text-gray-900"
										>Uptime monitoring</a
									>
								</li>
								<li>
									<a href="/" class="text-sm/6 text-gray-600 hover:text-gray-900"
										>Enterprise services</a
									>
								</li>
								<li>
									<a href="/" class="text-sm/6 text-gray-600 hover:text-gray-900">Analytics</a>
								</li>
							</ul>
						</div>
						<div class="mt-10 md:mt-0">
							<h3 class="text-sm/6 font-semibold text-gray-900">Support</h3>
							<ul role="list" class="mt-6 space-y-4">
								<li>
									<a href="/" class="text-sm/6 text-gray-600 hover:text-gray-900">Submit ticket</a>
								</li>
								<li>
									<a href="/" class="text-sm/6 text-gray-600 hover:text-gray-900">Documentation</a>
								</li>
								<li>
									<a href="/" class="text-sm/6 text-gray-600 hover:text-gray-900">Guides</a>
								</li>
							</ul>
						</div>
					</div>
					<div class="md:grid md:grid-cols-2 md:gap-8">
						<div>
							<h3 class="text-sm/6 font-semibold text-gray-900">Company</h3>
							<ul role="list" class="mt-6 space-y-4">
								<li>
									<a href="/" class="text-sm/6 text-gray-600 hover:text-gray-900">About</a>
								</li>
								<li>
									<a href="/" class="text-sm/6 text-gray-600 hover:text-gray-900">Blog</a>
								</li>
								<li>
									<a href="/" class="text-sm/6 text-gray-600 hover:text-gray-900">Jobs</a>
								</li>
								<li>
									<a href="/" class="text-sm/6 text-gray-600 hover:text-gray-900">Press</a>
								</li>
							</ul>
						</div>
						<div class="mt-10 md:mt-0">
							<h3 class="text-sm/6 font-semibold text-gray-900">Legal</h3>
							<ul role="list" class="mt-6 space-y-4">
								<li>
									<a href="/" class="text-sm/6 text-gray-600 hover:text-gray-900"
										>Terms of service</a
									>
								</li>
								<li>
									<a href="/" class="text-sm/6 text-gray-600 hover:text-gray-900">Privacy policy</a>
								</li>
								<li>
									<a href="/" class="text-sm/6 text-gray-600 hover:text-gray-900">License</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</footer>
</div>
