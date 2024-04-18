<script lang="ts">
	import { UDash } from '$lib/index.js';
</script>

<UDash>
	<header>
		<!-- Secondary navigation -->
		<nav class="flex overflow-x-auto border-b border-white/10 py-4">
			<ul
				role="list"
				class="flex min-w-full flex-none gap-x-6 px-4 text-sm font-semibold leading-6 text-gray-400 sm:px-6 lg:px-8"
			>
				<li>
					<a href="/" class="text-primary-400">Overview</a>
				</li>
				<li>
					<a href="/" class="">Activity</a>
				</li>
				<li>
					<a href="/" class="">Settings</a>
				</li>
				<li>
					<a href="/" class="">Collaborators</a>
				</li>
				<li>
					<a href="/" class="">Notifications</a>
				</li>
			</ul>
		</nav>

		<!-- Heading -->
		<div
			class="flex flex-col items-start justify-between gap-x-8 gap-y-4 bg-gray-700/10 px-4 py-4 sm:flex-row sm:items-center sm:px-6 lg:px-8"
		>
			<div>
				<div class="flex items-center gap-x-3">
					<div class="flex-none rounded-full bg-green-400/10 p-1 text-green-400">
						<div class="h-2 w-2 rounded-full bg-current"></div>
					</div>
					<h1 class="flex gap-x-3 text-base leading-7">
						<span class="font-semibold text-white">Planetaria</span>
						<span class="text-gray-600">/</span>
						<span class="font-semibold text-white">mobile-api</span>
					</h1>
				</div>
				<p class="mt-2 text-xs leading-6 text-gray-400">Deploys from GitHub via main branch</p>
			</div>
			<div
				class="order-first flex-none rounded-full bg-primary-400/10 px-2 py-1 text-xs font-medium text-primary-400 ring-1 ring-inset ring-primary-400/30 sm:order-none"
			>
				Production
			</div>
		</div>

		<!-- Stats -->
		<div class="grid grid-cols-1 bg-gray-700/10 sm:grid-cols-2 lg:grid-cols-4">
			<div class="border-t border-white/5 py-6 px-4 sm:px-6 lg:px-8">
				<p class="text-sm font-medium leading-6 text-gray-400">Number of deploys</p>
				<p class="mt-2 flex items-baseline gap-x-2">
					<span class="text-4xl font-semibold tracking-tight text-white">405</span>
				</p>
			</div>
			<div class="border-t border-white/5 py-6 px-4 sm:px-6 lg:px-8 sm:border-l">
				<p class="text-sm font-medium leading-6 text-gray-400">Average deploy time</p>
				<p class="mt-2 flex items-baseline gap-x-2">
					<span class="text-4xl font-semibold tracking-tight text-white">3.65</span>
					<span class="text-sm text-gray-400">mins</span>
				</p>
			</div>
			<div class="border-t border-white/5 py-6 px-4 sm:px-6 lg:px-8 lg:border-l">
				<p class="text-sm font-medium leading-6 text-gray-400">Number of servers</p>
				<p class="mt-2 flex items-baseline gap-x-2">
					<span class="text-4xl font-semibold tracking-tight text-white">3</span>
				</p>
			</div>
			<div class="border-t border-white/5 py-6 px-4 sm:px-6 lg:px-8 sm:border-l">
				<p class="text-sm font-medium leading-6 text-gray-400">Success rate</p>
				<p class="mt-2 flex items-baseline gap-x-2">
					<span class="text-4xl font-semibold tracking-tight text-white">98.5%</span>
				</p>
			</div>
		</div>
	</header>

	<!-- Activity list -->
	<div class="border-t border-white/10 pt-11">
		<h2 class="px-4 text-base font-semibold leading-7 text-white sm:px-6 lg:px-8">
			Latest activity
		</h2>
		<table class="mt-6 w-full whitespace-nowrap text-left">
			<colgroup>
				<col class="w-full sm:w-4/12" />
				<col class="lg:w-4/12" />
				<col class="lg:w-2/12" />
				<col class="lg:w-1/12" />
				<col class="lg:w-1/12" />
			</colgroup>
			<thead class="border-b border-white/10 text-sm leading-6 text-white">
				<tr>
					<th scope="col" class="py-2 pl-4 pr-8 font-semibold sm:pl-6 lg:pl-8">User</th>
					<th scope="col" class="hidden py-2 pl-0 pr-8 font-semibold sm:table-cell">Commit</th>
					<th
						scope="col"
						class="py-2 pl-0 pr-4 text-right font-semibold sm:pr-8 sm:text-left lg:pr-20">Status</th
					>
					<th scope="col" class="hidden py-2 pl-0 pr-8 font-semibold md:table-cell lg:pr-20"
						>Duration</th
					>
					<th
						scope="col"
						class="hidden py-2 pl-0 pr-4 text-right font-semibold sm:table-cell sm:pr-6 lg:pr-8"
						>Deployed at</th
					>
				</tr>
			</thead>
			<tbody class="divide-y divide-white/5">
				<tr>
					<td class="py-4 pl-4 pr-8 sm:pl-6 lg:pl-8">
						<div class="flex items-center gap-x-4">
							<img
								src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
								alt=""
								class="h-8 w-8 rounded-full bg-gray-800"
							/>
							<div class="truncate text-sm font-medium leading-6 text-white">Michael Foster</div>
						</div>
					</td>
					<td class="hidden py-4 pl-0 pr-4 sm:table-cell sm:pr-8">
						<div class="flex gap-x-3">
							<div class="font-mono text-sm leading-6 text-gray-400">2d89f0c8</div>
							<span
								class="inline-flex items-center rounded-md bg-gray-400/10 px-2 py-1 text-xs font-medium text-gray-400 ring-1 ring-inset ring-gray-400/20"
								>main</span
							>
						</div>
					</td>
					<td class="py-4 pl-0 pr-4 text-sm leading-6 sm:pr-8 lg:pr-20">
						<div class="flex items-center justify-end gap-x-2 sm:justify-start">
							<time class="text-gray-400 sm:hidden" datetime="2023-01-23T11:00">45 minutes ago</time
							>
							<div class="flex-none rounded-full p-1 text-green-400 bg-green-400/10">
								<div class="h-1.5 w-1.5 rounded-full bg-current"></div>
							</div>
							<div class="hidden text-white sm:block">Completed</div>
						</div>
					</td>
					<td class="hidden py-4 pl-0 pr-8 text-sm leading-6 text-gray-400 md:table-cell lg:pr-20"
						>25s</td
					>
					<td
						class="hidden py-4 pl-0 pr-4 text-right text-sm leading-6 text-gray-400 sm:table-cell sm:pr-6 lg:pr-8"
					>
						<time datetime="2023-01-23T11:00">45 minutes ago</time>
					</td>
				</tr>

				<!-- More items... -->
			</tbody>
		</table>
	</div>
</UDash>
